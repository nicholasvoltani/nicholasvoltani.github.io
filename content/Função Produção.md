---
date: " 2024-08-15"
tags:
  - economics
aliases:
---

up:: [[061 MOC Macroeconomia]], [[062 MOC Microeconomia]] 

A função produção de uma firma é função $F$ da [[Força de Trabalho]] $L$ e do capital $K$ que ela emprega[^1]. Essa função dá a quantidade de unidades de um bem produzidas:
$$
q = F(K, L)
$$

O [[Produto Marginal do Trabalho]] é quantas unidades a mais são produzidas ao aumentar uma unidade de força de trabalho, $\frac{\partial q}{\partial L}$. Assumem-se **rendimentos marginais decrescentes**, em $L$ e em $K$.

[Quando] Podemos inverter em função de $K$, de tal forma que temos $K = g(q, L)$. Dessa forma, as [[Isoquanta]]s são como [[Curva de Indiferença|Curvas de Indiferença]]: curvas de nível no tocante ao número de unidades $q$ produzidas.

# Caso geral
No caso geral, pressupomos a função produção como uma função
$$
F: \mathbb{R}^L \to \mathbb{R}
$$
onde $y_{i} <0$ é um *insumo* e $y_{i}>0$ é um *produto*; $y_{i}=0$ é algo cuja produção líquida é $0$.[^2]

O **conjunto de produção** $Y$ é definido como
$$
Y \coloneqq \{y \in \mathbb{R}^L \mid F(y) \leq 0\}
$$
e a fronteira onde $F(y) = 0$ é dita a **fronteira de produção**.

![[Pasted image 20250612110508.png|500]]
Fonte: MAS-COLLELL, WHINSTON, GREEN, p. 129.





---
### References
- [5. Production Theory - MIT OpenCourseWare (Jonathan Gruber, 2018)](https://www.youtube.com/watch?v=ftmvsahQ6Wo&list=PLUl4u3cNGP62oJSoqb4Rf-vZMGUBe59G-&index=5)
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: Também das unidades de terra que emprega, mas geralmente não contabilizam isso.
[^2]: O que (creio eu) não necessariamente quer dizer que "não é utilizado", e sim que o tanto que ele é consumido como insumo é (em módulo) igual ao quanto ele é produzido de volta. Imagino que isso tenha a ver com *partes do processo produtivo*: pode ser que, num processo $1$, consuma-se um insumo $i$, e, no processo $2$ subsequente, ele seja produzido na mesma quantidade; ou seja, ao final do processo $2$ (visto com relação ao início de $1$), houve uma produção líquida de $0$ do insumo $i$. 