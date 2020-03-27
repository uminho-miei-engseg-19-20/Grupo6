# Aula 6

## Exercício 1

### Pergunta 1.1
 Privacy and Data Protection by Design – from policy to engineering analise as oito estratégias de privacy design (secção 3.2)

Estratégias de *design* para a privacidade
* Orientadas aos dados:  
  1. MINIMISE - Minimizar os dados processados (recolhidos, armazenados e disseminados). Evitar recolher dados desnecessários, sem motivo concreto.
  2. HIDE - Esconder os dados através do uso de criptografia ou por desassociação da identificação dos dados sensíveis.
  3. SEPARATE - Deverá haver uma separação lógica e física de dados sensíveis e dos elementos que os identificam. Processamento distrubuído dos dados, ao invés de soluções centralizadas.
  *Nota*: Redes sociais descentralizadas como o *Diaspora* são inerentemente mais "amigas da privacidade" do que abordagens centrlizadas como o *Facebook*.
  4. AGGREGATE - Processar os dados o mais agregados possível, assim dados são gerais o suficiente para que as informações armazenadas sejam válidas para muitos indivíduos, e poucas informações podem ser atribuídas a uma única pessoa, protegendo sua privacidade.
* Orientadas ao processo:    
    5. INFORM - Haver transparência, ou seja, os utilizadores de um sistema devem ser informados sobre que dados são processados e para quê, a segurança do sistema, que direitos têm sobre os seus dados e como exercê-los.
    6. CONTROL - Sem meios ​​de controlar o uso dos dados pessoais, não adianta em muito informar um titular dos dados sobre o fato de que os dados pessoais são coletados. É claro que o inverso também é válido: sem informações adequadas, pouca vantagem em pedir consentimento. A legislação de proteção de dados geralmente dá ao titular dos dados o direito de ver, atualizar e até solicitar a eliminação dos dados pessoais coletados.
    7. ENFORCE - Garantir que as políticas de segurança e privacidade estão a ser postas em prática.
    8. DEMONSTRATE - Demonstar que os dados estão seguros (sob controlo) e que as normas de privacidade e requisitos legais estão a ser cumpridos. 

### Pergunta 1.2
Página 30

Suppliers of services and goods - Grupos 6
 que apresenta uma metodologia para avaliar o risco de segurança no processamento de dados pessoais, assim como uma série de casos de uso que permitem calcular o nível de risco baseado na metodologia descrita.

O objetivo deste exercício é cada grupo analisar um caso de uso, discutir os vários passos metodológicos seguidos até à avaliação do risco, identificar o risco existente, e propôr medidas apropriadas para diminuir (ou mitigar) o risco baseado nos anexos A.1, A.2 e A.3 do documento.

Uma PME ter claro interesse em processar dados dos clientes, mas também poderá fazer sentido que o façam para os fornecedores de serviços e bens com que trabalha. Nesse sentido, é necessário analizar os riscos de o fazer.

Em primeiro lugar, é preciso definir que dados vão ser processados e para quê. De seguida, é definido o impacto na tríade CIA

**Perda de Confidencialidade**: 

**Medidas:** 
  * Documentar a política de privacidade, revendo-a periodicamente.
  * Definir que cargos têm acesso a que informação e alterar as permissões de acesso de acordo com o contrato laboral. 
  * Não dar acesso a mais dados que os estritamente essenciais.
  * Manter registos do *hardware*, *software* e rede utilizados para processar os dados.
  * Manter registo das alterações ao sistema informático. Estas devem ser revistas por um responsável de segurança.
  * Usar dados fictícios, ao invés de reais, para desenvolver e testar sistemas.
  * Definir e documentar o processamento de dados por entidades externas (*outsourcing*).
  * Planear respostas em caso de incidente.
  * Reportar imediatamente qualquer violação dos dados.
  * Estabelecer procedimentos para manter a disponibilidade do sistema no caso de violação de dados.
  * Providenciar treino de *security awareness* aos funcionários.
  * Manter um sistema de acesso de controlo, com autenticação forte. Evitar contas comuns, dentro do possível. 
  * Bases de dados e aplicações devem ser alimentados com os dados que efetivamente precisam de processar.
  * Os utilizadores não devem ser capazes de desativar ou contornar as regras de segurança, bem como não lhes deve ser permitido que instalem ou desativem aplicações não autorizadas.
  * Manter o *software* e o sistema operativo atualizado.
  * Fazer *backups* regulares e garantir o seu sucesso e segurança.
  * 