---
date: "2024-09-12"
tags:
  - mathematics
aliases:
  - Correlação de Pearson
---

up:: [[Covariância]]

A correlação (de Pearson) entre duas variáveis aleatórias $X$ e $Y$ é uma medida de *relação linear entre elas*. Caso seja $\pm 1$, elas são perfeitamente correlacionadas (positiva/negativamente) de maneira linear.

Ela é dada por
$$
Corr(X,Y) = \frac{Cov(X,Y)}{\sqrt{ Var(X) Var(Y) }}
$$
Ou seja, é a [[Covariância]] das variáveis, dividido pela raíz das variâncias.

# Correlação está entre -1 e 1
Pode-se pensar na covariância como um produto interno[^1], $Cov(X,Y) \equiv \left<X, Y\right>$. Dessa forma, segue a desigualdade de Cauchy-Schwarz
$$
\begin{align}
|Cov(X,Y)| &\leq \sqrt{ Cov(X,X) Cov(Y,Y)} \\
\therefore |Corr(X,Y)| &\leq 1
\end{align}
$$
# Argumento geométrico
Tomando $X,Y \in \mathbb{R}^{n}$, podemos escrever a covariância como
$$
\begin{align*}
Cov(X,Y) &= \braket{ X-\mathbb{E}[X], Y-\mathbb{E}[Y] } \\
&= \braket{ R_{X}, R_{Y}  } 
\end{align*}
$$

Dessa forma, pela estrutura do produto interno, temos a seguinte identidade
$$
\braket{ R_{X} , R_{Y}  } = ||R_{X}|| \, ||R_{Y}|| \cos(\varphi)
$$
em que $\varphi$ é o ângulo[^2] entre $R_{X}$ e $R_{Y}$, concluímos que
$$
\frac{\braket{ R_{X}, R_{Y}  }}{||R_{X}||\,||R_{Y}||} \coloneqq Corr(X,Y) = \cos(\varphi) \in [-1, 1]
$$

---
### References
- [Covariance and Correlation](http://www.randomservices.org/random/expect/Covariance.html)
- [statistics - how can I prove the value of correlation coefficient $r$ ranges between $-1$ and $1$? - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2300570/how-can-i-prove-the-value-of-correlation-coefficient-r-ranges-between-1-and)
- [The Geometry of Covariance - YouTube](https://www.youtube.com/watch?v=56x0N2-7FRk)

[^1]: Num espaço vetorial de variáveis aleatórias *de média finita*. 
[^2]: Num espaço euclideano ou num espaço qualquer. Cf. [Cosine similarity - Wikipedia](https://en.wikipedia.org/wiki/Cosine_similarity).