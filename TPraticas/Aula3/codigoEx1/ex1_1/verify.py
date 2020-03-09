from arg3 import args_Parser
import sys
from eVotUM.Cripto import eccblind
from eVotUM.Cripto import utils

def printUsage():
    print("Usage: python verifySignature-app.py public-key.pem")

def parseArgs():
    if (len(sys.argv) != 2):
        printUsage()
    else:
        eccPublicKeyPath = sys.argv[1]
        main(eccPublicKeyPath)

def exitCode(errorCode):

    if (errorCode == 1):
        print("Error: it was not possible to retrieve the public key")
    elif (errorCode == 2):
        print("Error: pR components are invalid")
    elif (errorCode == 3):
        print("Error: blind components are invalid")
    elif (errorCode == 4):
        print("Error: invalid signature format")


def writeToFile(fn,d):
    try:
        file = open(fn,'w') 
        file.write(d)
        file.close() 
    except:
        sys.exit("Can't write to file")  

def main():

    args=args_Parser()

    if(args.cert):
        try:
            pemPublicKey = utils.readFile(args.cert[0])
            data = utils.readFile('mensagem.txt')
            signature = utils.readFile('signature.txt')
            blindComponents = utils.readFile('blindComponents.txt')
            pRComponents = utils.readFile('pRComponents.txt')
        except:
            sys.exit("Can't open file")    

    else:
        sys.exit("Nao foram passados argumentos suficientes")    

    
    #verificacao
    errorCode, validSignature = eccblind.verifySignature(pemPublicKey, signature, blindComponents, pRComponents, data)

    if (errorCode is None):
        print('Assinatura Valida')
    else:
        exitCode(errorCode)




if __name__ == "__main__":
    main()