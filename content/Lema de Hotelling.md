---
date: "2025-06-12"
tags:
  - economics
aliases:
  - A função de oferta de uma firma é o gradiente da função lucro
---

up:: [[062c MOC Teoria da Firma]]

Caso os *netputs* ótimos de uma [[Função Produção]], dado $p \gg 0$, sejam unívocos por $p$, então  
$$
\nabla_{p} \pi(y^*) = y^*(p)
$$
Este é um resultado análogo ao [[Lema de Shephard]], em [[062b MOC Teoria do Consumidor]], em que a [[Demanda Hicksiana]] é o gradiente (em preços) do [[Função Dispêndio|Dispêndio]].

## Demonstração
Tendo o problema de otimização do [[Função Lucro|Lucro]] como[^1]
$$
\max\limits_{y \in Y} \braket{ p | y } \mid F(y) = 0
$$

Ou seja, o lagrangiano associado à otimização é
$$
\mathcal{L}(y;p) = \braket{ p | y } + \lambda F(y)
$$

Pelo [[Envelope Theorem]], temos que, dado o ótimo $y^* = y^*(p)$, 
$$
\begin{align}
\frac{ \partial \mathcal{L}(y, p) }{ \partial p }{\Huge \mid}_{(y^*, \bar{p})} &= y^* \\    &= \nabla_{p} \pi(\bar{p})
\end{align}
$$


---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: Assume-se que um *netput* $y$ é factível (ou seja, $y \in Y$), se $F(y) \leq 0$. Aqui, porém, assumo que $y$ é uma solução na *fronteira* do conjunto de produção, i.e. $F(y) = 0$. 