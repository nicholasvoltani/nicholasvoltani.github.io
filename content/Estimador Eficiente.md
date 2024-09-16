---
date: " 2024-09-11"
tags:
  - mathematics
aliases:
  - Minimum Variance Unbiased Estimator
  - MVUE
---

up:: [[Bias-Variance Tradeoff]]

Um estimador é dito ser *eficiente* quando é um [[Estimador Não-Enviesado]] e quando sua variância for *menor do que qualquer outro estimador não enviesado*. 

É neste contexto que ele é chamado de *minimum-variance unbiased estimator*: dentro do universo de estimadores não-enviesados (de alguma dada quantidade), um deles é dito ser *eficiente* quando sua variância é mínima (neste universo de estimadores).

Caso o estimador seja eficiente no sentido acima, e também seja *função linear das observações*, então ele é o [[Melhor Estimador Linear Não-Enviesado]] (ou BLUE: *Best Linear Unbiased Estimator*).

# Definição absoluta de estimador eficiente – Teorema de Cramér-Rao
Note-se que a definição de eficiência é **relativa**: o estimador possui variância menor *dentre os estimadores não-enviesados*. 

Porém, caso a função de distribuição das amostras seja conhecida (e bem-comportada o suficiente), pode-se obter um *lower bound* absoluto através do [[Limite Inferior de Cramér-Rao]]: estimadores não-enviesados que alcancem variância igual a este limite inferior são estimadores (não-enviesados) eficientes.

---
### References
- [Uma nota sobre as propriedades dos estimadores - Paula Pereda, Denisard Alves](https://edisciplinas.usp.br/pluginfile.php/3043641/mod_resource/content/1/PROPRIEDADES%20DOS%20ESTIMADORES.pdf)