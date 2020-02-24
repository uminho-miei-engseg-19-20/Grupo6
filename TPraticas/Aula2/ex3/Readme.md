# Exercício 3

## Pergunta 3.1
Vamos assumir que é fornecida uma licença ao utilizador que é válida durante o tempo em que pagar a anuidade do serviço.
```
def cifrar(segredo_plaintext,etiqueta,data):
	k = Keygen(data)
	c = cifra(segredo_plaintext)
	r = data + etiqueta + c
	return r + hmac(k,r)


def decifrar(r):
	if(not licence_is_valid):
		raise NameError('Licence not valid')
	
	d,e,c,h = Splitter(r)
	k = Keygen(d)
	if(h!=hmac(k,d+e+c)):
		raise NameError('HMAC not valid')
	
	return decifra(c,k)
```

Terão que existir também as duas funções auxiliares **Keygen** ( data ), que recebe a data no formato "ano.mes.dia" e retorna uma chave de cifra, e **Splitter** ( r ), que separa o output concatenado da função **cifrar** num tuplo.
