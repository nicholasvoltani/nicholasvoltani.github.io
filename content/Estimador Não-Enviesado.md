---
date: " 2024-09-11"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

Um estimador $\hat{\theta}$ de algum parâmetro $\theta$ é dito ser *não-enviesado* (ou *não-viciado*) quando o [[Viés de Estimação]] é zero
$$
B(\hat{\theta}) \equiv \mathbb{E}(\hat{\theta}) - \theta = 0
$$

O estimador da média $\hat{\mu}$ é não-enviesado, pois
$$
\begin{align}
\mathbb{E}(\hat{\mu}) = \mathbb{E}\left( \frac{\sum\limits_{i=1}^{N}X_{i}}{N} \right) &= \sum\limits_{i=1}^{N}\mathbb{E}(X_{i}) = \mu\\
&\therefore B(\hat{\mu}) = 0
\end{align}
$$

O estimador da variância é não-enviesado mediante [[Correção de Bessel]], i.e. se o estimador for
$$
\frac{\sum\limits_{i=1}^{N} (X_{i}-\bar{X})}{N-1}
$$
(Note que ele depende da *amostra da média* $\bar{X}$.)

---
### References
- [docs.ufpr.br/\~niveam/micro da sala/livro/estimacao.pdf](https://docs.ufpr.br/~niveam/micro%20da%20sala/livro/estimacao.pdf)