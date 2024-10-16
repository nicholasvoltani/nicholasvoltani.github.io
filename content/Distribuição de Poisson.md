---
date: " 2024-10-10"
tags:
  - economics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

A distribuição de Poisson é uma generalização da [[Distribuição de Bernoulli]] para variáveis aleatórias *contínuas*.  De fato, num sentido específico, [[A distribuição de Poisson é o limite contínuo da distribuição de Bernoulli]].

Assim como a [[Distribuição Geométrica]] computa o tempo *discreto* até o primeiro sucesso de um processo de Bernoulli, a [[Distribuição Exponencial]] computa o tempo *contínuo* até o primeiro sucesso de uma distribuição de Poisson.

Seja a distribuição de Poisson 
$$
P(X=k; \lambda) = \frac{\lambda^{k}}{k!} e^{ -\lambda }
$$

Caso trate-se também de intervalos de tempo e alguma taxa de eventos por tempo $r$, temos
$$
P(X=k, T=t; r) = \frac{(rt)^{k}}{k!} e^{ -rt }
$$

# Valor Esperado
Pela própria definição da distribuição de Poisson como o limite de um processo de Bernoulli, tem-se que
$$
\lambda = np = \mathbb{E}[X_{Bern}]
$$
Portanto[^1], 
$$
\mathbb{E}_{Poisson}[X] = \lambda
$$
que é igual a $rt$ para algum dado intervalo de tempo e taxa $r$.

# Variância
Como Poisson é o limite de Bernoulli conforme $n \to \infty$, temos
$$
\begin{align}
Var_{Poisson}(X) &= \lim\limits_{n\to \infty} Var_{Bern}(X) \\
&= \lim\limits_{n\to \infty} np (1-p) \\
&= \lambda \lim\limits_{n\to \infty} \left( 1-\cancelto{0}{ \frac{\lambda}{n} } \right) \\
&= \lambda
\end{align}
$$


---
### References
- [14. Poisson Process I - YouTube](https://www.youtube.com/watch?v=jsqSScywvMc&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=14)
- [15. Poisson Process II - YouTube](https://www.youtube.com/watch?v=XsYXACeIklU&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=15)

[^1]: Tecnicamente, trata-se do limite desse processo de Bernoulli conforme $n \to \infty$, mas Poisson pre-assume que $\lambda = np$ se mantém constante.