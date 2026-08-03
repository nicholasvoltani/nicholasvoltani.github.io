---
date: "2024-10-19"
tags:
  - economics
aliases:
---

up:: [[Deflator Implícito]]

Pela fórmula,
$$
\text{DeflatorImplícito} = \frac{\text{PIB Nominal}}{\text{PIB Real}} \cdot 100
$$

Fixando-se algum *ano base* ${\color{magenta}t}$ [^1], temos que o [[Produto Interno Bruto Nominal|PIB Nominal]] de algum período $t' \neq {\color{magenta}t}$ é
$$
\text{PIBN}_{t'} = \sum\limits_{i} Q_{i}^{t'} P_{i}^{t'}
$$

O deflator implícito busca fazer uma análise do impacto da *variação de preços* no PIB, mantendo-se a quantidade produzida de bens $Q_{i}$ constante. Como a quantidade à época é algo imutável a referenciais de tempo diferentes, denote-se $Q_{i} \equiv Q_{i}^{t'}$. 

Fazendo a razão do PIB nominal da época $t'$ com o que seria um PIB nominal à época ${\color{magenta}t}$ mas com a mesma quantidade de bens $Q_{i}$ (e multiplicando por 100, por convenção), temos a definição do deflator implícito ao tempo $t'$
$$
\begin{align}
\text{DeflatorImplícito}^{t'} &= \frac{\sum\limits_{i} Q_{i} P_{i}^{t'}}{\sum\limits_{i}Q_{i}P_{i}^{\color{magenta}t}} \cdot 100 \\
&= \frac{\text{PIBNominal}^{t'}}{\text{PIBReal}^{{\color{magenta}t}}} \cdot 100
\end{align}
$$

Note que, por definição, **o deflator implícito no ano base é 100**, pois as comparações e variações são medidas *com referência ao ano base*. Só faz sentido falar de variação real de poder de aquisição quando se compara com algum período distinto!


---
### References
- GREMAUD, Amaury Patrick et al. **Macroeconomia básica: agregados macroeconômicos**. In: LOPES, Luiz Martins et al. *Manual de macroeconomia: nível básico e nível intermediário*. 1997.

[^1]: Ou seja, um ano em que o PIB nominal é o mesmo que o PIB real. Mesma coisa que "ano corrente", onde geralmente se usa o ano atual para medições do passado, mas também pode ser algum ano passado para medições posteriores, cf [[ANPEC Macroeconomia 09 2025]].
[^2]: Pois assume-se, por hipótese, que o PIB real foi medido *em moeda à época $t$*.