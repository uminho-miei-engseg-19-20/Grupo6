import argparse
def args_Parser():
    parser = argparse.ArgumentParser(description='Processamento de Texto')
    parser.add_argument("-c","--cert",nargs=1,help="Certificado")

    
    return parser.parse_args()


def main():
    args_Parser()
    
    
if __name__ == "__main__":
    main() 