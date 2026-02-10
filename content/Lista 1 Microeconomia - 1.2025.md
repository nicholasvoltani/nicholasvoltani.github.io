---
date: "2025-04-24"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]] // [[062b MOC Teoria do Consumidor]]

# Exercício 3
![[Pasted image 20250424121030.png|400]]

Seja $x(p,w)$ a [[Demanda Marshalliana]], tal que 
$$
x_{l}(p, \alpha w) = \alpha x_{l}(p,w)
$$
(homogênea de grau 1 no tocante à [[Restrição Orçamentária|Renda]], para dado bem $l$).

Derivando com relação a $\alpha$ e tomando $\alpha=1$ ao final, temos
$$
\begin{align*}
\frac{ \partial x_{l} }{ \partial w } w &= x_{l} \\
\therefore \frac{ \partial x_{l} }{ \partial w } \frac{w}{x_{l}} \equiv \epsilon_{lw} &= 1

\end{align*}
$$
onde $\epsilon_{lw}$ é a [[Elasticidade de Renda da Demanda|Elasticidade-Renda da Demanda]]. 

Vetorialmente, temos[^1]
$$
\nabla_{w} x = \frac{x}{w}
$$
Sendo $w$ dado (assim como $p$), tomando $\alpha = \frac{1}{w}$, temos
$$
\nabla_{w} x = \frac{1}{w} x(p, 1)
$$
Ou seja, dados $(p, w)$, temos que a curva $x$ no tocante à renda — i.e. [[Curva de Engel]] — tem inclinação constante, **é uma reta**, de coeficiente $\frac{x(p,1)}{w}$.

### Exemplos
1) [[Bens Substitutos|Substitutos Perfeitos]]
Caso $p_{2}>p_{1}$, tem-se que se substitui totalmente o consumo de $2$ por $1$. Portanto, pela restrição orçamentária, temos
$$
x_{1} = \frac{w}{p_{1}}
$$

Logo, $\frac{ \partial x_{1} }{ \partial w } = \frac{1}{p_{1}}$ é a inclinação da curva de Engel de bens substitutos perfeitos.

2) [[Bens Complementares|Complementares Perfeitos]]
Supondo-se bens complementares $1:1$, temos que $x_{1}=x_{2}\equiv x$. Pela restrição orçamentária, teremos
$$
x = \frac{w}{p_{1}+p_{2}} = x_{1} = x_{2}
$$
Logo, $\frac{ \partial x }{ \partial w } = \frac{1}{p_{1}+p_{2}}$.

3) [[Função de Cobb-Douglas]]
Tendo bens com coeficientes $\alpha_{i}$ tais que $\sum_{i} \alpha_{i} = 1$, temos que suas demandas serão
$$
x_{i} = \frac{\alpha_{i}}{p_{i}} w 
$$
com inclinações $\frac{ \partial x_{i} }{ \partial w } = \frac{\alpha_{i}}{p_{i}}$. 

# Exercício 5
![[Pasted image 20250424135832.png|500]]

Dados os bens $x$ e $h$[^2], onde $x$ possui preço $p$ e o tempo de trabalho possui salário $s$, temos que a restrição orçamentária é de que
$$
\underbrace{ p\cdot x }_{ \text{Consumo de bens} } \leq \underbrace{ (24-h)\cdot s }_{ \text{Salário} }
$$
o que é equivalente a
$$
\underbrace{ p \cdot x + s \cdot h }_{ \text{Custos (+ de oportunidade)} } \leq \underbrace{ 24 \cdot s }_{ \text{Salário máximo} }
$$

![[Pasted image 20250424141222.png|500]]
Fonte: VARIAN, p. 175.



---
### References
- VARIAN, Hal R. **Intermediate microeconomics: a modern approach**. 9 ed. W. W. Norton, 2014.

[^1]: I.e. [[Efeito Renda]]. 
[^2]: O termo para o tempo de trabalho, que é $l \equiv 24 - h$ é "tecnicamente" chamado de "*mal*". Além disso, evidentemente, $0 \leq h \leq 24$.
