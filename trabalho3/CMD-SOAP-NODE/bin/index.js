var config = require("./cmd_config")
var msg = require("./cmd_soap_msg")
var fs = require('fs');
var crypto = require('crypto')
var prompt = require('prompt');
var forge = require('node-forge');

const properties = [{
    name: 'OTP',
    message: 'Introduza o OTP recebido no seu dispositivo',
    warning: 'Preencha pelo menos 1 numero.',
    validator: '^[0-9]*$',
    required: true
}];

const TEXT = 'test Command Line Program (for Preprod/Prod Signature CMD (SOAP) version 1.6 technical specification)'
const __version__ = '1.0'

function main() {
    //Função main do programa.
    if (config.getApplicationID() == null || config.getApplicationID() == '') {
        console.log("Configure o APPLICATION_ID");
    } else {
        if (process.argv[2] == "gc") {
            //gc user env

            msg.getCertificate({
                applicationId: config.getApplicationID(),
                user: process.argv[3],
                env: process.argv[4]
            }).then(function (result) {
                console.log(result)
            }, function (error) {
                console.log(error)
            })
        }
        else if (process.argv[2] == "ms") {
            //ms user pin env

            msg.cCMovelSign({
                applicationId: config.getApplicationID(),
                user: process.argv[3],
                pin: process.argv[4],
                env: process.argv[5]
            }).then(function (result) {
                console.log(result)
            }, function (error) {
                console.log(error)
            })
        }
        else if (process.argv[2] == "mms") {
            //mms user pin env

            msg.cCMovelMultipleSign({
                applicationId: config.getApplicationID(),
                user: process.argv[3],
                pin: process.argv[4],
                env: process.argv[5]
            }).then(function (result) {
                console.log(result)
            }, function (error) {
                console.log(error)
            })
        }
        else if (process.argv[2] == "otp") {
            //otp code processId env

            msg.validateOtp({
                applicationId: config.getApplicationID(),
                otp: process.argv[3],
                ProcessId: process.argv[4],
                env: process.argv[5]
            }).then(function (result) {
                console.log(result)
            }, function (error) {
                console.log(error)
            })
        }
        else if (process.argv[2] == "test") {
            //test file user pin env

            testAll({
                applicationId: config.getApplicationID(),
                file: process.argv[3],
                user: process.argv[4],
                pin: process.argv[5],
                env: process.argv[6]
            })
        }
        else {
            console.log("Operações disponíveis: gc | ms | mms | otp | test")
        }
    }
}

function testAll(args) {
    console.log(TEXT + "\n" + __version__)
    console.log("\n+++ Test All inicializado +++\n")
    console.log(" 0% ... Leitura de argumentos da linha de comando - file: " + args.file + " user: " + args.user + " pin: " + args.pin)
    console.log("10% ... A contactar servidor SOAP CMD para operação GetCertificate")

    msg.getCertificate(args).then(function (cmd_certs) {
        var certs = forge.pki.certificateFromPem(cmd_certs)

        var certs_chain = {
            user: certs.subject.attributes[8].value,
            ca: certs.subject.attributes[2].value,
            root: certs.subject.attributes[1].value
        };

        console.log("20% ... Certificado emitido para '" + certs_chain.user + "' pela Entidade de Certificação '" + certs_chain.ca + "' na hierarquia do '" + certs_chain.root + "'")
        console.log("30% ... Leitura do ficheiro " + args.file)

        fs.readFile(args.file, 'utf-8', function (err, data) {
            if (err) {
                return console.log("Erro: " + err);
            }

            var file_content = data;

            console.log("40% ... Geração de hash do ficheiro " + args.file)

            args.hash = crypto.createHash('sha256').update(Buffer.from(file_content)).digest();

            console.log("50% ... Hash gerada (em base64): " + args.hash.toString('base64'))
            console.log("60% ... A contactar servidor SOAP CMD para operação CCMovelSign")

            args.docName = args.file

            msg.cCMovelSign(args).then(function (res) {
                console.log("70% ... ProcessID devolvido pela operação CCMovelSign: " + res.ProcessId)

                args.ProcessId = res.ProcessId;

                console.log("80% ... A iniciar operação ValidateOtp")

                prompt.start();

                prompt.get(properties, function (err1, result) {
                    if (err1) {
                        console.log("Erro: " + err1);
                    }
                    else {
                        args.otp = result.OTP;

                        console.log("90% ... A contactar servidor SOAP CMD para operação ValidateOtp")

                        msg.validateOtp(args).then(function (res2) {
                            console.log("100% ... Assinatura (em base 64) devolvida pela operação ValidateOtp: " + res2.Signature);
                            console.log("110% ... A validar assinatura ...")

                            var md = forge.md.sha256.create();
                            md.update(file_content, 'utf8');

                            var signature = Buffer.from(res2.Signature, "base64")

                            var verified = certs.publicKey.verify(md.digest().bytes(), signature);

                            if (verified)
                                console.log("Assinatura verificada com sucesso, baseada na assinatura recebida, na hash gerada e na chave pública do certificado de " + certs_chain.user)
                            else
                                console.log("Falha na verificação da assinatura");

                            console.log("\n+++ Test All finalizado +++\n")
                        }, function (error) {
                            console.log("Erro: " + error)
                        })
                    }
                });

            }, function (error) {
                console.log("Erro: " + error)
            })
        });
    }, function (err) {
        console.log("Impossível obter certificado")
    })
}

main();