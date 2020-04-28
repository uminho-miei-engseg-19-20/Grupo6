# Aula 9

## Exercício 1

### Pergunta 1.1

Em todos os exemplos, o código recebe um número de valores a inserir, e coloca-os num _buffer_ de tamanho 10. De seguida explica-se o comportamento quando se insere mais do que 10 valores.

#### Java

Em Java, ao tentarmos inserir o 11º valor, obtemos a seguinte exceção:

```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 10 out of bounds for length 10
	at LOverflow2.main(LOverflow2.java:18)G
```

#### Python

No caso do _python_ podemos perceber que ele deixa inserir n-1 números (ciclo de 0 a (n-1) mas o python não incluí n-1), pelo que temos de pedir para inserir 12 ou mais. Se o fizemos, ao inserir o 11º, ocorre um erro e o programa termina.

```
Traceback (most recent call last):
  File "LOverflow2.py", line 5, in <module>
    tests[i]=test
IndexError: list assignment index out of range

```

#### C++

Em C++, o programa continua a aceitar os números inseridos, sem _crashar_. No final, dá o seguinte erro:

```
*** stack smashing detected ***: <unknown> terminated
Aborted (core dumped)

```

#### Conclusão

Como pudemos constatar pelo comportamento do código nas várias linguagens, existe uma diferença na forma como as linguagens de alto e baixo nível lidam com a tentativa de escrever para além do espaço alocado. No caso do Python e Java, que são consideradas linguagens de alto nível, estes dispõem de mecanismos _built-in_ que não permitem a escrita em memória fora da zona que foi disponibilizada para o _buffer_. No caso do C++, que é de baixo nível, é possível inserir para além do espaço alocado, e só no fim do programa aparece um alerta do sucedido.

### Pergunta 1.2

1.  Ao analisar o código, constata-se que o mesmo espera que o _input_ seja apenas de 4 caracteres. Então, para conseguir mudar a variável de controlo _pass_, basta inserir um código de 5 caracteres, onde o último não seja 0 (pois nesse caso, a variável de controlo mantém se a 0, ou seja a _false_, e qualquer outro número avalia a _true_), como por exemplo 12345. Neste caso, a vulnerabilidade está no facto de estarmos a alocar espaço para o _buffer_ sem saber exatamente o espaço que vai ocupar.
    ![Pergunta1_2root](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula9/p1_2root.png)

2.  Neste programa, o desafio é similar, mas desta vez o _buffer_ é bastante maior, e colocar um _input_ com o tamanho do _buffer_ + 1 não é suficiente. Para saber em que posições de memória estavam a ser guardadas as variáveis, acrescentaram-se a seguintes linhas antes de ser chamada a função _gets_:

        printf("Endereço da variável control: %p\n",&control);
        printf("Endereço da variável buffer: %p\n",&buffer);

    Obtivemos assim o seguinte resultado:
    ![Pergunta1_2simple](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula9/p1_2simple.png)
    Podemos observar que existe uma difereça de 12 (decimal) entre um endereço de memória e outro. Logo, para conseguirmos aceder à variável _control_, usamos um _input_ de 64+12+1 = 77 caracteres. Assim, o valor da variável _control_ foi alterado, como podemos confirmar pela mensagem obtida.

### Pergunta 1.3

Olhando para o código, é claro que existe um problema que se prende com a leitura para além do que foi escrito, pois está-se a confiar que o utilizador tenha dado o tamanho correto da palavra/frase que escreveu.
Caso seja lido mais do que foi escrito, então começamos a ler de partes de memória que guardavam outras informações, particularmente pelo facto do C não inicializar o espaço alocado, e de, neste caso, o conteúdo do _buffer_ não ser limpo entre cada leitura/escrita.
Podemos ver este comportamento retratado no exemplo seguinte:
![Pergunta1_3](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula9/p1_3.png)

### Pergunta 1.4

Novamente, foi preciso perceber a distância entre a variável _buffer_ e a _control_. Neste caso, estavam à mesma distância que no exemplo anterior (Pergunta 1.2), pelo que se ocupou o espaço do _buffer_ (64 _bytes_) e o _off-set_ (12 _bytes_) com a letra A. Depois, acrescentamos o número 0x61626364, tendo em atenção que a máquina usa a notação _little endian_, ou seja, o primeiro _byte_ é o menos significativo, e o último _byte_ é o mais significativo. Assim, obtivemos o seguinte resultado:

![Pergunta1_4](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula9/p1_4.png)

### Pergunta 1.5

Para tornar este código seguro, é preciso substituir a função _strcpy_ por _strlcpy_. A diferença é que esta última apenas copia enquanto houver espaço no _buffer_ de destino, truncando a _string_ original, se necessário. Para além disto, garante que a _string_ contém o caracter final "\0", impedindo que ocorram _segfaults_ caso se tente ler a _string_ resultante, por exemplo usando a função _strlen_. Assim, evita-se que a cópia de _argv[1]_

Para além disto, não faz sentido alocarmos espaço para a variável _readonly_ que não sofre alterações, com um valor fixo. Em alternativa, a alocação de memória deveria ser feita utilizando o tamanho (_strlen()_) da _string_ que lá vai ser colocada.

### Pergunta 1.6

À semelhança da pergunta anterior, alterou-se a função _strcpy_ para _strlcpy_ por ser mais segura. Como o _fread_ só lê até 517 caracteres ou menos, caso o ficheiro seja mais pequeno, não há a possibilidade de ocorrer _buffer overflow_ a ler o ficheiro.

### Notas adicionais

Para aumentar a segurança dos programas, devemos usar mecanismos para que os endereços de memória usados de cada vez que se corre o programa sejam diferentes.
O _gcc_ tem também disponível a opção de usar a _Stack Guard_ que deteta e impede ataques de _stack smashing_.
