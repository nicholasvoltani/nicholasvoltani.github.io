---
date: " 2025-06-23"
tags:
  - economics
aliases:
  - Utilidade Esperada
---

up:: [[062d MOC Loterias]]

Uma função $U: \mathcal{L} \to \mathbb{R}$ sobre o espaço de [[Loteria (Microeconomia)|Loterias]] possui a *forma de utilidade esperada* se existe algum $u\coloneqq (u_{1}, \dots, u_{n}) \in \mathbb{R}^n$ tal que
$$
\begin{align*}
\forall \, L \coloneqq (p_{1}, \dots, p_{n}) \in \mathcal{L}: U(L) &= \braket{ L | u } \\
&= \sum \limits_{k} p_{k} u_{k}
\end{align*}
$$
Ela é também chamada de *utilidade de von-Neumann-Morgenstern*.

Por sua própria forma, pode-se demonstrar que ela é sempre **linear em $\mathcal{L}$**. Por consequência, todas as [[Curva de Indiferença|Curvas de Indiferença]] são **retas paralelas entre si**. 

Pelo [[Teorema da Utilidade Esperada]],  toda relação de preferência sobre $\mathcal{L}$ que seja contínua e satisfaça [[Independência de Alternativas Irrelevantes|Axioma da Independência]] terá a forma de utilidade de von-Neumann-Morgenstern.

Tendo-se que os possíveis resultados de uma loteria estão em um conjunto *infinito* (como $\mathbb{R}$), a utilidade vN-M assume a forma
$$
U(F) = \int u(x) \, dF(x)
$$
Ou seja, $\mathcal{L}$ torna-se o espaço de **funções cumulativas de distribuição**.

---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.