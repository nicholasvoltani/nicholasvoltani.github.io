---
date: " 2024-10-10"
tags:
  - mathematics
aliases:
---

up:: [[Distribuição de Poisson]]


Dada uma [[Distribuição Binomial]] (i.e. um processo de [[Distribuição de Bernoulli|Bernoulli]]), tem-se que
$$
P(X=k) = {n \choose k} p^{k} (1-p)^{n-k}
$$

Dado um intervalo de tempo $\tau$ no qual observa-se este processo, dividido em $n$ subintervalos.

Defina-se 
$$
\lambda = np \iff p = \frac{\lambda}{n}
$$

Substituindo na distribuição binomial,
$$
P(X=k) = \left( \frac{n!}{(n-k)!} \frac{1}{n^{k}}\right) \frac{\lambda^{k}}{k!} \left( 1-\frac{\lambda}{n} \right)^{n-k} 
$$
Tomando o limite em que $n \to \infty$ – que é o mesmo que tomar "intervalos infinitesimais" dentro dos quais a distribuição de Bernoulli ocorre –, temos[^1]
$$
\begin{align}
\lim\limits_{n \to \infty} P(X=k) &= \frac{\lambda^{k}}{k!} \lim\limits_{n \to \infty} \cancelto{1}{ \left( \frac{n!}{(n-k)!} \frac{1}{n^{k}}\right) }\lim\limits_{n \to \infty}  \left( 1-\frac{\lambda}{n} \right)^{n} \\
&= \frac{\lambda^{k}}{k!} e^{ -\lambda}
\end{align}
$$

Portanto, a distribuição de Poisson é definida como
$$
P(X=k; \lambda) = \frac{\lambda^{k}}{k!} e^{- \lambda }
$$
Definindo-se $\lambda \equiv r t$, onde $r$ é a taxa de eventos por tempo,
$$
P(X=k, T=t; r) = \frac{(rt)^{k}}{k!} e^{ -rt }
$$
que é a distribuição de Poisson onde $k$ eventos ocorrem dentro de um intervalo de tempo $t$ (dada taxa $r$).

---
### References
- [14. Poisson Process I - YouTube](https://www.youtube.com/watch?v=jsqSScywvMc&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=14)

[^1]: A primeira cancelação ocorre pois $\frac{n!}{(n-k)!} \propto n^{k}$. Por exemplo, $\frac{n!}{(n-{\color{green}2})!} = n (n-1) \propto n^{\color{green}2}$. O segundo limite é o limite de Euler $e^{ x } = \lim\limits_{n\to \infty} (1+\frac{x}{n})^{n}$ (evidentemente tomando $\lim\limits_{n\to \infty} (n-k) = n$ no expoente).