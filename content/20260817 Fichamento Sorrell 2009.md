---
date: "2026-08-17"
tags:
  - daily
draft: "false"
aliases:
---

up:: [[0x51a MOC Revisão de Literatura Rebound-Backfire Effect]]

O resumo do argumento de @Sorrell2009 é que
> "the arguments and evidence used in support of Jevons’ Paradox are closely linked to broader questions regarding *the contribution of energy to productivity improvements and economic growth*" [@Sorrell2009, p. 1457, grifo meu]

O aumento de eficiência de serviços energéticos permite a redução de seu *preço implícito*. A definição deste conceito:
> "Individual energy-efficiency improvements do not change the price of input energy, but instead lower the effective price of output energy, or useful work. For example, *motor-fuel prices* may be unchanged following an improvement in vehicle fuel efficiency, but the *price per vehicle kilometre* is reduced." [@Sorrell2009, p. 1461, grifo meu]

Ou seja, no que tange a "serviços energéticos", o que importa não é o preço do que o abastece, e sim o preço *do consumo deste serviço*. É por isso que é pertinente o resultado a que @Khazzoom1980 chega, de que a [[Elasticidade de Preço da Demanda|elasticidade-preço]] do *serviço energético* está relacionada com a elasticidade-eficiência *do combustível que a abastece*: porque o que interessa ao consumidor, no final do dia, é o quanto ele adquire pelo tanto que ele paga, e a ele interessa sempre conseguir *more bang for his buck*. 

# Total factor productivity
> "Total factor productivity (TFP) is normally defined as the rate of growth of economic output minus the weighted sum of the rate of growth of inputs—with each input being weighted by its share in the value of output." [@Sorrell2009, p. 1458, n. 2]

Assumindo que o produto siga uma [[Função Produção]] $Y=f(K_i)$, temos que sua taxa de crescimento é
$$
\dot{Y} \equiv \frac{dY}{dt} \frac{1}{Y}
$$
Ou seja, abrindo-a em termos das taxas de crescimento dos [[Fatores de Produção]], temos
$$
\begin{align*}
\dot{Y} &= \frac{1}{Y} \sum \limits_{i}\left( K_{i} \frac{ \partial Y }{ \partial K_{i} } \frac{dK_{i}}{dt} \frac{1}{K_{i}} \right) \\
&= \frac{1}{Y} \sum \limits_{i} \left( K_{i} \frac{ \partial Y }{ \partial K_{i} } \dot{K}_{i}  \right) \\
&= \sum \limits_{i} \frac{ \partial Y }{ \partial K_{i} } \frac{K_{i}}{Y}  \dot{K}_{i} 
\end{align*}
$$

Dessa forma, a produtividade total de fatores é da forma
$$
\begin{align*}
TFP &\coloneqq \dot{Y} - \sum \limits_{i} \frac{K_{i}}{Y} \dot{K}_{i} \\
&= \sum \limits_{i} \left( \frac{ \partial Y }{ \partial K_{i} } -1 \right) \frac{K_{i}}{Y} \dot{K}_{i}
\end{align*}
$$

Para uma [[Função de Cobb-Douglas]] $Y=\prod \limits_{i} K_{i}^{\alpha_{i}}$, teremos
$$
\frac{ \partial Y }{ \partial K_{i} }  = \alpha_{i} K_{i}^{\alpha_{i}-1} \prod \limits_{j \neq i} K_{j}^{\alpha_{j}} = \alpha_{i} \frac{Y}{K_{i}}
$$
Assim, temos que
$$
\begin{align*}
\dot{Y}= \frac{1}{Y}\frac{dY}{dt} &= \frac{ \partial Y }{ \partial K_{i} } \frac{dK_{i}}{dt} \\
&= \frac{1}{Y} \sum \limits_{i} \alpha_{i} \frac{Y}{K_{i}} \frac{dK_{i}}{dt} \\
&= \sum \limits_{i} \alpha_{i} \dot{K}_{i}
\end{align*}
$$

Ou seja, para a função usual de Cobb-Douglas, a produtividade total de fatores é nula.



---
### Referências
