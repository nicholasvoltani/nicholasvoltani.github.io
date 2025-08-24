---
date: "2024-08-15"
tags:
  - economics
aliases:
  - Taxa Marginal de Transformação
---

up:: [[062 MOC Microeconomia]]

> "The number $MRTS_{lk}(\bar{z})$ measures the additional amount of input $k$ that must be used to keep output at level $\bar{q} = f(\bar{z})$ when the amount of input $l$ is decreased marginally." (MWG, p. 130)

Assim como a [[Taxa Marginal de Substituição]] para o consumidor, a taxa marginal de substituição técnica trata-se do quanto um insumo muda ao se mudar a quantidade de outro — dada uma quantidade $\bar{q}$ produzida fixa.

Caso haja uma quantidade $\bar{q}$ fixa produzida a partir de certos insumos, então a variação de um insumo deverá induzir uma variação desta quantidade — a menos de uma contra-variação de outro(s) insumo(s). Caso eu **reduza** (marginalmente) o uso de um certo insumo, a taxa marginal de substituição técnica me diz quanto eu devo **aumentar** de outro insumo a fim de manter o nível de produção $\bar{q}$ intacto.

Analogamente ao caso do consumidor, e assumindo [[Função Produção]] $q = f(K,L)$ dada, temos que, quanto estamos em uma [[Isoquanta]], 
$$
\begin{align}
dq = f_{K} \, dK + f_{L} \, dL = 0 \\
\therefore \frac{dK}{dL} = - \frac{f_{L}}{f_{K}}
\end{align}
$$
Ou seja, com uma diminuição (marginal) de força de trabalho, quanto de capital tenho de adicionar (marginalmente) para manter a produção $\bar{q}$ fixa?

# Caso geral
Tendo $F$ uma [[Função Produção#Caso geral]], calcula-se a taxa marginal de substituição *sobre a fronteira de produção* ($F(\bar{y}) = 0$). Variando *netputs* $y_{i}$ e $y_{j}$, a TMST é calculada como
$$
TMST_{ij}(\bar{y}) = - \frac{F_{i}(\bar{y})}{F_{j}(\bar{y})}
$$
onde $F_{k} \coloneqq \frac{ \partial F }{ \partial y_{k} }$. Formalmente,
$$
\begin{align*}
dF(\bar{y}) = F_{i} \, dy_{i} + F_{j} \,dy_{j} = 0 \\
\therefore \frac{dy_{j}}{dy_{i}} = - \frac{F_{i}(\bar{y})}{F_{j}(\bar{y})}
\end{align*}
$$

---
### References
- [5. Production Theory - MIT OpenCourseWare (Jonathan Gruber, 2018)](https://www.youtube.com/watch?v=ftmvsahQ6Wo&list=PLUl4u3cNGP62oJSoqb4Rf-vZMGUBe59G-&index=5)
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.