---
date: "2025-04-18"
tags:
  - economics
aliases:
---

up:: [[Bens de Giffen]]

Supondo uma [[Demanda Marshalliana]] $x(p, w)$[^1], temos que sua [[Matriz de Slutsky]] tem a forma
$$
S_{lk} = \frac{ \partial x_{l} }{ \partial p_{k} } + \frac{ \partial x_{l} }{ \partial w } x_{l}
$$
Como [[A Matriz de Slutsky é semi-definida negativa]], temos que seus elementos diagonais são não-positivos. Portanto, para um bem $l$ que seja um bem de Giffen, teremos
$$
0 \geq S_{ll} = \underbrace{ \frac{ \partial x_{l} }{ \partial p_{l} } }_{ \geq 0 } + \frac{ \partial x_{l} }{ \partial w } x_{l}
$$
Portanto, precisamos ter que $\frac{ \partial x_{l} }{ \partial w } \leq 0$, negativo o suficiente para que sobrepuje o [[Efeito Preço]]. Logo, $x_{l}$ é um [[Bens Inferiores|Bem Inferior]]. 

---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - YouTube](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=10)
- 

[^1]: Lembrando que $x \in \mathbb{R}^L$ e $p \in \mathbb{R}^L$.
[^2]: Ou seja, elasticidade cruzada $=0$, ao menos para esta cesta específica $x(p,w)$. Não me parece uma hipótese realista, honestamente, mas é a única forma que eu vejo de demonstrar esse "fato trivial" de que Giffen $\implies$ Inferior.