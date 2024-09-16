---
date: " 2024-09-12"
tags:
  - mathematics
aliases:
  - Mínimos Quadrados
  - MQO
---

up:: [[064 MOC Estatística em Economia]]

Dados os dados $\{(x_{i}, y_i)\}_{i=1}^{n}$, em que deseja-se descrever o fenômeno $Y$ em função do fenômeno $X$ através de uma relação linear
$$
y_{i} = \beta_{0} + \beta_{1} x_{i}
$$
a estimação dos parâmetros da reta descreverão a equação
$$
\hat{y}_{i} = \hat{\beta}_{0} + \hat{\beta}_{1} x_{i} + \hat{u}_{i}
$$
onde $\hat{u}_{i}$ é o erro em que se incorre ao fazer a regressão[^1]. 

Assume-se que a média dos erros amostrais é $0$, i.e. $\mathbb{E}[\hat{u}_{i}|\{x_{i}\}] = 0$, além de que a variância dos erros é a mesma para todo $i$, $Var(\hat{u}_{i}|\{x_{i}\}) = \sigma^{2}$ (i.e. [[Homoscedasticidade]]).

A ideia da regressão de mínimos quadrados é de minimizar a soma dos erros quadráticos
$$
E(\hat{\beta}_{0}, \hat{\beta}_{1}) \equiv \sum\limits_{i=1}^{n}\hat{u}_{i}^{2} = \sum\limits_{i=1}^{n} (\hat{y}_{i} - \hat{\beta}_{0} - \hat{\beta}_{1}x_{i})^{2}
$$

# Estimadores de MQO
Através das derivadas de $E$ com relação aos $\hat{\beta}_{i}$ sendo $0$, obtemos que
$$
\begin{cases}
\hat{\beta}_{0} = \frac{\sum\limits_{i=1}^{n} (x_{i}-\bar{x})(y_{i}-\bar{y})}{\sum \limits_{i=1}^{n} (x_{i}-\bar{x})(x_{i}-\bar{x})} \\
\hat{\beta}_{1} = \bar{y} - \hat{\beta}_{0}\bar{x}
\end{cases}
$$


---
### References
- [repositorio.enap.gov.br/bitstream/1/4788/1/Livro\_Regressão Linear.pdf](https://repositorio.enap.gov.br/bitstream/1/4788/1/Livro_Regress%C3%A3o%20Linear.pdf)

[^1]: Seja pela quantidade insuficiente de dados, seja pela relação indevida entre $X$ e $Y$.