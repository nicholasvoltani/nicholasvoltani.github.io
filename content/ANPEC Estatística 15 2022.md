---
date: "2024-11-07"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241107140409.png|600]]

Questão sobre [[Modelo Autorregressivo]] $AR(1)$.

Denote-se $\beta \equiv \beta_{1}$ e $\sigma \equiv \sigma_{u}$ por simplicidade.

# Item 0: Verdadeiro
Abrindo a série para $t-2$, tem-se que 
$$
Y_{t} = u_{t} + \beta u_{t-1} + \beta^{2}Y_{t-2}
$$
facilmente sendo generalizável por indução para $t \to \infty$:
$$
Y_{t} = \sum\limits_{j=0}^{\infty} \beta^{j} u_{t-j}
$$

# Item 1: Verdadeiro
Pela série acima, tomando o valor esperado (que é linear), temos
$$
\mathbb{E}[Y_{t}] = 0
$$

# Item 2: Falso
Pela série infinita acima, temos a série geométrica
$$
Var(Y_{t}) = \sigma^{2} \sum\limits_{j=0}^{\infty} \beta^{j} = \frac{\sigma^{2}}{1-\beta}
$$

# Item 3: Verdadeiro
Eu deixaria em branco na prova. Imagino que tenha algo a ver com $Y_{t}$ ser uma soma *infinita* de variáveis aleatórias, algo com o [[Teorema do Limite Central]].

# Item 4: Falso
Como $\mathbb{E}[Y_{t}] = 0$ para todo $t$, temos que
$$
Cov(Y_{t-1, Y_{t-2}}) = \mathbb{E}[Y_{t-1} Y_{t-2}]
$$
Abrindo $Y_{t-1}$ e fazendo a multiplicação
$$
\begin{align}
Cov(Y_{t-1}, Y_{t-2}) &= \mathbb{E}[\beta Y_{t-2}^{2} + \cancelto{0}{ u_{t-1} Y_{t-2 }}] \\
&= \beta Var(Y_{t-2}) = \frac{\beta \sigma^{2}}{1-\beta}
\end{align}
$$

### Referências
- [Time Series: Autoregressive models AR, MA, ARMA, ARIMA (Mingda Zhang)](https://people.cs.pitt.edu/~milos/courses/cs3750/lectures/class16.pdf)