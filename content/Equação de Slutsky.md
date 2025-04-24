---
date: " 2024-09-02"
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