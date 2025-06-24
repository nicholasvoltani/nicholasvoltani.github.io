---
date: " 2025-06-23"
tags:
  - economics
aliases:
  - Loteria
  - Loterias
  - Loteria Composta
  - Loterias Compostas
---

up:: [[062c MOC Loterias]]

Uma loteria (em Microeconomia) é um vetor de probabilidades — i.e. um vetor em um $(n-1)$-*simplexo* — $(p_{1}, \dots, p_{n})$, onde $p_{k}$ é a probabilidade de que algum evento $k$ ocorra.

É possível também fazer uma *loteria composta* (uma loteria de loterias): ela é um "vetor de vetores"
$$
L = (L_{1}, \dots, L_{n}; \alpha_{1}, \dots, \alpha_{n})
$$
onde $\alpha_{k}$ é a probabilidade de que a *loteria* $L_{k}$ ($p^{(1)}_{k}, \dots, p^{(n)}_{k}$) ocorra.

Como a combinação convexa associada a uma loteria composta, $\sum \alpha_{k} L_{k}$, também está no simplexo, podemos escrevê-la como alguma loteria *per se*: sua *loteria reduzida*. Ou seja, uma loteria reduzida $(\tilde{L}, \tilde{p}_{1}, \dots, \tilde{p}_{n})$é simplesmente abrir as respectivas $L_{k}$ em suas componentes: 
$$
\tilde{p}_{k} = \sum \limits_{l} \alpha_{l} \,p^{(l)}_{k}
$$

Vetorialmente:
$$
\tilde{p} = \alpha_{1} 
\begin{pmatrix}
p_{1}^{(1)} \\
p_{1}^{(2)} \\
\vdots \\
p_{1}^{(n)}
\end{pmatrix}
+ \dots + 
\alpha_{k} 
\begin{pmatrix}
p_{k}^{(1)}  \\
p_{k}^{2} \\
\vdots \\
p_{k}^{(n)}
\end{pmatrix}
$$
Lembrando que, como estamos em um $(n-1)$-simplexo ($n$ resultados possíveis), esta loteria reduzida possui $n$ probabilidades — mesmo que ela seja uma combinação convexa de $k \neq n$ loterias![^1] 

---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: Inclusive, toda loteria composta é resultado de infinitas possíveis combinações convexas!