---
date: " 2025-05-31"
tags:
  - economics
aliases:
---

up:: [[061e1 MOC Keynes]]

# Tratado sobre a Moeda
Discrepâncias entre investimento e poupança gerariam flutuações econômicas, passíveis de intervenção monetária.

Ideia que Keynes inicialmente herda de Robertson:
- Variações no crédito poderiam fazer $I$ divergir de $S$ **voluntária**
	- Na insuficiência de poupança, inflação temporária criaria "fundo de investimento" ao  *forçar menor consumo das pessoas* — poupança **forçada** 

No *Tratado*, Keynes abandona explicação de que tais discrepâncias podem vir da "ação explícita do sistema bancário", assim como TQM para explicar flutuações de curto prazo.
- Poupança e investimentos são feitos por **classes diferentes de pessoas, com interesses diferentes**. Logo, não haveria economia monetária de crédito/mecanismos automáticos que as equiparasse

Usa noção de Wicksell de **taxa natural**, dependente do estoque total de capital, cuja produtividade dá a **taxa natural de juros**. 
- Quando [[Taxa de Juros]] de mercado = taxa natural de juros, não há impacto inflacionário
- Quando há defasagens, há diferença entre taxa de juros oferecida pelos emprestadores e aquela almejada pelos tomadores

Tais defasagens poderiam ter intervenção pelo [[Banco Central]], mas não sob [[Padrão-Ouro]]: oferta de moeda é **endógena** (pelo lado externo, entrada e saída de ouro na economia). Fixar taxas de juros baixas o suficiente para equivaler $I$ e $S$ geraria [[Desemprego]] em massa. (?)

# *Teoria Geral*
Recessões profundas podem fazer com que investimentos caiam (baixas expectativas) => menos trabalho => menos consumo => menos investimentos ainda (piores expectativas). É neste contexto que [[Política Fiscal|Políticas Fiscais]] seriam necessárias para permitir um equilíbrio da economia.

[[Princípio da Demanda Efetiva]]: equilíbrio econômico não necessariamente está no [[Pleno Emprego]], e sim aquele que advém da **satisfação da demanda agregada**. 

Se produção (oferta agregada) está acima da demanda, então há excesso de emprego de recursos: atende demanda, mas há excesso no mercado. 

Taxas de juros não são determinadas pelo mercado de fundos emprestáveis, e sim no **mercado de moeda**, onde demanda de moeda depende da [[Preferência por Liquidez]]. 

---
# Anotações 01/06/2025

# *Teoria Geral*, Cap. 3: O princípio da demanda efetiva
Custos do emprego de [[Força de Trabalho]]:
- Custo **de fatores** (*factor cost*)
> "the amounts which he pays out to the factors of production (exclusive of other entrepreneurs) for their current services" (Keynes, 2013, p. 23)
- Custo de uso (*user cost*):
> "the amounts which he pays out to other entrepreneurs for what he has to purchase from them together with the sacrifice which he incurs by employing the equipment instead of leaving it idle" (Ibid.)

O [[Função Lucro|Lucro]] do empresário — **visto agregadamente** — é igual ao valor produzido (i.e. [[Função Receita|Receita]]) *menos custos de fatores e de uso*, doravante chamado de **renda**.

Porém, como pode-se ver os custos de fatores de uma parte como rendimentos destes mesmos fatores para a outra parte, pode-se definir a **renda total** do empresário como o lucro *mais custos de fatores*, ou seja, valor produzido menos custo de uso. Outra forma de vê-lo é que a renda total é o valor produzido, *líquido de custos de uso*.

É a **renda total** a quantidade (segundo Keynes) o que o empresário busca maximizar. 

Por algum motivo, Keynes considera que "o preço da oferta agregada da produção resultante de determinado volume de emprego *é o produto esperado*, que é exatamente suficiente para que os empresário considerem vantajoso oferecer o emprego em questão" (Keynes, 1996, p. 59-60; grifo meu).

$Z$: preço da oferta agregada da produção, advinda do emprego de $N$ *men*. A relação entre ambos, dada por $\phi$, é a *função da oferta agregada*.
$$
Z = \phi(N)
$$

Seja $D$ o produto que os empresários esperam receber do emprego de $N$. Então a relação entre ambos é a *função da demanda agregada*.
$$
D = f(N)
$$

[[Princípio da Demanda Efetiva]]: "*o valor de $D$ no ponto de interseção da função da demanda agregada com o da oferta agregada*" (Ibid., p. 61). É neste ponto em que emprega-se $N^*$ suficiente para *equiparar* $D$ e $Z$. 

