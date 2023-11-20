# projeto_final
***###Equipe###***
  Fabricio Gomes
  Lucas Fernando

  
***###REQUISITOS###***
  1 Requisitos Funcionais
    Registro de usuários.
    Cadastro e edição de vagas por empresas.
    Cadastro, edição e remoção de candidatos.
    Aplicação em vagas com registro do tempo de aplicação.
    Opção para desistir de se aplicar em uma vaga.
    Visualização das vagas às quais o usuário se aplicou.
    Cadastro de empresas no sistema.


    
  2 Requisitos Não-Funcionais
    Desempenho: O sistema deve ser responsivo e eficiente, mesmo com um grande número de usuários.
    Segurança: Dados pessoais e informações sensíveis devem ser protegidos por medidas de segurança adequadas.
    Usabilidade: A interface do sistema deve ser intuitiva e de fácil navegação.

    
***##TECNOLOGIAS UTILIZADAS##***
  O projeto utilizará as seguintes tecnologias: Node.js, Prisma, Yup e MongoDB. 
  Essas escolhas foram feitas devido à escalabilidade, flexibilidade e eficiência que essas tecnologias oferecem 
  para o desenvolvimento de programação web.

***##CRONOGRAMA PRELIMINAR##***
***Semana 1: Definição e Planejamento***
***Semana 2: Elaboração e Detalhamento***
***Semana 3: Design do Banco de Dados e Modelo de Dados***
***Semana 4: Desenvolvimento do Backend - Parte 1***
***Semana 5: Desenvolvimento do Backend - Parte 2 e Validação com Yup*(mudança de js para ts)**
***Semana 6: Testes, Refatoração e Apresentação***

## PASSOS INICIAIS: ##
1. npm install
2. Configurar arquivo .env com as variáveis: DATABASE_URL e JWT_SECRET (DATABASE_URL vai conter os dados do mongoDB e JWT_SECRET uma chave aleatória de 256bit)
3. npx prisma db push
4. npm start
5. Utilizar o Postman, Insomnia ou Thunder Client para testar as rotas.
  
##### PASSOS PARA TESTAR AS ROTAS #####

**REGISTRAR**

Rota: localhost:<porta>/api/v1/autenticar/registrar
Método: POST
Insira o nome, o email, a senha e o tipo de usuário(empresa ou estudante) no body.

**LOGAR**

Rota: localhost:<porta>/api/v1/autenticar/logar
Método: POST
Logar com o email e a senha registrada. Copiar o token que foi gerado.

### ROTAS DAS EMPRESAS ###

Antes de testar as rotas das empresas:
Ao utilizar uma das API para teste de rotas, vá na aba "Headers" e adicione a chave "Authorization" com o valor: "Bearer <Token>". No lugar de <Token> coloque o token que foi gerado depois de ter realizado a ação de login.

**CRIAR EMPREGOS**

Rota: localhost:<porta>/api/v1/empresa/empregos
Método: POST
Insira a empresa, o cargo e status(opcional) no body.

**MOSTRAR TODOS OS SEUS EMPREGOS CRIADOS**

Rota: localhost:<porta>/api/v1/empresa/empregos
Método: GET

**MOSTRAR UM EMPREGO POR ID**

Rota: localhost:<porta>/api/v1/empresa/empregos/<id>
Método: GET

**EDITAR UM EMPREGO POR ID**

Rota: localhost:<porta>/api/v1/empresa/empregos/<id>
Método: PATCH
Passe empresa, cargo e estatus(opcional) no body.

**DELETAR EMPRESA POR ID**

Rota: localhost:<porta>/api/v1/empresa/empregos/<id>
Método: DELETE

### ROTAS DOS ESTUDANTES ###

Antes de testar as rotas dos estudantes:
Ao utilizar uma das API para teste de rotas, vá na aba "Headers" e adicione a chave "Authorization" com o valor: "Bearer <Token>". No lugar de <Token> coloque o token que foi gerado depois de ter realizado a ação de login.

**MOSTRAR TODOS OS EMPREGOS CRIADOS**

Rota: localhost:<porta>/api/v1/estudante/empregos
Método: GET

**MOSTRAR UM EMPREGO POR ID**

Rota: localhost:<porta>/api/v1/estudante/empregos/mostrar/<id>
Método: GET

**CANDIDATAR-SE A UMA VAGA POR ID**

Rota: localhost:<porta>/api/v1/estudante/empregos/candidatar/<id>
Método: PATCH

**CANCELAR CANDIDATURA A UMA VAGA POR ID**

Rota: localhost:<porta>/api/v1/estudante/empregos/cancelar/<id>
Método: PATCH

**PROCURAR VAGAS CANDIDATADAS**
Rota: localhost:<porta>/api/v1/estudante/empregos/meus
Método: GET