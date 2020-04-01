# Aula 7

## Exercício 1

### Pergunta 1.1
1. Caraterísticas das 3 primeiras *weakness* do **CWE Top 25**.  
    1.  **CWE-119** - Improper Restriction of Operations within the Bounds of a Memory Buffer:
    Esta *weakness* está presente quando, numa aplicação, é usado um *buffer* e é possível ler ou escrever num espaço de memória para além do alocado ao *buffer*. É comum em linguagens mais baixo nível como C, C++ e Assembly mas todas as linguagens que não se certificam que a memória que está a ser acedida foi alocada ao *buffer* estão vulneráveis. Um atacante pode conseguir executar código, alterar o fluxo de controlo, ler informação sensível ou indisponibilizar o sistema.
    2. **CWE-79** - Improper Neutralization of Input During Web Page Generation:
    Se uma aplicação *web* não sanitizar o *input* de um utilizador, e o *output* aparece numa página que é servida a outros utilizadores, a aplicação está vulnerável a *Cross-site Scripting*. Todas as tecnologias *web* poderão estar vulneráveis a este tipo de ataques (XSS). Um atacante pode conseguir obter a informação guardada nas *cookies*, correr código na máquina das vítimas, ou enviar pedidos fazendo-se passar pela vítima.
    3. **CWE-20** - Improper Input Validation: 
    Quando o *input* do utilizador não é validado, o fluxo de controlo ou fluxo de dados do programa pode ser afetado. Apesar de ser parecida com a anterior, esta *weakness* torna os servidores onde o *software* reside vulneráveis, enquanto que a anterior pode afetar diretamente as máquinas dos clientes do *software*. Neste caso, não há uma dependência de uma linguagem ou tecnologia, mas é claramente mais grave, por exemplo, numa aplicação de *home banking*, que numa aplicação para uso interno duma empresa. Um atacante pode causar um DoS, ler dados confidenciais ou executar comandos/códigos no servidor.
2. **CWE-352** - Cross-Site Request Forgery (CSRF) acontece quando uma aplicação *web* não verifica se um pedido foi efetivamente feito pelo utilizador que o submeteu. Caso isto aconteça, é possível que o utilizador, sem saber, ao abrir um *website* malicioso, este faça um pedido, aproveitando-se de uma sessão que o utilizador tenha aberta, por exemplo, num *website* de *home banking*. Para mitigar esta *weakness*, o servidor pode enviar um *token* único, aleatório, junto com o formulário para o cliente. Se o pedido voltar sem *token*, ou com um *token* diferente do enviado, o pedido deve ser descartado. Neste caso, apenas verificar se a sessão existe não é suficiente, porque o pedido é feito a partir do *browser* do cliente, onde a sessão está aberta e é válida.
```
<SCRIPT>
function SendAttack () {
form.email = "attacker@example.com";
// send to profile.php
form.submit();
}
</SCRIPT>

<BODY onload="javascript:SendAttack();">

<form action="http://victim.example.com/profile.php" id="form" method="post">
<input type="hidden" name="firstname" value="Funny">
<input type="hidden" name="lastname" value="Joke">
<br/>
<input type="hidden" name="email">
</form>
```
Exemplo de script usado para CSRF. Basta o utilizador carregar no *link* para uma página com esse código que o pedido é feito para o URL em "form action". Note-se que os campos estão escondidos, para que o utilizador não se aperceba do sucedido.

### Pergunta 1.2
| Software        | SLOC  | Limite Inferior de Bugs | Limite Superior de Bugs | Vulnerabilidades Estimadas |
|-----------------|-------|-------------------------|-------------------------|----------------------------|
| Facebook        |  62M  |          0,31M          |           3,1M          |                            |
| Linux 3.1       |  15M  |          0,075M         |          0,75M          |                            |
| Serviços Google | 2000M |           10M           |           100M          |                            |
| Carro Moderno   |  100M |           0,5M          |            5M           |                            |
### Pergunta 1.3

### Pergunta 1.4