Keynes propõe que a [[Lei de Say]] consiste em que as funções oferta/demanda agregada são iguais **para todos os valores de $N$**. Ou seja, para *qualquer* variação de oferta $\Delta Z$ — correspondente a certa variação $\Delta N$ —, existe a **mesma** variação em $\Delta D$. 

> "Isso quer dizer que a demanda efetiva, em vez de ter um único valor de equilíbrio, comporta uma série infinita de valores, todos igualmente admissíveis, e que o volume de emprego é indeterminado, *salvo na medida em que a desutilidade marginal do trabalho lhe fixe um limite superior*." (Ibid., p. 61; grifo meu)

Ou seja, invés de coincidirem em somente um ponto $N^*$ — um único valor de equilíbrio —, coincidem em **todos os pontos $N$**. Ou seja, a única coisa que restringe o emprego "infinito"[^1] de mão-de-obra é **seu oferecimento ("voluntário")**. 

Tal emprego aumentaria "*até o ponto em que a oferta agregada cessa de ser elástica*" — ou seja, o [[Pleno Emprego]].

A elasticidade da oferta agregada (no tocante ao emprego) é
$$
\frac{ \partial Z }{ \partial N } \frac{N}{Z}
$$

Pensá-la como deixando de ser elástica é o ponto onde ela *é elástica "por último"*, pois pressupõe-se que ela é "mais-que-elástica" até este ponto — ou seja, que "produz mais do que custa". 

Ou seja, o ponto de pleno emprego $\bar{N}$ é um ponto **de demanda efetiva** tal que
$$
\begin{align*}
\frac{ \partial Z(\bar{N})}{ \partial N } \frac{\bar{N}}{Z} &= 1 \\
\iff \frac{ \partial Z(\bar{N}) }{ \partial N } &= \frac{Z}{\bar{N}}
\end{align*}
$$
Ou seja, quando a derivada da oferta agregada se torna *linear* (paralela à reta que une $0$ a $Z$).

Ou seja, a lei de Say, onde oferta=demanda sempre, indica que não há obstáculos ao pleno emprego — i.e. a interseção é limitada somente por restrições da oferta *de trabalho*. Na forma que Keynes formula, é possível que a demanda efetiva **não esteja no pleno emprego**!

### A questão da ideologia na economia ortodoxa
Keynes pondera sobre a predominância da visão da Lei de Say, i.e. de que a demanda efetiva sempre alcança o pleno emprego.

> "O fato de a vitória ricardiana ter sido tão completa faz com que seja revestida de curiosidade e de mistério. Essa vitória provavelmente se deveu a um complexo de afinidades entre a sua doutrina e o meio em que foi lançada. Creio que o fato de ter chegado a conclusões inteiramente diversas das que poderia esperar um indivíduo comum e pouco instruído contribuiu para seu prestígio intelectual. Deu-lhe virtude a circunstância de que seus ensinamentos, transportados para a prática, eram austeros e, por vezes, desagradáveis. Deu-lhe primor o poder sustentar uma superestrutura lógica, vasta e coerente. **Deu-lhe autoridade o fato de poder explicar muitas injustiças sociais e crueldades aparentes como incidentes inevitáveis na marcha do progresso, e de poder mostrar que a tentativa de modificar esse estado de coisas tinha, de modo geral, mais chances de causar danos que benefícios. Por ter formulado certa justificativa à liberdade de ação do capitalista individual, atraiu-lhe o apoio das forças sociais dominantes agrupadas atrás da autoridade.**" (Keynes, 1996, p. 66; grifo meu)

[[A ideologia da classe dominante é expressão de sua dominação]]! Aqui já há até mesmo os ecos de Milton Friedman[^2], desaconselhando o excesso de intervenção estatal.

No fim das contas, é a narrativa que é, *surprise surprise*, a mais conveniente à classe dominante: *laissez-faire* ao capitalista, e zero restrições ao [[Exército Industrial de Reserva (Sobrepopulação Relativa)]]. 

# Cap. 18: Novo enunciado da Teoria Geral do Emprego
Tomam-se como variáveis independentes:
- [[Propensão Marginal a Consumir]]
- [[Eficiência Marginal do Capital]]
- [[Taxa de Juros]]
onde são dados
> "a capacidade e a quantidade de **mão-de-obra disponível**, 
> a qualidade e quantidade do **equipamento disponível**, 
> o estado da **técnica**,
> o grau de **concorrência**,
> os gostos e hábitos dos **consumidores**,
> a desutilidade das diferentes **intensidades de trabalho**
> e das atividades de **supervisão e organização**, 
> bem como a **estrutura social**, incluindo as forças que determinam a **distribuição da renda nacional**, não compreendidas em nossas variáveis citadas mais adiante." (KEYNES, p. 237; grifo meu)

