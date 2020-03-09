# Aula 3

## Exercício 1
  O exercicio 1 necessita do código partilhado na página principal do *github* da unidade corricular. De forma a responder aos exercícios, foi criada
  a diretoria *codigoEx1* onde possui o código original do professor e resultados de execuções.   

### Experiência 1.
Com a execução do comando: 
- `openssl ecparam -name prime256v1 -genkey -noout -out key.pem`
Que possui como resultado o ficheiro *key.pem*   
   
  
Com a execução do comando:
- `openssl req -key key.pem -new -x509 -days 365 -out key.crt`  
É gerado o ficheiro *key.crt*


### Experiência 1.2
Como demonstrado nos *slides* teóricos, aqui encontra-se descrita a execução de cada um dos exemplos referidos:   

![Experiência1_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula3/img/1.png)
![Experiência1_2](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula3/img/2.png)
![Experiência1_3](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula3/img/3.png)
![Experiência1_4](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula3/img/4.png)
![Experiência1_5](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula3/img/5.png)
### Pergunta P1.1

O código do exercicio pode ser encontrado [aqui](https://github.com/uminho-miei-engseg-19-20/Grupo6/tree/master/TPraticas/Aula3/codigoEx1/ex1_1)

Aqui encontra-se descrita a execução:   
- `python init-app.py -m mensagem.txt` Lê mensagem (por stdin ou ficheiro) e guarda em ficheiro o *initComponents*, *pRDashComponents*, *blindComponents*, *pRComponents*, *blindM*  
- `python blindSignature-app.py -key key.pem -bmsg blindM.txt`A partir das componentes anteriormente geradas guarda em ficheiro a *blindSignature*
- `python unblind.py -bs blindSignature.txt -bc blindComponents.txt -pr pRDashComp.txt`, efectua a *unblindSignature* a partir do *blindSignature*, *pRDashComponents* e *blindComponents*, guardando o resultado em *signature.txt*
- `python verify.py -c key.crt` Efectua a verificação a partir de todos os componentes gerados anteriormente
- De referir a existencia de multiplos ficheiros `args.py` que com auxilida da biblioteca *argParser* permite efetuar o processamento de *flags* em cada uma das *scripts* existentes


## Exercício 2

### Experiência 2.1

https://www.ssllabs.com/ssltest/analyze.html?d=www.portugal.gov.pt


### Pergunta P2.1

* Grupo 6 - Escolha dois sites de Ministérios de Governos não Europeus.
  1. Anexe os resultados do SSL Server test à sua resposta.
  2. Analise o resultado do SSL Server test relativo ao site escolhido com pior rating. Que comentários pode fazer sobre a sua segurança. Porquê?
  3. É natural que tenha reparado na seguinte informação: "POODLE (SSLv3)" na secção de detalhe do protocolo. O que significa, para efeitos práticos?

#### Ministério da Educação do Brasil

1. https://www.ssllabs.com/analyze.html?d=www.mec.gov.br&s=13.107.246.10&latest
 **Resultado**: A

#### Ministério da Saúde do Brasil

1. https://www.ssllabs.com/ssltest/analyze.html?d=www.saude.gov.br&latest

**Resultado**: F
 
2. O resultado geral por si só já dá uma indicação de que a segurança implementada é pouca ou muito fraca. Analisando o resultado com mais atenção, podemos verificar que o servidor usa várias *cipher suites* classificadas como fracas e está vulneravel a ataques **Zombie POODLE**, **GOLDENDOODLE** e **OpenSSL 0-Length**. É comum que, na área da saúde, a segurança seja mais relaxada, para permitir interoperabilidade. Obviamente que tal não deveria acontecer, especialmente porque se lida com dados sensíveis 

3. POODLE é um atack *man-in-the-middle* que explora uma falha no SSL 3.0. Caso o servidor suporte esta versão do SSL. é possível, com 256 pedidos, revelar um byte de mensagens encriptadas. O SSL Server Test indica se os servidores estão vulneráveis a este ataque. Nenhum dos dois servidores está, no entanto, o servidor do Ministério da Saúde do Brasil está vulneravel a ataques **Zombie POODLE**, **GOLDENDOODLE** e **OpenSSL 0-Length**.

* https://nvd.nist.gov/vuln/detail/CVE-2014-3566
* https://blog.qualys.com/technology/2019/04/22/zombie-poodle-and-goldendoodle-vulnerabilities
* https://www.tripwire.com/state-of-security/vert/zombie-poodle/
* https://www.tripwire.com/state-of-security/vert/goldendoodle-attack/

## Exercício 3

### Experiência 3.1

![Experiência3_1](https://github.com/uminho-miei-engseg-19-20/Grupo6/blob/master/TPraticas/Aula3/p3_1.png)

### Pergunta P3.1

* Grupo 6 - Escolha dois servidores ssh de empresas comerciais em Lisboa.


#### MEO
Usando o *shodan* obteve-se o seguinte IP https://www.shodan.io/host/62.48.215.43.
1. 
```
# general
(gen) banner: SSH-2.0-OpenSSH_7.4p1 Debian-10+deb9u7
(gen) software: OpenSSH 7.4p1
(gen) compatibility: OpenSSH 7.3+, Dropbear SSH 2016.73+
(gen) compression: enabled (zlib@openssh.com)

# key exchange algorithms
(kex) curve25519-sha256              -- [warn] unknown algorithm
(kex) curve25519-sha256@libssh.org   -- [info] available since OpenSSH 6.5, Dropbear SSH 2013.62
(kex) diffie-hellman-group16-sha512  -- [info] available since OpenSSH 7.3, Dropbear SSH 2016.73
(kex) diffie-hellman-group18-sha512  -- [info] available since OpenSSH 7.3
(kex) diffie-hellman-group14-sha256  -- [info] available since OpenSSH 7.3, Dropbear SSH 2016.73

# host-key algorithms
(key) ssh-rsa                        -- [info] available since OpenSSH 2.5.0, Dropbear SSH 0.28
(key) rsa-sha2-512                   -- [info] available since OpenSSH 7.2
(key) rsa-sha2-256                   -- [info] available since OpenSSH 7.2

# encryption algorithms (ciphers)
(enc) chacha20-poly1305@openssh.com  -- [info] available since OpenSSH 6.5
                                     `- [info] default cipher since OpenSSH 6.9.
(enc) aes128-ctr                     -- [info] available since OpenSSH 3.7, Dropbear SSH 0.52
(enc) aes192-ctr                     -- [info] available since OpenSSH 3.7
(enc) aes256-ctr                     -- [info] available since OpenSSH 3.7, Dropbear SSH 0.52
(enc) aes128-gcm@openssh.com         -- [info] available since OpenSSH 6.2
(enc) aes256-gcm@openssh.com         -- [info] available since OpenSSH 6.2

# message authentication code algorithms
(mac) umac-128-etm@openssh.com       -- [info] available since OpenSSH 6.2
(mac) hmac-sha2-256-etm@openssh.com  -- [info] available since OpenSSH 6.2
(mac) hmac-sha2-512-etm@openssh.com  -- [info] available since OpenSSH 6.2

# algorithm recommendations (for OpenSSH 7.4)
(rec) +ssh-ed25519                   -- key algorithm to append 

(base) mariana@mariana-PS42-8RB:~/tools/ssh-audit$ python ssh-audit.py 62.48.215.43
# general
(gen) banner: SSH-1.99-Cisco-1.25
(gen) protocol SSH1 enabled
(gen) software: Cisco IOS/PIX sshd 1.25
(gen) compatibility: OpenSSH 3.9-6.6, Dropbear SSH 0.53+
(gen) compression: disabled

# key exchange algorithms
(kex) diffie-hellman-group-exchange-sha1  -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] using weak hashing algorithm
                                          `- [info] available since OpenSSH 2.3.0
(kex) diffie-hellman-group14-sha1         -- [warn] using weak hashing algorithm
                                          `- [info] available since OpenSSH 3.9, Dropbear SSH 0.53
(kex) diffie-hellman-group1-sha1          -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [fail] disabled (in client) since OpenSSH 7.0, logjam attack
                                          `- [warn] using small 1024-bit modulus
                                          `- [warn] using weak hashing algorithm
                                          `- [info] available since OpenSSH 2.3.0, Dropbear SSH 0.28

# host-key algorithms
(key) ssh-rsa                             -- [info] available since OpenSSH 2.5.0, Dropbear SSH 0.28

# encryption algorithms (ciphers)
(enc) aes128-cbc                          -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] using weak cipher mode
                                          `- [info] available since OpenSSH 2.3.0, Dropbear SSH 0.28
(enc) 3des-cbc                            -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] using weak cipher
                                          `- [warn] using weak cipher mode
                                          `- [warn] using small 64-bit block size
                                          `- [info] available since OpenSSH 1.2.2, Dropbear SSH 0.28
(enc) aes192-cbc                          -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] using weak cipher mode
                                          `- [info] available since OpenSSH 2.3.0
