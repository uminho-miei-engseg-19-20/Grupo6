# Aula 11

## Exercício 1 - *Injection*

### Pergunta 1.1

Os primeiros 4 desafios (Nº 2, 3, 4, 5) são apenas *queries* básicas, em que já temos permissão para as executar, apenas temos de saber a sintaxe do comando SQL
#### Passo 2
```select department from employees where userid=96134```
#### Passo 3
```update employees set department='Sales' where first_name='Tobi'```
#### Passo 4
```alter table employees add phone varchar(20); ```
#### Passo 5
```GRANT ALTER TABLE TO 'UnauthorizedUser'```
#### Passo 9
```SELECT * FROM user_data WHERE first_name = 'John' and last_name = '' or '1' = '1'```
Esta *SQL Injection* funciona porque '1' = '1' é sempre verdadeiro (*true*). Portanto, temos de selecionar ' na primeira opção para fechar a *string* do *lastname*. Optar pelo OR para a condição do *WHERE* ser verdadeiro para todos os registos, e por fim escolher '1' = '1 sem fechar a plica, pois a mesma já está na *string* da *query*.
#### Passo 10
``` SELECT * From user_data WHERE Login_Count = 1 and userid= 1 or 1=1 ```
Login\_count não está susceptível a SQL Injection pois este input está parametrizado. Como o *userid* espera receber um número, não há plicas à volta deste *input*, pelo que, para completar este desafio basta por um qualquer valor inteiro no *logincount*, e introduzir ```1 or 1=1``` no *userid*. 
#### Passo 11
``` ' OR '1' = '1``` - > No campo *Authentication TAN* e como resultado obtém-se a tabela *employees* com todos os dados, incluíndo os salários.
#### Passo 12
``` '; update employees set salary = 120000 where auth_tan = '3SL99A ``` 
Com os primeiros caractéres terminamos a *query*, encadeando de seguida uma outra que altera o valor o salário. A plica final não é fechada pois já está presente na *string* da *query*.

#### Passo 13
``` ';drop table access_log; select * from access_log where action =' ``` 
Novamente, encadeamos uma *query* SQL que apaga a tabela com os *logs*. Depois, para não haver erros de sintaxe, junta-se uma outra *query*, que termina com a plica ('). Como resultado, a tabela de *logs* é apagada, eliminando assim as "provas" dos "ataques" anteriores.


## Exercício 2 - *XSS*

### Pergunta 2.1
#### Passo 2
Após escrever ```javascript:alert(document.cookie);``` na barra de endereços, tendo uma página do *WebGoat* carregada, podemos verificar que sim, as cookies são iguais.
#### Passo 7
``` <script>alert("Hello")</script>```
O campo vulnerável é o "Enter your credit card number". Se inserirmos esta *tag script* obtemos uma mensagem do *browser* a dizer *Hello*.
#### Passo 10
```start.mvc#test``` Neste desafio, tivemos de abrir a ferramenta de inspeção do *browser*, separador *sources* e procurar a *route* de teste.
![XML10](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula12/xml1.png)
#### Passo 11
```http://localhost:8080/WebGoat/start.mvc#test/%3Cscript%3Ewebgoat.customjs.phoneHome()%3C%2Fscript%3E```

 Se inserirmos este URL na barra de endereços obtemos a seguinte mensagem na consola do *browser* (inspecionar elemento -> *console*):

```phone home said {"lessonCompleted":true,"feedback":"Congratulations. You have successfully completed the assignment.","output":"phoneHome Response is 1177239543"}```
#### Passo 12
1. Solução 4
2. Solução 3
3. Solução 1 
4. Solução 2
5. Solução 4


## Exercício 3 - Quebra na Autenticação

### Pergunta 3.1

#### Passo 2
Em primeiro lugar, é preciso ter o WebWolf a correr. Depois, carregar em "*Forgot your password?`*" no formulário, introduzir o email [username]@webgoat.org, onde *username* é o nome de utilizador que estámos a usar. Depois, verificar a *mailbox* do WebWolf, onde podemos encontrar um *mail* com a nossa nova *password*, que é o *username* ao contrário. Voltando ao formulário de *login* do *WebGoat*, basta introduzir o mesmo *email* usado anteriormente, junto com a *password* enviada, para obter a mensagem:

```Congratulations. You have successfully completed the assignment.```

#### Passo 4
Neste caso, basta testar diferentes cores para cada utilizador, pois há um número limitado de opções. Assim, obtemos a messagem de sucesso estas combinações:

- tom - purple
- admin - green
- larry - yellow
#### Passo 5
Para concluir este desafio, basta ver a explicação que aparece quando selecionamos as perguntas de segurança. Na maioria das vezes, as perguntas de segurança não são uma boa forma de verificar a identidade do utilizador pois são fáceis de adivinhar ou até de encontrar a resposta nos perfis das redes sociais da vítima.

#### Passo 6
Para completar este desafio é preciso dar *reset* à *password* do Tom. Para tal, instalamos o BURP, para intercetar e modificar pedidos. De seguida faz-se um pedido de *reset* com o *mail* do Tom, interceta-se o pedido no BURP, e altera-se a porta do *host* para 9090 (onde está a correr o *WebWolf*).

![XML10](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula12/passwordreset3.png)

 Na página *Incoming Requests* do *WebWolf* podemos ver o seguinte pedido:

![XML10](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula12/passwordreset2.png)

Como a página de *reset* está a correr no *WebGoat*, e não no *WebWolf*, temos de ir ao endereço:

``` http://localhost:8080/WebGoat/PasswordReset/reset/reset-password/9110ce9f-eced-40ec-91ed-fff8c2091716```

Para obter a seguinte página:

![XML10](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula12/passwordreset1.png)

Agora, basta inserir uma *password* à nossa escolha, voltar à página da lição, e fazer o *login* com o *email* do Tom e a *password* escolhida.
## Exercício 4 - *Vulnerable components*

### Pergunta 4.1

#### Passo 5

```<script>alert("Hello")</script>``` Se colocarmos este código na primeira caixa de texto, o *alert* aparece, mas se tentarmos fazer o mesmo para a segunda caixa de texto, o mesmo já não acontece, por ser usada uma versão do *jquery* onde a vulnerabilidade já foi mitigada.

#### Passo 12

Para resolver este desafio foi preciso aceder ao *source-code* desta lição. Caso não fosse uma possibilidade, poderia ter-se usado um *Java decompiler*. Assim, descobrimos que o *input* é desserializado antes da exceção ser lançada, e caso encontre um *Integer* a lição é terminada com sucesso.

![XML10](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula12/vulnerable.png)

O seguinte *input* permite-nos completar a lição, mas outras bibliotecas ou comandos poderiam ser usados, pelo que é possível obter RCE (*remote code execution*) ao explorar esta vulnerabilidade.

    <java.lang.Integer>
    27
    </java.lang.Integer> 

