---
date: "2024-10-25"
tags:
  - economics
aliases:
---

up:: [[Lei da Demanda Compensada]]

A matriz de Slutsky condensa as informações de [[Efeito Substituição]] e [[Efeito Renda]], em torno de uma demanda de equilíbrio dada.

A matriz de Slutsky $S \in \mathbb{R}^{L \times L}$, dada uma [[Restrição Orçamentária]] $w$, um vetor de preços $p \in \mathbb{R}^{L}_{+}$ e uma [[Demanda Marshalliana|Demanda Walrasiana]] $x(p,w)$, é dada por
$$
S_{ij} = (D_{p}x + D_{w}x \,x^{T})_{ij}
$$

Devido à [[Lei da Demanda Compensada]], temos que
$$
\braket{ dp | dx } = \braket{ dp | S \, dp } \leq 0
$$

Ou seja, [[A Matriz de Slutsky é semi-definida negativa]][^1].

---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - YouTube](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=7)

[^1]: No espaço vetorial $\mathbb{R}^{L}_{+}$.