(enc) aes256-cbc                          -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] using weak cipher mode
                                          `- [info] available since OpenSSH 2.3.0, Dropbear SSH 0.47

# message authentication code algorithms
(mac) hmac-sha1                           -- [warn] using encrypt-and-MAC mode
                                          `- [warn] using weak hashing algorithm
                                          `- [info] available since OpenSSH 2.1.0, Dropbear SSH 0.28
(mac) hmac-sha1-96                        -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] disabled (in client) since OpenSSH 7.2, legacy algorithm
                                          `- [warn] using encrypt-and-MAC mode
                                          `- [warn] using weak hashing algorithm
                                          `- [info] available since OpenSSH 2.5.0, Dropbear SSH 0.47
(mac) hmac-md5                            -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] disabled (in client) since OpenSSH 7.2, legacy algorithm
                                          `- [warn] using encrypt-and-MAC mode
                                          `- [warn] using weak hashing algorithm
                                          `- [info] available since OpenSSH 2.1.0, Dropbear SSH 0.28
(mac) hmac-md5-96                         -- [fail] removed (in server) since OpenSSH 6.7, unsafe algorithm
                                          `- [warn] disabled (in client) since OpenSSH 7.2, legacy algorithm
                                          `- [warn] using encrypt-and-MAC mode
                                          `- [warn] using weak hashing algorithm
                                          `- [info] available since OpenSSH 2.5.0

# algorithm recommendations (for OpenSSH 3.9)
(rec) -diffie-hellman-group1-sha1         -- kex algorithm to remove 
(rec) -diffie-hellman-group-exchange-sha1 -- kex algorithm to remove 
(rec) -3des-cbc                           -- enc algorithm to remove 
(rec) -aes128-cbc                         -- enc algorithm to remove 
(rec) -aes192-cbc                         -- enc algorithm to remove 
(rec) -aes256-cbc                         -- enc algorithm to remove 
(rec) +aes128-ctr                         -- enc algorithm to append 
(rec) +aes192-ctr                         -- enc algorithm to append 
(rec) +aes256-ctr                         -- enc algorithm to append 
(rec) -hmac-sha1-96                       -- mac algorithm to remove 
(rec) -hmac-md5                           -- mac algorithm to remove 
(rec) -hmac-md5-96                        -- mac algorithm to remove 

```
2. O servidor está a correr *SSH-1.99-Cisco-1.25* na porta 22. O software usado é **OpenSSH 7.4p1**
3. A versão com mais vulnerabilidades é a **1.0.0a** com um total de 64.  
4. https://www.cvedetails.com/cve/CVE-2010-3864/ com um *score* de **7.6**
5. Não, pois é difícil de explorar, e é tão antiga que neste momento, o mais provável é que sejam poucos (ou até nenhum) os sistemas a correr esta versão do OpenSSL, e mesmo que existam, possivelmente não serão de grande interesse.

