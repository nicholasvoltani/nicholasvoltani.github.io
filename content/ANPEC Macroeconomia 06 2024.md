---
date: " 2024-10-31"
tags:
  - economics
aliases:
---

up:: [[061a MOC ANPEC Macroeconomia]]

![[Pasted image 20241031113601.png|650]]

Esta é uma questão de [[Modelo de Solow#Modelo de Solow com Força de Trabalho variável/endógena]].

# Preliminares
Como temos uma [[Função de Cobb-Douglas]] de produção, temos que o produto per capita tem a forma
$$
\begin{align}
y_{t} &= \frac{Y_{t}}{L_{t}} =\left( \frac{K_{t}}{L_{t}} \right)^{\alpha}  \\
&= k_{t}^{\alpha}
\end{align}
$$

A equação da dinâmica de acumulação de capital é
$$
K_{t+1} = I_{t} + (1-\delta) K_{t}
$$

Tem-se por hipótese que
$$
I_{t} = sY_{t}
$$
portanto, tem-se que o capital acumula-se conforme
$$
K_{t+1} = sY_{t} + (1-\delta) K_{t}
$$

A dinâmica de capital per capita é da forma
$$
\begin{align}
k_{t+1} &= s \frac{Y_{t}}{L_{t}} \frac{L_{t}}{L_{t+1}} + (1-\delta) \frac{K_{t}}{L_{t}} \frac{L_{t}}{L_{t+1}} \\
&\approx s y_{t} (1-n) + (1-\delta) (1-n) k_{t} \\ \\
&\approx s y_{t} + (1-\delta-n) k_{t}\\
\therefore k_{t+1}-k_{t} &\approx s y_{t} - (\delta + n)k_{t}
\end{align}
$$

O estado estacionário de capital per capita é, portanto,
$$
k^{*} = \frac{s}{\delta+n} y^{*}
$$
Como temos que $y = k^{\alpha}$, temos que
$$
k^{*} = \left( \frac{s}{\delta+n} \right)^{\frac{1}{1-\alpha}}
$$

O produto per capita é, portanto,
$$
y^{*} = \left( \frac{s}{\delta+n} \right)^{\frac{\alpha}{1-\alpha}}
$$
O investimento per capita é igual à depreciação "efetiva" de capital
$$
\begin{align}
i^{*} = (\delta + n) k^{*}
\end{align}
$$
(Ou seja, o investimento serve para repor a depreciação de capital, tanto material quanto para atender ao crescimento $n$ da força de trabalho que o emprega.)

Finalmente, o consumo per capita é
$$
c^{*} = (1-s)y^{*} = (1-s)\left( \frac{s}{\delta+n} \right)^{\frac{\alpha}{1-\alpha}}
$$

# Item 0: ??? (Falso)

# Item 1: Falso
O produto por trabalhador no estado estacionário é
$$
y^{*} = \left( \frac{s}{\delta+n} \right)^{\frac{\alpha}{1-\alpha}}
$$
Ou seja, depende da taxa de poupança $s$ e da taxa de crescimento da força de trabalho $n$. Há uma relação entre salários e taxa de poupança: conforme os salários aumentam, a taxa de poupança aumenta também, pois as necessidades conseguem ser satisfeitas sem dispêndio integral do salário. Portanto, há uma dependência dos salários quanto ao produto estacionário, e isso é intuitivo: níveis maiores de salário demandam maior produção (*ceteris paribus*).

Fugindo da questão: conforme $n$ aumenta, o salário diminui, pois o [[Exército Industrial de Reserva (Sobrepopulação Relativa)]] é maior. 

# Item 2: Verdadeiro
No estado estacionário, temos que o produto per capita tende a uma constante de equilíbrio $y^{*}$, portanto não varia. O produto em si varia, pois
$$
\begin{align}
\lim\limits_{t\to \infty} \frac{Y_{t+1} - Y_{t}}{Y_{t}} &= \lim\limits_{t\to \infty}\frac{y_{t+1} L_{t+1}}{y_{t} L_{t}} - 1 \\
&= \frac{L_{t+1}}{L_{t}} - 1 \\
&= n
\end{align}
$$

Ou seja, para que o produto per capita $y$ se mantenha constante, é preciso que o produto $Y$ cresça na mesma proporção que $L$.

# Item 3: Falso
Estaria correto se fosse
> "Quanto maior for a taxa de poupança, maior será ~~a taxa de crescimento do~~ o capital por
trabalhador no estado estacionário."

Isso, pois o capital por capita tende a uma constante $k^{*}$ tal que[^1]
$$
k^{*} = \left( \frac{sA}{\delta + n} \right)^{\frac{1}{1-\alpha}}
$$

Ou seja, o **nível** $k^{*}$ de capital per capita muda conforme muda a taxa de poupança $s$, mas este nível é estacionário para uma taxa de poupança $s$ dada. Formalmente,
$$
\lim\limits_{t \to \infty} (k_{t+1} - k_{t}) = 0 \iff \lim\limits_{t\to \infty} k_{t} = k^{*}
$$

# Item 4: Falso
Em curto prazo, tem-se que o consumo segue a forma
$$
c_{t} = (1-s) y_{t}
$$
Ou seja, aumentar a taxa de poupança diminui o percentual de produto per capita que é consumido (per capita) a curto prazo.

A longo prazo, temos que
$$
c^{*} = (1-s) y^{*} = (1-s) f(k^{*})
$$
Como temos que o capital per capita é
$$
k^{*} = \left( \frac{s}{\delta+n} \right)^{\frac{1}{1-\alpha}}
$$
temos que o consumo per capita será
$$
c^{*} = (1-s) \left( \frac{s}{\delta+n} \right)^{\frac{\alpha}{1-\alpha}}
$$

Essa é uma questão sobre a "regra dourada" do modelo de Solow: existe uma taxa de poupança $s_{max}$ que maximiza o consumo per capita. Ou seja, no longo prazo, pode ser que $s$ esteja abaixo desta taxa $s_{max}$ – em cujo caso o consumo vai aumentar com um aumento marginal de $s$ –, e pode ser o caso que $s$ esteja acima desta taxa – em cujo caso o consumo diminui com um aumento marginal de $s$.


---
### References
- [Solow Growth Model - YouTube](https://www.youtube.com/playlist?list=PLNpHl8d_AfqtgRADRBw4u-Kz5Y6X06d6t)

[^1]: No caso, temos nível tecnológico $A=1$.