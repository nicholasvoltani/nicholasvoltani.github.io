---
date: " 2025-06-12"
tags:
  - economics
aliases:
---

up:: [[060 MOC Economia]]

# Introdução
A Matemática não é uma ciência, como a Física ou a Economia. Não quer dizer que ela não seja lógica e coerente — **muito** pelo contrário —, e sim de que seu objeto não tem de restringir-se com relação à sua efetividade no mundo real. Afinal, não existem volumes em $10$ dimensões no mundo real, certo?

Bom, não um volume *palpável*, no sentido em que uma caixa possui um volume tridimensional. Porém, quando *descrevemos* um objeto — ou seja, falamos de uma *representação* sua —, pode ser que esta descrição seja passível de elocubrações não-(imediatamente-)sensíveis. Afinal, descrições em ciências atmosféricas dependem de várias variáveis — pressão, temperatura, altitude (com relação ao nível do mar), densidade do ar, etc. —, mesmo que seu objeto no mundo real esteja em um espaço tridimensional. Quem dirá em Economia, um sistema muito mais complexo que o (já bem complexo) sistema complexo atmosférico!

Para o leigo, a Matemática consiste em fazer contas e quantificar as coisas do mundo.[^1] Para um matemático, a Matemática consiste — creio eu, mero entusiasta — em uma *atividade de abstrações*. Meu exemplo prototípico[^2] começa nos números reais $\mathbb{R}$, um conjunto do que chamamos comumente de "números", com algumas funções a que atribuímos características especiais: definimos uma chamada "função valor absoluto" $|\cdot|$, que toma a "magnitude" de qualquer número — e que, "de alguma forma", também mede a "distância" entre pontos (em $\mathbb{R}$)! Dessa forma, pudemos penetrar num fato que dávamos por dado — quais são as características que definem "distância" no mundo real? — e criamos, a partir dele, uma abstração: damos um passo para trás, e, através dessas características/propriedades, podemos dizer "e é por isso que esta função $d$ [[Metric Function|mede distâncias]]". Ou seja, ao invés de sabermos "esta função mede distâncias, aquela função mede distâncias, aquela não exatamente, etc.", meramente como catalogadores a-cerebrados, temos em mãos agora o próprio crivo pelo qual funções têm de passar para que sejam sequer consideradas como "medições de distância". 

Para quem olha de fora, pode parecer que matemáticos vão longe até demais em seu *métier* abstrativo. Não à toa um de seus projetos mais abstratos — [[027 MOC Category Theory|Teoria de Categorias]] — tenha sido jocosamente cunhado de "*abstract nonsense*". Creio que não seja à toa que matemáticos teóricos sintam prazer quando sua área de pesquisa "não possui aplicação nenhuma": porque podem falar, em plenos pulmões, que o *télos* de sua atividade não está restrito pelo desejo do capital, não precisa "ser útil"; faz-se isso porque se quer fazê-lo. Mais do que isso: faz-se isso porque se vê uma beleza nisso, um prazer que permite que ele seja feito "por si próprio".[^3] Evidentemente que este "por si próprio" não enquadra-se no individualismo burguês em que usualmente pensamos que "gênios" refestelam-se; mesmo pesquisadores de "áreas inúteis à sociedade" precisam de colegas com que compartilhem este prazer ultraparticular e alheio ao resto do mundo.

E, não obstante este fazer (ao menos em espírito) autopropelido, a sociedade não cessa de encontrar soluções de seus problemas "mundanos" em esquemas abstratos matemáticos! Wigner famosamente o chamou de "*unreasonable effectiveness of mathematics*"[^4]. Para um não-matemático, pode parecer mágico que certos resultados matemáticos "magicamente" apliquem-se a seus problemas. Para um matemático, existem axiomas e definições, das quais decorrem resultados ulteriores; caso estes resultados sejam efetivos no mundo real ou não lhes é mera contingência, pois *logicamente necessários* (sob suas devidas hipóteses) eles já são. 

# 1. Lógica Proposicional
O fundamento de toda a Matemática está no que se chama de *lógica proposicional*. Todas as proposições, lemas e teoremas são demonstrados através dela, a partir de axiomas e resultados previamente demonstrados[^5].

Os "átomos" da lógica proposicional são chamados de *asserções*. Toda asserção $A$ assume um de dois valores: "verdadeiro" ou "falso", $0$ ou $1$, $V$ ou $F$, $\top$ ou $\bot$, o que preferir — a questão é somente ser *coerente*! Por legibilidade, vou utilizar os símbolos $V$(erdadeiro) e $F$(also).

