import argparse
def args_Parser():
    parser = argparse.ArgumentParser(description='Processamento de Texto')
    parser.add_argument("-init","--init",help="Inicializar")
    parser.add_argument("-m","--message",nargs=1,help="Mensagem a proteger")
    parser.add_argument("-key","--key",help="chave privada")
    parser.add_argument("-bmsg","--bmsg",nargs=1,help="Blind Message")
    return parser.parse_args()


def main():
    args_Parser()
    
    
if __name__ == "__main__":
    main() 