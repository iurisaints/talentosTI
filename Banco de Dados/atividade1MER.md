**Trabalho Um!**

Antes de iniciar o desenvolvimento do sistema, é essencial realizar a modelagem do banco de dados para garantir uma estrutura adequada e eficiente. Neste trabalho, o primeiro passo é criar a modelagem Entidade-Relacionamento (ER) na notação de Peter Chen. A partir dessa modelagem, serão definidas as tabelas e seus atributos correspondentes. Vamos detalhar cada etapa do trabalho:

1. **Modelagem Entidade-Relacionamento (ER):**
A modelagem ER é uma técnica visual para representar as entidades e seus relacionamentos no sistema. Estabeleça os relacionamentos entre as entidades, considerando que um medicamento pode ser vendido para vários clientes e um cliente pode realizar várias compras. Além disso, um medicamento pode ter um fornecedor específico e um fornecedor pode fornecer vários medicamentos.

   - Tabela "Medicamento":
     - Atributos: 
       - `id` (INT): chave primária que identifica exclusivamente cada medicamento.
       - `nome` (VARCHAR): nome do medicamento.
       - `fabricante` (VARCHAR): nome do fabricante do medicamento.
       - `preco` (DECIMAL): preço do medicamento.
       - `quantidade` (INT): quantidade disponível em estoque.

   - Tabela "Cliente":
     - Atributos: 
       - `id` (INT): chave primária que identifica exclusivamente cada cliente.
       - `nome` (VARCHAR): nome do cliente.
       - `endereco` (VARCHAR): endereço do cliente.
       - `email` (VARCHAR): endereço de e-mail do cliente.
       - `telefone` (VARCHAR): número de telefone do cliente.

   - Tabela "Fornecedor":
     - Atributos: 
       - `id` (INT): chave primária que identifica exclusivamente cada fornecedor.
       - `nome` (VARCHAR): nome do fornecedor.
       - `endereco` (VARCHAR): endereço do fornecedor.
       - `telefone` (VARCHAR): número de telefone do fornecedor.

   - Tabela "Venda":
     - Atributos: 
       - `id` (INT): chave primária que identifica exclusivamente cada venda.
       - `data` (DATE): data da venda.
       - `id_medicamento` (INT): chave estrangeira referenciando o medicamento vendido.
       - `id_cliente` (INT): chave estrangeira referenciando o cliente que realizou a compra.
