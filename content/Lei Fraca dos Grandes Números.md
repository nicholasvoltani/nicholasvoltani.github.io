---
date: "2024-10-17"
tags:
  - mathematics
aliases:
  - Weak Law of Large Numbers
  - A média amostral tende em probabilidade para a média das variáveis aleatórias
---

up:: [[064 MOC Estatística em Economia]]

Dadas variáveis aleatórias i.i.d. $\{X_{i}\}_{i=1}^{N}$, cujas médias são 
$$
\mathbb{E}[X_{i}]= \mu
$$
então temos que a média amostral 
$$
\bar{X}=\frac{\sum\limits_{i=1}^{N}X_{i}}{N}
$$
tende à média $\mu$.

# Demonstração
Temos que a variância de $\bar{X}$ é[^1]
$$
\begin{align}
Var(\bar{X}) &= Var\left( \frac{\sum X_{i}}{N} \right)  \\
&= \frac{1}{N^{2}}\sum Var(X_{i})  \\
&= \frac{\sigma^{2}}{N}
\end{align}
$$
Pela [[Desigualdade de Chebyshev]], para qualquer $t\geq 0$, temos que
$$
P(|\bar{X}-\mu|\geq t) \leq \frac{Var(\bar{X})}{t^{2}} = \frac{\sigma^{2}}{N t}
$$
Portanto, 
$$
\lim\limits_{N \to \infty } P\left(|\bar{X}_{N}-\mu|\geq t \right) =0
$$

Portanto, a média amostral $\bar{X}$ [[Convergência em Probabilidade|Converge em Probabilidade]] para $\mu$.

---
### References
- [19. Weak Law of Large Numbers - YouTube](https://www.youtube.com/watch?v=3eiio3Tw7UQ&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=19)
- [3. Probability Theory - YouTube](https://www.youtube.com/watch?v=f9XFM8YLccg&list=PLUl4u3cNGP63ctJIEC1UnZ0btsphnnoHR&index=3&pp=iAQB)

[^1]: Pela hipótese de que são independentes, $Var\left( \sum X_{i} \right) = \sum Var(X_{i})$; i.e. as [[Covariância]]s são $0$. Note-se também que as variâncias são **finitas**.