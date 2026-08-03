---
date: "2024-10-24"
tags:
  - economics
aliases:
---

up:: [[062a MOC ANPEC Microeconomia]]

![[Pasted image 20241024095300.png]]

# Cálculos Preliminares
Tem-se que o [[Custo Marginal]] $\frac{dC}{dq}$ de ambas as firmas é igual a 32, e o custo fixo é igual a 10. Portanto, a [[Função Custo]] de ambas as empresas possui a forma
$$
C(q_{i}) = 10 + 32 q_{i}
$$
onde $i$ indica a firma $i$. Tem-se que $Q = q_V + q_P$ (empresa **V**erão e empresa **P**raia).

Essa questão se trata sobre [[Monopólio]]s e sobre firmas agindo em conluio, dividindo equitativamente a produção.

# Item 0: Falso
Se elas decidem agir em conluio e dividem o mercado equitativamente entre si, então $q_{i} = \frac{Q}{2}$.

A [[Função Lucro]] de cada firma é
$$
\begin{align}
\pi_{i}(q_{i}) &= q_{i} P(q_{i} + q_{-i}) - C(q_{i}) \\
&= q_{i}(64-4(\underbrace{ q_{i} + q_{i} }_{ q_{-i} = q_{i} }) - 10 - 32q_{i} \\
&= 64 q_{i}-8 q_{i}^{2} - 10 - 32 q_{i}
\end{align}
$$

Como [[A produção ótima ocorre quando o lucro marginal é 0]], ao zerar o [[Lucro Marginal]], temos 
$$
\begin{align}
\frac{d \pi_{i}}{dq_{i}} = 64 - 16q_{i} - 32 &= 0 \\
\therefore q_{i}^{*} &= 2
\end{align}
$$

# Item 1: Verdadeiro
O lucro obtido por cada firma é igual, posto que o preço e as quantidades o são. Portanto,
$$
\begin{align}
\pi_{i}(q_{i}^{*}=2) &=  64 q_{i}^{*} - 8 q_{i}^{*2} - 10 - 32 q_{i}^{*}\\
&= 64(2-1) -32 - 10 \\
&= 64 - 42 \\
&= 22
\end{align}
$$
# Item 2: Verdadeiro
Supondo que a empresa Praia produza $3$ unidades, enquanto a empresa Verão produz $2$, temos
$$
\begin{align}
\pi_{P}(q_{P}=3 \mid q_{V} = 2) &= q_{V} (64 - 4(q_{V}+q_{P})) - 10-32 q_{V} \\
&= 3 (32\cdot2-4\cdot 5) - 10 - 32\cdot3 \\
&= 32\cdot 3(2-1) -60-10 \\
&= 96 - 70 \\
&= 26 \\
&> \pi_{P}(q_{P}=q_{V}=2)
\end{align}
$$

Portanto, há incentivo para burlar o conluio e produzir mais.

# Item 3: Falso
O outro lado dessa quebra de conluio é o lucro da empresa Verão:
$$
\begin{align}
\pi_{V}(q_{V}=2 \mid q_{P}=3) &= 2 (32\cdot 2 - 4 \cdot 5)-10-32 \cdot 2 \\
&= 32 \cdot 2(2-1) - 40 - 10 \\
&= 64 - 50 \\
&= 14  \\
&\neq 18
\end{align}
$$

# Item 4: Verdadeiro
Se ambas produzem $3$ unidades, o preço de mercado será
$$
P(6) = 64 - 4 \cdot 6 = \$40
$$

Portanto, o lucro de ambas, sob conluio, é
$$
\begin{align}
\pi_{i}(3) &= 3 \cdot 40 - 10 - 32 \cdot 3 \\
&=120 - 10 - 96 \\
&= 14
\end{align}
$$
Caso a empresa Praia produza $4$ unidades e Verão produza $3$, temos
$$
\begin{align}
\pi_{P}(q_{P} = 4 \mid q_{V}=3) &= 4 \cdot (64-4 \cdot (4+3)) - 10 - 32 \cdot 4 \\
&= 4 \cdot 36 - 10- 32 \cdot 4 \\
&= 4 \cdot (36-32) - 10 \\
&= 16-10 \\
&= 6 \\
&< \pi_{P}(q_{P}=q_{V}=3)
\end{align}
$$

Portanto, não há incentivo de produzir $4$ (ou mais) unidades quando o outro produz $3$.

# Análise *a posteriori*
Há uma espécie de [[Dilema do Prisioneiro]] aqui: a melhor escolha de conluio é de que ambos produzam $2$ unidades, pois terão o maior lucro *num cenário de monopólio compartilhado*; ele é, porém, um "equilíbrio instável", posto que há um incentivo a desviar dessa colaboração e produzir mais para si próprio, em detrimento da outra parte.

Note que sequer é um [[Jogo de Soma Zero]], pois o lucro total com $q_{i}^{*}=2$ é de $\$44$, enquanto no caso de desvio $3/2$ é de $\$26 + \$14 = \$40$. Como as firmas são indistinguíveis entre si, devido à equivalência formal de suas funções custo, o óptimo de lucro *total* é o obtido no item $0$, de que ambas produzam $2$ unidades cada, i.e. que o mercado produza $Q=4$ unidades. Ou seja, a produção de $Q>4$ unidades não será ótima, tendo lucro total decrescente ("*diminishing returns*").