Há também, porém, a importância de **expectativas**, tanto de rendimentos futuros de ativos, quanto de [[Preferência por Liquidez]]. 

(**02/06/2025**)
> "Em especial, é uma das características essenciais do sistema econômico em que vivemos não ser ele violentamente instável, mesmo estando sujeito a severas flutuações no que concerne à produção e ao emprego. Na verdade ele parece apto a permanecer em condições crônicas de atividade subnormal durante um tempo considerável sem tendência marcada para a recuperação ou o colapso completo. Ademais, a evidência prova que o pleno emprego, ou mesmo o aproximadamente pleno, é uma situação tão rara quanto efêmera. As flutuações podem começar de repente, mas parecem atenuar-se antes de chegar a grandes extremos, e o nosso destino é a situação intermediária, não propriamente desesperada e tampouco satisfatória. Foi no fato de que as flutuações tendem a atenuar-se por si mesmas antes de alcançarem limites extremos e de, eventualmente, se inverterem que se baseou a teoria dos ciclos econômicos de fase regular. O mesmo se aplica aos preços que, em resposta a uma causa inicial de perturbação, se mostram aptos a encontrar um nível em que podem permanecer relativamente estáveis por certo tempo." (Ibid., p. 240)

Capítulo esfinge da porra...

# Cap. 19: Variações nos salários nominais
Visão clássica: diminuir salários diminui custos do empresário, portanto induzindo uma maior produção — e maior emprego —, "até o ponto em que a redução que os operários concordaram aceitar em seus salários nominais fique compensada justamente pela eficiência marginal decrescente do trabalho à medida que aumenta a produção (de determinado equipamento)" (Ibid, p. 247).

Argumentar-se-ia que a [[Despesa Agregada|Demanda Agregada]] não mudaria no processo, pela [[Teoria Quantitativa da Moeda]]:
$$
\bar{M} \bar{v} = P Y
$$
"Há, talvez, alguns economistas que sustentam não haver razão para que a demanda seja afetada, argüindo que a demanda agregada depende da quantidade de moeda multiplicada pela velocidade-renda da mesma, e que **não há razão evidente para que uma redução dos salários nominais diminua a quantidade de moeda ou a sua velocidade-renda**.[^3] Poderão sustentar, ainda, que a baixa dos salários aumenta necessariamente os lucros" (Ibid., p. 247-8; grifo meu). Keynes argumenta que "pode ter algum efeito sobre a demanda agregada através da queda que ocasiona no poder de compra de alguns trabalhadores", embora esta possa ser compensada justamente pela demanda aumentada dos outros fatores de produção (menores preços), além do maior [[Consumo Agregado|Consumo]]/demanda dos trabalhadores. 

Porém, há um problema de relacionar a diminuição do salário *em indústrias particulares* com o efeito *agregado*...?, como se a indústria como um todo *tivesse uma curva de demanda de trabalho*. 

## Reduzir os salários aumenta o emprego, *ceteris paribus*?
*Ceteris paribus* = [[Propensão Marginal a Consumir]], [[Eficiência Marginal do Capital]] e [[Taxa de Juros]] constantes $\implies$ [[Princípio da Demanda Efetiva|Demanda Efetiva]] constante.

Caso se diminuam os salários, só haverá lucro com a maior produção 
- *se a propensão marginal a consumir for unidade*, "de modo que não haja lacuna entre o incremento dos rendimentos e o incremento do consumo" — ou seja, *tendo demanda efetiva constante* —, ou
- se "a curva das eficiências marginais do capital *ter aumentado relativamente à taxa de juros*", em cujo caso "a redução dos salários nominais resultar num aumento da escala das eficiências marginais do capital em relação à taxa de juros e, portanto, no montante de investimento" (p. 250; grifo meu). 

...ou seja, não pode ocorrer *ceteris paribus*!

Repercussões de reduzir os salários são, portanto:
- Possível redistribuição de renda:
	- dos assalariados (menor salário) "para outros fatores que entrem no custo primário marginal e cuja remuneração não tenha sido reduzida" (outros fatores de produção)
	- dos empresários (menor lucro) aos *rentiers* "aos quais se garantiu certo rendimento fixo em termos monetários" (p. 251)
	- Ou seja, uma tendência à diminuição da propensão marginal a consumir geral
- etc etc

Ou seja, esperar que uma diminuição dos salários nominais possa aumentar o nível de emprego, que é o mesmo que trazer mais lucros aos empresários, requer uma melhoria nos investimentos, "devida a um aumento na eficiência marginal do capital (...), ou numa taxa menor de juros" (p. 253).

