---
date: "2025-09-11"
tags:
  - daily
draft: "false"
aliases:
---

up:: [[061c1 MOC Sistema Financeiro Nacional]]

# Sobre moeda
[[Moeda]]: Ativo que pode ser utilizado de forma imediata para fazer transações — ou seja, [[Preferência por Liquidez|perfeitamente líquido]]. 

Suas funções são:
1) **Reserva de valor**: transfere poder de compra presente para o futuro (imperfeitamente, devido à [[Inflação]])
	- A demanda por moeda por motivo de reserva de valor é o **motivo precaução**
2) **Unidade de conta**: mensura preços das [[Mercadoria|Mercadorias]]. I.e. é o **padrão de valor**.
3) **Meio de troca**: intermedeia trocas (oposto ao escambo)
	- A demanda por moeda pela função de meio de troca é o **motivo transação**

Seus atributos são:
- Baixo custo de **estocagem**
- Baixo custo de **transação**
- Difícil de **falsificar**
- Alta **durabilidade**
- **Divisibilidade**
- **Transportável** & Manuseável
- **Homogeneidade**

# Tipos de moeda
[[Dinheiro|Moeda-Mercadoria]]: é um [[Valor de Uso]], além de ser moeda (i.e. [[Valor]]).

[[Padrão-Ouro]]: moeda pode ser trocada por ouro *a taxa fixa*. Tal moeda equivale a um certificado, possui um *lastro* (justamente, em ouro). (I.e. moeda *conversível*).

[[Moeda Fiduciária]]: papel-moeda que *não possui lastro*. 

[[Moeda Escritural]]: é o saldo em conta corrente. Não possui forma física, é emitida por [[Banco Comercial|Bancos Comerciais]].

# Oferta por moeda
Monopólio de emissão é do [[Banco Central do Brasil (1964)|Banco Central do Brasil]].

De todo o papel-moeda emitido:
- Parte fica no caixa do Banco Central (em teoria)
- A maior parte é [[Papel-Moeda em Circulação]]

De todo o papel-moeda em circulação:
- Parte fica nos caixas dos [[Banco Comercial|Bancos Comerciais]]
- Parte fica como [[Papel Moeda em Poder do Público]]

# Agregados monetários
- [[Meios de Pagamento|M1]]:  Trata-se de [[Papel Moeda em Poder do Público]] + [[Depósito à Vista|Depósitos à Vista]]
- [[M2]]
- [[M3]]
- [[M4]]

Ou seja, embora somente o Banco Central possa emitir papel-moeda, bancos comerciais — através de depósitos à vista de seus clientes — são capazes de criar M1.

# Criação/destruição de moeda
Bancos comerciais conseguem criar moeda — M1 — através da troca de **haveres monetários** com o setor não-bancário, em troca de **haveres não-monetários**. 

Exemplo: o banco concede um empréstimo a algum cliente — i.e. **lhe dá um depósito à vista** —, e, em troca, este cliente recebe uma **obrigação** de pagamento com o tempo. Ou seja, haver**á** criação de moeda.

Ocorre destrução de moeda quando o setor não-bancário fornece haveres monetários ao setor bancário, e vice-versa. 

Exemplo: um pagamento ao banco (depósito à vista) em troca de *poupança* (quase-moeda, haver não-monetário, obrigação do banco). 

# Base Monetária
A [[Base Monetária]]  é o componente monetário sob maior controle do Banco Central. Consiste em
$$
BM = PMC + RV + RC
$$

- $PMC$: papel-moeda em circulação
- $RV$: reservas voluntárias (de bancos comerciais)
- $RC$: [[Reservas Compulsórias]]

Desdobrando a definição de papel-moeda em circulação — o papel-moeda emitido pelo Banco Central, subtraído do que ele próprio mantém em seu caixa — se desdobra em $PMPP$ e $CxCom$ (caixa dos bancos comerciais). 

Definindo $\text{EncaixesBancários}$ (encaixes bancários) como o caixa + reservas bancárias (compulsórias + voluntárias), temos que
$$
BM = PMPP + \text{EncaixesBancários}
$$

# [[Política Monetária|Políticas Monetárias]]
## 1) [[Operações de Redesconto]]
Linha de crédito que o banco central fornece aos bancos comerciais, cuja taxa é a *taxa de redesconto*. 

## 2) [[Reservas Compulsórias]]
Percentual de depósitos à vista dos bancos comerciais que são compulsoriamente retidos no Banco Central.

## 3) [[Operações de Open Market]]
Compra e venda de títulos públicos por parte do Banco Central.

# Selic
Sistema Especial de Liquidação e Custódia (sob BCB): custodia (guarda) e registra operações com *títulos públicos federais*.

**Operações compromissadas**: compra com compromisso de revenda, ou venda com compromisso de recompra. Os juros que advêm dessas operações geram a **taxa Selic**.

**Taxa Selic (Selic Over)**: taxa diária de operações compromissadas *de um dia útil* (i.e. [[Overnight]]). A taxa Selic (a "taxa básica de juros") é esta taxa *anualizada*. 

# Depósitos remunerados no BCB
[[Depósitos Especiais Remunerados]]: remuneração em juros de depósitos voluntários (de bancos comerciais) no Banco Central. São úteis, pois, ao contrário de operações de open market, *não fazem a dívida pública oscilar*.[^1]

Foi permitido pela [Lei 14.185/2021](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14185.htm). 

# [[Regime de Metas de Inflação (1999)]]
Substitui o regime prévio de *âncora cambial* (vinculação Real-Dólar). Meta em [[Índice Nacional de Preços ao Consumidor Amplo]].

# Políticas Monetárias Não-Convencionais
Quando as políticas monetárias usuais, baseadas em políticas de juros, são ineficientes, faz-se necessário a implementação de políticas não-convencionais, que abordem a *liquidez*.

Dividem-se em:
- Políticas de balanço:
	- Políticas de crédito: concessão direta de crédito — liquidez, especialmente a curto prazo — pelo Banco Central aos bancos comerciais
	- Políticas de "quase-débito" (*quasi-debt*):
		- [[Quantitative Easing]]: compra (ou venda) **definitiva** de títulos públicos
		- Flexibilização de metas: redução de maturidade de títulos públicos detidos por bancos comerciais
	- Política cambial
	- Políticas de reservas
- Políticas de sinalização: estabelecimento de *expectativas* pelo Bacen, sinalizando ações futuras que o Bacen se compromete a fazer (também entrando nas políticas de balanço)


### Referências
- SARAIVA, Paulo José; PAULA, Luiz Fernando de; MODENESI, André de Melo. Crise financeira americana e as políticas monetárias não-convencionais. **Economia e Sociedade**, v. 26, n. 1, p. 1-44, 2017. Disponível em: [https://www.scielo.br/j/ecos/a/KYSS6Gt8HmkFnKd9MLrGK3c/?format=html&lang=pt](https://www.scielo.br/j/ecos/a/KYSS6Gt8HmkFnKd9MLrGK3c/?format=html&lang=pt).

[^1]: P. ex.: política contracionista consiste em comprar títulos do público, o que consiste em *contrair maior dívida pública* (a anterior, mais os novos títulos).