---
date: " 2024-08-05"
tags:
  - economics
aliases:
  - Multiplicador Monetário
  - Multiplicador de Depósitos
  - Multiplicador de Meios de Pagamento
---

up:: [[061 MOC Macroeconomia]]

Através do sistema de reservas fracionárias dos bancos[^1], eles conseguem efetivamente criar mais [[Meios de Pagamento]] em uma economia.

Seja $D$ um depósito à vista e $\alpha$ o percentual compulsório de reservas para o [[Banco Central]]. Então temos que o valor $\tilde{D}$ que torna-se meio de pagamento efetivo é
$$
\begin{align}
\tilde{D} &= D + D(1-\alpha) + D(1-\alpha)^2 + \dots \\
&= \frac{D}{1-\alpha}
\end{align}
$$
O fator $\frac{1}{1-\alpha}$ é o chamado **multiplicador bancário**, ou **multiplicador monetário** (ou multiplicador de depósitos...).

# Dedução alternativa
Para relacionar os meios de pagamento (ou, simplesmente, *moeda* $M$) com a [[Base Monetária]] $BM$, podemos operar com as seguintes hipóteses:
$$
\begin{cases}
PPMP = \alpha DV \\
(RC + RV) = \beta DV
\end{cases}
$$

$\alpha$ age como uma medida da disposição do público de depositar seu dinheiro de fato nos bancos (e incorrer em que eles o utilizem para alavancagem); pode também ser visto como uma medida de quão "à mercê" da boa-vontade dos bancos nosso dinheiro fica.

$\beta$ é o percentual dos depósitos à vista que os bancos guardam como reserva. É uma medida da temeridade de investimento dos bancos ($\beta \to 100\%$): em momentos de crise e volatilidade econômica, haverão poucos incentivos a tentar alavancar dinheiro, por medo de perdê-lo no processo.

Como temos que a base monetária satisfaz
$$
BM = (RC + RV) + PPMP
$$
temos então que
$$
\frac{M}{BM} = \frac{1+\alpha}{\alpha+\beta}
$$

Definindo $d$ como o percentual de [[Meios de Pagamento]] que são depositados à vista[^2], podemos deduzir
$$
\begin{align}
BM &= PPMG + DV + (\beta-1) DV  \\
&= M - (1-\beta) d M \\
\end{align}
$$

Portanto, temos que o multiplicador monetário também pode ser visto como
$$
\frac{M}{BM} = \frac{1}{1-(1-\beta)d}
$$
onde $\beta$ é o percentual de depósitos à vista que são guardados em reserva, e $d$ é o percentual de papel moeda em poder público que foi depositado à vista.


---
### References
- **LOPES**, Luiz Martins et al. Manual de macroeconomia: nível básico e nível intermediário. 1997.
- [Oferta de moeda (Aula 2, parte 1) - João Sayad](https://www.youtube.com/watch?v=j3iZ-PceVI0&list=PLAudUnJeNg4vWPm7Au0XhkoS58yHprEvN&index=3)

[^1]: Reservando parte dos [[Depósito à Vista]](tanto em reservas próprias como [[Reservas Compulsórias]]) e emprestando o resto para outros bancos.
[^2]: $DV = d M$, donde o [[Papel Moeda em Poder do Público]] é $PMPP = (1-d) M$.