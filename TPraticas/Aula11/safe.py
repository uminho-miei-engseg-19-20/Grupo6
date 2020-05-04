def getNumeric(name,size):
    while True:
        try:
            
            res = int(input('Introduza '+ name +": "))
            if(len(str(res))== 9):
                break
            else:
                print("Tem de inserir "+ str(size)+ " caracteres!\n")
        except (ValueError, NameError):
            print("Apenas números!")
        
    return res
def getName():
    inp=''
    while True:
        inp = input("Introduza o nome:")
        if(len(inp)>=3 and len(inp)<=64):
            break
        else:
            print("Deve inserir entre 3 a 64 caracteres")
    output = ''
    for character in inp:
        if character.isalpha():
            output += character
    return output
def main():
    nif = getNumeric("NIF",9)
    nic = getNumeric("NIC",8)
    cc = getNumeric("Cartão de Crédito",16)
    cvv = getNumeric("CVC/CVV", 3)
    nome = getName()
    
    print("NIF: "+str(nif)+"\n")
    pass


main()