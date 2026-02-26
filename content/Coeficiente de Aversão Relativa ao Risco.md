---
date: "2025-06-24"
tags:
  - economics
aliases:
---

up:: [[062d MOC Loterias]]

Dada uma [[Utilidade de Bernoulli]] $u(\cdot)$, defina-se (para dada riqueza $x$) $\tilde{u}(t) = u(tx)$, onde $t$ são variações percentuais de $x$; por definição, $\tilde{u}(1) = u(x)$. Buscamos calcular a [[Coeficiente de Arrow-Pratt|Coeficiente de Aversão Absoluta ao Risco]] para $\tilde{u}(t)$ com relação a estes percentuais $t$.

As derivadas parciais de $\tilde{u}(t)$ são
$$
\begin{cases}
\frac{ d \tilde{u}(t)}{ d t } = x u'(tx) \\
\frac{ d^{2} \tilde{u}(t) }{ d^{2} t } = x^{2} u''(tx) 
\end{cases}
$$

Fazendo um análogo do coeficiente de Arrow-Pratt para $\tilde{u}$ — avaliado em $t=1$, pois interessa analisar variações *em torno de $x$* —, chegamos ao coeficiente de aversão relativa ao risco:
$$
r_{R}(x, u) \coloneqq -\frac{\frac{ d^{2} \tilde{u}(t=1) }{ d^{2} t }}{\frac{ d \tilde{u}(t=1)}{ d t }} = - x \frac{u''(x)}{u'(x)} = x \, r_A(x,u)
$$

---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.