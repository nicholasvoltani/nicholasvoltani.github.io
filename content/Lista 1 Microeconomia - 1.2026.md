---
date: 2026-02-24
tags:
  - economics
---

up:: [[0x5 MOC Mestrado]] // [[062 MOC Microeconomia]]


# Conceitos introdutórios
## Conjuntos parcialmente/totalmente ordenados
Um conjunto (não-vazio) $X$ é dito *parcialmente ordenado* se ele possui uma relação $\leq$ que satisfaça[^1]
- *Reflexividade*: $\forall x \in X: x \leq x$
- *Transitividade*: $\forall x, y, z \in X: (x \leq y) \land (y \leq z) \implies x \leq z$
- *Antissimetria*: $\forall x, y \in X: (x\leq y) \land (y \leq x) \implies x = y$

Essa relação $\geq$ é dita ser uma *relação de ordem parcial* (ou relação *parcial* de ordem). 

Caso *todos* os elementos em $X$ sejam "comparáveis" através de $\leq$ — ou seja,[^2]
$$
\forall x, y \in X: (x \leq y) \lor (y \leq x)
$$
dizemos que o conjunto $X$ é *totalmente ordenado*, e que $\leq$ é uma relação de ordem *total* (ou relação *total* de ordem).

Note que, naturalmente, nem todas as relações parciais de ordem são totais. Seja $X = \{ 1,2,3\}$, e $\mathcal{P}(X) = \{ \emptyset, \{ 1 \}, \{ 2 \}, \{ 3 \}, \{ 1,2 \}, \{ 1,3 \}, \{ 2,3 \}, X \}$ o conjunto das partes de $X$ (em inglês: *power set*). Verifique que $\mathcal{P}(X)$, com a relação de inclusão de conjuntos $\subseteq$, é uma relação *parcial* de ordem, mas que *não é total* — ou seja, existem elementos em $\mathcal{P}(X)$ que não são comparáveis sob $\subseteq$.

(Ao leitor pedante: trivialmente pode-se definir $x \preceq y$ — a operação "para o outro lado" — como $y \succeq x$.)

## Preferências racionais
@Mas-Colell1995 definem *preferências racionais* $\succeq$ como "relações *completas* ($\forall x,y: x \succeq y \lor y \succeq x$) e *transitivas*" — ou seja, vide acima, são relações de ordem *total* sobre um espaço de cestas de bens. 

Vide definição **1.B.2.** em @Mas-Colell1995, uma função $u: X \to \mathbb{R}$ é uma *função utilidade que representa uma relação de ordem* $\succeq$ caso
$$
\forall x, y \in X: x \succeq y \iff u(x) \geq u(y)
$$
(naturalmente com a relação de ordem $\geq$ usual dos números reais $\mathbb{R}$.)

A relação de ordem sobre os reais $\mathbb{R}$ *é uma relação total*, pois sabemos que, para quaisquer números reais $x, y \in \mathbb{R}$, vale que ou $x>y$, ou $x<y$, ou $x=y$; dito de outra forma, sempre vale que ou $x \geq y$, ou $y\geq x$. 

Dessa forma, caso uma relação de preferências $\succeq$, sobre um conjunto $X$ de cestas de bens, seja representável por uma função utilidade $u:X \to \mathbb{R}$, então *necessariamente* esta relação tem de ser *racional* (i.e. relação *total* de ordem). A demonstração da proposição **1.B.2** em @Mas-Colell1995 segue o seguinte esquema: para quaisquer $x, y \in X$, como $u(x)$ e $u(y)$ estão sobre um conjunto totalmente ordenado $\mathbb{R}$, então vale que ou $u(x) \geq u(y)$, ou $u(y) \geq u(x)$, e como pressupõe-se que $\succeq$ é representada por $u$, então conclui-se que ou $x \succeq y$ ou $y \succeq x$ — portanto, esta relação $\succeq$ é total. 

Ou seja, caso uma relação de preferências seja representável por uma função utilidade, então ela será racional. A recíproca não é verdadeira: há preferências racionais que não são representáveis por funções utilidade, uma das quais é a ordem lexicográfica (exercício 1.5 abaixo).


