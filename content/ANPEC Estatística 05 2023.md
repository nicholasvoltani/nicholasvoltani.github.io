---
date: " 2024-10-08"
tags:
  - economics
aliases:
  - ANPEC Distribuição Geométrica 2023
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241008150114.png]]

X segue uma [[Distribuição Geométrica]] $\text{Geom}(p)$. Pressupõe-se implicitamente que a variável $X$ começa a partir de $X = 1$.

# Itens 0 e 1
$\mathbb{E}[X] = \frac{1}{p}$ e $Var(X) = \frac{1-p}{p^{2}}$. 

A forma de lembrar que é um $1-p$ no numerador da variância é que, se $p=1$, então há certeza de sucesso, e $X=1$ sempre, sem sombra de dúvida – portanto, variância nula.

# Item 2
Por definição, a probabilidade de um processo geométrico é a probabilidade de sucesso após $k-1$ fracassos. 
$$
P(X=k) = (1-p)^{k-1} \, p
$$

Portanto, $P(X=3) = (1-p)^{2} \, p$.

# Item 3
Vide [[Distribuição Geométrica#Desigualdades]], é possível provar que
$$
P(X>k) = (1-p)^{k}
$$

Portanto, $P(X>5) = (1-p)^{5}$.

# Item 4
O gabarito dá verdadeiro, porém discordo, pelo seguinte cálculo.

É verdade que a distribuição geométrica [[Distribuição Geométrica#*Memorylessness*|não possui memória]], ou seja,
$$
P(X>s+t \mid X> s) = P(X > t)
$$

Porém, o item possui um menor **ou igual**. Portanto, seria algo do tipo[^1]
$$
\begin{align}
P(X \geq 8 \mid X>4) &= P(X > 4 + 4 \mid X > 4) + P(X=8 \mid X>4) \\
&= P(X > 4) + P(X=8) \\
&\neq P(X>4)
\end{align}
$$



---
### References
- [Exame Nacional de Seleção - Anpec - Provas anteriores](https://exame.anpec.org.br/index.php?r=site/provasAnteriores)

[^1]: Pois os eventos $A \equiv (X > 8)$ e $B \equiv (X = 8)$ são mutuamente excludentes, portanto $P(A \lor B) = P(A) + P(B)$.