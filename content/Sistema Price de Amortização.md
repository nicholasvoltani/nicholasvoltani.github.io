---
date: " 2024-11-04"
tags:
  - economics
aliases:
---

up:: [[065 MOC Matemática em Economia]]

![[Fluxo_financeiro_PV_pmt_n.gif]]
Fonte: [Matemática financeira – Wikipédia, a enciclopédia livre](https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira#N%C3%BAmero_fixo_de_pagamentos_de_mesmo_valor)

O sistema Price de amortização baseia-se no pagamento através de prestações (parcelas) iguais, e com amortização variável em função da [[Taxa de Juros]]. 

Dado algum valor $C$ que deve ser pago em $n$ períodos, e uma taxa de juros de $i$% por período considerado[^1], então tem-se que, supondo o valor das parcelas $P$ constante, o valor $C$ é igual à soma dos valores presentes das parcelas:
$$
\begin{align}
C &= \sum\limits_{k=1}^{n} \frac{P}{(1+i)^{k}} \\
&= \frac{P}{1+i} \sum\limits_{k=0}^{n-1} (\underbrace{ (1+i)^{-1} }_{ \equiv q })^{k}
\end{align}
$$

Pela fórmula da soma geométrica 
$$
\sum\limits_{k=0}^{n} p^{k} = \frac{1-p^{n+1}}{1-p}
$$
e vendo que $1-q = 1 - \frac{1}{1+i} = \frac{1+i}{i}$, tem-se
$$
C = \frac{P}{i} (1-q^{n})
$$

Ou seja, o valor das prestações é
$$
P = \frac{iC}{1-\frac{1}{(1+i)^{n}}} = \frac{i (1+i)^{n}}{(1+i)^{n}-1} C
$$

Este valor contabiliza os juros (compostos) a serem pagos a cada período, mais as *amortizações*, que são o restante do pagamento para quitação da dívida $C$. 

# Exemplo
Um pagamento de R\$ 60.000 deve ser feito em 12 parcelas, a uma taxa de $10.75$% a.a.[^2]. A tabela Price de amortização fica da seguinte forma[^3]:

| Tabela PRICE    |                  |                 |                  |               |
| --------------- | ---------------- | --------------- | ---------------- | ------------- |
| Parcela         | Valor da Parcela | Juros           | Amortização      | Saldo Devedor |
| 1               | R$ 5.282,05      | R$ 512,70       | R$ 4.769,34      | R$ 55.230,66  |
| 2               | R$ 5.282,05      | R$ 471,95       | R$ 4.810,10      | R$ 50.420,56  |
| 3               | R$ 5.282,05      | R$ 430,85       | R$ 4.851,20      | R$ 45.569,36  |
| 4               | R$ 5.282,05      | R$ 389,39       | R$ 4.892,65      | R$ 40.676,71  |
| 5               | R$ 5.282,05      | R$ 347,59       | R$ 4.934,46      | R$ 35.742,25  |
| 6               | R$ 5.282,05      | R$ 305,42       | R$ 4.976,63      | R$ 30.765,62  |
| 7               | R$ 5.282,05      | R$ 262,89       | R$ 5.019,15      | R$ 25.746,47  |
| 8               | R$ 5.282,05      | R$ 220,01       | R$ 5.062,04      | R$ 20.684,43  |
| 9               | R$ 5.282,05      | R$ 176,75       | R$ 5.105,30      | R$ 15.579,13  |
| 10              | R$ 5.282,05      | R$ 133,12       | R$ 5.148,92      | R$ 10.430,21  |
| 11              | R$ 5.282,05      | R$ 89,13        | R$ 5.192,92      | R$ 5.237,29   |
| 12              | R$ 5.282,05      | R$ 44,75        | R$ 5.237,29      | R$ 0,00       |
| **Total Pago:** | **R$ 63.384,55** | **R$ 3.384,55** | **R$ 60.000,00** | ---           |

Note que o valor das parcelas é sempre igual, e o que varia são os valores de juros pagos – pois eles incidem sobre valores decrescentes–, e a amortização vai aumentando – para que o valor das parcelas se mantenha constante, ante aos juros decrescentes.

---
### References
- [Matemática financeira – Wikipédia, a enciclopédia livre](https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira#N%C3%BAmero_fixo_de_pagamentos_de_mesmo_valor)
- [Sistema Price de Amortização - Tabela Price - YouTube](https://www.youtube.com/watch?v=omg5Le37Bqg)

[^1]: Caso não o seja, p. ex. taxa de juros ao ano e prestações mensais, deve-se fazer a taxa efetiva mensal para o cálculo.
[^2]: Taxa SELIC a 04/11/2024.
[^3]: Vide [Calculadora Tabela Price e SAC](http://tabelaprice.com.br/).