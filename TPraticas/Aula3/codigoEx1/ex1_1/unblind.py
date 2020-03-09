import sys
from eVotUM.Cripto import eccblind
from args2 import args_Parser
from eVotUM.Cripto import utils




def exitCode(errorCode) :

    if (errorCode == 1):
        print("Error: pRDash components are invalid")
    elif (errorCode == 2):
        print("Error: blind components are invalid")
    elif (errorCode == 3):
        print("Error: invalid blind signature format")

#Escrita pra ficheiro
def writeToFile(fn,d):
    try:
        file = open(fn,'w') 
        file.write(d)
        file.close() 
    except:
        sys.exit("Can't write to file")     


def main():

    args=args_Parser()

    if(args.blindSing and args.blindComp and args.prDash):
        try:
            blindSignature = utils.readFile(args.blindSing[0])
            blindComponents =utils.readFile(args.blindComp[0])
            pRDashComponents = utils.readFile(args.prDash[0])
        except:
            sys.exit("Can't open File")   

    else:
        sys.exit("Nao foram passados argumentos suficientes")


    errorCode, signature = eccblind.unblindSignature(blindSignature, pRDashComponents, blindComponents)
    if (errorCode is None):
        writeToFile('signature.txt',signature)
    else:
        exitCode(errorCode)

if __name__ == "__main__":
    main()