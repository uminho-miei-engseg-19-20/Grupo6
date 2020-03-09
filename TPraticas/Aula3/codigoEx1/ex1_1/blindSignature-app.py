from eVotUM.Cripto import utils
import sys
from eVotUM.Cripto import eccblind
from args1 import args_Parser


def exitCode(errorCode): 

    if (errorCode == 1):
        sys.exit("Error: it was not possible to retrieve the private key")
    elif (errorCode == 2):
       sys.exit("Error: init components are invalid")
    elif (errorCode == 3):
       sys.exit("Error: invalid blind message format")

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
    
    if(args.key and args.bmsg):
        try:
            pemKey = utils.readFile(args.key[0])
            blindM =utils.readFile(args.bmsg[0])
            initComponents = utils.readFile('initComp.txt')
        except:
            sys.exit("Can't open File")    

    else:
        sys.exit("Nao foram passados argumentos suficientes")     


    #Aqui vamos tratar do resto    
    errorCode, blindSignature = eccblind.generateBlindSignature(pemKey,'', blindM, initComponents)
    if (errorCode is None):
        writeToFile('blindSignature.txt',blindSignature)
    else:
        exitCode(errorCode)    




if __name__ == "__main__":
    main()