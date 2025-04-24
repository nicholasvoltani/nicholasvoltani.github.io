---
date: " 2024-10-02"
tags:
  - economics
aliases:
---

up:: [[062b MOC Teoria do Consumidor]]

A lei da demanda compensada diz respeito à mudança de [[Demanda Marshalliana|cestas ótimas de bens]] mediante uma mudança de preços, relacionando as cestas ótimas antes e depois dessa mudança. 

Isso é equivalente ao [[Axioma Fraco das Preferências Reveladas]]: se a nova cesta ótima estava em meu conjunto orçamentário prévio, então ela **não era ótima originalmente**, pois, se estivesse, eu a teria escolhido[^1]!

# Matematicamente
Dada uma [[Demanda Marshalliana|Demanda Walrasiana]][^2] $x(p,w) \in \mathbb{R}^{L}_{+}$, sob [[Restrição Orçamentária]] $w$ e vetor de preços $p \in \mathbb{R}^{L}_{+}$, então temos que o [[Axioma Fraco das Preferências Reveladas]] é equivalente à condição de que, para novas condições orçamentárias 
$$
(p',w') = (p', \braket{ p' | x(p,w) } )
$$
mediante alteração de preços e respectiva *compensação da renda* para comportar a antiga cesta de bens, temos que vale[^3]
$$
\braket{ (p'-p) | (x'-x) } \leq 0
$$

Deseja-se provar
$$
\braket{ (p'-p) | (x'-x) } \leq 0 \iff \text{AFPR}
$$

# Demonstração
$(\implies)$ Abrindo a condição acima, temos
$$
\underbrace{ \braket{ p' | x' } }_{ =w' } - \underbrace{ \braket{ p' | x } }_{ \geq w' } - \underbrace{ \braket{ p | x' } }_{ \geq w } + \underbrace{ \braket{ p | x } }_{ =w } 
$$
Os termos "iguais" $\braket{ p' | x' }$ e $\braket{ p | x }$ são iguais às respectivas rendas, devido à [[Lei de Walras]]. Pela condição de [[Axioma Fraco das Preferências Reveladas|AFPR]] *ex hypothesi*, temos que os termos cruzados são maiores que as respectivas restrições orçamentárias[^4].

Portanto, temos que o termo é $\leq 0$, e $=0$ se, e somente se, $x = x'$. 

$(\impliedby)$ Por contrapositiva, assumindo violação do [[Axioma Fraco das Preferências Reveladas|AFPR]][^5], temos que o termo acima expandido é
$$
\underbrace{ \braket{ p' | x' } }_{ =w' } - \underbrace{ \braket{ p' | x } }_{ \leq w' } - \underbrace{ \braket{ p | x' } }_{ \leq w } + \underbrace{ \braket{ p | x } }_{ =w } 
$$
Portanto, o termo é $\geq 0$. Como, por hipótese de não-AFPR, $x \neq x'$, temos que a desigualdade é estrita, sendo a negação da condição da tese.

# Corolários
Fazendo mudanças diferenciais de preço[^6], temos que a variação da [[Restrição Orçamentária]] é
$$
dw = d \braket{ p | x(p,w) } = \braket{ dp | x(p,w) } = x(p,w)^{T} dp
$$

O diferencial da demanda walrasiana é[^7]
$$
dx = D_{p}x \,dp + \braket{ D_{w}x | dw } 
$$

Substituindo $dw$ no diferencial $dx$, temos[^8]
$$
dx = (D_{p}x + D_{w}x \,x^{T}) dp
$$

Denotando $S \equiv (D_{p}x + D_{w}x \,x^{T})$, temos a [[Matriz de Slutsky]].  Pela lei da demanda compensada, temos que
$$
\braket{ dp | dx } = \braket{ dp | S \, dp } \leq 0
$$

Portanto, [[A Matriz de Slutsky é semi-definida negativa]]. 

---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - YouTube](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=7)

[^1]: Supondo que cestas ótimas sejam únicas.
[^2]: Ou seja, uma [[Função Demanda]] que possua homogeneidade de grau $0$ e satisfaça a [[Lei de Walras]].
[^3]: Onde $x \equiv x(p,w)$ e $x' \equiv x(p', w')$.
[^4]: Suponhamos, por exemplo, que $x' \in B(p,w)$; portanto, $x \succeq x'$, pois $x$ é cesta ótima em $B(p,w)$. Supondo AFPR, então *devemos* ter que $x \notin B(p',w') \iff \braket{ p' | x } > w'$. Suponha por absurdo que não: $x \in B(p',w')$; então teremos que $x' \succeq x$, ou seja, a preferência se inverteu (violando [[Independência de Alternativas Irrelevantes]]), portanto violando AFPR; absurdo. *Mutatis mutandis* para $x \in B(p', w')$.
[^5]: Em que $x \in B(p', w')$ e vice-versa, mesmo não sendo ótimos; ou seja, invertem-se as preferências entre $x$ e $x'$ mediante mudanças de $p', w'$.
[^6]: A partir da condição inicial $(p, w)$, expandindo a partir da respectiva demanda walrasiana $x(p,w)$, que é *dada* ao fixar-se a condição inicial $(p,w)$.
[^7]: $D_p x = \left( \frac{ \partial x_{i} }{ \partial p_{j} } \right)_{ij}$ é a matriz de [[Efeito Substituição]], e $D_{w}x \equiv \nabla_{w}x = \left(\frac{ \partial x_{i} }{ \partial w }\right)_{i}$ é um gradiente de [[Efeito Renda]].
[^8]: $D_{w}x \,x^{T}$ é um [produto externo](https://en.wikipedia.org/wiki/Outer_product) de vetores (p. ex. $v w^T$), dando em uma matriz.
