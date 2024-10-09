---
date: " 2024-10-08"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241008160905.png]]

# Cálculos preliminares
Sabe-se que a [[Covariância]] é relacionada à [[Correlação]] como
$$
\begin{align}
Cov(X_{i}, X_{i+1}) &= \sigma^{2} Corr(X_{i},X_{i+1})  \\
&= \sigma^{2}\rho
\end{align}
$$
Lembrando também que ambas as operações são comutativas em seus argumentos ($X_{i} \leftrightarrow X_{i+1}$).

# Item 0
O valor esperado da soma é sempre a soma dos valores esperados, independente da distribuição.

# Item 1
Pela definição de variância,
$$
\begin{align}
\mathbb{E}[X_{i}^{2}] &= \text{Var}(X_{i}) - \mathbb{E}[X_{i}]^{2} \\
&= \sigma^{2} - \mu^{2}
\end{align}
$$
Portanto,
$$
\mathbb{E}\left[ \sum_{i} X_{i}^{2}\right] = \sum_{i} \mathbb{E}[X_{i}^{2}] = n (\sigma^{2}- \mu^{2}) \neq n \sigma^{2}
$$

# Item 2
Pela definição de [[Covariância]], 
$$
\begin{align}
Cov(X_{i},X_{i+1}) &= \mathbb{E}[(X_{i}-\mu)(X_{i+1}-\mu)]  \\
&= \mathbb{E}[X_{i}X_{i+1}] - \mu^{2}
\end{align}
$$
Por hipótese, $Cov(X_{i},X_{i+1}) = \rho \sigma^{2}$. Portanto,
$$
\begin{align}
\mathbb{E}[X_{i}X_{i+1}] = \rho \sigma^{2} + \mu^{2} \\
\implies \sum_{i=1}^{n-1} \mathbb{E}[X_{i}X_{i+1}] = (n-1)(\rho \sigma^{2}+\mu^{2})
\end{align}
$$

# Item 3
$\hat{\mu} = \frac{X_{1}+X_{2}}{2}$ é um estimador ([[Estimador Não-Enviesado|não enviesado]] inclusive) da média $\mu$.

Abrindo a fórmula da variância, temos
$$
\text{Var}(\hat{\mu}) = \mathbb{E}\left[ \left( \frac{X_{1}+X_{2}}{2} \right)^{2} \right] - \mu^{2}
$$

Através da covariância, temos
$$
\begin{align}
\text{Var}(\hat{\mu}) &= \frac{1}{4}(\mathbb{E}[X_{1}^{2}+X_{2}^{2}] + 2 \mathbb{E}[X_{1}X_{2}]) - \mu^{2} \\
&= \frac{1}{2}( (\sigma^{2}-\cancel{ \mu^{2} })+ \rho \sigma^{2}+\cancel{ \mu^{2} }) - \mu^{2} \\ 
&= \frac{1}{2}(1+\sigma^{2})\rho - \mu^{2}
\end{align}
$$

O gabarito indica que o resultado é $\frac{1}{2}(1+\sigma^{2})\rho$, mas não parece o caso...

# Item 4
Abrindo a fórmula de $\hat{\sigma}^{2}$, temos
$$
\hat{\sigma}^{2} = \frac{1}{2}\left( \frac{1}{2}(X_{1}^{2}+X_{2}^{2}) - X_{1}X_{2}\right)
$$

Tomando o valor esperado, temos
$$
\begin{align}
\mathbb{E}[\hat{\sigma}^{2}] &= \frac{1}{4}\mathbb{E}[X_{1}^{2}+X_{2}^{2}] - \frac{1}{2}\mathbb{E}[X_{1}X_{2}] \\
&=\frac{1}{2}(\sigma^{2}-\mu^{2}) - \frac{1}{2}(\rho \sigma^{2}+\mu^{2}) \\
&=\frac{1}{2}(1-\rho)\sigma^{2} - \frac{\mu^{2}}{2} \\
&\neq \sigma^{2}
\end{align}
$$

Portanto, $\hat{\sigma}^2$ não é um [[Estimador Não-Enviesado]].

---
### References
- [Exame Nacional de Seleção - Anpec - Provas anteriores](https://exame.anpec.org.br/index.php?r=site/provasAnteriores)