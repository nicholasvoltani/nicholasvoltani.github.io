---
date: "2026-04-21"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]] // [[Esquema Listas Microeconomia]]

# Conceitos introdutórios
## Teoria da firma
A teoria da produção em Microeconomia consiste em tratar firmas como "caixas pretas" que tomam certos insumos como *inputs* e produzem certos bens como *outputs*. As possibilidades que uma dada firma possui no que tange às proporções de *inputs* para certas quantidades de *outputs* podem ser representadas no que se chama de *conjunto de produção*.

::: definition
Um *conjunto de produção* $Y$ de uma dada firma é o conjunto $Y \subseteq \mathbb{R}^{L}$, em que cada $Y \ni y = (y_{1}, \dots, y_n)$ descreve uma possível configuração de produção, em que 
- $y_{i}<0$ é um *input*
- $y_{i}>0$ é um *output*

Em geral, diz-se que qualquer $y_{i}$ é um "*netput*". 
:::

Note-se que, a depender do conjunto de produção $Y$, pode ser possível que haja "desperdício" de inputs, i.e. uma mesma produção de outputs pode levar mais do que a quantidade "ótima" de inputs, ou, por outro lado, uma quantidade de inputs pode produzir uma quantidade "não-ótima" de outputs. 

O mais comum é de falar-se de processos que tomam $n$ inputs $z \in \mathbb{R}^{n}$ e produzem somente $1$ output $y \in \mathbb{R}_{+}$. Não só isso, é comum também falar-se de *funções de produção* $f(z) \in \mathbb{R}$ que descrevem processos *ótimos* de produção.

::: definition
Uma função $f: \mathbb{R}^{n} \to \mathbb{R}_{+}$ é dita ser uma *função de produção* se ela descreve um processo de produção "ótimo" em um conjunto de produção $Y \subseteq \mathbb{R}^{n+1}$. Ou seja, para cada processo de produção $(z_{1}, \dots, z_{n}, y) \in Y$, tem-se que
$$
f(z) \geq y
$$

Ou seja, o valor $f(z)$ é o output ótimo que esta firma consegue produzir a partir destes inputs $z_{1},\dots,z_{n}$; não quer dizer que é o *único* — pois sempre é possível se produzir *menos eficientemente* —, e sim que é a forma *mais eficiente*.
:::

::: definition
===Os *retornos de escala* de uma função produção $f(z)$ ===

:::

O problema da firma possui um paralelo com o problema do consumidor, consistindo em dois problemas duais: a firma pode buscar *minimizar seu custo de produção*, assim como pode buscar *maximizar seu lucro*. Tais problemas são passíveis de ser descritos pelo formalismo acima.

O usual é de se falar sobre a minimização do custo $\sum \limits_{i=1}^{n} p_{i}z_{i}$ — em que $p_{i}$[^1] é o custo do input $i$, consumido em $z_{i} \in \mathbb{R}$ "unidades" neste processo específico — para a produção de uma dada quantidade $\bar{q} \in \mathbb{R}$  de output, com alguma função produção $f(z_{1},\dots,z_{n})$. Ou seja, usualmente fala-se do problema de *minimização do custo*. Por outro lado, o formalismo mais geral de conjuntos de produção, em que inputs são "negativos" e outputs são "positivos", permite uma descrição mais elegante do problema de *maximização do lucro*.

::: definition
O problema de minimização do custo de uma firma com conjunto de produção $Y \in \mathbb{R}^{n+1}$ e função produção $f: \mathbb{R}^{n} \to \mathbb{R}_{+}$, dados os preços de seus insumos $w \in \mathbb{R}^{n}$, consiste no problema
$$
\min\limits_{z \in \mathbb{R}^{n}} \sum \limits_{i=1}^{n} p_{i}z_{i \,\,\,} \text{  t. q. } \, f(z) \geq q
$$
I.e. minimizar o custo com o qual pode-se produzir *no mínimo* $q$ unidades de output.

A quantidade ótima de cada input empregado $z^{*}_{i}$ sob este problema (de minimização de custo) são denominadas as *demandas condicionais* $H^{i}(w,q)$ deste processo [@Cowell2004, p. 23], denotadas como
$$
H^{i}(w, q) \coloneqq z^{*}_{i}
$$

Os valores da função minimizada neste problema compõem a *[[Função Custo|função custo]]* desta firma:
$$
C(w,q) \coloneqq \sum \limits_{i=1}^{n} p_{i} z^{*}_{i} = \sum \limits_{i=1}^{n}p_{i} H^{i}(w, q)
$$
Como Cowell o coloca, a função custo descreve "o investimento [*outlay*] mínimo que a firma exige para adquirir os insumos", dados os preços dos insumos $w$ e o nível de produção $q$ [@Cowell2004, p. 23].