Novas asserções podem ser criadas a partir de asserções prévias através de *operadores lógicos*. Uma forma de ver quais são seus resultados possíveis a partir de seus *inputs* é através de *tabelas-verdade* [*truth tables*], a ver abaixo.

Os operadores fundamentais são os seguintes:
## 1.1. Operador *AND*/*e*: $\land$
O operador de *conjunção*, "*e*", toma duas asserções e retorna uma nova. Seu resultado somente é *verdadeiro* quando ambos seus *inputs* são verdadeiros: $A \land B$ somente é verdadeiro quando $A$ é verdadeiro **e também** $B$ é verdadeiro; caso contrário, $A \land B$ é falso: ao menos *alguma* das duas asserções é falsa (possivelmente ambas).

A tabela-verdade do operador $\land$ é da forma:

| $A$ | $B$ | $A \land B$ |
| --- | --- | ----------- |
| $F$ | $F$ | $F$         |
| $F$ | $V$ | $F$         |
| $V$ | $F$ | $F$         |
| $V$ | $V$ | $F$         |

## 1.2. Operador *OR*/*ou*: $\lor$
O operador de *disjunção*, "*ou*", também toma duas asserções e retorna uma nova. Seu resultado somente é *falso* quando *as duas* asserções são falsas; caso contrário, seu resultado é verdadeiro.

Sua tabela-verdade é da forma:

| $A$ | $B$ | $A \lor B$ |
| --- | --- | ---------- |
| $F$ | $F$ | $F$        |
| $F$ | $V$ | $V$        |
| $V$ | $F$ | $V$        |
| $V$ | $V$ | $V$        |

Muito cuidado com este operador, pois, ao contrário da linguagem cotidiana, o operador "*ou*" na Matemática é **inclusivo**: *ou* $A$ é verdadeiro, *ou* $B$ é verdadeiro, *ou ambos* são verdadeiros.

## 1.3. Operador *NOT*/*não*: $\lnot$
O operador de *negação*, *não-*, toma somente uma negação e retorna seu "oposto": quando $A$ é verdadeiro, $\lnot A$ — "*não-*$A$" — é falso, e vice-versa.

Sua tabela-verdade é da forma:

| $A$ | $\lnot A$ |
| --- | --------- |
| $F$ | $V$       |
| $V$ | $F$       |
### Exercício 1.1.
Note que o operador $\lor$ possui as propriedades "opostas" às do operador $\land$: este último somente é *verdadeiro* quando ambas as asserções o são, e o primeiro somente é *falso* quando ambas o são. 

Demonstre os seguintes resultados:[^6]
$$
\begin{cases}
\lnot (A \land B) = (\lnot A) \lor (\lnot B) \\
\lnot (A \lor B) = (\lnot A) \land (\lnot B)
\end{cases}
$$

Estas são as *leis de De-Morgan*.

Dica: 

| $A$ | $B$ | $A \land B$ | $\lnot A$ | $\lnot B$ | $(\lnot A) \land (\lnot B)$ |
| :-- | :-- | :---------- | --------: | --------: | --------------------------: |
| $F$ | $F$ |             |           |           |                             |
| $F$ | $V$ |             |           |           |                             |
| $V$ | $F$ |             |           |           |                             |
| $V$ | $V$ |             |           |           |                             |

**Nota**: Perceba que, demonstrando uma delas, pode-se demonstrar a outra, ao se "inverter" as asserções, i.e. fazendo $A \mapsto \lnot A$ e $B \mapsto \lnot B$ . 

## 1.4. Operador *condicional*: $\implies$
O operador *condicional* toma duas asserção e retorna outra. Ele é um dos mais importantes de toda a Matemática: **toda demonstração é uma asserção condicional**, ou seja, "se $A$, então $B$" é escrito como $A \implies B$, também lido como "$A$ **implica** $B$". Este operador também é comumente chamado de *implicação*.

Sua tabela-verdade, por definição, é da forma:

| $A$ | $B$ | $A \implies B$ |
| --- | --- | -------------- |
| $F$ | $F$ | $V$            |
| $F$ | $V$ | $V$            |
| $V$ | $F$ | $F$            |
| $V$ | $V$ | $V$            |
Creio que a melhor forma de entender a tabela-verdade deste operador é pensar em como ele é usado na prática, em Matemática de verdade: em demonstrações matemáticas.

Sempre que sabe-se que um resultado $A$ *decorre de* outro $B$[^7], diz-se que $A$ *implica* (logicamente) $B$. Ou seja, caso $A$ seja verdadeiro, e $B$ também seja verdadeiro, então dizer que $A \implies B$, que $A$ implica $B$, é verdadeiro. 

