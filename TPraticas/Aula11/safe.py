import datetime

def getName(size_min=3,size_max=64):
    while True:
        inp = input("Introduza o nome: ")
        if(len(inp)>=size_min and (size_max<size_min or len(inp)<=size_max)):
            if 0<sum(list(map(lambda x:0 if x.isalpha()else 1,inp.split(" ")))):
                print("Caracteres Inválidos!")
            else:
                return inp
        else:
            print("Deve inserir entre",size_min,"a",size_max,"caracteres")

def getNum(name="um número",size=0,r_type=int,decimals=2):
    k = True
    while k:
        try:
            inp = input('Introduza '+name+": ")
            res = r_type(inp)

            k = False
            if(isinstance(res,float) and (not('.' in inp) or len(inp.split(".")[1])>decimals)):
                print("É obrigatório ter casas decimais, no máximo",decimals,"casas decimais!")
                k = True

            if(not k and size>0 and len(inp)!=size):
                print("Tem de inserir",size,"caracteres!")
                k = True

        except(ValueError, NameError):
            print("Caracteres Inválidos!")
    return res

def getDate(name="a data de nascimento"):
    while True:
        try:
            inp = input("Introduza "+name+" (DD-MM-AAAA): ")
            datetime.datetime.strptime(inp,'%d-%m-%Y')
            return inp
        except:
            print("Data incorrecta!")

if __name__ == "__main__":
    nif   = getNum("NIF",9)
    nic   = getNum("NIC",8)
    cc    = getNum("Cartão de Crédito",16)
    cvv   = getNum("CVC/CVV", 3)
    validade = getDate("a validade do cartão")
    nome  = getName()
    data  = getDate()
    valor = getNum("Valor",r_type=float)
    
    print( "NIF:"  , nif  )
    print( "NIC:"  , nic  )
    print( "CC:"   , cc   )
    print( "CVV:"  , cvv  )
    print( "VALIDADE:" , validade )
    print( "NOME:" , nome )
    print( "DATA DE NASCIMENTO:" , data )
    print( "VALOR:", valor)
