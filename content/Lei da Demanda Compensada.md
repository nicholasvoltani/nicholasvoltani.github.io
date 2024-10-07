---
date: " 2024-10-02"
tags:
  - economics
aliases:
---

up:: [[062a MOC Teoria do Consumidor]]

A lei da demanda compensada diz respeito à mudança de [[Cesta de Bens|Cestas de Bens]] mediante uma mudança de preços destes bens. 

# Matematicamente
Dada uma [[Demanda Marshalliana|Demanda Walrasiana]][^1] $x(p,w) \in \mathbb{R}^{L}_{+}$, sob [[Restrição Orçamentária]] $w$ e vetor de preços $p \in \mathbb{R}^{L}_{+}$, então temos que o [[Axioma Fraco das Preferências Reveladas]] é equivalente à condição de que, para novas condições orçamentárias $(p',w') = (p', \braket{ p' | x(p,w) } )$ mediante **alteração de preços** (e respectiva adaptação da renda para comportá-la), temos que vale[^2]
$$
\braket{ (p'-p) | (x'-x) } \leq 0
$$

# Demonstração
$(\implies)$ Abrindo a condição acima, temos
$$
\underbrace{ \braket{ p' | x' } }_{ =w' } - \underbrace{ \braket{ p' | x } }_{ > w' } - \underbrace{ \braket{ p | x' } }_{ > w } + \underbrace{ \braket{ p | x } }_{ =w } 
$$
Pela condição de [[Axioma Fraco das Preferências Reveladas|AFPR]], temos que os termos cruzados são maiores que as respectivas restrições orçamentárias. Portanto, temos que o termo é $\leq 0$, e $=0$ se, e somente se, $x = x'$. 

$(\impliedby)$ Por contrapositiva, assumindo violação do [[Axioma Fraco das Preferências Reveladas|AFPR]], temos que o termo acima expandido é
$$
\underbrace{ \braket{ p' | x' } }_{ =w' } - \underbrace{ \braket{ p' | x } }_{ \leq w' } - \underbrace{ \braket{ p | x' } }_{ \leq w } + \underbrace{ \braket{ p | x } }_{ =w } 
$$
Portanto, o termo é $\geq 0$. Como, por hipótese de AFPR, $x \neq x'$, temos que a desigualdade é estrita, sendo a negação da condição da tese.

# Corolários
Fazendo mudanças diferenciais de preço[^3], temos que a variação da [[Restrição Orçamentária]] é
$$
dw = d \braket{ p | x(p,w) } = \braket{ dp | x(p,w) } = x(p,w)^{T} dp
$$

O diferencial da demanda walrasiana é[^4]
$$
dx = D_{p}x \,dp + \braket{ D_{w}x | dw } 
$$

Substituindo $dw$ no diferencial $dx$, temos
$$
dx = (D_{p}x + D_{w}x \,x^{T}) dp
$$

Denotando $S \equiv (D_{p}x + D_{w}x \,x^{T})$, temos a [[Matriz de Slutsky]].  Pela lei da demanda compensada, temos que
$$
\braket{ dp | dx } = \braket{ dp | S \, dp } \leq 0
$$

Portanto, a matriz de Slutsky é uma [[Matriz Semi-Definida Negativa]]. 

---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - YouTube](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=7)

[^1]: Ou seja, uma [[Função Demanda]] que possua homogeneidade de grau $0$ e satisfaça a [[Lei de Walras]].
[^2]: Onde $x \equiv x(p,w)$ e $x' \equiv x(p', w')$.
[^3]: A partir da condição inicial $(p, w)$, expandindo a partir da respectiva demanda walrasiana $x(p,w)$, que é *dada*, fixada devido à condição inicial $(p,w)$.
[^4]: $D_p x = \left( \frac{ \partial x_{i} }{ \partial p_{j} } \right)_{ij}$ é a matriz jacobiana de variação de demanda referente aos preços, e $D_{w}x \equiv \nabla_{w}x = \left(\frac{ \partial x_{i} }{ \partial w }\right)_{i}$ é um gradiente de variação de demanda referente à renda.