Disso também segue que, caso $A$ seja verdadeiro, *mas $B$ não o seja*[^8], então a implicação é *falsa*: $A$ *não é suficiente* para "causar" $B$. Perceba que já aqui aparece a noção de *necessário* e *suficiente*!

As primeiras "linhas" da tabela-verdade da condicional $\implies$ são, admito, simplesmente ignoradas no dia-a-dia de um matemático. Eu interpreto-as como o fato de que "de uma mentira pode-se concluir qualquer coisa — seja esta conclusão verdadeira ou falsa". 

Um exemplo famoso é de Bertrand Russell: assuma que $1 = 0$. Demonstre que eu sou o Papa. Matematicamente:
$$
\begin{align}
(1 = 0) &\implies 1 + 1 = 0 + 1 \\
&\implies 2 = 1
\end{align}
$$
Note que o conjunto $\{\text{Eu}, \text{Papa}\}$ contém $2$ elementos. Mas, *como demonstrado acima*, $2 = 1$, portanto este conjunto, em verdade, possui somente $1$ elemento. Conclusão: $\text{Eu} = \text{Papa}$.


Isso é absurdo — e, não obstante, é *lógico*. Nenhum passo da demonstração está incorreto — mas sua hipótese, como sabemos, é falsa. Este é (quase fidedigno à expressão) o calcanhar de Aquiles da Matemática: seu enorme poder dedutivo desmorona como um castelo de cartas caso esteja construído sobre hipóteses que sejam falsas/incorretas.

## 1.5. Bicondicional $\iff$
O operador *bicondicional* é o operador $\implies$ "para os dois lados": $A \iff B$ é o mesmo que $A\implies B$ **e** $B \implies A$.

Em tabela-verdade:

| $A$ | $B$ | $A\implies B$ | $B\implies A$ | $(A \implies B) \land (B\implies A)$<br>i.e. $A \iff B$ |
| --- | --- | ------------- | ------------- | ------------------------------------------------------- |
| $F$ | $F$ | $V$           | $V$           | $V$                                                     |
| $F$ | $V$ | $V$           | $F$           | $F$                                                     |
| $V$ | $F$ | $F$           | $V$           | $F$                                                     |
| $V$ | $V$ | $V$           | $V$           | $V$                                                     |
Ou seja, note que o operador $\iff$ só é verdadeiro *quando tanto $A$ quanto $B$ são verdadeiros*, e vice-versa. Ou seja, quando $A \iff B$ é verdadeiro, podemos dizer que $A$ e $B$ possuem o mesmo valor-verdade ($V$/$F$) — ou seja, $A$ e $B$ **são equivalentes**. 

Não é à toa que o símbolo em $\LaTeX$ para $\iff$ é `\iff`: comumente lemos $A \iff B$ como $A$ **se e somente se** $B$; em inglês, $A$ **if and only if** $B$ (por isso a contração "*iff*"). 

Portanto, possuímos um operador dentro da própria lógica que nos permite expressar resultados equivalentes (em valores-verdade).

## 1.6. Equivalências lógicas
### Operador condicional como disjunção
O operador condicional $\implies$ pode ser escrito através dos operadores $\lor$ e $\lnot$, como
$$
A \implies B \iff (\lnot A) \lor B
$$
Meu exemplo prototípico sempre foi "se ($A$) está chovendo, então $(B)$ há nuvens no céu". Note que a equivalência acima vale: ou $(\lnot A)$ não está chovendo, ou $(B)$ há nuvens no céu — note que isso contabiliza tanto situações de céu aberto quanto situações nubladas porém sem chuva.

Porém, recentemente eu percebi um exemplo bem mais comum no dia-a-dia: "se $X$, então meu nome **não** é \_\_\_". "Transcrevendo" em matematiquês: $X \implies \lnot Y$, onde $Y$ é "meu nome é \_\_\_". Pela equivalência teríamos $(\lnot X) \lor (\lnot Y)$: ou não-$X$ ou, caso tenha-se que $X$ seja verdadeiro, então meu nome não é \_\_\_.

### Contrapositiva
A contrapositiva de uma implicação $A \implies B$ é sua forma equivalente $\lnot B \implies \lnot A$. Ou seja,
$$
(A\implies B) \iff (\lnot B \implies \lnot A)
$$

Eu costumava utilizar o exemplo da chuva para exemplificar a contrapositiva, mas recentemente descobri algo que sempre esteve debaixo de meu nariz: a expressão "se $X$, então meu nome **não** é \_\_\_". A contrapositiva fica na forma "meu nome é \_\_\_, então $\lnot X$". De fato, é dessa forma que interpretamos quando alguém diz essa frase: "se $X$, então meu nome não é Nicholas"; ora, eu **sei** que meu nome é Nicholas; concluo, portanto, que **não-**$X$.

