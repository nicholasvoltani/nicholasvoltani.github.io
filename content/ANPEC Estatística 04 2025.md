---
date: " 2024-10-14"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241014080441.png]]

O exercício é de *urna sem reposição*. Sejam $D$ e $E$ o número de desempregados e empregados, respectivamente.

Deseja-se encontrar $P(D=2, E=2)$. Assumindo que não há diferença entre as pessoas selecionadas, haverá um fator combinatorial $4 \choose{2}$. A probabilidade da possibilidade de obter 2 desempregados e 2 empregados consecutivamente é[^1]
$$
\begin{align}
P(D_{1}=1, D_{2}=1, D_{3}=0, D_{4}=0) &=  \\
P(D_{1}=1)  \\
\times P(D_{2}=1 \mid D_{1}=1) \cdot \\
\times P(D_{3}=0) \mid D_{1}=1, D_{2}=1) \\
\times P(D_{4}=0 \mid D_{3}=0, D_{1}=1, D_{2}=1) \\
=\frac{4}{10} \frac{3}{9} \frac{6}{8} \frac{5}{7}
\end{align}
$$

Multiplicando pelo fator combinatorial, temos
$$
\begin{align}
P(D=2, E=2) &= {4 \choose{2}} \frac{2}{\cancel{ 5 }} \frac{1}{\cancel{ 3 }} \frac{\cancel{ 3 }}{4} \frac{\cancel{ 5 }}{7} \\
&= \frac{\cancel{ 2 } \cdot 3 \cdot \cancel{ 2 }}{\cancel{ 4 } \cdot 7}  \\
&= \frac{3}{7} \\
&\approx 0.42
\end{align}
$$

Portanto, a resposta é $42$.


[^1]: Ou, equivalentemente, poderíamos ter $P(D_{1}=1, D_{2}=1, E_1=1, E_2=1)$, onde $D_{i}=0 \iff E_{i}=1$. Isso ajuda a ver por que o fator é, em particular, $4 \choose{2}$: pois, numa amostra de $4$ indivíduos, queremos que $2$ sejam desempregados – e, portanto, que os restantes sejam não-desempregados.