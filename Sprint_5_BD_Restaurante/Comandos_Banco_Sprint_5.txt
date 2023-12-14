------------------------------------------------------------------------------------------------------------
-------------------------------------SPRINT 5---------------------------------------------------------------
------------------------------------------------------------------------------------------------------------

--Desenvolvimento:

--Modelar o DER de uma parte do sistema com 4 entidades no mínimo.

--Criar as Tabelas na 3FN em um banco de dados com informaçõesde teste.

--Realizar consultas simples, se possível, juntando tabelas.

------------------------------------------------------------------------------------------------------------
-------------------------------------CRIAÇÃO E USO DO BANCO-------------------------------------------------
------------------------------------------------------------------------------------------------------------

-- Criação do Banco de Dados
CREATE DATABASE Restaurante_Cantinho_Nordestino;

-- Seleção do Banco de Dados
USE Restaurante_Cantinho_Nordestino;


------------------------------------------------------------------------------------------------------------
-------------------------------------CRIAÇÃO DAS TABELAS----------------------------------------------------
------------------------------------------------------------------------------------------------------------

-- Criação da Tabela Cargo
CREATE TABLE Cargo (
    Cd_Cargo    INT           AUTO_INCREMENT PRIMARY KEY,
    Descricao   VARCHAR(30)   NOT NULL
);


-- Criação da Tabela Funcionario
CREATE TABLE Funcionario (
    Matricula     INT           AUTO_INCREMENT PRIMARY KEY,
    Cd_Cargo      INT           NOT NULL,
    Nome          VARCHAR(80)   NOT NULL,
    FOREIGN KEY (Cd_Cargo) REFERENCES Cargo(Cd_Cargo)
);


-- Criação da Tabela Endereco
CREATE TABLE Endereco (
    Matricula     INT           PRIMARY KEY,
    Logradouro    VARCHAR(100)  NOT NULL,
    Numero        VARCHAR(10)   NOT NULL,
    Complemento   VARCHAR(100),
    CEP           CHAR(9)       NOT NULL,
    Bairro        VARCHAR(30)   NOT NULL,
    Cidade        VARCHAR(30)   NOT NULL,
    Estado        CHAR(2)       NOT NULL,
    FOREIGN KEY (Matricula) REFERENCES Funcionario(Matricula)
);

-- Criação da Tabela Contato
CREATE TABLE Contato (
    Matricula     INT           PRIMARY KEY,
    Telefone      VARCHAR(18)   NOT NULL,
    Email         VARCHAR(80)   NOT NULL UNIQUE,
    FOREIGN KEY (Matricula) REFERENCES Funcionario(Matricula)
);




-- Criação da Tabela Conta
CREATE TABLE Conta (
    Nr_Conta         INT           AUTO_INCREMENT PRIMARY KEY,
    Matricula        INT           NOT NULL,
    Hora_Abertura    TIME          NOT NULL,
    Data_Abertura    DATE          NOT NULL,
    Hora_Fechamento  TIME,
    Data_Fechamento  DATE,
    FOREIGN KEY (Matricula) REFERENCES Funcionario(Matricula)
);

-- Criação da Tabela Pagamento
CREATE TABLE Pagamento (
    Nr_Pagamento     INT           AUTO_INCREMENT PRIMARY KEY,
    Nr_Conta         INT           NOT NULL,
    Valor            DECIMAL(8,2)  NOT NULL,
    Data             DATE          NOT NULL,
    Hora             TIME          NOT NULL,
    FOREIGN KEY (Nr_Conta) REFERENCES Conta(Nr_Conta)
);

-- Criação da Tabela Cartao
CREATE TABLE Cartao (
	Id_Cartao		 INT 		   AUTO_INCREMENT PRIMARY KEY,
    Nr_Cartao        CHAR(16)      NOT NULL,
    Nr_Pagamento     INT           NOT NULL,
    Nome             VARCHAR(50)   NOT NULL,
    Validade		 CHAR(5)	   NOT NULL,
    Bandeira         VARCHAR(20)   NOT NULL,
    FOREIGN KEY (Nr_Pagamento) REFERENCES Pagamento(Nr_Pagamento)
);

-- Criação da Tabela Dinheiro
CREATE TABLE Dinheiro (
	Id_Dinheiro      INT 		   AUTO_INCREMENT PRIMARY KEY,
    Nr_Pagamento     INT           NOT NULL,
    FOREIGN KEY (Nr_Pagamento) REFERENCES Pagamento(Nr_Pagamento)
);

-- Criação da Tabela PIX
CREATE TABLE PIX (
	Id_PIX           INT 		   AUTO_INCREMENT PRIMARY KEY,
    Nr_Pagamento     INT           NOT NULL,
    Chave_PIX        VARCHAR(50)   NOT NULL,
    FOREIGN KEY (Nr_Pagamento) REFERENCES Pagamento(Nr_Pagamento)
);


