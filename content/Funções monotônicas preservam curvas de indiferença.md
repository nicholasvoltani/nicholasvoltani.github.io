---
date: " 2024-08-07"
tags:
  - economics
aliases:
---

up:: [[Função Utilidade]]

![[Pasted image 20240807124555.png]]

Dada uma função utilidade $U(x_{1},x_{2})$ e uma função monotônica[^1] $f: \mathbb{R} \to \mathbb{R}$, então temos que a função $f \circ U: \mathbb{R}^{2} \to \mathbb{R}$ é também uma função utilidade.[^2]

Temos que as [[Curva de Indiferença|Curvas de Indiferença]] com alguma utilidade $\bar{U}$ passarão a ter utilidade $f(\bar{U})$, mas o conjunto de [[Cesta de Bens|Cestas de Bens]] indiferentes entre si será o mesmo! A única coisa que aconteceu foi uma "mudança de escala" com que se passa a medir as utilidades.

Note que não teria como essa função monotônica alterar o conjunto de cestas, pois é uma escolha "arbitrária" de unidades, não devendo influenciar as [[Preferências do Consumidor]], **ordinalmente** falando (influencia somente *cardinalmente*, numericamente). (**250404**: De fato, uma função ser *monotônica* significa que ela [*não altera relações de ordem*](https://en.wikipedia.org/wiki/Monotonic_function). )


---
### References
- VARIAN, Hal. **Microeconomia**: uma abordagem moderna. 9 ed. Elsevier, 2015.

[^1]: Ou seja, $\forall x, y \in \mathbb{R}: x \leq y \implies f(x) \leq f(y)$.
[^2]: Tratando somente sobre preferências $\succeq$ (sem falar de utilidades), temos que, se $f: X \to \mathbb{R}$ representa a preferência $\succeq$ (ou seja, $x \succeq y \iff f(x) \geq f(y)$) e $g: \mathbb{R} \to \mathbb{R}$ for uma função monotônica, então $g \circ f$ também representa $\succeq$.