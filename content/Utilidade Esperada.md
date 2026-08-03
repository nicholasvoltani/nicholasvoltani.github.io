---
date: 2025-06-23
tags:
  - economics
aliases:
  - Utilidade Esperada de von Neumann-Morgenstern
---

up:: [[062d MOC Loterias]]

Uma função $U: \mathcal{L} \to \mathbb{R}$ sobre o espaço de [[Loteria (Microeconomia)|Loterias]] possui a *forma de utilidade esperada* se existe algum[^1] $u\coloneqq (u_{1}, \dots, u_{n}) \in \mathbb{R}^n$ tal que
$$
\begin{align*}
\forall \, L \coloneqq (p_{1}, \dots, p_{n}) \in \mathcal{L}: U(L) &= \braket{ L | u } \\
&= \sum \limits_{k} p_{k} u_{k}
\end{align*}
$$

# Caveat importantíssimo
@Mas-Colell1995 chamam $U(\cdot)$ de "utilidade **esperada** de von-Neumann-Morgenstern", porém o que costumeiramente chama-se de **utilidade de von Neumann-Morgenstern** é a função $u(\cdot)$, i.e. as utilidades dos *outcomes* individuais, p. ex. @Kreps1990, p. 180. 

Para complicar as coisas, Cowell chama $U(\cdot)$ de "utilidade de von Neumann-Morgenstern" *tout court*, embora ao menos explique sua escolha: 
> "We should not really call $u$ 'the utility function' because **the whole expression** [$U(L)$] **is the person's utility**; so $u$ is sometimes known as the individual's *cardinal utility function* or *felicity function*; arguably neither term is a particularly happy choice of words."  [@Cowell2004, p. 187, destaque em negrito meu]

Outros locais parecem chamar a $u$ (**minúscula**) de "utilidade de von Neumann-Morgenstern", como [Lecture 1: Introduction to Individual Decision-Making - YouTube](https://www.youtube.com/watch?v=WRibE2nt8wM) e [Von Neumann–Morgenstern utility theorem - Wikipedia](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem#The_theorem). 

De qualquer forma, cuidado com o que chamarem de "utilidade (esperada) de von Neumann-Morgenstern"! Não é como se economistas soubessem fazer Matemática, *let alone* criar notações matemáticas adequadas...

# Propriedades
Por sua própria forma, pode-se demonstrar que ela é sempre **linear em $\mathcal{L}$**. Por consequência, todas as [[Curva de Indiferença|Curvas de Indiferença]] são **retas paralelas entre si**. 

Pelo [[Teorema da Utilidade Esperada]],  toda relação de preferência sobre $\mathcal{L}$ que seja contínua e satisfaça [[Independência de Alternativas Irrelevantes|Axioma da Independência]] terá a forma de uma utilidade esperada.

Tendo-se que os possíveis resultados de uma loteria estão em um conjunto *infinito* (como $\mathbb{R}$), a utilidade vN-M assume a forma
$$
U(F) = \int u(x) \, dF(x)
$$
Ou seja, $\mathcal{L}$ torna-se o espaço de **funções cumulativas de distribuição**.

---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: @Cowell2004, pp. 188-9 a chama de "*felicity function*" ou "*cardinal utility function*" (embora reconheça que não é dos melhores nomes, mas é o que temos).