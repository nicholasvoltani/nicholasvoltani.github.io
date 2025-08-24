---
date: "2024-09-02"
tags:
  - economics
aliases:
---

up:: [[062b MOC Teoria do Consumidor]]

A equação de Slutsky relaciona a [[Demanda Marshalliana|Demanda Walrasiana]] $x(p, w)$ com a [[Demanda Hicksiana]] $h(p, \bar{u})$, ao decompor os [[Efeito Substituição]] e [[Efeito Renda]]. 

Dada a [[Restrição Orçamentária|Renda]] $w$ e [[Função Utilidade|Utilidade]] $\bar{u}$, deseja-se saber a mudança da cesta ótima com relação à mudança de preços.
# Versão "unidimensional"
Tem-se a identidade
$$
h(p, \bar{u}) = x(p, e(p, \bar{u}))
$$
onde $e(p, \bar{u})$ é a [[Função Dispêndio]]. Derivando com relação a $p$, temos
$$
\frac{ \partial h }{ \partial p }  = \frac{ \partial x }{ \partial p } + \frac{ \partial x }{ \partial w } \frac{ \partial e }{ \partial p } 
$$

Como temos que [[Lema de Shephard|A demanda hicksiana é o gradiente da função dispêndio]], temos
$$
\frac{ \partial h }{ \partial p } = \frac{ \partial x }{ \partial p } + \frac{ \partial x }{ \partial w } h(p, \bar{u})
$$

Porém, pela mesma identidade acima, e sabendo que $e(p, \bar{u}) = w$, temos

$$
\frac{ \partial h }{ \partial p } = \frac{ \partial x }{ \partial p } + x \frac{ \partial x }{ \partial w }
$$
# Versão geral
Temos a identidade
$$
h_{i}(p, \bar{u}) = x_{i}(p, e(p, \bar{u}))
$$

Derivando quanto ao preço $p_{j}$, temos
$$
\frac{ \partial h_{i} }{ \partial p_{j} } = \frac{ \partial x_{i} }{ \partial p_{j} } + \frac{ \partial x_{i} }{ \partial w } \frac{ \partial e }{ \partial p_{j} }  
$$
Pelo mesmo motivo acima, substituímos $\frac{ \partial e }{ \partial p_{j} }$ por $x_{j}$, tendo
$$
\frac{ \partial h_{i} }{ \partial p_{j} } = \frac{ \partial x_{i} }{ \partial p_{j} } + \frac{ \partial x_{i} }{ \partial w } x_{j}
$$

Em notação matricial, podemos escrevê-lo da seguinte forma:
$$
S_{ij} \equiv \frac{ \partial h_{i} }{ \partial p_{j} } = D_{p}x + \nabla_{w} x \, x^T
$$
onde $D_{p}x \equiv \left(\frac{ \partial x_{i} }{ \partial p_{j} }\right)_{ij}$ é a jacobiana da demanda $x$ com relação aos preços, e $\nabla_{w} x \, x^T$ é um [produto exterior (*outer product*)](https://en.wikipedia.org/wiki/Outer_product)[^1]. 

A matriz resultante, $S$, é a [[Matriz de Slutsky]]. 

# Exemplo
Seja $U(x_{1},x_{2}) = x_{1}^{1/2}x_{2}^{1/2}$ [[Função de Cobb-Douglas|Utilidade de Cobb-Douglas]] (a preços $p_{x}, p_{y}$). Sabe-se que as [[Demanda Marshalliana|Demandas Marshallianas]] são
$$
x_{i}^{*} = \frac{w}{2p_{i}}
$$
A partir delas, obtém-se a [[Função de Utilidade Indireta|Utilidade Indireta]]
$$
v(p, w) = \frac{w}{2 \sqrt{ p_{x} p_{y} }} \left( = x_{1}^{*} \sqrt{ \frac{p_{x}}{p_{y}} } = x_{2}^{*} \sqrt{ \frac{p_{y}}{p_{x}} } \right)
$$
Invertendo em termos de $w$, temos a [[Função Dispêndio]]
$$
e(p, u) = 2 u \sqrt{ p_{x} p_{y} }
$$

Pela identidade que define a [[Demanda Hicksiana]]
$$
h(p, u) = x^{*}(p, e(p,u))
$$
podemos reobter $h(p, u)$:
$$
\begin{cases}
h_{1}(p, u) = u \sqrt{ \frac{p_{y}}{p_{x}} } \\
h_{2}(p,u) = u \sqrt{ \frac{p_{x}}{p_{y}} }
\end{cases}
$$

Montando a equação de Slutsky para $x_{1}^{*}$ primeiro, temos
$$
\frac{ \partial x_{1}^{*} }{ \partial p_{x} }  = - \frac{w}{2 p_{x}^{2}}
$$
que é o [[Efeito Preço]] dessa demanda (efetivamente observado).

O [[Efeito Renda]] é obtido como
$$
x_{1}^{*} \frac{ \partial x_{1}^{*} }{ \partial w } = \frac{w}{4 p_{x}^{2}}
$$

O [[Efeito Substituição]] é obtido como
$$
\frac{ \partial h_{1} }{ \partial p_{x} }  =  -\frac{u}{2} \sqrt{ \frac{p_{y}}{p_{x}^{3}} } 
$$
Tomando $u$ como sendo a utilidade indireta — ou seja, $h_{1} = x_{1}^{*}$ —, obtém-se
$$
\frac{ \partial h_{1} }{ \partial p_{x} }  = - \frac{x_{1}^{*}}{2 p_{x}} = -\frac{w}{4 p_{x}^{2}}
$$

Somando ambos, confirma-se a identidade de Slutsky
$$
\frac{ \partial h_{1} }{ \partial p_{x} } = \frac{ \partial x_{1}^{*} }{ \partial p_{x} } + x \frac{ \partial x_{1}^{*} }{ \partial w } = -\frac{1}{4} \frac{w}{p_{x}^{2}}
$$

---
### References
- [Lecture 3: Income and Substitution Effects - MIT OpenCourseWare (Robert Townsend)](https://www.youtube.com/watch?v=DGoILxx9KsE&list=PLUl4u3cNGP63wnrKge9vllow3Y2OOOKqF&index=3)
- [Slutsky Equation: The Derivation - YouTube](https://www.youtube.com/watch?v=CZxjHQCDkjo)
- MAS-COLELL, Andreu et al. **Microeconomic theory**. New York: Oxford university press, 1995.

[^1]: Um exemplo em 2D basta: sejam $u = (u_{1}, u_{2})^T$ e $v=(v_{1}, v_{2})^T$ vetores-coluna. Então o *outer product* é definido como $\begin{pmatrix}
u_1\\
u_2
\end{pmatrix} \, (v_{1}, v_{2}) = \begin{pmatrix}
u_1 v_1 & u_1 v_2 \\
u_2 v_1 & u_2 v_2
\end{pmatrix}$. Note que os sub-índices dos vetores multiplicados contam como os índices dos respectivos vetores originais.