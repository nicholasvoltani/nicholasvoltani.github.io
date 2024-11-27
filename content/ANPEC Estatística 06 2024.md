---
date: " 2024-11-19"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241119120125.png|500]]

Questão sobre [[Teste de Hipótese]], com [[Distribuição Binomial]].

# Informações Preliminares
- $n=5$
- $p=\frac{1}{2}$
- $Y \sim Bin(n, p)$
- $H_{0}: Y < 4$, i.e. novo processo *não* alterou taxa de defeitos (significativamente)
	- Ou seja, rejeitar a hipótese nula quer dizer que $4 \leq Y \leq 5$

# Cálculos
Buscamos o [[Nível de Significância]] $\alpha$, i.e. probabilidade de erro de tipo I, de rejeitar hipótese nula quando ela é, de fato, verdadeira. Supondo que $Y \sim Bin\left( 5, \frac{1}{2} \right)$, temos
$$
\begin{align}
\alpha &= P(Y \geq 4 \mid Bin) = {5 \choose 4} \left( \frac{1}{2} \right)^{4} \frac{1}{2} + {5 \choose 5} \left( \frac{1}{2} \right)^{5} \\
&= \frac{5 + 1}{32} \\
&= \frac{6}{32}  \\
&= \frac{3}{16} = \frac{3}{4} \frac{1}{4}\\
&= \frac{0.75}{4} \\
&\approx 0.18
\end{align}
$$

Portanto, a resposta é $18$.

