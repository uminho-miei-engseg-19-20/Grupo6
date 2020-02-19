# Exercício 1

## Pergunta 1.1
O /dev/random bloqueia quando fica sem entropia, enquanto que o urandom não. No entanto, isto não significa que o 
urandom não é seguro, pois usa a entropia disponível para gerar uma seed que alimenta o algoritmo pseudo-aleatório. É, portanto, preferível usar o /dev/urandom.
(ver imagem em anexo)

## Pergunta 1.2
O package instalado acrescenta entropia para que, mesmo que sobre uma carga alta, o sistema seja capaz de gerar aleatoriamente números de forma "segura". Assim, o /dev/random passa a ser uma opção viável para este tipo de sistemas, que têm de ser capazes de gerar aleatoriamente grandes quantidades de números, pois não bloqueará por falta de entropia.

## Pergunta 1.3
Como podemos constatar, a partir do snippet apresentado de seguida, a função que gera o segredo só extrai carateres alfanuméricos da string gerada aleatóriamente.
```
l = 0
    secret = ""
    while (l < secretLength):
        s = utils.generateRandomData(secretLength - l)
        for c in s:
            if (c in (string.ascii_letters + string.digits) and l < secretLength): # printable character
                l += 1
                secret += c
    return secret
```
