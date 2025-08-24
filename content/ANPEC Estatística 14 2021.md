---
date: "2024-11-07"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241107142003.png|600]]

Questão sobre [[Modelo de Médias Móveis]] $\text{MA}(2)$:
$$
X_{t} = \theta_{0} Y_{t} + \theta_{1}Y_{t-1}+\theta_{2}Y_{t-2}
$$
onde $\theta_{0}\equiv 1$ por definição.

\[Desumano usar $Y_{t}$ para destacar ruídos brancos.\]

# Item 0: Verdadeiro
Trivial: linearidade do valor esperado de combinação linear de ruídos brancos.

# Item 1: Falso
Como os ruídos são descorrelacionados, temos que a variância é a soma(-ish) das variâncias:
$$
\begin{align}
Var(X_{t}) &= \left( 1 + \frac{1}{4} + \frac{1}{25}\right) \sigma^{2} \\
&= \frac{100 + 25 + 4}{100} \sigma^{2}  \\
&= 1.29 \sigma^{2}
\end{align}
$$

---
Para os próximos itens, deve-se considerar que, para um modelo $\text{MA}(q)$, a covariância de termos com "gap" $k \leq q$ corresponderá à soma dos termos $\theta_{t}\theta_{t+k}$, todos vezes a variância dos erros $\sigma^{2}$.

# Item 2: Verdadeiro
Para um gap de $1$, temos que os seguintes termos sobram:
$$
\theta_{0}\theta_{1}, \theta_{1}\theta_{2}
$$

Portanto, a covariância fica
$$
\begin{align}
Cov(X_{t},X_{t-1}) &= \left( 1\cdot \frac{1}{2} -\frac{1}{2} \frac{1}{5} \right) \sigma^{2} \\
&= \frac{1}{2} \frac{4}{5} \sigma^{2} \\
&= \frac{2}{5} \sigma^{2} \\
&= 0.4 \sigma^{2}
\end{align}
$$

# Item 3: Falso
Os termos que distam de $2$ são somente $\theta_{0}\theta_{2}$. Portanto,
$$
Cov(X_{t},X_{t-2}) = -\frac{1}{5} \sigma^{2}
$$

# Item 4: Verdadeiro
Não há termos que se "entrecruzam" com um gap de $k \geq 3$. Portanto,
$$
\forall k\geq 3: Cov(X_{t}, X_{t-k}) = 0
$$

---
### References
- [Time Series: Autoregressive models AR, MA, ARMA, ARIMA (Mingda Zhang)](https://people.cs.pitt.edu/~milos/courses/cs3750/lectures/class16.pdf)
- [RPubs - Modelos de Médias Móveis (MA) (Hudson Chaves Costa)](https://rpubs.com/hudsonchavs/modeloma)