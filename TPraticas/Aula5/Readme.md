# Aula 5

## Exercício 1

### Pergunta 1.1

```
return new Block(0, "20/03/2020", "Genesis Bloco inicial da koreCoin", "0");

```

### Pergunta 1.2

```
koreCoin.addBlock(new Block (4, "19/03/2020", {amount: -60}));
koreCoin.addBlock(new Block (5, "20/03/2020", {amount: 10}));
```

### Experiência 1.2

## Exercício 2

### Pergunta 2.1

| Dificuldade | Tempo (mm:ss) |
| ----------- | ------------- |
| 2           | 00:00,078     |
| 3           | 00:00,340     |
| 4           | 00:01         |
| 5           | 00:18         |
| 6           | 04:52         |

Claramente, aumentando a dificuldade, ou seja, o nº de 0's com que a hash tem de começar, o tempo demorado cresce também. Nos valores iniciais, o diferença é mínima, mas, por exemplo, subindo a dificuldade de 5 para 6, o tempo demorado aumentou mais de 16 vezes.

### Pergunta 2.2

1. O algoritmo é incrementar um número até que seja divisível por 9 e divisível pelo _proof number_ do último bloco.
2. Não, porque não podemos controlar tão diretamente a dificuldade de minerar um bloco, e porque para calcular um número divisível por 9, podemos começar no 9 e incrementar 9 em vez de 1.
