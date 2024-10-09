---
date: " 2024-10-08"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

A distribuição de Bernoulli trata da probabilidade de sucessos/fracassos[^1]. 

Definindo $P(X = \text{Sucesso}) = p$, temos que a variável $X$ segue $X \sim \text{Bern}(p)$. 

Denotamos $X=1$ para sucesso, e $X=0$ para fracasso.

# Valor Esperado
$$
\begin{align}
\mathbb{E}[X] &= p \cdot 1 + (1-p) \cdot 0  \\
&= p
\end{align}
$$

# Variância
$$
\begin{align}
Var(X) &= \mathbb{E}[X^{2}] - \mathbb{E}[x] = p^{2} - p  \\
&= p(1-p)
\end{align}
$$

# Relação com distribuição binomial
Tendo $\{X_{i}\} \sim \text{Bern}(p)$ variáveis aleatórias i.i.d., temos que a probabilidade de conformações dos $X_{i}$'s seria algo como, por exemplo,
$$
P(X_{1}=1, X_{2}=0,\dots) = p \cdot (1-p) \dots
$$
podendo haver diferença na interpretação de ordens diferentes de eventos[^2].

No caso em que a **ordem dos fenômenos não importe**, tem-se uma [[Distribuição Binomial]], em que todas as possibilidades são contabilizadas[^3].

---
### References
- [13. Bernoulli Process - YouTube](https://www.youtube.com/watch?v=gMTiAeE0NCw&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=13)

[^1]: Ou seja, o espaço amostral possui somente dois elementos: sucesso/fracasso, cara/coroa, etc.
[^2]: Por exemplo, pode ser que tirar cara e depois coroa seja um fenômeno diferente de tirar coroa e depois cara, dependendo do problema em questão.
[^3]: [[O Binômio de Newton contabiliza todas as possíveis permutações de uma sequência]]e uma sequência]].