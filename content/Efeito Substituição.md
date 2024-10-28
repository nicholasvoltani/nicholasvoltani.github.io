---
date: " 2024-10-25"
tags:
  - economics
aliases:
---

up:: [[062b MOC Teoria do Consumidor]]

Diz respeito à variação da escolha de uma [[Cesta de Bens]], a partir de uma escolha ótima, quando há alteração de preços com renda constante.

Dada uma [[Demanda Marshalliana|Demanda Walrasiana]] $x(p,w)$ com vetor de preços $p$ e [[Restrição Orçamentária|Renda]] $w$, temos que o diferencial é[^1]
$$
dx = D_{p}x \, dp  + \frac{ \partial x }{ \partial w } dw 
$$

Mantendo $w$ constante, temos que a mudança no consumo de um bem $i$ depende de seu próprio comportamento com relação aos preços dos bens da cesta. 

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
Ou seja, a direção do consumo do bem $i$ vai depender de sua relação com o preço $p_{1}$, i.e. se ele é um [[Bens Comuns]] ou um [[Bens de Giffen]].  

# Tipos de efeito substituição
Há dois tipos de efeitos "puros" de substituição: o [[Efeito Substituição de Hicks]], que mantém a *utilidade original* (i.e. ocorre na mesma [[Curva de Indiferença]]), e o [[Efeito Substituição de Slutsky]], que mantém a *renda original* (i.e. [[Função Dispêndio]]).

---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - YouTube](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=9)

[^1]: Pressupondo $x, p \in \mathbb{R}^{L}_{+}$, e $D_{p}x \in \mathbb{R}^{L \times L}$ jacobiana de preços $\frac{ \partial x_{i} }{ \partial p_{j} }$.