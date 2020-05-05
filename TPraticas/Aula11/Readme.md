# Aula 11

## Exercício 1

### Pergunta 1.1

O comportamento esperado do programa é receber o nome de um ficheiro e dizer o seu tipo recorrendo ao comando _file_ e à função _system()_

Podemos constatar que não é feito nenhum tratamento ao nome do ficheiro, em particular da sua extensão. Assim podemos executar os seguintes comandos:

```
touch "hello.txt;ls"
gcc filetype.c -o filetype
./filetype "hello.txt;ls"
```

Para forçar o programa a correr o comando _ls_. Neste caso, estamos a usar o operador ; que permite correr vários comandos de uma vez. Assim, a função _system()_ é chamada com o _input_ "file hello.txt;ls". Primeiro executa o comando _file_, e de seguida o _ls_. Usamos o _ls_ para efeitos demonstrativos, tendo acesso à execução de comandos, o atacante poderia fazer muito mais, e até encadear mais comandos numa só execução.

Também é possível usar / para se fazer _path traversal_. Com a ajuda do _autocomplete_ do

```
./filetype "/home/mariana/Desktop/ES/tp/Grupo6/README.md"
```

Podemos observar também que, ao usar a função _system()_, o programa está vulnerável pois é possível alterar a PATH para que o comando _file_ que é executado tenha outro comportamento que não o esperado, isto porque a função _system()_ usa as variáveis de ambiente do processo-pai.

```
export PATH=/usr/local/bin:$PATH

cp file_malicioso /usr/local/bin/file
```

Nota: isto muda o PATH temporariamente, para alterar permanentemente, é preciso escrever o caminho no ficheiro **~/.bashrc**.

Assim, podemos correr um _file_malicioso_ com o código que quisermos, por exemplo:

```
#!/bin/bash
echo Mwahahahahah
```

Notas:

1.  Pode-se imitar o comportamento normal do comando para além do que queremos fazer, para o ataque ser menos detetável)
2.  `chmod +x filem_alicioso` para ser executável.

Se o programa tivesse essas permissões, significaria que, ao ser executado o programa passaria a ter as permissões de _root_. Isto é extremamente perigoso, pois permite a um utilizador com poucas permissões executar comandos como _root_, caso o programa tenha vulnerabilidades como as apresentadas.

### Pergunta 1.2

**Nome:**

Deve conter apenas carateres pertencentes ao alfabeto, e ter comprimento entre 3 e 64.

**Valor a pagar:**

Deve ser um número (_float_) com 2 casas decimais.

**Data de nascimento:**

Data no formato DD-MM-AAAA. As datas devem ser válidas (não permitir 99-30-2020)

mês [1,12]
dia [1,31]

**NIF:**

9 dígitos

**NIC:**

8 dígitos

**Nº cartão de crédito:**

16 dígitos

**CVC/CVV:**

3 dígitos

**Validade do cartão:**

Data no formato DD-MM-AAAA. As datas devem ser válidas (não permitir 99-30-2020)

mês [1,12]
dia [1,31]
