---
date: 2026-02-09
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]] // [[062 MOC Microeconomia]]

related:: [[Possíveis exercícios para listas de Microeconomia]]


# Lista 1 ([[062b MOC Teoria do Consumidor]]): [[Preferências do Consumidor]]
1) [[Equivalence Relation|Relações de Equivalência]] induzida por [[Partially Ordered Set|Relações de Ordem]] & [[Equivalence Class]] = [[Curva de Indiferença|Curvas de Indiferença]]
2) [[Demanda Marshalliana|Demanda Walrasiana]] homogênea de grau $1$ possui [[Elasticidade de Renda da Demanda|Elasticidade-Renda da Demanda]] $\epsilon_{kw} = 1$ para todo bem $k$ <-> [[Curva de Engel|Curvas de Engel]] são retas
3) [[Funções monotônicas preservam curvas de indiferença]]
4) Ordem lexicográfica (seu Jorge alcoólatra)
5) Tempo de lazer $L$ como um bem
6) Caso de relação de preferência localmente saciável: $(x_{1},x_{2}) \succeq (y_{1},y_{2}) \iff x_{1}+x_{2} > y_{1}+y_{2}$

# Lista 2 ([[062b MOC Teoria do Consumidor]]):  [[Função Utilidade|Funções Utilidade]] & PMU/PMD
1) [[Função de Utilidade CES]] & Restrições a
	1) Função utilidade linear
	2) [[Função de Cobb-Douglas]]
	3) [[Função de Leontief]]
	4) Cálculo de [[Elasticidade de Substituição]]
2) Cálculos de [[Demanda Marshalliana|Demanda Walrasiana]] (dado $w$), [[Demanda Hicksiana]] (dado $\tilde{u}$) — uso de [[Identidade de Roy]] e [[Lema de Shephard]]
	1) [[Utilidade quase-linear]]
	2) [[Função de Cobb-Douglas]] geral (cf. [[Possíveis exercícios para listas de Microeconomia#Cobb-Douglas para $L$ bens]])
	3) [[Função de Utilidade CES]] — difícil! Cf. [[Lista 2 Microeconomia - 1.2025#Demandas walrasianas da CES]]
3) Exemplo de [[Equação de Slutsky]]
	1) Talvez caso geral de [[Matriz de Slutsky]] (ao menos $2$ bens, elasticidade-cruzada $\neq 0$)

# Lista 3: Indeterminação ([[062d MOC Loterias]])
1) [[Lista 4 Microeconomia - 1.2025#Utilidades esperadas e gestão de desastres]]
2) [[Lista 4 Microeconomia - 1.2025#Exemplo de seguros]] — [[Utilidade de Bernoulli]]
	1) [[Equivalente Certo]] &  [[Prêmio de Risco]]
3) Casos de [[Coeficiente de Arrow-Pratt]] e [[Coeficiente de Aversão Relativa ao Risco]]
	1) $\tilde{u}(w) = \ln w$ — convexo/[[Aversão ao Risco|Avesso ao Risco]] ($\tilde{u}'' < 0$)
	2) Exemplo de utilidade *risk-loving*?
	3) Função utilidade CARA / Função utilidade CRRA?
# Lista 4: Comportamental & [[062c MOC Teoria da Firma]]
2)  [[Desconto Exponencial]] e coerência dinâmica
3) [[Desconto Hiperbólico]] e possibilidade de inversão de preferências intertemporalmente
4) Utilidade Fehr-Schmidt...? $U_{i} = \pi_{i} - \delta_i \max(\pi_{j}-\pi_{i}, 0) - \alpha_{i} \max(\pi_{i}-\pi_{j}, 0)$ 
5) [[Função Produção]] $F$ com [[Retorno de Escala|Retornos de Escala]] não-decrescentes $\implies$ [[Função Lucro]] é $\leq 0$ (produção inviável) ou $\to \infty$ (produção extrema)
	1) (**Cf. Slide 8:41**) Em regimes de produção baixa, $F$ tem retornos de escala "menos decrescentes", induzindo produção mais acelerada do que em níveis maiores (REs mais decrescentes) — *parece análogo* ao crescimento populacional parecer geométrico em regimes em que população é muito menor que *carrying capacity* $K$, e que desacelera quando está na mesma ordem que $K$ 
6) $F$ homogênea de grau $1$ $\iff$ [[Retorno de Escala|Retornos de Escala]] constantes
	1) Analogia com [[Função Utilidade|Utilidade]] homogênea de grau $1$ $\iff$ [[Curva de Engel]] constante

# Lista 5: [[062c MOC Teoria da Firma]]
1) "Consumidor da própria firma"
2) Casos [[Sunk Cost]] 
3) Maximização de [[Função Lucro|Lucro]] / Minimização de [[Função Custo|Custos]] 
	1) Produção Cobb-Douglas

