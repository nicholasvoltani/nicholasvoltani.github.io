---
date: "2026-03-30"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]]

# Exercícios
::: exercise
Mostre que o [[Equivalente Certo]] de uma função utilidade exponencial $u(x) = - e^{-ax}$ assume a forma de uma *média harmônica ponderada*, ao se escrever $x_i = \ln \frac{\tilde{x_{i}}}{a}$:
$$
C(L, a) = \frac{1}{a} \ln \left( \frac{1}{\sum \limits_{i} p_{i} x_{i}^{-1}} \right)
$$
:::

2) Mostre que o equivalente certo de uma função utilidade isoelástica $u(x) = \frac{x^{1-\rho}-1}{1-\rho}$ assume a forma de uma *$(1-\rho)$-norma ponderada*, i.e. 
   $$
   C(L, \rho) = \left( \sum \limits_{i} p_{i} x_{i}^{1-\rho} \right)^{1/(1-\rho)}
   $$


$$
\begin{align}
\frac{ \partial x^{1-\rho} }{ \partial \rho } &=  \\
&= \frac{ \partial  }{ \partial \rho } e^{\ln (x^{1-\rho})}  \\
&= \frac{ \partial  }{ \partial \rho } e^{(1-\rho) \ln x}   \\
&= \frac{ \partial  }{ \partial \rho } e^{-\rho \ln x} \\
&= -\ln x \, e^{-\rho \ln x}  \\
&= -\ln x e^{\ln x^{-\rho}} \\
&=\ln x \, x^{-\rho}
\end{align}
$$

# Resoluções

