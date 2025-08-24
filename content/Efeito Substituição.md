---
date: "2024-10-25"
tags:
  - economics
aliases:
---

up:: [[062b MOC Teoria do Consumidor]]

![[Pasted image 20241025113303.png|400]]
Fonte: [Income and Substitution Effects: Hicks and Slutsky Methods](https://spureconomics.com/income-and-substitution-effects-hicks-and-slutsky-methods/). Note que a substituição $E_{1} \to E_{3}$ ocorre **na mesma curva de indiferença** $I_{1}$.

O efeito substituição diz respeito à variação da escolha de uma [[Demanda Marshalliana|cesta ótima de bens]] *devido a uma mudança de preços*; em particular, é a parcela do [[Efeito Preço]] quando se desconta o [[Efeito Renda]].[^2] 

O efeito substituição **não é observável**, sendo apenas **idealmente inferível**. 

Há duas formas de efeito substituição: de forma que se mantenha a [[Função Utilidade|Utilidade]] original ([[Efeito Substituição de Hicks]]), ou de forma que se mantenha o **poder de compra** original ([[Efeito Substituição de Slutsky]]). 

![[Pasted image 20250422191042.png]]
Fonte: MAS-COLLELL et al., p. 73. Note que a compensação de Slutsky mantém ambas as cestas na mesma [[Restrição Orçamentária|Reta Orçamentária]], e a compensação de Hicks mantém-nas na mesma [[Curva de Indiferença]].

Dada uma [[Demanda Marshalliana|Demanda Walrasiana]] $x(p,w)$ com vetor de preços $p$ e [[Restrição Orçamentária|Renda]] $w$, temos que o diferencial é[^1]
$$
dx = D_{p}x \, dp  + \frac{ \partial x }{ \partial w } dw 
$$


# Exemplo bidimensional
Supondo uma cesta de bens $(x,y)$, com preços $(p_{x},p_{y})$, temos que a jacobiana de preços é
$$
D_{p}x = \begin{pmatrix}
\frac{ \partial x_{1} }{ \partial p_{1} } & \frac{ \partial x_{1} }{ \partial p_{2} }  \\
\frac{ \partial x_{2} }{ \partial p_{1} } & \frac{ \partial x_{2} }{ \partial p_{2} } 
\end{pmatrix}
$$

Supondo somente variação do preço do bem $1$, temos que a matriz fica
$$
D_{p}x = \begin{pmatrix}
\frac{ \partial x_{1} }{ \partial p_{1} } & 0  \\
\frac{ \partial x_{2} }{ \partial p_{1} } & 0 
\end{pmatrix}
$$

Portanto, tem-se
$$
dx_{i} = \frac{ \partial x_{i} }{ \partial p_{1} } dp_{1} 
$$
Ou seja, a direção do consumo do bem $i$ vai depender de sua relação com o preço $p_{1}$, i.e. se ele é um [[Bens Ordinários|Bem Ordinário]] ou um [[Bens de Giffen|Bem de Giffen]].  

# Tipos de efeito substituição
Há dois tipos de efeitos de substituição: o [[Efeito Substituição de Hicks]], que mantém a *[[Função Utilidade|Utilidade]] original* (i.e. ocorre na mesma [[Curva de Indiferença]]), e o [[Efeito Substituição de Slutsky]], que mantém a *renda original* (i.e. [[Função Dispêndio]]).

---
### References
- VARIAN, Hal. **Microeconomia**: uma abordagem moderna. 9 ed. Elsevier, 2015.
- MAS-COLELL, Andreu et al. **Microeconomic theory**. New York: Oxford university press, 1995.
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - YouTube](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=9)
- [(25/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 08 - YouTube](https://www.youtube.com/watch?v=-fewv7F2H78&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=8)

[^1]: Pressupondo $x, p \in \mathbb{R}^{L}_{+}$, e $D_{p}x \in \mathbb{R}^{L \times L}$ jacobiana de preços $\frac{ \partial x_{i} }{ \partial p_{j} }$.
[^2]: Cf. [[Equação de Slutsky]]. 