Inclusive, muitos argumentos utilizam contrapositiva mas não percebemos. Por exemplo, "se eu fosse culpado de ter feito $X$, eu teria feito $Y$; como eu **não** fiz $Y$, então eu concluo que **não** sou culpado de ter feito $X$". 

Contudo, note-se: a contrapositiva é equivalente à condicional, portanto sendo equivalente **a seu valor-verdade**; ela só é verdadeira **se a condicional também o for**. É uma faca de dois gumes: tanto é possível convencer alguém com um argumento falso que possua uma contrapositiva mais "imediatamente plausível", quanto é possível demonstrar uma asserção que apresente-se como sendo complicada, mas tenha uma contrapositiva mais simples.


- Tabelas-verdade
- **Operadores** $\land, \lor, \lnot, \implies, \iff$
- Equivalências
	- Contrapositiva
	- $(\lnot A \lor B) \equiv (A \implies B)$
- Modus ponens (?)
- **Quantificadores** $\exists, \forall$
- Contradictio ad absurdum
- Demonstração por Indução
# Básicos de [[020 MOC Mathematics|Conjuntos]]
- $\cup, \cap, \subseteq$
- Complemento
- Funções (inj, sobre, bij)
- [[Equivalence Class|Relações de equivalência]]
- **Propriedades dos $\mathbb{R}$**!!
	- Supremo/ínfimo (liminf, limsup...)
	- $\bar{\mathbb{Q}} = \mathbb{R}$ (densidade)
# Rudimentos de [[026 MOC Topology|Topologia]]

# Básicos de Análise Real

# Básicos de [[021a MOC Linear Algebra|Álgebra Real]] 


---
### References
- NERI, Cassio; CABRAL, Marco A.P. **Curso de Análise Real**. 2021. Disponível em: [im.ufrj.br/images/documentos/editora-im/curso-analise-real-com-capa.pdf](https://www.im.ufrj.br/images/documentos/editora-im/curso-analise-real-com-capa.pdf)
- SUTHERLAND, Wilson A. **Introduction to metric and topological spaces**. Oxford University Press, 2009.
- VOLTANI, Nicholas F. **Topology (and Metrics) for the Young at Heart**, 2018. Disponível em [https://drive.google.com/file/d/13Bcry67vO-Tn_fUp3qJa-KGvjYa4OKaR/view?usp=sharing](https://drive.google.com/file/d/13Bcry67vO-Tn_fUp3qJa-KGvjYa4OKaR/view?usp=sharing).
- ["Notas para um Curso de Física-Matemática". João C A Barata](http://denebola.if.usp.br/~jbarata/Notas_de_aula/capitulos.html)
	- [Cap. 1: "Noções Conjuntivistas Básicas"](http://denebola.if.usp.br/~jbarata/Notas_de_aula/arquivos/nc-cap01.pdf)
	- [Cap. 28: "Espaços Topológicos e Espaços Mensuráveis. Definições e Propriedades Básicas"](http://denebola.if.usp.br/~jbarata/Notas_de_aula/arquivos/nc-cap28.pdf)

[^1]: Infelizmente, também o é para alguns não-tão-leigos assim.
[^2]: Melhor elaborado em ["Topology for the Young at Heart" (2018)](https://drive.google.com/file/d/13Bcry67vO-Tn_fUp3qJa-KGvjYa4OKaR/view?usp=sharing).
[^3]: Caso consigam sobreviver fazendo-o. Muitos não o conseguem, e precisam vender suas almas a preços pífios para pagar suas contas.
[^4]: [WIGNER, Eugene P. **The Unreasonable Effectiveness of Mathematics in the Natural Sciences**. 1990.](https://personal.lse.ac.uk/ROBERT49/teaching/ph201/Week15_xtra_Wigner.pdf)
[^5]: Há o uso de *conjunturas* na Matemática, mas elas sempre são *provisórias*: elas são usadas como um *IOU*, resultados pendentes de serem demonstrados *de facto* futuramente.
[^6]: Evidentemente estou usando a notação $X = Y$ para dizer "quaisquer valores 'verdadeiro'/'falso' que $X$ possa assumir, $Y$ também assumirá identicamente".
[^7]: **Em Matemática**!
[^8]: Note que dizer "$A$ **mas** $B$" é, em verdade, dizer "$A$ **e** $B$". Mais sobre isso adiante.