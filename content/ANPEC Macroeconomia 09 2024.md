---
date: " 2024-10-19"
tags:
  - economics
aliases:
---

up:: [[061a MOC ANPEC Macroeconomia]]

![[Pasted image 20241019111638.png]]

O exercício se trata de [[Produto Interno Bruto Nominal]], [[Produto Interno Bruto Real]] e [[Deflator Implícito]].

# Cálculos preliminares
Como o PIB real é medido **com base em valores de 2020**, temos que este é o *ano de referência*. Portanto, em 2020, 
$$
\begin{cases}
\text{PIBNominal}^{(2020)} = \text{PIBReal}^{(2020)} \\
\text{DeflatorImplícito}^{(2020)} = 100
\end{cases}
$$

Com base nisso, podemos calcular para o resto dos valores

| Ano  | PIBNominal | DeflatorPIB            | PIBReal |
| ---- | ---------- | ---------------------- | ------- |
| 2020 | 1000       | 100                    | 1000    |
| 2021 | *1020*     | 102                    | 1000    |
| 2022 | 1060       | 106                    | *1000*  |
| 2023 | 1060       | *104*<br>(arredondado) | 1020    |

# Itens 0 a 2
Taxa de crescimento (nominal ou real) no ano é medida como
$$
\frac{PIB^{(t)}-PIB^{(t-1)}}{PIB^{(t-1)}}
$$

## Item 0: Falso
Em 2022, a taxa de crescimento do PIB nominal foi
$$
\frac{1060-1020}{1020} = \frac{40}{1020} \approx 3.8 \%
$$

Em 2021, foi
$$
\frac{1020-1000}{1000} = 2\%
$$

## Item 1: Falso
Em 2022, a taxa de crescimento do PIB real foi
$$
\frac{1000-1000}{1000} = 0\%
$$

## Item 2: Verdadeiro
Em 2023, a taxa de crescimento do PIB real foi
$$
\frac{1020-1000}{1000} = 2\%
$$

# Item 3: Verdadeiro (?)
O deflator do PIB em 2023 é de $103.8...\%$, $104$ por arredondamento.

# Item 4: Verdadeiro
A [[Inflação]] pode ser medida pela taxa de variação do [[Deflator Implícito]][^1]:
$$
\begin{align}
\pi^{(2023)} &= \frac{\text{Defl}^{(2023)} - \text{Defl}^{(2022)}}{2023-2022} = 104-106 = -2\%  \\
&< 0

\end{align}
$$
Houve, portanto, [[Desinflação|Deflação]]. 


[^1]: Pode mesmo? Encontrei [aqui](https://learningcentre.vcc.ca/media/vcc-library/content-assets/learning-centre/worksheets/by-coursex2fprogram/business/07_Macro_GDP_GDPDeflator_CPI_Inflation.pdf), mas não é tanto referência assim.