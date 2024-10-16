---
date: " 2024-10-10"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241010203913.png]]

Questão de [[Distribuição de Poisson]].

$X \sim Poisson(\tau)$, $Y \sim Poisson(\mu)$.

# Item 0
Fazendo uma marginalização sobre $X$ (por exemplo), temos que a distribuição de $X+Y$ é igual a $n$ quando[^1]
$$
\begin{align}
P(X+Y = n) &= \sum\limits_{k=0}^{n} P((X+Y = n) \land X = k) \\
&= \sum\limits_{k=0}^{n} \underbrace{ P(X+Y = n \mid X=k) }_{ = P(Y = n-k) } P(X=k) \\
&= \sum\limits_{k=0}^{n} \frac{\tau^{k}}{k!} e^{ -\mu } \frac{\mu^{n-k}}{(n-k)!} e^{ \mu } \frac{n!}{n!} \\
&= {\color{red} \sum\limits_{k=0}^{k} \frac{n!}{k! (n-k)!}} \tau^{k} \mu^{n-k} \frac{e^{ -(\mu+\tau) }}{n!} \\
&= \frac{\color{red}{(\tau + \mu)^{n}}}{n!} e^{ -(\mu+\tau) }
\end{align}
$$
Eu joguei pedra na cruz pra ter que fazer uma prova tão filha da puta assim.

# Item 1
Para qualquer soma de variáveis aleatórias, tem-se que
$$
\mathbb{E}[X+Y] = \mathbb{E}[X] + \mathbb{E}[Y] = \mu + \tau
$$
Inclusive, um *sanity check* é perceber que $(\mu + \tau)$ também é o expoente da distribuição de Poisson de $Z = X + Y$.

# Item 2
$$
\begin{align}
P(Y = k) \land (X+Y= n)) &= P(Y=k) \underbrace{ P(X+Y=n \mid Y=k) }_{ = P(X=n-k)} \\
&= \frac{\mu^{k}}{k!} e^{ -\mu } \frac{\tau^{n-k}}{(n-k)!} e^{ -\tau }
\end{align}
$$
A ordem dos $\mu/\tau$ está trocada no item. Filhos da puta.

# Item 3
$$
\begin{align}
P(Y=k \mid X+Y=n) &= \frac{P((X+Y=n)\land(Y=k))}{P(X+Y=n)} \\
&= \frac{P(X = n-k)}{P(X+Y=n)} \\
&= \frac{\tau^{n-k}}{(n-k)!} \cancel{ e^{ -\tau } } \frac{1}{\frac{(\tau+\mu)^{n}}{n!} e^{ -(\mu+\cancel{ \tau }) }} \\
&= \frac{n!}{(n-k)!} \frac{\tau^{n-k}}{(\tau+\mu)^{n}} e^{ +\mu }
\end{align}
$$

Não faço ideia qual era a conta esperada da pegadinha...

# Item 4
A condicional é dada pelo item 3, que não tem uma forma remotamente parecida com uma [[Distribuição Binomial]] – a qual só possui **um** parâmetro, não dois. O que o cara que fez essa prova tava querendo tava é mole, papo reto...

---
### References
- 

[^1]: Lembrando que a distribuição de Poisson somente assume valores $>0$, assim como a [[Distribuição Binomial]].