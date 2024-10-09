---
date: " 2024-10-08"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

Um processo aleatório $\{X_{i}\}$ de variáveis i.i.d. de uma [[Distribuição de Bernoulli]] e que ocorre até o primeiro sucesso $X_{i} = 1$ é dito ser uma distribuição geométrica.

A probabilidade deste primeiro sucesso $T$ ocorrer na $k$-ésima tentativa é dada por
$$
P(T=k) = (1-p)^{k-1} \, p
$$
Ou seja, $k-1$ fracassos até o primeiro sucesso. Note que a ordem, tecnicamente, importa aqui!

# Desigualdades
Note-se que a probabilidade de que o sucesso requeira mais de $t$ tentativas[^2] é
$$
\begin{align}
P(T > t) &= \sum\limits_{k=t}^{\infty} (1-p)^{k-1} p  \\
&= p(1-p)^{t} \sum\limits_{m=0}^{\infty}(1-p)^{m} \\
&= (1-p)^{t}
\end{align}
$$

Portanto,
$$
\begin{align}
P(T \geq t) &= P(T > t \lor P=t) \\
&= (1-p)^{t} + (1-p)^{t-1}p \\
&= (1-p)^{t} \left( 1 + \frac{p}{1-p} \right) \\
&= (1-p)^{t-1}
\end{align}
$$
Como um *sanity check*, note que $P(T\geq 1) = 1$, posto que $T = 1, 2, \dots$.

# *Memorylessness*
Temos que a distribuição geométrica não possui "memória", ou seja,
$$
P(T > t+s \mid T > s) = P(T > t)
$$

Abrindo a probabilidade condicional, temos[^3]
$$
\begin{align}
\frac{P(T > t+s \land T > s)}{P(T > s)} &= \frac{P(T > t+s)}{P(T > s)} \\
&= \frac{(1-p)^{t+s}}{(1-p)^{s}}  \\
&= P(T > t)
\end{align}
$$

# Valor Esperado
$$
\mathbb{E}[T] = \sum\limits_{t=1}^{\infty} (1-p)^{t-1} p \,t
$$

Podemos separar o espaço amostral em duas partes: o caso em que $T=1$ ocorre na primeira tentativa, e o caso em que ocorre em $T>1$ tentativas.

Reescrevendo o valor esperado em condicionais, temos
$$
\begin{align}
\mathbb{E}[T] = \mathbb{E}[T\mid t=1] P(T=1) + \\
\mathbb{E}[T\mid t>1] P(T>1)

\end{align}
$$

O primeiro termo é simplesmente $1 \cdot p$[^1]. A probabilidade $P(T>1) = P(T-1 > 0)$ é simplesmente $1-p$, pela independência das variáveis aleatórias (também pela *memorylessness*). 

Como temos que 
$$
\mathbb{E}[T] = \underbrace{ \mathbb{E}[T\mid T=1] }_{ =1 } + \mathbb{E}[T \mid T>1]
$$
temos que $\mathbb{E}[T \mid T>1] = \mathbb{E}[T] - 1$. Portanto, temos
$$
\begin{align}
\mathbb{E}[T] (1-(1-p)) = p + (1-p) \\
\therefore \mathbb{E}[T] = \frac{1}{p}
\end{align}
$$

# Variância
Derivação deixada para o leitor.
$$
Var(T) = \frac{1-p}{p^{2}}
$$
cf [Geometric distribution - Wikipedia](https://en.wikipedia.org/wiki/Geometric_distribution#Moments_and_cumulants).



---
### References
- [13. Bernoulli Process - YouTube](https://www.youtube.com/watch?v=gMTiAeE0NCw&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=13)
- [probability - Proving the lack of memory property of the Geometric distribution - Mathematics Stack Exchange](https://math.stackexchange.com/questions/538123/proving-the-lack-of-memory-property-of-the-geometric-distribution)

[^1]: Pois o valor esperado de uma constante ($t=1$) é o valor da própria constante.
[^2]: Essa desigualdade me parece ser *bem* sutil, pois geralmente utilizam a distribuição $P(X = x) = (1-p)^x \, p$ (invés de $(1-p)^{x-1})$, como no caso da densidade de probabilidade para $x$ contínuo. 
[^3]: Isso vale para uma distribuição geométrica em geral, discreta ou contínua. Em particular para a contínua, a desigualdade se torna $\geq$, posto que probabilidades de pontos são zero.