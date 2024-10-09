---
date: " 2024-10-08"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

Um processo aleatório dado por $n$ variáveis aleatórias $\{X_{i}\}_{i=1}^{n}$ segue uma distribuição binomial quando os $X_{i}$'s são i.i.d. e seguem uma [[Distribuição de Bernoulli]] $\text{Bern}(p)$.

Seja $S$ a quantidade de sucessos, equivalentemente definida como $S = \sum\limits_{i=1}^{n} X_{i}$. Então, a probabilidade de que hajam $k$ sucessos é
$$
P(S=k) = {n \choose k} p^{k} (1-p)^{n-k}
$$
supondo que a ordem dos eventos não importe[^1].

# Valor Esperado
Há duas formas de se obtê-lo. A mais óbvia é de que
$$
\begin{align}
\mathbb{E}[S] = \mathbb{E}\left[\sum X_{i} \right] = \sum\mathbb{E}[X_{i}] \\
\therefore \mathbb{E}[S] = np
\end{align}
$$

Outra, desnecessariamente complicada, é de derivar a relação
$$
1 = \sum_{k=1}^{n} {n \choose k} p^{k} (1-p)^{n-k}
$$
com relação a $p$.

# Variância
Como os processos $X_{i}$ são independentes, temos que a variância é a soma das variâncias individuais. Portanto,
$$
Var(S) = n p (1-p)
$$


---
### References
- [13. Bernoulli Process - YouTube](https://youtu.be/gMTiAeE0NCw?list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&t=1142)

[^1]: Em cujo caso [[O Binômio de Newton contabiliza todas as possíveis permutações de uma sequência]].