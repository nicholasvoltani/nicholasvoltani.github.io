---
date: " 2024-11-07"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241107133956.png|600]]

Questão sobre [[Modelo Autorregressivo]] com sazonalidade linear.

# Itens 0: Falso
Tem-se a série temporal
$$
Y_{t} = Y_{t-1} + u_{t}
$$

Fazer a média de $Y_{t}$ requeriria ter a média de $Y_{t-1}$, a qual requereria a média de $Y_{t-2}$ etc. Abrindo a série temporal até o tempo $t=0$, temos
$$
Y_{t} = \cancelto{ 0 }{Y_{0}} + \sum\limits_{i=1}^{t} u_{i}
$$
Portanto, tem-se que
$$
\mathbb{E}[Y_{t}] = 0
$$
Como temos erros de ruído branco, temos que eles são descorrelacionados. Portanto, as variâncias se somam:
$$
Var(Y_{t}) = t \sigma^{2}
$$

# Item 1: Falso
A série temporal fica
$$
Y_{t} = \alpha + Y_{t-1} + u_{t}
$$

Abrindo a série até o tempo $t=0$, temos
$$
Y_{t} = \alpha + \sum\limits_{i=1}^{t}u_{i}
$$

A média é, portanto, $\alpha$.

# Item 2: Verdadeiro
Como os erros são de ruído branco, a variância do item anterior fica $t \sigma^{2}$.

# Item 3: Falso // Item 4: Verdadeiro
A série temporal fica
$$
Y_{t} = \alpha + \beta t + u_{t}
$$

A média e a variância ficam
$$
\begin{cases}
\mathbb{E}[Y_{t}] = \alpha + \beta t \\
Var(Y_{t}) = Var(u_{t})=\sigma^{2} 
\end{cases}
$$
