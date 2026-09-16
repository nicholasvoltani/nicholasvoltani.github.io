---
date: "2026-08-13"
tags:
  - daily
draft: "false"
aliases:
---

up:: [[0x51 MOC Dissertação Mestrado]]

# Informações médias
- $N=12$ unidades de mercadoria *produzidas*
- $\bar{c}=6 \text{ pence/un. produzida}$
- $\bar{v}=6\text{ pence/hora}$
- $J=12\text{ horas}$ de trabalho

Ou seja, o [[valor]] produzido neste tempo é
$$
\bar{c}N + \bar{v}J = (6+6)\text{ sh.}=12\text{ sh.}
$$
(Lembrando que $12\text{ pence}=1\text{ sh.}$)

Ademais, para o tratamento da eficiência dos meios de produção, é necessário supor que há uma proporcionalidade entre a quantidade de qualquer meio de produção singular e a quantidade da mercadoria empregada. Por exemplo, se tratamos de $12\text{ kg}$ de fio produzido a partir de e.g. $12\text{ kg}$ de algodão, então tal constante de proporcionalidade será
$$
\alpha \coloneqq 1\text{ kg fio/kg algodão}
$$
Note-se que, como pressupomos que *todas* as quantidades de meios de produção empregados são proporcionais entre si, não há perda de generalidade sobre qual meio específico utilizar. Pode-se igualmente pensar, por exemplo, na quantidade de fusos empregados, e.g. 
$$
\frac{1}{\beta} \coloneqq 6\text{ fusos/kg fio} \iff \beta = \frac{1}{6} \text{ kg fio/fuso}
$$
pois há alguma proporcionalidade específica entre a quantidade de fusos empregada para cada kg de algodão empregado, tal que não haja inconsistência entre todas as quantidades, por exemplo
$$
\alpha = \gamma \beta
$$
onde as unidades de $\gamma$ são
$$
[\gamma] = \text{fuso/kg algodão}
$$
de tal forma que a multiplicação $\gamma \beta$ tenha unidades de $\alpha$, i.e. kg fio por kg de algodão.

Neste caso, é necessário que
$$
\begin{align*}
\gamma &= \alpha / \beta \\
[\gamma] &= 6 \text{ fusos/kg algodão}
\end{align*}
$$

Por fim, é necessário, por rigor matemático, dizer que *sempre há algum meio de produção empregado* para a produção de qualquer mercadoria, e, portanto, *sempre* há alguma quantidade que possa exercer o papel desta quantidade $\alpha$. Dito de forma matemática: o conjunto de variáveis que quantificam os meios de produção empregados não é vazio, de forma que sempre há alguma variável que possa ser escolhida; ademais, *ex hypothesi* não há perda de generalidade na variável escolhida, todas são igualmente passíveis de serem escolhidas (no caso acima, tanto faz se kg de algodão ou fusos quantificam a produção de kg de fios).

# Produtividade do trabalho
Há um ganho de [[Produtividade do Trabalho|produtividade do trabalho]] quando "poupa-se trabalho" para a produção de uma mesma quantidade de mercadorias. Pode-se ver isso por duas lentes: ou produz-se mais mercadorias do que a média em *dado período de tempo*, ou produz-se em menos tempo uma *dada quantidade de mercadorias*. No exemplo de Marx [@Marx2017, p. 391], temos que um capital excepcionalmente produtivo produz o dobro de mercadorias *em uma jornada de trabalho de 12 horas*, i.e. produz $24$ mercadorias invés da quantidade média de $12$ neste mesmo tempo. Equivalentemente, ele produz $12$ mercadorias *em menos tempo* do que $12$ horas. Seja $p>1$ o que mede seu grau de produtividade, i.e. o fator multiplicativo de quantas mercadorias ele produz, *vis-à-vis* produção média, *em dado período de tempo*.

