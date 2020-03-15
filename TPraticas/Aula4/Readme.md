# Aula 4

## Exercício 1

## Experiência 1.1
1. Abra o browser e vá a [https://iplocation.com/](https://iplocation.com/):
![Experiência1_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/1.png)

2. Na linha de comando execute `sudo anonsurf start`
![Experiência1_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/2.png)

3. Faça reload (shift-reload) da página web onde se encontrava
![Experiência1_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/3.png)

4. Na linha de comando execute `sudo anonsurf change`
![Experiência1_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/4.png)

5. Faça reload (shift-reload) da página web onde se encontrava
![Experiência1_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/5.png)

6. Na linha de comando execute `sudo anonsurf stop`

7. Faça reload (shift-reload) da página web onde se encontrava
![Experiência1_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/7.png)

## Pergunta P1.1

Ao efetuarmos o comando ``` sudo anonsurf start``` não é possível atribuirmos uma localização especifica ao utilizador. Isto deve-se ao facto de o Onion Proxy estabelecer circuitos de forma aleatoria, o que faz com que a localização dos seus Onion Routers não seja determinada, em particular, a do nodo de saida (que é aquele cujo IP e localização são conhecidos).

## Experiência 1.2

A. No browser TOR aceda à página [https://blog.torproject.org/italian-anti-corruption-authority-anac-adopts-onion-services](https://blog.torproject.org/italian-anti-corruption-authority-anac-adopts-onion-services). Clique no lado esquerdo da barra de URL ((i)) e verifique qual é o circuito para esse site.
![Experiência1_2](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/A.png)

B. Abra outro tab/pestana no browser TOR e aceda à página [https://www.expressvpn.com/blog/best-onion-sites-on-dark-web/](https://www.expressvpn.com/blog/best-onion-sites-on-dark-web/). Clique no lado esquerdo da barra de URL e verifique qual é o circuito para esse site.
![Experiência1_2](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/B.png)

## Pergunta P1.2
![Pergunta_P1_2](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula4/img/p2.png)

Acedendo a [https://www.facebookcorewwwi.onion/](https://www.facebookcorewwwi.onion/), os primeiros 3 saltos fazem parte do funcionamento normal do TOR, onde são escolhidos de forma aleatória 3 Onion Routers de modo a ocultar a localização real do utilizador. Os últimos 3 saltos são relay, pois pertencem a um circuito TOR utilizado pelo fornecedor do serviço, de modo a que este possa ligar-se ao ponto de Rendezvous, ocultando a sua localização.
