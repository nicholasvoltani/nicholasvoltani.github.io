---
date: " 2024-08-08"
tags:
  - economics
aliases:
---

up:: [[Taxa de Juros]]

![[Pasted image 20240808172516.png]]

A taxa real de juros de algum ativo consiste no **poder de compra** que seu rendimento terá. Consiste na [[Taxa Nominal de Juros]], após ajustes de [[Inflação]] (esperada para o período do investimento).

Sendo $i_t$ a taxa nominal de juros de algum investimento, e $\pi^{e}$ a inflação esperada ao momento $t$, temos que a taxa real de juros no instante $t$, $r_{t}$, será dada pela fórmula
$$
1+r_{t} = \frac{1+i_{t}}{1+\pi^{e}}
$$

Para inflações $|\pi^{e}| \ll 1$, temos que a fórmula pode ser aproximada como
$$
r_{t} \approx i_{t} - \pi^{e}
$$
Porém, cautela deve ser tomada quando inflações/deflações severas são previstas, em cujos casos deve-se usar a fórmula real.

# Simulações da aproximação da fórmula de taxa real de juros
Para valores atuais (08/08/2024), temos que
- [Taxa SELIC](https://www.bcb.gov.br/controleinflacao/taxaselic) = $10.50\% \, a.a.$ = Taxa Nominal de Juros $i$[^1]
- [Projeção de Inflação para 2024](https://www.bcb.gov.br/publicacoes/ri): $\pi^{e} = 4.0\%$
- $i - \pi^{e} = 0.65\% \,a.a.$
- $r = 0.625\% \,a.a. \approx i-\pi^{e}$

Alterando somente a estimativa de inflação para um caso de hiperinflação, [por exemplo no Brasil ao final da ditadura](https://pt.wikipedia.org/wiki/Hiperinfla%C3%A7%C3%A3o#Am%C3%A9rica_Latina)$\pi^{e} = 166\%$, teríamos
- $i - \pi^{e} = -155\%$
- $r = -58\% \ll -155\%$


---
### References
- [Lecture 7: An Extended IS-LM Model - MIT OpenCourseWare (Ricardo Caballero, 2023)](https://www.youtube.com/watch?v=fkiWQZPOHXk)

[^1]: A taxa SELIC tende a nortear o valor das taxas de juros do mercado.