#### Vodafone

https://www.shodan.io/host/93.108.244.64
1. 
```
# general
(gen) banner: SSH-2.0-OpenSSH_7.2p2 Ubuntu-4ubuntu2.8
(gen) software: OpenSSH 7.2p2
(gen) compatibility: OpenSSH 7.2+, Dropbear SSH 2013.62+
(gen) compression: enabled (zlib@openssh.com)

# key exchange algorithms
(kex) curve25519-sha256@libssh.org          -- [info] available since OpenSSH 6.5, Dropbear SSH 2013.62
(kex) ecdh-sha2-nistp256                    -- [fail] using weak elliptic curves
                                            `- [info] available since OpenSSH 5.7, Dropbear SSH 2013.62
(kex) ecdh-sha2-nistp384                    -- [fail] using weak elliptic curves
                                            `- [info] available since OpenSSH 5.7, Dropbear SSH 2013.62
(kex) ecdh-sha2-nistp521                    -- [fail] using weak elliptic curves
                                            `- [info] available since OpenSSH 5.7, Dropbear SSH 2013.62
(kex) diffie-hellman-group-exchange-sha256  -- [warn] using custom size modulus (possibly weak)
                                            `- [info] available since OpenSSH 4.4
(kex) diffie-hellman-group14-sha1           -- [warn] using weak hashing algorithm
                                            `- [info] available since OpenSSH 3.9, Dropbear SSH 0.53

