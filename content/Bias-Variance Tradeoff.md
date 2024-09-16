---
date: " 2024-09-11"
tags:
  - mathematics
aliases:
  - Tradeoff Viés-Variância
---

up:: [[064 MOC Estatística em Economia]]

O erro quadrático médio de um estimador é dado por
$$
MSE = \mathbb{E}[(\hat{\theta} - \theta)^{2}]
$$

Abrindo a equação, temos
$$
\begin{align}
MSE &= \mathbb{E}[\hat{\theta}^{2} - 2\theta \hat{\theta} + \theta^{2}] \\
&= \mathbb{E}[\hat{\theta}^{2}] - 2\theta \mathbb{E}[\hat{\theta}] + \theta^{2}
\end{align}
$$

Sabendo que $Var(\hat{\theta}) = \mathbb{E}[\hat{\theta}^{2}] - \mathbb{E}[\hat{\theta}]^{2}$, temos
$$
\begin{align}
MSE &= Var(\hat{\theta}) + \underbrace{ \mathbb{E}[\hat{\theta}^{2}] - 2 \theta \mathbb{E}[\hat{\theta}] + \theta^{2 }}_{(\mathbb{E}[\hat{\theta}] - \theta)^{2}} \\
&= Var(\hat{\theta}) + Bias(\hat{\theta})^{2}
\end{align}
$$

Portanto, há um *tradeoff* entre um [[Estimador Não-Enviesado]] (viés = 0) e um estimador mais "acurado" (menor variância). 

Um estimador que minimize o erro quadrático médio se chama [[Estimador Eficiente]].

---
### References
- [Estimator - Wikipedia](https://en.wikipedia.org/wiki/Estimator#Relationships_among_the_quantities)