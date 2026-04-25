---
date: "2024-09-12"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

A covariância entre duas variáveis aleatórias $X$ e $Y$ é dada por
$$
Cov(X,Y) = \mathbb{E}[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])]
$$

Abrindo a expressão, obtém-se algo similar à fórmula de variância:
$$
\begin{align}
Cov(X,Y) &= \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] \\
Var(X) &= \mathbb{E}[X\cdot X] - \mathbb{E}[X] \cdot \mathbb{E}[X]
\end{align}
$$
# Derivação geométrica
Tomando com que as variáveis aleatórias $X,Y\in \mathbb{R}^{n}$, podemos definir a covariância delas da seguinte forma: Primeiro, denotemos estes resíduos como 
$$
R_{X} \coloneqq X - \mathbb{E}[X] \in \mathbb{R}^n
$$
(idem para $Y$). 

Então, através do [[Inner Product|produto interno]] $\braket{ \cdot{} , \cdot }$[^1], escrevemos a covariância como:
$$
Cov(X,Y) = \braket{ X-\mathbb{E}[X], Y-\mathbb{E}[Y] } 
$$

Dessa forma, temos, em particular, que a norma (induzida pelo produto interno) da diferença destes resíduos — i.e. $R_{X}-R_{Y}$ — é
$$
\begin{align*}
||R_{X} - R_{Y}||^{2} &= ||R_{X}||^{2} + ||R_{Y}||^{2} - 2 \braket{ R_{X} , R_{Y}  } \\
&= Var(X) + Var(Y) - 2 \, Cov(X,Y)
\end{align*}
$$

# Propriedades
- Ao dividir a covariância pelos desvios-padrão das duas variáveis, obtém-se a [[Correlação]] entre as variáveis

---
### References
- [Covariância – Wikipédia, a enciclopédia livre](https://pt.wikipedia.org/wiki/Covari%C3%A2ncia)
- [The Geometry of Covariance - YouTube](https://www.youtube.com/watch?v=56x0N2-7FRk)

[^1]: Destaque-se que este produto interno **é induzido pela [[Probability Function|função de probabilidade]]** $\mathbb{P}$.