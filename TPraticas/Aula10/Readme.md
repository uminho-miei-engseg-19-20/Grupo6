# Aula 10

## Exercício 1

### Pergunta 1.1

Neste código podemos observar várias possibilidades de _integer overflow_.

Como a variável _i_ é um inteiro, _signed_ e a variável _x_ é size_t (_unsigned_), esta última suporta números muito maiores. Ora, como o primeiro ciclo _for_ incrementa _i_ até ao valor de _x_, se _x_ for superior ao valor máximo suportando por uma variável _int_ (2147483647), então esta variável irá "dar a volta". O mesmo acontece no ciclo seguinte, com as variáveis _j_ e _y_.

Por outro lado, a multiplicação de _x_ e _y_ pode ultrapassar o valor máximo de _size_t_(2^32 num sistemas de 32 _bits_ ou 2^64 num sistema de 64 bits), que é o valor máximo de _bytes_ que a função _malloc_ pode alocar. Assim, a memória alocada pode ser muito inferior à pretendida

```
#include <limits.h>
int main() {
        char *matriz;
        printf("%d\n", INT_MAX);
        vulneravel(matriz, 2147483647 +2 ,2147483647 ,1);
}
```

Aqui, coloca-se _INT_MAX + 2_ pois o primeiro ciclo incrementa _i_ até _x-1_, logo _x_ tem de ser _INT_MAX + 2_ para que _i_ ultrapasse o valor de _INT_MAX_.

Ao correr este programa com valores que dêem _overflow_, obtemos uma _segmentation fault_

### Pergunta 1.2

Neste caso, o programa está protegido contra _overflow_ mas não contra _underflow_. Como size_t é _unsigned_, ou seja, não suporta valores negativos, se a variável _tamanho_ for 0, na função _vulneravel()_ irá occorer a operação _0-1_, que faz com que ocorra um _underflow_, e, por consequência, é obtida uma _segmentation fault_.

```
int main() {
        char *origem = "Hello, Integer Underflow";
        vulneravel(origem, 0);
}
```
