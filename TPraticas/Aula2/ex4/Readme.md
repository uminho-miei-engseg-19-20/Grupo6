# Exercício 4

## Pergunta 4.1
Neste caso, a "Identity Documents Personalisation Centre under the Ministry of the Interior" está a usar RSA com uma chave de 2048 bits. Esta implementação do RSA está algo desatualizada, sendo que deveriam usar uma chave de tamanho superior. No entanto, isto tem um elevado custo monetário, pois gerar estas chaves tem um custo computacional elevado (superior a exponencial), forçando um investimento em HSM (hardware security module). Tendo em conta que o certificado expira em Agosto deste ano (2020), aconselharia a CA a obterem um certificado com um comprimento de chave superior, caso queiram manter o RSA.
Dados obtidos utilizando o seguinte comando:
```
openssl x509 -in lrv-lt.pem -text -noout
```
(ver ficheiro "output.txt" em anexo)