var strongSoap = require('strong-soap').soap
//var soap = require('soap')
var crypto = require('crypto')

module.exports = {
    getClient: getClient,
    getCertificate: getCertificate,
    cCMovelSign: cCMovelSign,
    cCMovelMultipleSign: cCMovelMultipleSign,
    validateOtp: validateOtp
};

function get_wsdl(env) {
    return env == 0 ? "https://preprod.cmd.autenticacao.gov.pt/Ama.Authentication.Frontend/CCMovelDigitalSignature.svc?wsdl" :
        "https://cmd.autenticacao.gov.pt/Ama.Authentication.Frontend/CCMovelDigitalSignature.svc?wsdl";
}

function getClient(env = 0) {
    return strongSoap.createClient(get_wsdl(env));
}

function hashPrefix(hashtype, hash) {
    let prefix = {
        SHA256: Buffer.from([0x30, 0x31, 0x30, 0x0d, 0x06, 0x09, 0x60, 0x86, 0x48, 0x01,
            0x65, 0x03, 0x04, 0x02, 0x01, 0x05, 0x00, 0x04, 0x20])
    }
    return Buffer.concat(new Array(prefix.SHA256, hash))
}

function getCertificate(args) {
    var url = get_wsdl(args.env);

    var request_data = {
        applicationId: Buffer.from(args.applicationId).toString('base64'),
        userId: args.user
    };

    return new Promise((resolve, reject) => {
        strongSoap.createClient(url, function (err, client) {
            client.GetCertificate(request_data).then(function ({ result, envelope }) {
                result.GetCertificateResult == null ? reject(result.GetCertificateResult) : resolve(result.GetCertificateResult);
            }, function (error) {
                reject(error);
            })
        })
    })
}

function cCMovelSign(args, hashtype = 'SHA256') {
    var url = get_wsdl(args.env);

    if (!("docName" in args)) {
        args.docName = 'docname teste'
    }
    if (!("hash" in args)) {
        args.hash = crypto.createHash('sha256').update(Buffer.from("Nobody inspects the spammish repetition")).digest();
    }

    args.hash = hashPrefix(hashtype, args.hash);

    var request_data = {
        request: {
            ApplicationId: Buffer.from(args.applicationId).toString('base64'),
            DocName: args.docName,
            Hash: args.hash.toString('base64'),
            Pin: args.pin,
            UserId: args.user
        }
    };

    return new Promise((resolve, reject) => {
        strongSoap.createClient(url, function (err, client) {
            client.CCMovelSign(request_data).then(function ({ result, envelope }) {
                if (result.CCMovelSignResult.Code != "200")
                    reject(result.CCMovelSignResult.Message)
                else
                    resolve(result.CCMovelSignResult);
            }, function (error) {
                reject(error);
            })
        })
    })
}

function cCMovelMultipleSign(args) {
    var url = get_wsdl(args.env);

    var request_data = {
        request: {
            ApplicationId: Buffer.from(args.applicationId).toString('base64'),
            Pin: args.pin,
            UserId: args.user
        },
        documents: {
            HashStructure: [
                {
                    Hash: crypto.createHash('sha256').update(Buffer.from("Nobody inspects the spammish repetition")).digest().toString('base64'),
                    Name: 'docname teste1',
                    id: '1234'
                },
                {
                    Hash: crypto.createHash('sha256').update(Buffer.from("Always inspect the spammish repetition")).digest().toString('base64'),
                    Name: 'docname teste2',
                    id: '1235'
                }
            ]
        }
    };

    return new Promise((resolve, reject) => {
        strongSoap.createClient(url, function (err, client) {
            client.CCMovelMultipleSign(request_data).then(function ({ result, envelope }) {
                if (result.CCMovelSignResult.Code != "200")
                    reject(result.CCMovelSignResult.Message)
                else
                    resolve(result.CCMovelMultipleSignResult);
            }, function (error) {
                reject(error);
            })
        })
    })
}

function validateOtp(args) {
    var url = get_wsdl(args.env);

    var request_data = {
        applicationId: Buffer.from(args.applicationId).toString('base64'),
        processId: args.ProcessId,
        code: args.otp,
    };

    return new Promise((resolve, reject) => {
        strongSoap.createClient(url, function (err, client) {
            client.ValidateOtp(request_data).then(function ({ result, envelope }) {
                if (result.ValidateOtpResult.Status.Code != "200")
                    reject(result.ValidateOtpResult.Status.Message)
                else
                    resolve(result.ValidateOtpResult);
            }, function (error) {
                reject(error);
            })
        })
    })
}