# host-key algorithms
(key) ssh-rsa                               -- [info] available since OpenSSH 2.5.0, Dropbear SSH 0.28
(key) rsa-sha2-512                          -- [info] available since OpenSSH 7.2
(key) rsa-sha2-256                          -- [info] available since OpenSSH 7.2
(key) ecdsa-sha2-nistp256                   -- [fail] using weak elliptic curves
                                            `- [warn] using weak random number generator could reveal the key
                                            `- [info] available since OpenSSH 5.7, Dropbear SSH 2013.62
(key) ssh-ed25519                           -- [info] available since OpenSSH 6.5

# encryption algorithms (ciphers)
(enc) chacha20-poly1305@openssh.com         -- [info] available since OpenSSH 6.5
                                            `- [info] default cipher since OpenSSH 6.9.
(enc) aes128-ctr                            -- [info] available since OpenSSH 3.7, Dropbear SSH 0.52
(enc) aes192-ctr                            -- [info] available since OpenSSH 3.7
(enc) aes256-ctr                            -- [info] available since OpenSSH 3.7, Dropbear SSH 0.52
(enc) aes128-gcm@openssh.com                -- [info] available since OpenSSH 6.2
(enc) aes256-gcm@openssh.com                -- [info] available since OpenSSH 6.2

# message authentication code algorithms
(mac) umac-64-etm@openssh.com               -- [warn] using small 64-bit tag size
                                            `- [info] available since OpenSSH 6.2
(mac) umac-128-etm@openssh.com              -- [info] available since OpenSSH 6.2
(mac) hmac-sha2-256-etm@openssh.com         -- [info] available since OpenSSH 6.2
(mac) hmac-sha2-512-etm@openssh.com         -- [info] available since OpenSSH 6.2
(mac) hmac-sha1-etm@openssh.com             -- [warn] using weak hashing algorithm
                                            `- [info] available since OpenSSH 6.2
(mac) umac-64@openssh.com                   -- [warn] using encrypt-and-MAC mode
                                            `- [warn] using small 64-bit tag size
                                            `- [info] available since OpenSSH 4.7
(mac) umac-128@openssh.com                  -- [warn] using encrypt-and-MAC mode
                                            `- [info] available since OpenSSH 6.2
(mac) hmac-sha2-256                         -- [warn] using encrypt-and-MAC mode
                                            `- [info] available since OpenSSH 5.9, Dropbear SSH 2013.56
(mac) hmac-sha2-512                         -- [warn] using encrypt-and-MAC mode
                                            `- [info] available since OpenSSH 5.9, Dropbear SSH 2013.56
(mac) hmac-sha1                             -- [warn] using encrypt-and-MAC mode
                                            `- [warn] using weak hashing algorithm
                                            `- [info] available since OpenSSH 2.1.0, Dropbear SSH 0.28

# algorithm recommendations (for OpenSSH 7.2)
(rec) -diffie-hellman-group14-sha1          -- kex algorithm to remove 
(rec) -ecdh-sha2-nistp256                   -- kex algorithm to remove 
(rec) -ecdh-sha2-nistp384                   -- kex algorithm to remove 
(rec) -ecdh-sha2-nistp521                   -- kex algorithm to remove 
(rec) -ecdsa-sha2-nistp256                  -- key algorithm to remove 
(rec) -hmac-sha1                            -- mac algorithm to remove 
(rec) -hmac-sha2-256                        -- mac algorithm to remove 
(rec) -hmac-sha2-512                        -- mac algorithm to remove 
(rec) -umac-64@openssh.com                  -- mac algorithm to remove 
(rec) -umac-128@openssh.com                 -- mac algorithm to remove 
(rec) -hmac-sha1-etm@openssh.com            -- mac algorithm to remove 
(rec) -umac-64-etm@openssh.com              -- mac algorithm to remove 

```
2. O servidor está a correr *SSH-2.0-OpenSSH_7.2p2 Ubuntu-4ubuntu2.8* na porta 22. O software é **OpenSSH 7.2p2**.

Visto que a Vodafone usa igualmente OpenSSL, as perguntas 3, 4 e 5 já foram respondidas anteriormente.

