# Aula 7

## Exercício 1

### Pergunta 1.1
1. Caraterísticas das 3 primeiras *weakness* do **CWE Top 25**.  
    1.  **CWE-119** - Improper Restriction of Operations within the Bounds of a Memory Buffer:
    Esta *weakness* está presente quando, numa aplicação, é usado um *buffer* e é possível ler ou escrever num espaço de memória para além do alocado ao *buffer*. É comum em linguagens mais baixo nível como C, C++ e Assembly mas todas as linguagens que não se certificam que a memória que está a ser acedida foi alocada ao *buffer* estão vulneráveis. Um atacante pode conseguir executar código, alterar o fluxo de controlo, ler informação sensível ou indisponibilizar o sistema.
    2. **CWE-79** - Improper Neutralization of Input During Web Page Generation:
    Se uma aplicação *web* não sanitizar o *input* de um utilizador, e o *output* aparece numa página que é servida a outros utilizadores, a aplicação está vulnerável a *Cross-site Scripting*. Todas as tecnologias *web* poderão estar vulneráveis a este tipo de ataques (XSS). Um atacante pode conseguir obter a informação guardada nas *cookies*, correr código na máquina das vítimas, ou enviar pedidos fazendo-se passar pela vítima.
    3. 
### Pergunta 1.2

### Pergunta 1.3

### Pergunta 1.4
