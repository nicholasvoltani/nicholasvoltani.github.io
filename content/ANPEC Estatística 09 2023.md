---
date: " 2024-10-08"
tags:
  - economics
aliases:
---

up:: [[064a MOC ANPEC Estatística]]

![[Pasted image 20241008152614.png]]

O enunciado diz que $T$ é um estimador de $p$, que é a **média** de uma [[Distribuição de Bernoulli]] de parâmetro $p$.

# Cálculos Preliminares
$$
\mathbb{E}[T] = \frac{1}{6} + \frac{4 p}{6}
$$

$$
Var(T) = \frac{1}{36} 4 \text{Var}(X_{i}) = \frac{1}{9} p(1-p)
$$

O [[Viés de Estimação]] do estimador é
$$
B(T) = \mathbb{E}[T] - p
$$
para um parâmetro $p$ dado. Abrindo a conta:
$$
B(T) = \frac{1}{6} - \frac{p}{3}
$$
 
# Itens 0 e 3
Com $p=\frac{1}{2}$, temos que T é um [[Estimador Não-Enviesado]] (ou não tendencioso), pois $B(T) = 0$.

Para $p=\frac{1}{4}$, temos
$$
B(T) = \frac{1}{6} - \frac{1}{2} \frac{1}{6} = \frac{1}{2} \frac{1}{6} = \frac{1}{12} 
$$

# Itens 1 e 3
Substituindo na fórmula da variância de $T$, temos que, para $p=\frac{1}{2}$,
$$
\text{Var}(T) = \frac{1}{36} \neq \frac{1}{12}
$$
Para $p=\frac{3}{4}$, temos
$$
\text{Var}(T) = \frac{1}{9} \frac{3}{4} \frac{1}{4} = \frac{1}{48} \neq \frac{1}{36}
$$

# Item 4
[[Bias-Variance Tradeoff|Tradeoff Viés-Variância]]: o erro quadrático médio é 
$$
EQM(T) = B(T)^{2} + \text{Var}(T)
$$

Abrindo a conta, temos
$$
\begin{align}
EQM(T) &= \left( \frac{1}{6} - \frac{p}{3} \right)^{2} + \frac{p}{9} - \frac{p^{2}}{9} \\
&= \frac{1}{36} - \frac{p}{9} + \frac{p^{2}}{9} + \frac{p}{9} - \frac{p^{2}}{9} \\
&= \frac{1}{36}
\end{align}
$$
que, de fato, independe de $p$.

---
### References
- [Exame Nacional de Seleção - Anpec - Provas anteriores](https://exame.anpec.org.br/index.php?r=site/provasAnteriores)