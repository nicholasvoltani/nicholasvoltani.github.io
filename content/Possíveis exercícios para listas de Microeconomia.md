---
date: " 2025-06-16"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]]

# Cobb-Douglas para $L$ bens
A [[Função de Cobb-Douglas]] geral tem a forma
$$
U(x_{1},\dots,x_{L}) = \prod \limits_{k=1}^{L} x_{k}^{\alpha_{k}}
$$
Suponhamos que ela já seja normalizada, de tal forma que $\sum_{k} \alpha_{k} = 1$ (com $\alpha_{k} > 0$). 

Tenha-se uma [[Restrição Orçamentária]] da forma $\braket{ p | x } \leq w$.

Busque-se uma *solução interior*. Então o lagrangiano associado é
$$
\mathcal{L}(x, p, w) = \prod \limits_{k=1}^{L} x_{k}^{\alpha_{k}} + \lambda \left(\braket{ p | x } - w\right)
$$

As condições de primeira ordem dão
$$
\begin{cases}
\forall k: \frac{\alpha_{k}}{x_{k}} \prod \limits_{k=1}^{L} x_{k}^{\alpha_{k}}  + \lambda p_{k} &= 0\\
\sum \limits_{k} p_{k} x_{k} &= w
\end{cases}
$$

Das primeiras equações, tem-se que, para quaisquer $i, j$, vale
$$
\frac{\alpha_{i}}{p_{i} x_{i}} = \frac{\alpha_{j}}{p_{j} x_{j}}
$$

Da restrição, obtém-se que, para qualquer $i$
$$
\begin{align}
w = \sum\limits_{k} \frac{p_{k} x_{k}}{\alpha_{k}} \alpha_{k} &= \frac{p_{i} x_{i}}{\alpha_{i}} \sum \limits_{k} \alpha_{k}  \\
&= \frac{p_{i} x_{i}}{\alpha_{i}}
\end{align}
$$
Portanto, para todo $i$ vale
$$
x_{i} = \alpha_{i} \frac{w}{p_{i}}
$$
Equivalentemente, vale o resultado esperado para uma utilidade Cobb-Douglas:
$$
\alpha_{i} = \frac{p_{i} x_{i}}{w}
$$
Ou seja, os argumentos $\alpha_{i}$ dão as *proporções* de cada bem $i$ no dispêndio da renda $w$[^1].

# Matriz de Slutsky para utilidades (e demandas) conhecidas
## Cobb-Douglas

## CES (?)




---
### References
- 

[^1]: Pressupondo que $\sum \limits_{_{k}} \alpha_{k} = 1$.