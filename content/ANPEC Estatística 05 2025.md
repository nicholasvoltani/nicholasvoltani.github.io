---
date: " 2024-10-14"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241014110504.png]]

É uma questão sobre [[Lei dos Grandes Números]] e convergência em probabilidade.

# Item 0 – Verdadeiro
É verdadeiro pelo teorema da lei dos grandes números:
Dados $X_{1},\dots,X_{n}$ i.i.d., com média e variância finitas, temos que
$$
plim(\bar{X}) = \mu_{X} = \mathbb{E}[\bar{X}]
$$
**independente da distribuição** dos $X_i$'s.

# Item 1 – Verdadeiro
Dado algum $\epsilon > 0$, temos[^1]
$$
\begin{align}
\lim\limits_{n \to \infty}P(|a + b\bar{X} -a-b\mu_{X}|\geq \epsilon) &= \lim\limits_{n\to \infty}P(|b||\bar{X}-\mu_{X}|\geq \epsilon) \\
&=\lim\limits_{n\to \infty}P\left( |\bar{X} - \mu_{X}| \geq \frac{\epsilon}{|b|} \right) \\
&= 0
\end{align}
$$

Portanto, $plim(a+b\bar{X}) = a + b\mu_{X}$.

# Item 2 – Falso
É falso, mas não sei exatamente por quê. Minha intuição diz que é por causa do $\mu_{T} > \mu_{X}$, mas ser um limite de $\frac{\bar{X}}{\bar{T}}$... E também, eu pensaria que o limite seria $\frac{\mu_{X}}{\mu_{T}}$, como $\mu_{T}>0$...

# Item 3 – Verdadeiro
Por desigualdade triangular, temos que
$$
|\bar{X}-\mu_{X}| + |\bar{Y}-\mu_{Y}| \geq |\bar{X}-\mu_{X} + \bar{Y}-\mu_{Y}|
$$

Tendo $\epsilon>0$, temos que
$$
\begin{align}
\lim\limits_{n\to \infty} &P(|\bar{X}+\bar{Y}-\mu_{X}-\mu_{Y}|\geq\epsilon) \\
&\leq \lim\limits_{n\to \infty}P(|\bar{X}-\mu_{X}| + |\bar{Y}-\mu_{Y}| \geq \epsilon)
\end{align}
$$
Assumindo que $|\bar{X}-\mu_{X}| \geq \frac{\epsilon}{2}$ e idem para $\bar{Y}$, temos que, em particular,
$$
\begin{align}
\{|\bar{X}-\mu_{X}| + &|\bar{Y}-\mu_{Y}| \geq \epsilon\}  \\
&\subset \left\{ |\bar{X}-\mu_{X}|\geq \frac{\epsilon}{2} \right\} \cup \left\{ |\bar{Y}-\mu_{Y}|\geq \frac{\epsilon}{2} \right\}

\end{align}
$$
pois $\epsilon>0$ e $|\dots| > 0$.

Portanto, temos
$$
\begin{align}
\lim\limits_{n\to \infty} &P(|\bar{X}+\bar{Y}-\mu_{X}-\mu_{Y}|\geq\epsilon) \\
&\leq \lim\limits_{n\to \infty}P\left( |\bar{X}-\mu_{X}| \geq \frac{\epsilon}{2})\right)+ P\left(|\bar{Y}-\mu_{Y}| \geq \frac{\epsilon}{2} \right) \\
&= 0
\end{align}
$$
Portanto, $plim(\bar{X}+\bar{Y}) = plim(\bar{X})+plim(\bar{Y})$.

# Item 4 – Verdadeiro
Supondo $Z_{i}$ [[Distribuição de Bernoulli]] $Bern(p)$, temos que $\mathbb{E}[Z_{i}]=p$ e $Var(Z_{i}) = p(1-p)$.

Logo, $plim(\bar{Z})=p$ (vide item 0), e
$$
Var(\bar{Z}) = n \left( \frac{p(1-p)}{n^{2}} \right) = \frac{p(1-p)}{n}
$$
que vai a $0$ conforme $n \to \infty$.

---
### References
- [Conditions for convergence in probability of a sum - Mathematics Stack Exchange](https://math.stackexchange.com/questions/2665208/conditions-for-convergence-in-probability-of-a-sum)

[^1]: Implicitamente tendo que $\bar{X} \equiv \bar{X}_{n}$.