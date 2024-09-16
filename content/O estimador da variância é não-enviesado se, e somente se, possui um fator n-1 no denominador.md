---
date: " 2024-09-11"
tags:
  - mathematics
aliases:
---

up:: [[Viés de Estimação]]

Dados $\{X_{i}\}$ tirados independentemente de uma mesma distribuição com média $\mu$ e variância $\sigma^{2}$, temos que o estimador
$$
\frac{\sum\limits_{i=1}^{n} (X_{i} - \bar{X})^{2}}{n-1}
$$
é um [[Estimador Não-Enviesado]].

# Demonstração
Tomando o valor esperado do estimador acima e abrindo a fórmula, temos que isso é igual a 
$$
\frac{1}{n-1}\left( \sum\limits_{i=1}^{n}\mathbb{E}(X_{i}^{2}) - n \mathbb{E}(\bar{X}^{2}) \right)
$$

Como temos que a variância é $Var(X_{i}) = \mathbb{E}(X_{i}^{2}) - \mathbb{E}(X_{i})^{2}$, e os $X_{i}$'s são i.i.d., temos que o primeiro termo é $n(\sigma^{2} + \mu^{2})$.

Como a média amostral é $\frac{\sum X_{i}}{n}$, temos que
$$
Var(\bar{X}) = \frac{1}{n^{2}} \sum\limits_{i=1}^{n} Var(X_{i}) = \frac{1}{n} \sigma^{2}
$$
pois os $X_{i}$'s são i.i.d.. Portanto, temos (pela mesma fórmula da variância acima)
$$
\mathbb{E}(\bar{X}^{2}) = \frac{1}{n}\sigma^{2} + \mu^{2}
$$

Logo,
$$
\begin{align}
\mathbb{E}\left( \frac{\sum\limits_{i=1}^{n} (X_{i} - \bar{X})^{2}}{n-1} \right) &= \frac{1}{n-1}(n(\sigma^{2} + \cancel{ \mu^{2} }) - \sigma^{2} - \cancel{ n \mu }) \\
&= \sigma^{2}
\end{align}
$$

Logo, é um estimador não-enviesado. 

Caso fosse dividido somente por $n$, teríamos que
$$
\mathbb{E}\left( \frac{\sum\limits_{i=1}^{n} (X_{i} - \bar{X})^{2}}{n} \right) = \frac{n-1}{n} \sigma^{2}
$$
Portanto, o viés seria negativo, de valor $-\frac{\sigma^{2}}{n}$: o estimador tenderia a chutar para baixo do valor real da variância! Dividir, invés disso, por $n-1$ aumenta-o o suficiente para que ele não seja enviesado. (Evidentemente que, para $n$ grande, essa correção perde sua pertinência.)


---
### References
- [Unbiased Estimator of Sample Variance – Vol. 2 | Economic Theory Blog](https://economictheoryblog.com/2015/04/01/unbiased-estimator-of-sample-variance/)