Há um claro análogo com a teoria do consumidor, em que a *[[Função Dispêndio|função dispêndio]]* 
$$
e(p, \bar{u}) = \sum \limits_{i=1}^{n} p_{i} x_{i}^{*}
$$
é a *restrição orçamentária mínima* com a qual alcança-se um nível de utilidade $\bar{u}$ sob preços $p$ dos bens consumidos $x_{i}^{*}$[^2] em uma cesta.
:::

::: definition
O problema de maximização do lucro de uma firma que tenha um conjunto de produção $Y \in \mathbb{R}^{n}$ pode ser escrito, no caso geral, como
$$
\max\limits_{y \in Y} \sum \limits_{i=1}^{n} p_{i}y_{i}= \max \underbrace{ \sum \limits_{i} p_{i} y_{i} }_{ \underset{(y_{i} > 0)}{\text{Receita } }} + \underbrace{ \sum \limits_{j} p_{i}y_{j} }_{ \underset{(y_{j} < 0)}{\text{Custo}}}
$$

===**Ver casos distintos de como lidar com o problema: Cowell lida com max de lucro dada função custo (já minimizou custo); Mas-Colell maximiza lucro com função produção mas com $\braket{ w | z }$**.===

O caso usual, em que empregam-se $n$ inputs $x_{1},\dots,x_{n}$ (com preços $w_{1},\dots,w_{n}$) para a produção de $1$ output $q$ (com preço $p$), escreve-se como
$$
\max\limits_{x_{i}, q \,\in \mathbb{R}} \left\{pq - \sum \limits_{i}p_{i}x_{i}\right\}
$$

Supondo que a firma tenha uma função produção $f(x_{1},\dots,x_{n}) \equiv f(x)$, o problema se escreve
$$
\max\limits_{x_{i} \in \mathbb{R}} \left\{pf(x) - \sum \limits_{i}p_{i}x_{i}\right\}
$$

:::


# Exercícios
::: exercise
[@Mas-Colell1995, pp. 135-6] Seja $F(x)$ uma [[Função Produção|função produção]] de uma firma com [[Retorno de Escala|retornos de escala]] *não-decrescentes*. Ou seja,
$$
\forall \alpha \in \mathbb{R}_{+}: F(\alpha x) \geq \alpha F(x)
$$
Prove que, dados preços $p$, o lucro $\pi(p)$ desta firma ou tende a $\infty$, ou $\pi(p) \leq 0$.
:::


::: exercise
Para uma firma com função produção 
$$
f(K, L) = K^{\alpha}L^{\beta}
$$
em que $K$ tem "preço" $r$ ([[Taxa Real de Juros|taxa real de juros]]) e $L$ tem "preço" $w$ ([[Salário|salário]]). 

Resolva o problema de minimização de custo no curto prazo ($K=\bar{K}$ fixo, $L$ variável) e longo prazo ($K,L$ variáveis), obtendo as respectivas [[Demanda Condicional|demanda condicionais]] $K^{*}(r,w,q)$ e $L^{*}(r,w,q)$

$$
\begin{align*}
\text{Curto prazo: }&  \begin{cases}
K^{*} = \bar{K} \\
L^{*}(w,r,q;\bar{K}) = \left( \frac{q}{\bar{K}^{\alpha}} \right)^{1/\beta}
\end{cases} \\
\text{Longo prazo: }& \begin{cases}
K^{*}(w,r,q) = q^{1/\alpha+\beta} \left( \frac{w}{r} \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta} \\
L^{*}(w,r,q) = q^{1/\alpha+\beta} \left( \frac{r}{w} \frac{\beta}{\alpha} \right)^{\alpha/\alpha+\beta}
\end{cases}
\end{align*}
$$
e respectivas [[Função Custo|funções custo]]:[^3]

$$
\begin{align*}
&\text{Curto prazo: } C(w,r,q; \bar{K}) = r \bar{K} + w \left( \frac{q}{\bar{K}^{\alpha}}\right)^{1/\beta} \\
&\text{Longo prazo: } C(w, r, q) = q^{1/\alpha+\beta}  \left[ r^{\alpha} \left(w \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta}
+ w^{\beta} \left( r \frac{\beta}{\alpha} \right)^{\alpha/\alpha+\beta} \right]
\end{align*}
$$
:::

# Resoluções
::: exercise
==Exercício de **retornos de escala não-decrescentes**.==

:::

::: exercise
*Curto prazo*: Tenha-se $K = \bar{K}$. Então, é possível isolar $L$ através de

$$
\begin{align*}
q = f(\bar{K},L) &= \bar{K}^{\alpha} L^{\beta} \\
\implies L^{*} &= \bar{K}^{\alpha/\beta} q^{1/\beta}
\end{align*}
$$

