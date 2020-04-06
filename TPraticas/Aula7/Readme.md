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
| Software        | SLOC  | Limite Inferior de Bugs | Limite Superior de Bugs |
|-----------------|-------|-------------------------|-------------------------|
| Facebook        |  62M  |          0,31M          |           3,1M          |
| Linux 3.1       |  15M  |          0,075M         |          0,75M          |
| Serviços Google | 2000M |           10M           |           100M          |
| Carro Moderno   |  100M |           0,5M          |            5M           |

É impossível estimar qual o número de vulnerabilidades do *software* apresentado, pois o nº de *bugs* não está diretamente relacionado com o nº de vulnerabilidades.

### Pergunta 1.3
- **Projeto**  
  1. **CWE-36** - Absolute Path Traversal: O *software* usa *input* externo para construir um caminho que deveria manter-se dentro de uma diretoria restrita. No entanto, se o *input* não for normalizado, um atacante poderá conseguir aceder a outras diretorias fora da destinada, com o uso de caminhos absolutos. Para mitigar esta vulnerabilidade, basta sanitizar o *input* do utilizador, pelo que é bastante fácil de corrigir    
  2. **CWE-257** - Storing Passwords in a Recoverable Format: Se as *passwords* dos utilizadores forem guardadas num formato recuperável têm a mesma segurança do que se fossem gravadas em texto (*plaintext*). Caso os atacantes consigam ter acesso às mesmas, não há camada extra de proteção para que não seja possível ler as *passwords*. Para garantir a segurança das *passwords* é preciso fazê-las passar por uma função de *hash* antes de serem enviadas para o servidor, ou, no mínimo, ao serem guardadas. Implementar corretamente esta funcionalidade é relativamente fácil, bastando seguir bibliotecas criptográficas para esse efeito. 
- **Codificação**  
  1. **CWE-299** - Improper Check for Certificate Revocation: Quando se implementa criptografia assimétrica, é necessário verificar não só que o certificado de chave pública é válido, como também verificar que este não foi revogado. Esta falha pode ser mais grave que outras falhas na verificação de certificados, pois é provável que o certificado tenha sido revogado por ser malicioso. Esta vulnerabilidade é fácil de mitigar, mas pode ser difícil de detetar se quem desenvolve o *software* não tiver uma noção básica de criptografia assimétria.     
  2. **CWE-393** - Return of Wrong Status Code: Se uma função ou operação retornar um valor ou código incorreto, que não indica erro, mas modifica o funcionamento do programa, poderá causar comportamento inesperado do mesmo. Se a função é usada para decisões críticas ou para devolver informação crítica, é claramente perigoso que dela advenham comportamentos inesperados. A mitigação é relativamente simples, mas pode ser difícil de detetar o problema se os casos em que dá o valor inesperado/incorreto são raros.
- **Operacional**  
  1. **CWE-209** - Generation of Error Message Containing Sensitive Information: A mensagem pode ter sido construída pelo *source code* do programa ou gerada externamente, por exemplo, pelo interpretador da linguagem, que constrói a sua própria mensagem. Neste último caso, pode ser difícil de corrigir, e para o fazer pode ser necessário garantir que o caso que gera a mensagem de erro com conteúdo sensível não acontece, o que pode não ser possível. É também provável este problema apenas seja detetado após ocorrer em ambiente de produção  
  2. **CWE-215** - Insertion of Sensitive Information Into Debugging Code: Quando se procede ao *debug* de uma aplicação, pode ser necessário inserir informação sensível no código de *debug*. Isto por si só não causa problemas, no entanto, é frequente ser esquecido e enviado para produção, expondo assim a informação sensível.  
### Pergunta 1.4
As vulnerabilidades dia-zero são vulnerabilidades conhecidas apenas por um grupo restrito de pessoas, não estão publicadas nem têm CVE atribuído. Assim, é pouco provável que sejam corrigidas pois as equipas de desenvolvimento não sabem da sua existência. Estas vulnerabilidades são muitas vezes vendidas no mercado negro por valores avultados. Já as vulnerabilidades não dia-zero são publicamente conhecidas e na grande maioria das vezes são *patched* antes de serem publicadas.