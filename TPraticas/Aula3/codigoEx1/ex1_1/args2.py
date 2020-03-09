import argparse
def args_Parser():
    parser = argparse.ArgumentParser(description='Processamento de Texto')
    parser.add_argument("-bs","--blindSing",nargs=1,help="Blind Signature")
    parser.add_argument("-bc","--blindComp",nargs=1,help="Blind Component")
    parser.add_argument("-pr","--prDash",nargs=1,help="prDash")
    
    return parser.parse_args()


def main():
    args_Parser()
    
    
if __name__ == "__main__":
    main() 