# Lista 6: Equilíbrio Parcial & Equilíbrio Geral [[062e MOC Teoria do Bem-Estar]]
1) [[Ótimo de Pareto]] & [[Equilíbrio Walrasiano]] (ou Marshalliano)
2) Exemplo de [[Perda de Peso Morto]] (*deadweight loss*) — cf. [[ANPEC Microeconomia 05 2025#Discussão Posterior]]
3) Exemplos de [[Caixa de Edgeworth]]
4) [[Falha de Mercado|Falhas de Mercado]]
	1) [[Externalidade|Externalidades]]


---
# Lista 1 nova
### Exercício 1.1
Demonstre que, a partir de uma relação de ordem $\succeq$ em um espaço $X$, é possível definir uma relação $\sim$ que
$$
\forall x, y \in X: x \sim y \iff (x \succeq y)\,  \text{ \& }  \, (y \succeq x)
$$
(Tradução: "Para todo $x$ e $y$ pertencentes a $X$[^1], vale que $x \sim y$ se, e somente se, valer que $x \succeq y$ e também  $y \succeq x$.)

Essa relação $\sim$ satisfaz as propriedades:
1. **Reflexividade**: $\forall x \in X, x \sim x$
2. **Comutatividade**: $\forall x, y \in X, x \sim y \iff y \sim x$
3. **Transitividade**: $\forall x, y, z \in X, x \sim y \land y \sim z \implies x \sim z$

Por satisfazer estas propriedades, $\sim$ é dita uma *relação de equivalência*.[^2]

### Exercício 1.2
Dada uma relação de equivalência $\sim$ sobre algum conjunto (não-vazio) $X$, então, para cada $x \in X$, define-se sua *classe de equivalência* $[x]$ como
$$
[x] \coloneqq \{y \in X: y \sim x\}
$$

Ou seja, é o conjunto de elementos em $X$ que são equivalentes (sob $\sim$) a $x$ (note que $x \in [x]$). 

Demonstre que classes de equivalência são **disjuntas**: se há algum elemento em comum entre duas classes de equivalência $[x]$ e $[y]$, então elas são a mesma classe de equivalência. Dito de outra forma: se $x \nsim y$ (ou seja, que **não** seja verdade que $x \sim y$), então não haverá interseção entre suas classes de equivalência, e, portanto $[x] \neq [y]$. 

A importância deste exercício é que, dada uma relação de preferência racional $\succeq$ sobre algum espaço de cestas de bens $X$, é possível definir uma relação de equivalência $\sim$ — uma "relação de indiferença" entre cestas de $X$. As *curvas de indiferença* são, portanto, classes de equivalência sob esta relação de equivalência induzida por esta preferência. Segue do resultado acima, portanto, que *curvas de indiferença diferentes não se cruzam*!
### Exercício 1.3
Uma função monotônica $f: (X, \succeq_{X}) \to (Y, \succeq_{Y})$ é definida como uma função que preserva relações de ordem. Ou seja, se temos $x \succeq_{X} y$ em $X$, então $f(x) \succeq_{Y} f(y)$ em $Y$. Em matematiquês:
$$
\forall x, y \in X: x \succeq_{X} y \implies f(x) \succeq_{Y} f(y)
$$

Mostre que relações de equivalência (induzidas por alguma relação de ordem) são também preservadas por $f$: se $x \sim y$, então $f(x) \sim f(y)$. 

Isso quer dizer que, embora "os valores mudem" por conta da função $f$, *o formato das curvas de indiferença permanecem os mesmos*. 

**Obs**: É comum se dizer que funções monotônicas são "funções não-decrescentes", e que funções *estritamente* monotônicas são "funções *estritamente* crescentes". Isso, porém, segue da definição de acima[^3]: funções monotônicas em geral preservam $\succeq$ — pode ser, por exemplo, que $x \succ_{X} y$ **e** $\mathbf{x \nsim_{X} y}$, mas $f(x) \succeq_{Y} f(y)$, ou até $f(x) \sim_{Y} f(y)$ — e, portanto, são "não-decrescentes"; funções *estritamente* monotônicas preservam somente $\succ$ — se $x \succ_{X} y$, então garante-se que $f(x) \succ_{Y} f(y)$ — e, portanto, são funções estritamente crescentes.

### Exercício 1.4: 1.6 antiga (ordem saciável em $\mathbb{R}^2$)

### Exercício 1.5: 

### Exercício 1.5: exercício 1.3 da lista antiga (homogeneidade grau 1 e curva de Engel)



# Lista 2 nova


# Lista 3 nova


# Lista 4 nova


# Lista 5 nova


# Lista 6 nova




---
### Referências
- 

[^1]: Note que $\forall$ é um "A" invertido, que em inglês se lê "*for **a**ll*".
[^2]: Note que a relação de igualdade $x=y$ satisfaz essas propriedades. Relações de equivalência são mais gerais, e menos restritivas, do que relações de igualdade.
[^3]: Usualmente também assume-se que o domínio da função $f$ seja *totalmente* ordenado, que é o caso de $\mathbb{R}$: todos os elementos são comparáveis entre si sob a relação de ordem. Mas isso é mero pedantismo: se dois elementos $x, y \in X$ não fossem comparáveis sob relação de ordem, então não haveria nada para ser preservado por $f$, e tudo se passaria como se nada tivesse se passado!