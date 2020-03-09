import sys
from args2 import args_Parser
from eVotUM.Cripto import eccblind



def getMessage(args):
    if(args.message):
        try:
            f = open(args.message[0],'r')
            data=f.read()
            f.close()
        except:
            sys.exit("Can't open input file") 
    else:
        data = raw_input("Data: ")
    return data    



#Escrita pra ficheiro
def writeToFile(fn,d):
    try:
        file = open(fn,'w') 
        file.write(d)
        file.close() 
    except:
        sys.exit("Can't write to file")      





def blindData(pRDashComponents, data):
    errorCode, result = eccblind.blindData(pRDashComponents, data)
    if (errorCode is None):
        blindComponents, pRComponents, blindM = result
        return blindComponents, pRComponents, blindM
    elif (errorCode == 1):
        sys.exit("Error: pRDash components are invalid")

    


def main():
    
    #obter argumentos/flags
    args=args_Parser()

    #Obter a mensagem
    data = getMessage(args)


    #Inicializar
    initComponents, pRDashComponents = eccblind.initSigner()
    writeToFile('initComp.txt',initComponents)
    writeToFile('pRDashComp.txt',pRDashComponents)


    #GenerateBlindData
    blindComponents, pRComponents, blindM=blindData(pRDashComponents, data)
    writeToFile('blindComponents.txt',blindComponents)
    writeToFile('pRComponents.txt',pRComponents)
    writeToFile('blindM.txt',blindM)


    

if __name__ == "__main__":
    main()