Não há "minimização de custo" aqui, pois o estoque fixo de capital $\bar{K}$ e a isoquanta $f(\bar{K},L) = q$ determinam o nível $L$ demandado.

A função custo no curto prazo é
$$
C(\bar{K},L^{*}) = r\bar{K} + w \bar{K}^{\alpha/\beta} q^{1/\beta}
$$

*Longo prazo*: O problema de minimização do custo $rK + wL$, dado um nível de produção $f(K,L) = K^{\alpha}L^{\beta} = q$, é resolvido pela otimização do lagrangiano
$$
\mathcal{L}(K, L, \lambda) = rK+wL - \lambda (K^{\alpha}L^{\beta} - q)
$$

A otimização de $\mathcal{L}$ traz
$$
\begin{cases}
\frac{ \partial \mathcal{L} }{ \partial K } = r - \alpha \lambda K^{\alpha-1} L^{\beta} &= 0 \\
 \frac{ \partial \mathcal{L} }{ \partial L } = w - \beta \lambda K^{\alpha}L^{\beta-1} &= 0 \\
 \frac{ \partial \mathcal{L} }{ \partial \lambda } = K^{\alpha}L^{\beta} - q &= 0
\end{cases}
$$

Dividindo a primeira equação pela segunda[^4], temos
$$
L^{*} = \frac{r}{w} \frac{\beta}{\alpha} K^{*}
$$

Substituindo na restrição (terceira equação), temos

$$
\begin{align*}
q &= K^{\alpha}L^{\beta} \\
&= K^{\alpha} \left( \frac{r}{w} \frac{\beta}{\alpha} \right)^{\beta} K^{\beta} \\
\therefore K^{*} &= q^{1/\alpha+\beta} \, \left( \frac{w}{r} \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta}
\end{align*}
$$

Ressubstituindo na equação de $L^{*}$, temos

$$
\begin{align*}
L^{*} &= q^{1/\alpha+\beta} \, \left( \frac{r}{w} \frac{\beta}{\alpha}  \right) \left( \frac{w}{r} \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta} \\
&= q^{1/\alpha+\beta} \, \left( \frac{w}{r} \frac{\alpha}{\beta} \right)^{(-\alpha-\beta)/\alpha+\beta} \left( \frac{w}{r} \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta} \\
&= q^{1/\alpha+\beta} \left( \frac{w}{r} \frac{\alpha}{\beta} \right)^{-\alpha/\alpha+\beta} \\
\therefore L^{*} &= q^{1/\alpha+\beta} \left( \frac{r}{w} \frac{\beta}{\alpha}  \right)^{\alpha/\alpha+\beta}
\end{align*}
$$
A função custo, sendo $C(r,w,q) = r K^{*} + w L^{*}$, fica

$$
\begin{align*}
C(r,w,q) &= q^{1/\alpha+\beta} \left( \frac{r^{(\alpha+\cancel{ \beta })/\alpha+\beta}}{r^{\cancel{ \beta }/\alpha+\beta}} \left( w \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta} + \frac{w^{(\cancel{ \alpha }+\beta)/\alpha+\beta}}{w^{\cancel{ \alpha }/\alpha+\beta}}\left( r \frac{\beta}{\alpha} \right)^{\alpha/\alpha+\beta} \right) \\
&= q^{1/\alpha+\beta} \left( r^{\alpha/\alpha+\beta} \left( w \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta} + w^{\beta/\alpha+\beta} \left( r \frac{\beta}{\alpha} \right)^{\alpha/\alpha+\beta} \right)

\end{align*}
$$
:::



[^1]: Não raro, autores de Microeconomia empregam a letra $w_{i}$ como o custo do insumo $i$, como um análogo ao **w**age/preço da força de trabalho. Escolhemos utilizar aqui a letra $p_{i}$ de preços/*prices* para não confundir com o uso comum da letra $w$ para restrições orçamentárias — letra a qual, diga-se de passagem, também não faz sentido, sendo comum usar-se as letras $m$ (*money*) ou $I$ (*income*). Mas enfim... **são só letras!** 
[^2]: Demandas estas que, sob o problema de minimização do dispêndio, são [[Demanda Hicksiana|Demandas Hicksianas]].
[^3]: Citando o honorável professor João Carlos Alves Barata — autor das enciclopédicas [Notas (de Física Matemática) do Barata](https://denebola.if.usp.br/~jbarata/Notas_de_aula/capitulos.html) —, é bom "fazer estas contas ao menos uma vez na vida".
[^4]: Sem dividir por zero, evidentemente.
[^5]: Caso vá checar no Varian, ele utiliza $p$ para o resultado *bom* e $1-p$ para o resultado *ruim*. Caso haja algum erro aqui, com certeza se deu devido a esta alteração aqui.
