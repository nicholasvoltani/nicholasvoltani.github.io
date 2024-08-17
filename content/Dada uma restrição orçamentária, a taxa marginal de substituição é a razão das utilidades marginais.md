---
date: " 2024-08-17"
tags:
  - economics
aliases:
---

up:: [[Taxa Marginal de Substituição]]

Dada uma [[Cesta de Bens]] e [[Função Utilidade]] $U(x_{1},x_{2})$, temos que a variação de utilidade $dU$, **ao longo de alguma [[Restrição Orçamentária]]**, tem a forma

$$
dU = \frac{ \partial U }{ \partial x_{1} } dx_{1} + \frac{ \partial U }{ \partial x_{2} } dx_{2} = 0
$$

Disso sai que[^1]
$$
\frac{dx_{2}}{dx_{1}} = -\frac{\frac{ \partial U }{ \partial x_{1} }}{\frac{ \partial U }{ \partial x_{2} }} \bigg|_{U =  \bar{U}}
$$

$\frac{dx_{2}}{dx_{1}}$ é o [[Custo de Oportunidade]] do bem $2$ com relação ao bem $1$, igual a $-\frac{p_{1}}{p_{2}}$[^2]. Portanto, temos que uma escolha ótima do consumidor ocorre quando
$$
\frac{\frac{ \partial U }{ \partial x_{1} }}{\frac{ \partial U }{ \partial x_{2} }} \bigg|_{U =  \bar{U}} = \frac{p_{1}}{p_{2}}
$$

É crucial notar, aqui, que estamos fazendo essa derivação **para alguma utilidade $\bar{U}$ específica**! 

Uma outra forma de ver essa relação é
$$
\frac{U_{x_{1}}}{p_{1}} = \frac{U_{x_{2}}}{p_{2}}
$$
Ou seja, é literalmente uma relação *bang for your buck*: o tanto que se ganha em [[Utilidade Marginal]] pelo preço do bem $1$ tem de ser o tanto que se ganha em utilidade pelo preço do bem $2$, de tal forma que se está indiferente entre ambos neste ponto ótimo.

Note também que, como estamos considerando [[Preferências bem-comportadas]] – e, em particular, que [[Preferências bem-comportadas são monotônicas]] –, temos que as utilidades $\frac{ \partial U }{ \partial x_{i} } > 0$, pois "mais é melhor". Portanto, temos, de fato, que $\frac{dx_{2}}{dx_{1}} < 0$.

# Analogia com Função Produção
A relação análoga ao problema do produtor é que [[Dada uma função custo, a taxa marginal de substituição técnica é a razão dos produtos marginais]].

---
### References
- [Lec 9 | MIT 14.01SC Principles of Microeconomics (Jon Gruber, 2010)](https://www.youtube.com/watch?v=Q4iKuKAjzK0&list=PL61533C166E8B0028&index=10)

[^1]: Caso tenha ojeriza a dividir infinitesimais, note que estamos usando a função implícita $x_2 = x_2(x_1)$. A mesma derivação segue ao abrir $\frac{ \partial U }{ \partial x_{1} }$.
[^2]: Pela restrição orçamentária $m = p_1 x_1 + p_2 x_2$.