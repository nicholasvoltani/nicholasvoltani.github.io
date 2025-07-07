---
date: " 2025-06-12"
tags:
  - moc
  - economics
---

up:: [[062 MOC Microeconomia]]

## 0) Produção
- [[Função Produção]]
	- [[Retorno de Escala]]
	- [[Produto Marginal do Trabalho]]
	- [[Isoquanta]]
	- [[Taxa Marginal de Substituição Técnica]]
		- [[Dada uma função custo, a taxa marginal de substituição técnica é a razão dos produtos marginais]]
		- [[Elasticidade de Substituição]]
	- [[Função de Cobb-Douglas]]
	- [[Função de Leontief]]
- [[Economia de Escala]]
## 1) Minimização do Custo
Usualmente, tem-se que a função produção segue a forma
$$
\begin{align}
f:\,  &\mathbb{R}_{+}^L \to \mathbb{R} \\
&z \mapsto f(z) \coloneqq q
\end{align}
$$
i.e. $L$ insumos ($z$) para a produção de $1$ produto ($q$).

O problema de minimização de custo tem a forma
$$
\min\limits_{z \gg 0} \braket{ w | z } \, \mid \, f(z) \geq q
$$
(Geralmente assumimos $f(z) = q$, i.e. solução interior, para fugir de Kuhn-Tucker como o diabo foge da cruz.) 

O resultado dessa minimização é a função custo $C(w, q)$, além da demanda condicional por fatores de produção $z^*(w,q)$.

Equivalentemente, este problema pode ser reescrito como
$$
\max\limits_{z\gg 0} \braket{ p | q } - \braket{ w | z }  
$$
(No caso $f:\mathbb{R}_+^L \to \mathbb{R}$, $\braket{ p | q } = pq$ naturalmente.) 

Ou seja, o problema de minimização de custo é equivalente ao problema de maximização de receita $\iff$ preço $p$ é \[menor ou\] igual ao custo marginal $CMg$.

- [[Função Custo]]
	- [[Custo Marginal]]
	- [[Isocusto]]
	- [[O custo médio é mínimo se, e somente se, o custo marginal é igual ao custo médio]]
- [[Lema de Shephard]]
- [[Sunk Cost]]
## 2) Maximização do Lucro
- [[Função Receita]]
	- [[Receita Marginal]]
	- [[Demandas inelásticas permitem maior receita com maiores preços]]
		- $\iff$ [[Demandas inelásticas têm receita marginal negativa]]
	- [[Demandas elásticas prejudicam a receita com maiores preços]]
		- $\iff$ [[Demandas elásticas têm receita marginal positiva]]
	- [[Poder de Mercado]]
	- [[Markup]]
		- [[O markup de um monopólio é maior quanto mais rígida a demanda]]
- [[Função Lucro]]
	- [[Lucro Médio]]
	- [[Lucro Marginal]]
	- [[A produção ótima ocorre quando o lucro marginal é 0]]
- [[Lema de Hotelling]]

Supondo *netputs* $y \in Y \subseteq \mathbb{R}^L$ (positivos para produtos, negativos para insumos), e dado um vetor de seus respectivos preços $p \gg 0$, temos que o *lucro* da firma é dado por $\braket{ p | y }$. 

O problema da maximização do lucro se traduz em
$$
\max\limits_{y \in Y} \braket{ p | y }
$$
Como queremos *netputs* que sejam **viáveis** — dada função produção $F$, $F(y) \leq 0$ —, o problema de maximização diz
$$
\max\limits_{y} \braket{ p | y }  \,\, \mid \,\, F(y) \leq 0
$$
(É necessário que $F$ tenha **retornos marginais decrescentes**, senão $\pi \to \infty$!)

A função $\pi(p)$ associada a essa maximização é chamada de função lucro.

Maximizando para uma *solução interior* (evitando Kuhn-Tucker vide acima), vem as condições de primeira ordem:
$$
\begin{cases}
p = - \lambda \, \nabla F(y^{*})  \\
F(y^{*}) = 0
\end{cases}
$$

Das primeiras equações, tem-se que a taxa marginal de substituição técnica $MTST_{ik}(y^*)$ é igual à razão dos respectivos preços:
$$
- \frac{F_{i}(y^{*})}{F_{k}(y^{*})} \eqqcolon MTST_{ik}(y^{*}) = - \frac{p_{i}}{p_{k}}
$$
Assumindo que $Y$ possui somente *um* produto ($y$), e $L$ insumos ($z$) — i.e. a função de produção é da forma $f: \mathbb{R}^{L} \to \mathbb{R}$ —, a maximização traz
$$
\max\limits_{z\geq 0} p \,f(z) - \braket{ w | z } 
$$
cujas condições de primeira ordem (de solução interior) são
$$
\nabla f(z^{*}) = \frac{w}{p}
$$
(e $z^* \gg 0$.) Dessa forma, temos que as taxas marginais de substituição técnica (do produto) com relação a certos insumos são iguais às razões dos preços *destes respectivos insumos*.



---
### References
- [MIT 14.01 Principles of Microeconomics, Fall 2018 - MIT OpenCourseWare (Jonathan Gruber)](https://www.youtube.com/playlist?list=PLUl4u3cNGP62oJSoqb4Rf-vZMGUBe59G-)
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.