-- Criação da Tabela Cheque
CREATE TABLE Cheque (
	Id_Cheque       INT 		   AUTO_INCREMENT PRIMARY KEY,
    Nr_Cheque       INT            NOT NULL,
    Nr_Pagamento    INT            NOT NULL,
    Banco           VARCHAR(20)    NOT NULL,
    Agencia         CHAR(6)        NOT NULL,
    Data            DATE           NOT NULL,
    FOREIGN KEY (Nr_Pagamento) REFERENCES Pagamento(Nr_Pagamento)
);




------------------------------------------------------------------------------------------------------------
-------------------------------------INSERÇÃO DE DADOS------------------------------------------------------
------------------------------------------------------------------------------------------------------------

-- INSERT INTO Cargo
INSERT INTO Cargo (Descricao)
VALUES
    ('Gerente'),
    ('Garçom'),
    ('Cozinheiro'),
    ('Faxineiro'),
    ('Auxiliar de Cozinha'),
    ('Bartender');
    
-- Inserção na Tabela Funcionario
INSERT INTO Funcionario (Matricula, Cd_Cargo, Nome)
VALUES
    (1, 2, 'João Alfredo Neto'),
    (2, 1, 'Maria Francisca Silvana'),
    (3, 4, 'Júlia Ferreira de Barros'),
    (4, 4, 'Maria de Fatima Bernadetes'),
    (5, 5, 'Zeferino Barbosa de Souza'),
    (6, 2, 'Frederico José da Silva'),
    (7, 3, 'João da Silva Neves'),
    (8, 3, 'Allana Martins Silva'),
    (9, 6, 'Rodrigo Lisboa Melo'),
    (10, 5, 'Júlia Mariana Lisboa'),
    (11, 2, 'Jorge Henrique Lopes'),
    (12, 6, 'Mariana Lima Mariano');    

-- Inserção na Tabela Endereco
INSERT INTO Endereco (Matricula, Logradouro, Numero, Complemento, CEP, Bairro, Cidade, Estado)
VALUES
    (1, 'Rua Joaquim Capixaba', '177', NULL, '55800-000', 'Cascata', 'Recife', 'PE'),
    (2, 'Rua Tabelião Francisco Peixoto', '102', 'Casa', '55800-000', 'COHAB', 'Recife', 'PE'),
    (3, 'Rua Rosa e Silva', '69', 'Casa', '54700-321', 'Boa Vista', 'Recife', 'PE'),
    (4, 'Rua Palha Queimada', '67', NULL, '51158-821', 'Abreu e Lima', 'Paulista', 'PE'),
    (5, 'Rua Serra Talhada', '104', 'Quadra 73 - Bloco 04', '52678-510', 'Arthur Lundgren II', 'Paulista', 'PE'),
    (6, 'Rua João de Barro', '130', 'Casa', '54759-195', 'Brasilandia', 'Recife', 'PE'),
    (7, 'Rua Antonio da Silva', '158', 'Apartamento', '54759-165', 'Brasilandia', 'Recife', 'PE'),
    (8, 'Rua Bezerros', '75', NULL, '54735-570', 'Centro', 'São Lourenço da Mata', 'PE'),
    (9, 'Rua Rogério Guedes', '98', 'Apartamento', '56898-000', 'Liberdade', 'Recife', 'PE'),
    (10, 'Rua Palha Queimada', '72', NULL, '54800-000', 'Matadouro', 'Moreno', 'PE'),
    (11, 'Rua Salvador Dali', '115A', 'Casa', '54753-590', 'Santo Amaro', 'Recife', 'PE'),
    (12, 'Rua Silvano Ciprano', '15B', 'Casa', '57800-00', 'Nacional', 'São Lourenço da Mata', 'PE');

-- Inserção na Tabela Contato
INSERT INTO Contato (Matricula, Telefone, Email)
VALUES
    (1, '(81)99345-2577', 'joaoalfredo177@gmail.com'),
    (2, '(81)98467-2813', 'mariafrancisca102@gmail.com'),
    (3, '(81)98612-6378', 'juliaferreira35@outlook.com'),
    (4, '(81)93437-6577', 'mfb.oficial@gmail.com'),
    (5, '(81)99877-6542', 'severinoDelas101@gmail.com'),
    (6, '(81)99741-8972', 'frederico@gmail.com'),
    (7, '(81)99741-8973', 'joaodasilva123@gmail.com'),
    (8, '(81)99468-1221', 'allanasilva@hotmail.com'),
    (9, '(81)98642-9982', 'rodrigomelzinho@outlook.com'),
    (10, '(81)99766-3242', 'juliamarianalinda12@gmail.com'),
    (11, '(81)98782-1880', 'jorginhoda12@gmail.com'),
    (12, '(81)97654-2341', 'marianalima1212@gmail.com');