> "A contingência favorável de um aumento na eficiência marginal do capital é aquela em que se julga que os **salários nominais tenham alcançado o seu limite inferior**, de modo que as variações posteriores tenham de ser em direção ascendente. A contingência mais desfavorável é aquela em que os salários nominais descem lentamente e em que cada redução diminui a confiança na probabilidade que têm os mesmos de se manterem." (p. 253; grifo meu)
> "Quando entramos num período de declínio da demanda efetiva, uma baixa repentina e substancial dos salários nominais, **levando-os a um nível tão ínfimo que ninguém pudesse acreditar na sua continuidade indefinida**, seria o acontecimento mais favorável para restaurar a demanda efetiva. Mas isso só poderia ser realizado por uma decisão administrativa, e dificilmente seria possível num regime de livre discussão dos salários." (Ibid.)

Ou seja, há a impressão de que *é melhor contratar agora, antes dos salários voltarem a aumentar*; caso haja perspectiva de que eles ainda caiam, pode haver uma indução "à espera pelo momento ótimo de contratação". Parece análogo à compra de ações "quando elas estão em baixa", também relacionado à [[Armadilha da Liquidez]]. É neste sentido que uma [[Rigidez Nominal]] seria útil; em regimes puramente flexíveis, pode haver perigo de não se alcançar tal "limite inferior".

Porém, como não pode-se assumir tal rigidez em geral, convém analisar o efeito que as taxas de juros induzem. Dado um nível de quantidade de moeda $\bar{M^s}$ constante, então a *quantidade de moeda medida em salários* $\frac{\bar{M^s}}{w}$ pode aumentar tanto quanto os salários $w$ diminuírem, podendo essa quantidade aumentar em proporção aos rendimentos a depender da [[Composição Orgânica do Capital]] (?). Etc etc.

(?) Por que $\frac{M^s}{w}$ é importante?

> "Não há, portanto, motivo para crer que uma política flexível de salários possa manter um estado permanente de pleno emprego, nem como pensar que uma política monetária de mercado aberto possa atingir, sozinha, este resultado. Tais meios não são suficientes para conferir ao sistema econômico a propriedade de se ajustar por si mesmo." (p. 254)

## Opinião de Keynes quanto a isso
> "À luz destas considerações, sou agora de opinião que **a manutenção de um nível geral estável de salários nominais é, resumindo todas as considerações, a política mais aconselhável para um sistema fechado**; a mesma conclusão **permanece válida para um sistema aberto, desde que o equilíbrio com o resto do mundo possa ser assegurado pelas flutuações do câmbio**. A existência de certo grau de flexibilidade dos salários em determinadas indústrias tem suas vantagens, desde que sirva para **facilitar a transferência de mão-de-obra das indústrias que se encontram em decadência relativa para as que estão relativamente progredindo**. O nível geral dos salários nominais, porém, deve ser mantido tão estável quanto possível, pelo menos em períodos curtos. 
> 
> Esta política terá como resultado um grau conveniente de estabilidade no nível dos preços — maior estabilidade, em todo caso, do que com uma política de salários flexíveis. Excetuando-se os preços “dirigidos” ou os de monopólio, o nível de preços só se modificará em períodos curtos à medida que as variações do emprego afetem os custos primários marginais; já nos períodos longos, só variará em conseqüência da baixa do custo de produção devida a novas técnicas e a equipamentos novos ou ampliados."(p. 256-7)



---
### References
- [A Treatise on Probability — John Maynard Keynes](http://www.gutenberg.lib.md.us/3/2/6/2/32625/old/2010-05-31-32625-pdf.pdf)
- [Keynes IV. - YouTube](https://www.youtube.com/watch?v=GGhOKpTZnLc)
- [Keynes V e VI. - YouTube](https://www.youtube.com/watch?v=1gK56LzXvCY)
- KEYNES, John Maynard. **The collected writings of John Maynard Keynes: The General Theory of Employment, Interest and Money**. Cambridge: Cambridge University Press for the Royal Economic Society, 2013. v. 7
- KEYNES, J.M. **A Teoria Geral do Emprego, do Juro e da Moeda.** São Paulo: Nova Cultural, 1996.

[^1]: Mas isso realmente seria de interesse do capitalista, mesmo que hipoteticamente? Não poderia haver um custo que não fosse linear, i.e. aumentasse mais-que-linearmente com $N$, em que o lucro marginal seria zero para alguma quantidade $N^* < \infty$? — **Ler próximo parágrafo!**
[^2]: [[Monetarismo]]. 
[^3]: Mas diminuir salários $\implies$ aumento de produção e de emprego $\implies$ aumento de consumo $\implies?$ maior velocidade-renda??