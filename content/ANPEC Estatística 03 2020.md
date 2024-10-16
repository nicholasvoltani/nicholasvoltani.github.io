---
date: " 2024-10-10"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241010202703.png]]

Questão sobre [[Distribuição Exponencial]].

# Item 0
$$
\mathbb{E}[X] = \int_{0}^{\infty} \lambda e^{ -\lambda x }dx = \frac{1}{\lambda}
$$

# Item 1
Já se sabe de cara que é falsa, pois o valor esperado de $X$ é $\frac{1}{\lambda}$ – ou seja, $\lambda$ possui unidade do inverso de $X$. Espera-se que $Var(X) \sim \frac{1}{\lambda^{2}}$.

$$
\begin{align}
\mathbb{E}[X^{2}] &= \int_{0}^{\infty} \lambda x^{2}\underbrace{ e^{-\lambda x }dx }_{ \equiv du } \\
&= -\int_{0}^{\infty }2x \underbrace{ e^{ -\lambda x }dx }_{ \equiv du }  \\
&= -\frac{2}{\lambda^{2}}\int_{0}^{\infty}e^{ -\lambda x }dx \\
&=\frac{2}{\lambda^{2}}
\end{align}
$$

Logo,
$$
Var(X) = \frac{2}{\lambda^{2}}- \frac{1}{\lambda^{2}} = \frac{1}{\lambda^{2}}
$$

# Item 2
$$
P(0 \leq X\leq c) = \int_{0}^{c}\lambda e^{ -\lambda x }dx = 1-e^{ -\lambda c }
$$

Portanto, 
$$
P(X > c) = e^{ -\lambda c }
$$

# Item 3
Sabe-se que a distribuição exponencial (assim como a [[Distribuição Geométrica]]) é *memoryless*, não possui memória:
$$
P(X > a+b \mid X>b) = P(X>a)
$$

Portanto, 
$$
P(X>x \mid X>c) = P(X > (x-c))
$$

Pelo item 2, temos
$$
P(X> (x-c)) = e^{ -\lambda (x-c) }
$$

# Item 4
A distribuição acumulada de X até algum $x$ é dada por
$$
F_{X}(x) = \int_{0}^{x} \lambda e^{ -\lambda \tau } d\tau = 1 - e^{ -\lambda x }
$$

Não faço ideia do que o item quis dizer com a condicional de que $x > c$, pois a CDF é essa de cima... Inclusive, o que se pode afirmar é que 
$$
F_{X}(x) > F_{X}(c) = 1 - e^{ -\lambda c }
$$
A distribuição é monotônica, ela não se estagna após $c$ só porque $x>c$. Provavelmente essa era a pegadinha, bem desnecessária.

---
### References
- 