%% --- %%
# Exercícios
## Relações de ordem e preferências racionais

(**Exercício 1.1**) Demonstre que, a partir de uma relação de ordem $\succeq$ em um espaço $X$, é possível definir uma relação $\sim$ que
$$x
\forall x, y \in X: x \sim y \iff (x \succeq y)\,  \land  \, (y \succeq x)
$$
(Tradução: "Para todo $x$ e $y$ pertencentes a $X$, vale que $x \sim y$ se, e somente se, valer que $x \succeq y$ e também  $y \succeq x$.)

Essa relação $\sim$ satisfaz as propriedades:
1. *Reflexividade*: $\forall x \in X: x \sim x$
2. *Comutatividade*: $\forall x, y \in X: x \sim y \iff y \sim x$
3. *Transitividade*: $\forall x, y, z \in X: (x \sim y) \land y( \sim z) \implies x \sim z$

Por satisfazer estas propriedades, $\sim$ é dita uma *relação de equivalência*.[^3]

(**Exercício 1.2**) Dada uma relação de equivalência $\sim$ sobre algum conjunto (não-vazio) $X$, então é possível definir, para cada $x \in X$, sua *classe de equivalência* $[x]$ como sendo o conjunto[^4]
$$
[x] \coloneqq \{y \in X: y \sim x\}
$$

Ou seja, é o conjunto de elementos em $X$ que são equivalentes (sob $\sim$) a $x$ (note que $x \in [x]$ — por quê?). 

Demonstre que classes de equivalência são **disjuntas**: se há algum elemento em comum entre duas classes de equivalência $[x]$ e $[y]$, então elas são a mesma classe de equivalência. Dito de outra forma: se $x \nsim y$ (ou seja, que **não** seja verdade que $x \sim y$), então não haverá interseção entre suas classes de equivalência — i.e. $[x] \cap [y] = \emptyset$ —, e, portanto, $[x] \neq [y]$. Escrito em "matematiquês", esta proposição lê:[^5]
$$
\forall x, y \in X: x \nsim y \iff [x] \neq [y]
$$

A importância deste exercício é que, dada uma relação de preferência racional $\succeq$ sobre algum conjunto de cestas de bens $X$, é possível definir uma relação de equivalência $\sim$ , a qual descreve uma "relação de indiferença" entre cestas de $X$. As *curvas de indiferença* são, portanto, classes de equivalência sob esta relação de equivalência induzida por esta preferência. Segue do resultado acima, portanto, que *curvas de indiferença diferentes não se cruzam*!

(**Exercício 1.3**) Uma função monotônica $f:X \to Y$ (definida sobre conjuntos parcialmente ordenados $(X, \succeq_{X})$ e $(Y, \succeq_{Y})$) é uma função que *preserva relações de ordem*. Ou seja, se temos $x \succeq_{X} y$ em $X$, então $f(x) \succeq_{Y} f(y)$ em $Y$. Em matematiquês:
$$
\forall x, y \in X: x \succeq_{X} y \implies f(x) \succeq_{Y} f(y)
$$

Mostre que relações de equivalência (induzidas por relações de ordem) são também preservadas por $f$: se $x \sim y$, então $f(x) \sim f(y)$. 

Isso quer dizer que, embora "os valores mudem" por conta da função $f$, *o formato das curvas de indiferença permanecem os mesmos*. 

**Obs**: É comum se dizer que funções monotônicas são "funções não-decrescentes", e que funções *estritamente* monotônicas são "funções *estritamente* crescentes" — isso, porém, segue da definição de acima[^6]. Funções monotônicas em geral preservam $\succeq$, mas pode haver casos em que, por exemplo, $x \succ_{X} y$ **e** $\mathbf{x \nsim_{X} y}$, mas $f(x) \succeq_{Y} f(y)$, ou até $f(x) \sim_{Y} f(y)$ — por exemplo, funções em $\mathbb{R}$ que sejam crescentes mas que possuam "platôs" nos quais certos intervalos estejam "na mesma altura" num gráfico; são, portanto, funções "não-decrescentes". Por outro lado, funções *estritamente* monotônicas preservam somente $\succ$ — se $x \succ_{X} y$, então garante-se que $f(x) \succ_{Y} f(y)$ — e, portanto, são funções *estritamente* crescentes.

(**Exercício 1.4**) Considere uma relação de preferência definida sobre $\mathbb{R}^2$ definida como
$$
(x_{1},x_{2}) \succ (y_{1}, y_{2}) \iff x_{1}+x_{2} > y_{1}+y_{2}
$$

Essa relação de preferência satisfaz não-saciedade local? 

(**Exercício 1.5**) A ordem lexicográfica $\succeq$ é uma relação de ordem definida para quaisquer $x=(x_{1},x_{2}) \in \mathbb{R}^{2}$ e $y =(y_{1},y_{2})\in \mathbb{R}^{2}$  como
$$
x \succeq y \iff (x_{1} \geq y_{1}) \lor [(x_{1} = y_{1}) \land (x_{2} \geq y_{2})]
$$
É chamada "lexicográfica", pois é um ordenamento alfabético: por exemplo, $ab \succeq aa$, pois $a=a$ (ou seja, $x_{1}=y_{1}$) e $b\geq a$ (ou seja, $x_{2}\geq y_{2}$). 

Em outras notícias, o velho Jorge é alcoólatra. Seus amigos falam em voz baixa sobre suas curvas de nível lexicográficas: ele sempre prefere estritamente a cesta de consumo que contém a maior quantidade de bebida, independentemente da quantidade dos outros bens na cesta; se duas cestas tiverem a mesma quantidade de bebida, ele prefere estritamente a cesta que tem a maior quantidade dos outros bens. Esboce as preferências do velho Jorge em um diagrama. Qual dos axiomas (completude e transitividade) é violado por tal ordenação? Ela é uma relação de ordem *contínua*?


	%% --- %%
### Referências
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: Note que $\forall$ é um "A" invertido, que em inglês se lê "*for **a**ll*". Por exemplo, a asserção $\forall x \in X: x \leq x$ lê: "Para todo $x$ pertencente ao conjunto $X$, vale que $x \leq x$". Ademais, caso valha a asserção lógica $A \land B$, lê-se: "$A$ **e** $B$ são verdadeiros". 
[^2]: Caso valha a asserção lógica $A \lor B$, lê-se: "$A$ **ou** $B$ é/são verdadeiro(s)". Note que este "ou" é *inclusivo*, ou seja, quer dizer "$A$ é verdadeiro, $B$ é verdadeiro, ou $A$ **e** $B$ são verdadeiros".
[^3]: Note que a relação de igualdade $x=y$ satisfaz essas propriedades. Relações de equivalência são mais gerais, e menos restritivas, do que relações de igualdade.
[^4]: Tradução matemática: $[x]$ *é definido* como "o conjunto de elementos $y \in X$ tais que $x \sim y$". Note que estes elementos $y$ são um mero índice, i.e. não importa qual letra seja usada; poderia igualmente ser escrito como "o conjunto de elementos $z \in X$", ou "...elementos $\xi \in X$". O único elemento que tem alguma "concretude" aqui (além do dado conjunto $X$) é um dado elemento $x$, que foi pré-determinado no enunciado.
[^5]: $A \implies B$ lê "$A$ implica $B$", ou seja, $A$ ser verdadeiro *implica que* $B$ também seja verdadeiro. $A \iff B$ quer dizer que $A$ é verdadeiro *se e somente se* $B$ for verdadeiro; é o mesmo que $A \implies B$ **e também** $B \implies A$. 
[^6]: Usualmente também assume-se que o domínio da função $f$ seja *totalmente* ordenado, que é o caso de $\mathbb{R}$: todos os elementos são comparáveis entre si sob a relação de ordem. Mas isso é mero pedantismo: se dois elementos $x, y \in X$ não fossem comparáveis sob relação de ordem, então já não haveria nada entre eles para ser preservado por $f$, e tudo se passaria como se nada tivesse se passado!
