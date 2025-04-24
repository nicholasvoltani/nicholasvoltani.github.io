---
date: " 2025-04-19"
tags:
  - economics
aliases:
  - A demanda hicksiana é o gradiente da função dispêndio
---

up:: [[062b MOC Teoria do Consumidor]]

O lema de Shephard associa a [[Demanda Hicksiana]] com a [[Função Dispêndio]]: a trajetória da demanda hicksiana é descrita pela variação do dispêndio com relação aos *preços*. 

Seja $e(p, \bar{u})$ a [[Função Dispêndio]], a qual é obtida pela minimização de $\braket{ p | x }$ com a restrição $U(x^*) = \bar{u}$. Seja $\mathcal{L}(x, p, \bar{u}) = \braket{ p | x } + \lambda (U(x) - \bar{u})$ o lagrangiano associado a esta minimização.

Portanto, pelo [[Envelope Theorem]], temos que
$$
\frac{ \partial e }{ \partial p } = \frac{ \partial \mathcal{L}^*(p, \bar{u}) }{ \partial p }  = \frac{ \partial \mathcal{L}(x^*(p, \bar{u}), p, \bar{u}) }{ \partial p } = x^*(p, \bar{u}) 
$$

E $x^*(p, \bar{u}) = h(p, \bar{u})$ é justamente a demanda hicksiana! 

---
### References
- [Shephard's lemma - Wikipedia](https://en.wikipedia.org/wiki/Shephard%27s_lemma#)
- MAS-COLELL, Andreu et al. **Microeconomic theory**. New York: Oxford university press, 1995.