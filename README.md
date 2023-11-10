# projeto_final
***###Equipe###***
  Fabricio Gomes
  Lucas Fernando

  
***###REQUISITOS###***
  1 Requisitos Funcionais
    Registro de usuários.
    Cadastro e edição de vagas por empresas.
    Cadastro, edição e remoção de currículos por candidatos.
    Aplicação em vagas com registro do tempo de aplicação.
    Opção para desistir de se aplicar em uma vaga.
    Marcação e edição de entrevistas por parte dos empregadores.
    Visualização das vagas às quais o usuário se aplicou.
    Cadastro de empresas no sistema.
    Criação de entrevistas.

    
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
***Semana 5: Desenvolvimento do Backend - Parte 2 e Validação com Yup***
***Semana 6: Testes, Refatoração e Apresentação***

Passos iniciais:
1. npm install
2. Configurar arquivo .env com as variáveis: DATABASE_URL e JWT_SECRET (DATABASE_URL vai conter os dados do mongoDB e JWT_SECRET uma chave aleatória de 256bit)
3. npx prisma db push
4. npm start
5. Utilizar o Postman, Insomnia ou Thunder Client para testar as rotas.
  
Passos para teste de rota:
**REGISTRAT**

Passe o nome, o email e a senha

**LOGAR**

Passar o nome que foi registrado e a senha

**CRIAR EMPREGOS**

Colocar em authorization o token gerado do login em bearer token e passar a empresa e o cargo

**MOSTRAT TODOS OS EMPREGOS**

Colocar em authorization o token gerado do login em bearer token usar a mesma rota de criar emprego mas com o método post

**MOSTRAR UM EMPREGO POR ID**

Colocar em authorization o token gerado do login em bearer token usar a mesma rota de criar emprego mas com o método post passando o ID do emprego que deseja ver

**EDITAR UM EMPREGO POR ID**

Colocar em authorization o token gerado do login em bearer token usar a mesma rota de criar emprego mas com o método patch passando o ID do emprego que deseja editar, passe os 
campos que desejar editar, como: empresa, cargo ou status.

**DELETAR EMPRESA POR ID**

Colocar em authorization o token gerado do login em bearer token usar a mesma rota de criar emprego mas com o método delete passando o ID do emprego que deseja deletar