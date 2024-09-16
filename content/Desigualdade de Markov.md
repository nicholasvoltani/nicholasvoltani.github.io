---
date: " 2024-09-12"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

Seja $X$ uma variável aleatória *não-negativa*, com valor esperado $\mathbb{E}[X]<\infty$.

Então tem-se que, para todo $a > 0$,
$$
P(X \geq a) \leq \frac{\mathbb{E}[X]}{a}
$$

# Demonstração
Sendo $f(x)$ a função distribuição de probabilidade de $X$, temos que
$$
\begin{align}
\mathbb{E}[X] &= \int_{-\infty}^{\infty}x f(x) dx = \int_{0}^{\infty} x f(x) dx \\
&\geq \int_{0}^{\infty}a f(x)dx = a P(X \geq a)
\end{align}
$$

# Corolários
- [[Desigualdade de Chebyshev]]

---
### References
- [Markov's inequality - Wikipedia](https://en.wikipedia.org/wiki/Markov%27s_inequality#Proofs)