-- INSERT INTO Conta
INSERT INTO Conta (Matricula, Hora_Abertura, Data_Abertura, Hora_Fechamento, Data_Fechamento)
VALUES
    (1, '16:26:30', '2020-05-16', '17:50:27', '2020-05-16'),
    (2, '12:32:11', '2020-03-14', '15:46:10', '2020-03-14'),
    (5, '10:30:00', '2020-06-20', '17:00:00', '2020-06-20'),
    (12, '23:05:11', '2020-06-19', NULL, NULL),
    (8, '12:20:56', '2020-01-11', '16:50:21', '2020-01-11'),
    (10, '20:05:11', '2020-06-20', NULL, NULL),
    (10, '21:10:55', '2020-02-27', NULL, NULL);
    (3, '14:45:22', '2020-07-08', '18:30:15', '2020-07-08'),
    (4, '09:15:30', '2021-01-25', '14:20:18', '2021-01-25'),
    (7, '17:40:48', '2021-08-12', '22:05:35', '2021-08-12'),
    (9, '11:55:10', '2022-03-30', NULL, NULL),
    (11, '19:20:40', '2022-10-15', NULL, NULL),
    (6, '22:30:18', '2023-05-22', NULL, NULL),
    (1, '08:10:05', '2023-11-08', '14:45:30', '2023-11-08');



-- INSERT INTO Pagamento
INSERT INTO Pagamento (Nr_Conta, Valor, Data, Hora)
VALUES
    (1, 94.00, '2020-05-16', '17:50:33'),
    (2, 43.00, '2020-03-14', '15:46:15'),
    (6, 32.00, '2020-06-20', '17:00:03'),
    (5, 32.00, '2020-11-01', '16:50:25');
    (3, 75.50, '2020-09-10', '12:30:45'),
    (4, 50.00, '2021-02-28', '18:15:22'),
    (7, 120.75, '2021-07-05', '14:40:18'),
    (8, 90.25, '2022-01-15', '16:55:30');
    (9, 110.00, '2022-05-20', '10:30:15'),
    (10, 65.75, '2022-09-08', '14:20:55'),
    (11, 42.30, '2022-11-30', '19:45:10'),
    (12, 88.50, '2023-04-12', '11:10:22');

    
-- INSERT INTO Dinheiro
INSERT INTO Dinheiro (Nr_Pagamento)
VALUES
    (1),
    (2),
    (3);

-- INSERT INTO PIX
INSERT INTO PIX (Nr_Pagamento, Chave_PIX)
VALUES
    (4, '12345678909'),
    (2, '12345678000101'),
    (1, '5511987654321');


-- INSERT INTO Cheque
INSERT INTO Cheque (Nr_Cheque, Nr_Pagamento, Banco, Agencia, Data)
VALUES
    (12345, 2, 'Banco A', '123456', '2022-01-15'),
    (54321, 1, 'Banco B', '654321', '2022-02-20'),
    (98765, 2, 'Banco C', '987654', '2022-03-25');


-- INSERT INTO Cartao
INSERT INTO Cartao (Nr_Cartao, Nr_Pagamento, Nome, Validade, Bandeira)
VALUES
    ('1122334455667788', 1, 'ARLINDO J CORREIOS', '03/25', 'MasterCard'),
    ('9988776611223344', 3, 'JOSE ROMARIO SILVA', '05/24', 'Hipercard'),
    ('4455667788990011', 2, 'ANA MARIA SOUZA', '11/23', 'Visa'),
    ('2233445566778899', 4, 'CARLOS ALBERTO', '08/22', 'American Express');
    
------------------------------------------------------------------------------------------------------------
-------------------------------------VERIFICAÇÃO DADOS CADA TABELA------------------------------------------------------
------------------------------------------------------------------------------------------------------------

-- Verificação
SELECT * FROM cargo;
select * from funcionario;          
select * from endereco;
select * from contato;
select * from conta;                
select * from pagamento;
select * from cartao;
select * from dinheiro;
select * from pix;
select * from cheque;

------------------------------------------------------------------------------------------------------------
-------------------------------------CONSULTAS--------------------------------------------------------------
------------------------------------------------------------------------------------------------------------

-- Consulta para listar todos os funcionários (em ordem alfabética) com suas matrículas e seus respectivos cargos 
           

SELECT Funcionario.Matricula AS 'Matrícula', Funcionario.Nome, Cargo.Descricao AS 'Cargo' FROM Funcionario
INNER JOIN Cargo ON Funcionario.Cd_Cargo = Cargo.Cd_Cargo
ORDER BY Funcionario.Nome ASC;         


------------------------------------------------------------------------------------------------------------

-- Consulta para listar as contas que foram pagas pelo cartão com seus respectivos números da conta, 
-- data de fechamento, hora de fechamento, --o número do pagamento e o titular do cartão 


SELECT Conta.Nr_Conta AS 'Número da Conta', Conta.Data_Fechamento AS 'Data de Fechamento', Conta.Hora_Fechamento AS 'Hora de Fechamento', Pagamento.Nr_Pagamento AS 'Número do Pagamento', 
Cartao.Nome AS 'Titular do Cartão'
FROM Conta
INNER JOIN Pagamento ON Conta.Nr_Conta = Pagamento.Nr_Conta
INNER JOIN Cartao ON Cartao.Nr_Pagamento = Pagamento.Nr_Pagamento;



                 
                 


