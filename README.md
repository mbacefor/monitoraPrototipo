# Monitora – Visão do Sistema

## Histórico de versões

| **Data** | **Versão** | **Descrição**                      | **Autor**      | **Revisor** | **Aprovado por** |
| -------------- | ----------------- | ------------------------------------------ | -------------------- | ----------------- | ---------------------- |
| 19/08/2023     | 1.0               | Elaboração da versão iniclal do projeto | Prof Marcelo Bezerra |                   |                        |
|                |                   |                                            |                      |                   |                        |
|                |                   |                                            |                      |                   |                        |
|                |                   |                                            |                      |                   |                        |
|                |                   |                                            |                      |                   |                        |

## **1. Objetivo**

O propósito deste documento é definir as necessidades de alto-nível e características do sistema **Monitora**.

## **2. Descrição do Sistema**

Com a evolução dos sistemas de informação e das aplicação de automação residencial, faz-se necessário o controle dos recursos existentes em uma casa, como por exemplo: consumo de água, consumo de energia, consumo do gás de cozinha, consumo do garrafão de água, etc.

Nesse contexto, esse sistema se propõe em desenvolver uma aplicação Web para o controle do consumo de água mineral (garrafão de 20 litros ) e gás (botijão de 13 kg), com base na montoração do peso dos vazilhames.

O sistema contém as seguintes funcionalidades:

- cadastro dos garrafões de água;
- cadastro dos botijões gás;
- monitoramento dos consumos;
- alertas referente ao fim do produto;

## **3. Partes Interessadas**

### **3.1. Professor Disciplina de estágio**

| **Descrição**          | **Responsável pelo sistema na RFB.**                       |
| ------------------------------ | ----------------------------------------------------------------- |
| Papel                          | Definir os requisitos do sistema e avaliar o resultado do projeto |
| Insumos ao projeto de software | - Requisitos                                                      |
| Representante                  | **Marcelo Bezerra de Alcântara**                           |

## **4. PERSONAS**

### 4.1 Usuário

| **Descrição** | Pessoa que utilizao sistema para monitorar o uso                            |
| --------------------- | :-------------------------------------------------------------------------- |
| Papel                 | Utilizar o sistema                                                          |
| Insumos ao sistema    | Cadastro dos itens a serem monitoras<br />Cadastro dos critérios de alerta |
| Representante         | **Marcelo Bezerra de Alcântara**                                     |

### 4.2 Balança bluetooth

| **Descrição** | Balança digital com acesso bluetooth  |
| --------------------- | :-------------------------------------- |
| Papel                 | Obter o peso do items                   |
| Insumos ao sistema    | Peso do item que esta sendo pesado      |
| Representante         | **Marcelo Bezerra de Alcântara** |

## **5. Necessidades e Funcionalidades**

* #N001. Cadastrar gelagua
  * #N001-F001. Inserir novo gelagua
  * #N001-F002. Listar gelaguas cadastrados
  * #N001-F003. Visualizar e Editar gelaguas cadastrados
  * #N001-F004. Excluir gelaguas cadastrados
* #N002. Cadastrar botijão de gás
  * #N002-F001. Inserir novo botijão de gás
  * #N002-F002. Listar botijão de gás
  * #N002-F003. Visualizar e Editar botijão de gás
  * #N002-F004. Excluir botijão de gás

## **6. Arquitetura**

![Diagrama sem nome drawio](https://github.com/mbacefor/monitora/assets/18383116/c48e6d50-602d-4dae-bde0-369c3d4f37c4)

## 7. Configuração Ambiente

### 7.1 Ambiente de desenvolvimento

* Visual Code
  * Extensões:
    * Office Viewer (Markdown Editor)
