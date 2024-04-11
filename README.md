# Todo List App

Este é um aplicativo Full Stack de Todo List com funcionalidades de autenticação de usuários por sessão, desenvolvido com Django Rest Framework para o backend e Next.js para o frontend.

## Funcionalidades

- **Autenticação de Usuário**: Os usuários podem se registrar e fazer login para acessar o aplicativo.
- **Gerenciamento de Tarefas**: Os usuários autenticados podem criar, visualizar, editar e excluir suas próprias tarefas.
- **Administração de Tarefas**: O administrador tem permissão para acessar e editar todas as tarefas dos usuários.
- **Quadro de Tarefas**: As tarefas são exibidas em um quadro com colunas "Todo", "In Progress" e "Done", permitindo que os usuários movam as tarefas entre as colunas arrastando e soltando.
- **Formulário de Criação de Tarefas**: Há uma aba no aplicativo que abre um formulário para os usuários criarem novas tarefas.
- **Exclusão de Tarefas**: Os usuários podem excluir tarefas que não desejam mais manter no quadro.
- **Criação de Usuários**: Além da autenticação de usuários, há a funcionalidade de criar usuários para aqueles que não estão registrados.

## Tecnologias Utilizadas

- **Frontend**:
  - Framework de UI: Next.js
  - Biblioteca de gerenciamento de estado: React.js
  - Biblioteca de arrastar e soltar: React Beautiful Dnd
  - Autenticação de usuário: Sessão do navegador (por exemplo, usando cookies)
  - Estilização: CSS Modules ou styled-components

- **Backend**:
  - Framework Web: Django Rest Framework
  - Banco de Dados: PostgreSQL ou MySQL
  - Autenticação de usuário: Sessão do navegador
  - ORM: Django ORM

## Como Executar o Aplicativo

1. Clone o repositório do projeto:


2. Navegue para o diretório do frontend e instale as dependências:


3. Navegue para o diretório do backend e instale as dependências:


4. Configure o banco de dados no arquivo de configuração do Django (`settings.py`).

5. Execute as migrações do banco de dados:


6. Inicie o servidor backend:


7. Inicie o servidor frontend:


8. Abra o navegador e acesse o aplicativo em `http://localhost:3000`.

![image](https://github.com/caiovalle2/todo-list-fullstack/assets/80835499/7c97dfa0-7e30-4725-acfb-16812157621b)

![image](https://github.com/caiovalle2/todo-list-fullstack/assets/80835499/cb8a9ffd-b9d6-48c2-bc79-e127cbf5a797)

![image](https://github.com/caiovalle2/todo-list-fullstack/assets/80835499/fbb653e7-d89a-4f60-9460-f7c1862a5629)

![image](https://github.com/caiovalle2/todo-list-fullstack/assets/80835499/721d7839-43d7-4a12-9d9a-c110bc548cde)

## Observações

- Certifique-se de ter o Node.js, npm e Python instalados em sua máquina.
- Este é um exemplo básico de como um aplicativo Todo List Full Stack pode ser implementado usando Django Rest Framework e Next.js. Você pode personalizar e expandir essas funcionalidades de acordo com suas necessidades específicas.
- Certifique-se de configurar adequadamente a autenticação de usuário por sessão no Django Rest Framework. Isso pode envolver o uso de bibliotecas como `django-rest-auth` ou implementar sua própria lógica de autenticação personalizada.
