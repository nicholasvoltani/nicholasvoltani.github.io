---
date: "2026-02-24"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]] // [[062 MOC Microeconomia]]

# Conceitos introdutórios


# Exercícios

(**Exercício 2.1**) Um consumidor consome um bem de consumo $x$ e usufrui de uma quantidade de horas de lazer $h$. O preço do bem de consumo é $p$, e o consumidor pode trabalhar a uma taxa salarial de $s \in \mathbb{R}^+$ (salário *positivo*!). Qual é o conjunto orçamentário walrasiano do consumidor (em notação matemática)? Note que $0 \leq h \leq 24$ !


(**Exercício 2.2**) Mostre que, se uma demanda walrasiana $x(p,w) \in \mathbb{R}^L$ ($x$ é um vetor de $L$ elementos) é homogênea de grau $1$ em relação a $w$ — isto é, $x(p, \alpha w) = \alpha x(p,w)$ —, e satisfaz a lei de Walras, então 
$$
\epsilon_{lw}(p, w) = 1 \,\, (l = 1, 2, \dots, L)
$$
O que isso quer dizer sobre $\frac{ \partial x_{l}(p,w) }{ \partial w}$ e, portanto, sobre a respectiva curva de Engel desta demanda? (Dica: é possível ter-se $\alpha = \frac{1}{w}$...)


(**Exercício 2.3**) Uma função de utilidade de Cobb-Douglas de uma dada cesta de $n$ bens $\vec{x}=(x_{1},\dots,x_{n})$ é definida como
$$
U(x_{1},\dots,x_{n}) = \prod\limits_{i=1}^{n} x_{i}^{\alpha_{i}} = x_{1}^{\alpha_{1}}x_{2}^{\alpha_{2}}\dots x_{n}^{\alpha_{n}}
$$
em que $\sum\limits_{i=1}^{n} \alpha_{i} = 1$. Supondo que o vetor de preços é $\vec{p}=(p_{1},\dots,p_{n}) \in \mathbb{R}^{n}_{+}$ e que a restrição orçamentária seja
$$
\left\{  \vec{x} \in \mathbb{R}^n : \vec{x} \cdot \vec{p} = \sum \limits_{i=1}^{n} x_{i}p_{i} \leq w  \right\}
$$
Mostre, através da minimização com multiplicadores lagrangianos, que a demanda walrasiana, para cada bem $i = 1, \dots, n$, é da forma
$$
x^*_{i}(p,w) = \alpha_{i} \frac{w}{p_{i}}
$$

**Dica**: Note que as condições de multiplicadores lagrangianos dão a identidade, para cada $i,j = 1, \dots, n$,
$$
\frac{\alpha_{i}}{p_{i} x^*_{i}} = \frac{\alpha_{j}}{p_{j} x^*_{j}}
$$
Através dela, verifique que se pode concluir que a demanda ótima de Cobb-Douglas é tal que
$$
\alpha_{i} = \frac{p_{i}x_{i}}{w}
$$
Ou seja, os coeficientes $\alpha_{i}$ do bem $i$ dão o percentual da renda ($w$) que é despendida no bem $i$ ($p_{i}x_{i}$).

Calcule também a elasticidade-renda $\epsilon_{lw}(p,w)$ dessa demanda.

(**Exercício 2.4**) Uma função de utilidade quase-linear em $\mathbb{R}^{2}$ tem a forma
$$
U(x_{1},x_{2}) = x_{1} + v(x_{2})
$$
onde $v(x)$ é alguma função. Seja $\vec{p}=(p_{1},p_{2}) \in \mathbb{R}^{2}_{+}$ o vetor de preços, e uma restrição orçamentária dada por $w \in \mathbb{R}$. 

Calcule a demanda walrasiana $\vec{x}^*$ para $v(x_{2}) = \sqrt{ x_{2} }$ e para $v(x_{2}) = \ln x_{2}$. 

Note que essas demandas walrasianas não determinam $x_{1}$! Isso quer dizer que, dados $\vec{p}$ e $w$, o conjunto de cestas
$$
\{ m \in \mathbb{R}: (m,x_{2}^*) \}
$$
dado o $x_{2}^*$ ótimo, são todas cestas ótimas. 

Calcule também a elasticidade-renda $\epsilon_{lw}(p,w)$ dessa demanda.

(**Exercício 2.5** — Extenso!) Uma função de utilidade CES[^1] é da forma
$$
U(x_{1},x_{2}) = (\alpha_{1} x_{1}^\rho + \alpha_{2}x_{2}^\rho)^{1/\rho}
$$
para dado $\rho \in (-\infty, 1]$. Dado vetor de preços $\vec{p} = (p_{1},p_{2}) \in \mathbb{R}^{2}$ e restrição orçamentária $w$, obtenha a demanda walrasiana $\vec{x}^*$. 

**Dica**: Pelo exercício 1.3, a demanda ótima de $U(\vec{x})$ é a mesma que a de[^2] $\tilde{U}(\vec{x}) \coloneqq \rho \, U(\vec{x})^{\rho} = \rho \, (\alpha_{1} x_{1}^\rho + \alpha_{2}x_{2}^\rho)$, o que facilita os cálculos.

Calcule também a elasticidade-renda $\epsilon_{lw}(p,w)$ dessa demanda.


(**Exercício 2.6**) Dada a função de utilidade CES (vide acima), demonstre que ela tende às funções de utilidade
1) linear quando $\rho \to 1$
2) Cobb-Douglas quando $\rho \to 0$ (supondo que $\alpha_{1} + \alpha_{2} = 1$). **Dica**: Caso não tenha resolvido o exercício acima, pode ser útil fazer o limite para $\tilde{U}(\vec{x}) = \ln U(\vec{x}) = \frac{1}{\rho} \ln(\alpha_{1} x_{1}^\rho + \alpha_{2}x_{2}^\rho)$. Além disso, lembre-se que[^3] $\frac{ \partial x^\rho }{ \partial \rho } = \frac{ \partial  }{ \partial \rho } \exp(\ln x^\rho) = \ln(x) x^\rho$ (a derivada **não é em relação a $x$**!)
3) Leontief quando $\rho \to -\infty$

**Recomendação**: Uma boa visualização da função CES pode ser encontrada em [CES Utility Function - EconGraphs](https://www.econgraphs.org/textbooks/intermediate_micro/scarcity_and_choice/preferences_and_utility/ces.html). 

(**Exercício 2.7**) Mostre que as elasticidades de substituição $\xi_{12}$ da função de utilidade CES são
1) $\xi_{12} \to -\infty$ quando $\rho \to 1$ (utilidade linear)
2) $\xi_{12} \to -1$ quando $\rho \to 0$ (utilidade Cobb-Douglas)
3) $\xi_{12} \to 0$ quando $\rho \to -\infty$ (utilidade de Leontief)









---
### Referências
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: *Constant Elasticity of Substitution*.
[^2]: $\coloneqq$ é um símbolo que indica uma definição de uma nova variável.
[^3]: Rigorosamente, só podemos fazer $z = \exp(\ln z)$ se $z > 0$. Esta condição é satisfeita, pois estamos sempre falando de cestas de bens que tenham ao menos "um pouco de cada bem". Sim, estamos fugindo de Kuhn-Tucker como o diabo foge da cruz!