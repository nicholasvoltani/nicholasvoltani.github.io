---
date: "2025-04-19"
tags:
  - economics
aliases:
  - A demanda hicksiana é o gradiente da função dispêndio
  - A demanda condicional de fatores de produção é o gradiente da função custo
---

up:: [[062 MOC Microeconomia]]

O lema de Shephard associa a [[Demanda Hicksiana]] com a [[Função Dispêndio]]: a trajetória da demanda hicksiana é descrita pela variação do dispêndio com relação aos *preços*. Analogamente, associa a demanda por fatores (da [[062c MOC Teoria da Firma|produção]]) à [[Função Custo]].

# [[062b MOC Teoria do Consumidor]]
Seja $e(p, \bar{u})$ a [[Função Dispêndio]], a qual é obtida pela minimização de $\braket{ p | x }$ com a restrição de [[Função Utilidade|Utilidade]] $U(x^*) = \bar{u}$. Seja $\mathcal{L}(x, p, \bar{u}) = \braket{ p | x } + \lambda (U(x) - \bar{u})$ o lagrangiano associado a esta minimização.

Portanto, pelo [[Envelope Theorem]], temos que
$$
\frac{ \partial e }{ \partial p } = \frac{ \partial \mathcal{L}^*(p, \bar{u}) }{ \partial p }  = \frac{ \partial \mathcal{L}(x^*(p, \bar{u}), p, \bar{u}) }{ \partial p } = x^*(p, \bar{u}) 
$$

E $x^*(p, \bar{u}) = h(p, \bar{u})$ é justamente a demanda hicksiana! 

# [[062c MOC Teoria da Firma]]
Seja $z(w, q)$ a demanda (condicional) por fatores de produção, obtida pela minimização de $\braket{ w | z }$ com restrição de [[Função Produção|produção]] $f(z^*) = q$. Seja $\mathcal{L}(z, w, q) = \braket{ w | z } + \lambda(f(z) - q)$ o lagrangiano associado a esta minimização.

Pelo Envelope Theorem, temos que
$$
\nabla_{w}C = \frac{ \partial \mathcal{L}^* }{ \partial w }(w, q) = \frac{ \partial \mathcal{L}^* }{ \partial w }(z^*(w, q), w, q) = z^*(w, q)
$$
onde $z^*(w, q)$ é a demanda (condicional) por fatores de produção.

---
### References
- [Shephard's lemma - Wikipedia](https://en.wikipedia.org/wiki/Shephard%27s_lemma#)
- MAS-COLELL, Andreu et al. **Microeconomic theory**. New York: Oxford university press, 1995.