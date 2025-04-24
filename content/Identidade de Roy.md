---
date: " 2025-04-19"
tags:
  - economics
aliases:
---

up:: [[062b MOC Teoria do Consumidor]]

Seja $v(p, w)$ a [[Função de Utilidade Indireta]], e $e(p, u)$ a [[Função Dispêndio]][^1]. Então temos a identidade
$$
v(p, e(p,\bar{u})) = \bar{u}
$$
Derivando com relação a $p$, temos
$$
\frac{ \partial v }{ \partial p }  + \frac{ \partial v }{ \partial w } \frac{ \partial e(p, \bar{u}) }{ \partial p } = 0
$$
Isolando a função dispêndio, temos que
$$
\frac{ \partial e }{ \partial p } = - \frac{\frac{ \partial v }{ \partial p }}{\frac{ \partial v }{ \partial w } }
$$

Pelo [[Lema de Shephard]], temos que a variação do dispêndio com relação a preços descreve a [[Demanda Hicksiana]] $h(p, \bar{u})$. Portanto, temos
$$
h(p, \bar{u}) = - \frac{\frac{ \partial v }{ \partial p }}{\frac{ \partial v }{ \partial w } }
$$

(Relembrando que $h(p, \bar{u}) = x(p, e(p, \bar{u}))$, relacionando com a [[Demanda Marshalliana|Demanda Walrasiana]].)



---
### References
- [Roy's identity - Wikipedia](https://en.wikipedia.org/wiki/Roy%27s_identity)
- MAS-COLELL, Andreu et al. **Microeconomic theory**. New York: Oxford university press, 1995.

[^1]: Deve-se assumir também que a [[Preferências do Consumidor|Relação de Preferência]] $\succeq$ é *localmente não-saciável* e *estritamente convexa*. 