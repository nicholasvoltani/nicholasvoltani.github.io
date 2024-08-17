---
date: " 2024-08-08"
tags:
  - economics
aliases:
  - Taxas Nominais de Juros
---

up:: [[Taxa de Juros]]

A taxa nominal de juros trata sobre o rendimento **em termos de moeda**. Por exemplo, a uma taxa nominal de juros de $100\cdot i\%$ ao ano, $D$ reais se tornarão $(1+i) D$ reais após um ano.

Note que isso se trata somente da **moeda**, mas não de seu **poder de compra efetivo**. Isso é medido pela [[Taxa Real de Juros]] $r_{t}$, a qual é afetada pela [[Inflação]][^1] através da fórmula
$$
1+r_{t} = \frac{1 + i_{t}}{1+\pi^{e}}
$$

Quando $|\pi^{e}| \ll 1$, podemos aproximar como
$$
r_{t} \approx i_{t} - \pi^{e}
$$
Cuidado, porém, quando a inflação é alta (em módulo), pois a fórmula pode causar deformações consideráveis!

---
### References
- [Lecture 7: An Extended IS-LM Model - MIT OpenCourseWare (Ricardo Caballero, 2023)](https://www.youtube.com/watch?v=fkiWQZPOHXk)

[^1]: Como não é possível saber ao certo qual será a inflação no futuro, a taxa de juros real é *estimada* através da inflação *esperada* $\pi^e$.