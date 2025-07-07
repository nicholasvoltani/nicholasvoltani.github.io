---
date: " 2025-06-23"
tags:
  - economics
aliases:
  - Avesso ao Risco
---

up:: [[062d MOC Loterias]]

![[Pasted image 20250623171154.png|500]]
Fonte: MAS-COLELL et al., p. 186.

Para um agente que possua uma [[Utilidade de Bernoulli]] $u(\cdot)$ — portanto, [[Utilidade de von Neumann-Morgenstern]] associada $U$ sobre funções cumulativas de distribuição —, ele é **avesso ao risco** se, para qualquer "[[Loteria (Microeconomia)|Loteria]]"[^1] $F$, 
$$
\forall F \in \mathcal{L}: U(F) = \int u(x) \, dF(x) \leq u\left( \int x \,dF(x) \right) = u(\mathbb{E}_{F}[X])
$$
Ou seja, sua utilidade esperada distribuída pelas probabilidades da loteria $F$ são menos preferíveis do que o recebimento **certo** do valor $\int x \, dF(x) = \mathbb{E}[F]$, que é o *valor esperado* da distribuição $F$.

# Relação com Desigualdade de Jensen
Isso não é mais do que a [desigualdade de Jensen](https://en.wikipedia.org/wiki/Jensen's_inequality). Tomando em foco a função de Bernoulli $u(\cdot)$, temos que
$$
U(F) = \mathbb{E}_{F}[u]
$$
(Ou seja, a utilidade $U$ da loteria $F$ é o valor esperado da utilidade de Bernoulli $u$ com relação à $F$.)

Pela desigualdade de Jensen, temos que — se $u(\cdot)$ for **côncava** —,
$$
\mathbb{E}_{F}[u(X)] \leq u(\mathbb{E}_{F}(X))
$$


---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: Na verdade, sobre distribuições cumulativas de probabilidade $F$.