Note-se que o "valor social" — doravante, *valor*, pois o valor *é uma categoria social*, medida pelo [[Tempo de Trabalho Socialmente Necessário]] — produzido em $12$ horas é
$$
6 \text{ sh.} + 6\text{ sh.} = 12 \text{ sh.}
$$
em que o [[Capital Constante|capital constante]] que transfere seu valor é
$$
\begin{align*}
\bar{c} N &= 6\text{ pence/mercadoria produzida} \cdot 12\text{ mercadorias produzidas} \\
&=6 \text{ sh.}
\end{align*}
$$
e o valor produzido pelo [[Capital Variável|capital variável]] é
$$
\begin{align*}
\bar{v} J &= 6\text{ pence/hora trabalhada} \cdot 12 \text{ horas trabalhadas} \\
&= 6\text{ sh.}
\end{align*}
$$

Olhando para o período de tempo $\Delta t^{\prime}<J$ em que o capital excepcionalmente produtivo produz $12$ mercadorias — sendo que produz $24$ em $J=12$ horas —, temos que a média, e portanto ele próprio, emprega $\bar{c}N^{\prime}$ em capital constante e produz $\bar{v}\Delta t^{\prime}$ através de seu capital variável, portanto tendo produto de valor
$$
\bar{c} N^{\prime}+ \bar{v} \Delta t^{\prime}
$$

Como o *valor unitário médio* é o mesmo para qualquer quantidade $N^{\prime}$ produzida — além de supormos uma proporcionalidade entre sua produção e o capital empregado para tal —, teremos que
$$
\begin{align*}
\frac{\bar{c} \frac{N}{p} + \bar{v}\Delta t^{\prime}}{\frac{N}{p}} &= \frac{\bar{c}N + \bar{v}J}{N} \\
\bar{c} + p \Delta t^{\prime} \frac{\bar{v}}{N} &= \bar{c} + J \frac{\bar{v}}{N} \\
\iff p \Delta t^{\prime} &= J
\end{align*}
$$
A equação simplifica de tal forma que
$$
\Delta t^{\prime}= \frac{J}{p}
$$
o que é intuitivo: se ele produz o dobro da quantidade que se produz em média em dado período de tempo, então ele produz metade desta quantidade na metade deste tempo (idem para o capital médio).

Olhando agora para a produção na jornada original de $J=12$ horas, temos que ele produz $pN>N$, mas o valor unitário é o mesmo que o da média. Portanto, e agora destacando $\bar{v}_{K}$ como sendo o quanto *aparece* que ele despende por hora de trabalho e $\bar{v}_{m}$ como sendo este custo médio, temos que
$$
\begin{align*}
\frac{\bar{c} pN + \bar{v}_{K} J}{pN} &= \frac{\bar{c} N + \bar{v}_{m} J}{N} \\
 \iff\bar{c} N + \frac{\bar{v}_{K}}{p} \frac{J}{N} &= \bar{c} + \bar{v}_{m} \frac{J}{N} \\
\therefore \bar{v}_{K} &= p \bar{v}_{m}
\end{align*}
$$

Ou seja, *parece* que a força de trabalho de um capital excepcionalmente produtivo *produz mais valor por hora* em dado período de tempo, comparado com a média. Tal aparência não é mera ilusão: como todos os capitais produzem esta quantidade média de valor, então um capital mais produtivo — ou melhor, um capital que empregue *força de trabalho mais produtiva*, com dados meios de produção empregados — de fato "faz mais com menos", ou, como na expressão em inglês, *gets more bang for their buck*.

# Eficiência dos meios de produção
Há um ganho em [[Eficiência (Marx)|eficiência]] quando requer-se um dispêndio menor em meios de produção, comparado com a média, para uma mesma quantidade de mercadorias em dado período de tempo, com mesmo dispêndio de força de trabalho. 

Tal quantificação de eficiência, porém, requer que se meça a *quantidade de meios de produção* que são poupados; não se pode, como seria esperado, medir o quanto ele "poupa em dinheiro" em sua produção, pois seu dispêndio *já está remetido à média da qual ele faz parte*. É por isso que ==Marx (?)== emprega o exemplo em que o capital médio emprega $12\text{ kg}$ de algodão para produzir $10\text{ kg}$ de fios, enquanto um capital mais eficiente pode empregar e.g. $10\text{ kg}$ para produzir a mesma quantidade de produto: porque é possível discriminar tais variações entre os capitais singulares, não do "dispêndio" de cada um, pois este dispêndio — e, neste nível de abstração, supomos que todos os preços são iguais aos respectivos valores — já é uma quantidade *social*, "média". 




---
### Referências
