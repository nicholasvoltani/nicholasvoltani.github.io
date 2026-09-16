---
date: 2026-08-17
tags:
  - economics
  - essay
  - marxism
aliases:
---

up:: [[0x51 MOC Dissertação Mestrado]]

# Saunders e o postulado de Khazzoom-Brookes
Em seu texto seminal de 1992, Harry Saunders cunha a expressão "postulado de Khazzoom-Brookes", com a qual define o fenômeno econômico em que
> "Com preços reais da energia fixos, ganhos de eficiência energética irão aumentar o consumo energético acima do nível em que ele estaria sem estes ganhos." [@Saunders1992, p. 135]

Ou seja, postula-se que este fenômeno é algo que não é meramente um fenômeno microeconômico advindo de variações de preços relativos. 

O objetivo de Saunders em seu artigo é de, como ele próprio expressa, levar o argumento macroeconômico de Brookes "ao seu extremo" e "analisar o que a teoria neoclássica do crescimento teria a dizer sobre este tema" [@Saunders1992, p. 132]. Suas análises, portanto, seguem o formato do [[Modelo de Solow|modelo de Solow]], e seu argumento se faz em duas partes: a primeira analisa o crescimento da demanda energética *sem* ganhos de eficiência energética, e depois faz a mesma análise *com* ganhos de eficiência. 

## Crescimento sem ganhos de eficiência energética
Saunders assume uma [[Função Produção|função produção]] em que os [[Fatores de Produção|fatores de produção]] são capital $K$, trabalho $L$ e *energia* $E$[^1],
$$
Y=F(K, L, E)
$$
em que $F$ é uma função produção com [[Retorno de Escala|retornos constantes de escala]]. 

Analisando o produto por unidade de capital, temos
$$
\begin{align*}
y \coloneqq \frac{Y}{K} &= K F\left( 1, \frac{L}{K}, \frac{E}{K} \right) \\
&\coloneqq K F(l, e)
\end{align*}
$$
onde as variáveis em letra minúscula — $y, l, e$ — são as variáveis em letra maiúscula divididas por $K$ — $Y, L, E$ .

Dada a notação de taxas relativas de crescimento
$$
\dot{X} \equiv \frac{dX}{dt} \frac{1}{X}
$$
temos que a taxa relativa de crescimento do produto-por-capital $y=\frac{Y}{K}$ é
$$
\begin{align*}
\dot{y} &= \frac{d\left( \frac{Y}{K} \right)}{dt} \frac{K}{Y} \\
&= \frac{K}{Y} \left( \frac{dY}{dt} \frac{1}{K} - Y \frac{dK}{dt} \frac{1}{K^{2}} \right) \\
&= \dot{Y} - \dot{K}
\end{align*}
$$

Assumindo que o produto esteja crescendo a uma dada taxa $\dot{Y} = \bar{r}$ — pois queremos abstrair de aumentos de consumo de fatores de produção devidos ao crescimento da economia como um todo —, e assumindo que o investimento advém da poupança de certa parte do produto
$$
I=\frac{dK}{dt} = sY \iff \frac{I}{K} = \frac{dK}{dt} \frac{1}{K} = \dot{K} = s y
$$
teremos que
$$
\dot{y} = \bar{r} - sy
$$

O estado estacionário do produto por capital $y^{*}$ requer que $\dot{y}=0$, o que faz com que
$$
\dot{Y} = \dot{K}
$$

Ou seja, o produto cresce, em termos relativos, na mesma proporção que o capital. Dessa mesma condição de estacionariedade, temos que o produto por capital é constante e igual a
$\frac{\bar{r}}{s}$:
$$
y^{*} = \frac{\bar{r}}{s}
$$
Ou seja, $y^{*}=\frac{Y^{*}}{K^{*}}$ é constante, o que é o mesmo que
$$
Y^{*} = \frac{\bar{r}}{s} K^{*}
$$

Analisando agora o estoque de *capital per capita* $\frac{K}{L}$, temos que
$$
\begin{align*}
\dot{k} = \frac{d\left( \frac{K}{L} \right)}{dt} \frac{L}{K} = \dot{K} - \dot{L} = \frac{sY}{K} - \dot{L} 
\end{align*}
$$
%%onde as variáveis em letra minúscula — $y, l, e$ — agora são as variáveis em letra maiúscula divididas **por** $\mathbf{L}$ — $Y, K, E$ . Seguindo derivação análoga à acima, temos que o produto por capita tem crescimento relativo
$$
\dot{y} = \frac{d\left( \frac{Y}{L} \right)}{dt} \frac{L}{Y} = \dot{Y} - \dot{L}
$$
%%

Assumindo um crescimento relativo exógeno da população $\dot{L} = \bar{n}$, teremos que
$$
\dot{k} = \frac{sY}{K} - \bar{n}
$$

No caso estacionário, em que o estoque de capital cresce ao mesmo passo que o trabalho, $\dot{k}=0$, em que temos que
$$
\begin{cases}
\dot{Y}=\dot{L}  \\
Y^{*} = \frac{\bar{n}}{s} K^{*}
\end{cases}
$$
Pelo acima, porém, faz-se necessário que $\bar{n}=\bar{r}$ para que seja possível um estado estacionário de crescimento da economia.

Fazendo os mesmos cálculos em que $k\coloneqq \frac{K}{E}$, obtém-se que
$$
\dot{k} = \dot{K}-\dot{E}
$$
que só pode estar em equilíbrio estacionário — produto *por fator energia* — quando $\dot{k}=0$, em cujo caso
$$
\dot{E} = \dot{K}=\bar{r}=\bar{n}
$$
 
Ou seja, o crescimento estacionário da economia requer que todos os fatores de produção cresçam à mesma taxa, que será a mesma taxa de crescimento do produto.[^2] Ademais, expandindo a análise para as produtividades marginais dos fatores de produção, tem-se:
$$
\begin{align*}
\frac{dY}{dt} &= \frac{ \partial Y }{ \partial K } \frac{dK}{dt} + \frac{ \partial Y }{ \partial L }  \frac{dL}{dt} + \frac{ \partial Y }{ \partial E } \frac{dE}{dt}
\end{align*} 
$$
com o que se obtém que
$$
\begin{align*}
\dot{Y} = \frac{dY}{dt} \frac{1}{Y} &= \frac{ \partial Y }{ \partial K } \frac{K}{Y} \dot{K} +  \frac{ \partial Y }{ \partial L } \frac{L}{Y} \dot{L} + \frac{ \partial Y }{ \partial E } \frac{E}{Y} \dot{E}
\end{align*}
$$

No estado estacionário, tem-se que $\dot{Y}=\dot{K}=\dot{L}=\dot{E}=\bar{r}$, em que a equação acima se reduz a[^3]
$$
1 =  \frac{ \partial Y }{ \partial K } \frac{K^{*}}{Y^{*}} + \frac{ \partial Y }{ \partial L }  \frac{L^{*}}{Y^{*}} + \frac{ \partial Y }{ \partial E } \frac{E^{*}}{Y^{*}} 
$$

Em suma: quando os preços dos fatores de produção $K$, $L$ e $E$ são fixos, e para uma função produção com retornos constantes de escala, assim como tendo um crescimento relativo do produto $\bar{r}$ igual ao crescimento relativo da população trabalhadora $\bar{n}$, teremos que a proporção ótima de fatores de produção, com que a economia alcança um estado estacionário de crescimento, será aquela que faz com que a média de suas produtividades marginais — ponderadas pela proporção em que são empregados na economia — seja igual a $1$.


## Crescimento com ganhos de eficiência energética




# Decomposição do efeito rebound
À primeira vista, o que a economia *mainstream* chama de [[Efeito Rebound|efeito rebound]] não é mais do que o [[Efeito Preço|efeito preço]] microeconômico: a queda do preço de um serviço energético faz com que sua demanda aumente[^4], dando espaço tanto a um [[Efeito Substituição|efeito substituição]] — uma [[Demanda Marshalliana|cesta ótima de bens]] se reconfigura de forma a aumentar sua proporção destes serviços mais baratos, a um mesmo nível de [[Função Utilidade||utilidade]] — quanto a um [[Efeito Renda|efeito renda]]  — a renda "liberada" pelo menor dispêndio neste serviço pode agora ser reaproveitada com novos dispêndios. 

Contudo, por sua própria constituição, a sociedade mercantil é caracterizada pela *produção para a venda*, produção *para outrem*. Dessa forma, tais fenômenos microeconômicos, por mais que a economia ortodoxa enxergue o mundo pela lente do [[atomismo social]], podem se reverter em fenômenos macroeconômicos que não podem ter sua origem (ao menos imediatamente) remetida às ações singulares dos agentes econômicos.

É possível categorizar o efeito *rebound* em três categorias principais [@Sorrell2009, @Greening2000]: efeitos diretos, efeitos indiretos e efeitos "*economy-wide*"[^5]. 

Os efeitos diretos destes ganhos de [[Eficiência (Marx)|eficiência]] energética dizem respeito, no que tange à Economia usual, aos impactos que o consumidor (ou firma) individual sofre. A princípio, como tais ganhos aparecem aos agentes econômicos como uma queda nos *preços implícitos* de certos serviços energéticos de que usufruem, suas [[Demanda Marshalliana|cestas ótimas]] de consumo se reconfiguram de forma a comportar mais destes serviços, e, neste ínterim, suas [[Restrição Orçamentária|restrições orçamentárias]] redistribuem seus demais dispêndios em outros bens e serviços a fim de comportar aquele consumo aumentado. Vide [[062b MOC Teoria do Consumidor|teoria microeconômica do consumidor]][^6], tal variação de preços induz tanto [[Efeito Substituição|efeitos-substituição]] quanto [[Efeito Renda|efeitos-renda]], de forma que a cesta de consumo após este ganho de eficiência energética também será, no que diz respeito a um consumidor dado, uma cesta ótima.[^7] Claro está que, a depender das preferências particulares de um dado consumidor, uma queda no preço (implícito) dos serviços energéticos fará com que ele deixe de consumir certos bens em uma magnitude maior ou menor do que outros bens, proporções estas ditadas pelas [[Elasticidade de Preço da Demanda|elasticidades-preço de sua demanda]].[^8]

A tendência de maior consumo destes serviços energéticos mais eficientes[^9] corresponde a um aumento de sua demanda, que terá de ser atendida, portanto, por uma oferta maior no mercado. Estes preços de mercado maiores, advindos dessa nova relação de oferta e demanda, incentivarão maiores níveis de produção, com os quais se exigirão, *inter alia*, maiores gastos energéticos, não só nos setores diretamente ofertantes destes serviços energéticos mais demandados, como também nos setores adjacentes e indiretamente implicados.[^10] 

Por fim, a percolação destes efeitos diretos e indiretos pela economia como um todo engendra uma variedade de [[Fenômeno Emergente|fenômenos emergentes]] macroeconômicos, até mesmo capazes de retroagir sobre os agentes econômicos e suas decisões particulares.[^11] A reconfiguração das estruturas produtivas, a mudança dos padrões de preferências dos consumidores, em suma, mudanças mais profundas na economia, vista como um todo, podem ser vistas não só como uma consequência (a longo prazo) de tais ganhos de eficiência, como também causas de novos ganhos futuros de eficiência, podendo até ganhar a alcunha de "ciclo virtuoso" pela economia do crescimento. 

Na aferição do fenômeno econômico do efeito *rebound* está sempre implícita a consideração de que a energia possui "relevância econômica", ou melhor, que seu uso para "realizar *trabalho útil* — seja na forma de trabalho mecânico (incluindo a geração de eletricidade) ou na produção de calor" [@Sorrell2009, p. 1460] tem ganhado uma centralidade cada vez maior na economia capitalista ao longo do tempo. Tal centralidade, porém, ao contrário do que a Economia em geral o entende, diz mais respeito à esfera da *produção* do que à da circulação, pelo simples motivo de que todo consumo em uma sociedade capitalista tem de vir do mercado, e tudo que nele está à venda tem de ser *produzido* — a partir de meios de produção que advêm, eles também, do próprio mercado.

Esta aparente identidade tautológica — em que a circulação depende da produção mas a produção também depende da circulação — oculta a [[Prioridade Ontológica|prioridade ontológica]] da esfera da produção *lato sensu* sobre a vida dos seres humanos: somente se pode consumir aquilo que *foi produzido para o consumo*. É por isso que essa "solidariedade contraditória"[^12] somente se mostra enquanto relação "assimétrica"[^13] quando há crises: as expectativas de consumo, na esfera da circulação, e do *business as usual* tornam-se palpáveis quando o dinheiro que se leva no bolso não tem poder social suficiente para comandar produtos no mercado, seja por seu preço excessivo ou por sua inexistência nas prateleiras. ~~Embora não seja (totalmente) verdade que a oferta crie sua própria demanda, ao menos é certo que a não-oferta engendra o não-consumo e a frustração da demanda existente. 
~~
Mesmo as análises mais sofisticadas do efeito *rebound*, que empregam modelos computáveis de equilíbrio geral (p. ex. @Hanley2009, @Wei2010), ainda ancoram-se na esfera da circulação para a descrição deste fenômeno econômico. Naturaliza-se a esfera da produção, e sua influência ontológica sobre a esfera da circulação — assim como sua apreensão epistemológica pelos "agentes econômicos" em geral — [[Aparência|aparece]] como algo exógeno, pressuposto, sendo relembrada somente enquanto explicação das variações da oferta de mercado de algum bem ou serviço.


---
### Referências

[^1]: O próprio Saunders aponta que o fator $E$ deveria, a rigor, ser também uma função de $K$ e $L$, pois é produzido a partir deles. Deixa indicado, porém, que mesmo com um modelo do tipo $Y=F[K, L, E(K,L)]$, "as conclusões deste artigo sobre taxas de crescimento de fatores e de produto ainda se mantêm. Tudo o que é necessário é a suposição de que fatores sejam fungíveis [*fungible*] entre os setores. Dado isso, capital e trabalho no setor energético crescerão às mesmas taxas que eles crescem na economia como um todo." [@Saunders1992, p. 144, n.  1] 
[^2]: Esta última conclusão não poderia ser diferente, pois assume-se aqui que há retornos *constantes* de escala.
[^3]: Pois assumimos que $\bar{r}\neq 0$.
[^4]: Supondo que se trate de um [[Bens Normais|bem normal]].
[^5]: Literalmente: "efeitos a nível da economia", efeitos macroeconômicos.
[^6]: Cf. @Varian2014, @Mas-Colell1995, @Cowell2004 etc.
[^7]: A teoria microeconômica usual pressupõe consumidores "racionais", que, pela definição em @Mas-Colell1995, trata-se essencialmente de um agente econômico cujas [[Preferências do Consumidor|relações de preferência]] entre cestas de bens são [[Totally Ordered Set|relações matemáticas de ordem total]] sobre algum conjunto $\mathbb{R}^{N}$ (a rigor: algum *sub*conjunto de $\mathbb{R}^{N}$). É para estes agentes, protótipos basilares do *homo oeconomicus* da economia capitalista, que os principais resultados da Microeconomia são válidos. 
[^8]: Tal reconfiguração de uma cesta ótima, após uma variação de preços de um ou mais bens desta cesta, é dada pela [[Equação de Slutsky|equação de Slutsky]], que toma em conta as elasticidades-preço desses bens, tanto no que diz respeito a uma variação de *seus próprios* preços, quanto no que diz respeito à variação de preços *dos demais bens* (i.e. "elasticidades cruzadas").
[^9]: Ubiquamente assumidos, na literatura, como [[Bens Normais|bens normais]] ==Citar==.
[^10]: Por exemplo, setores metalúrgicos, indústrias químicas etc., além dos próprios setores de infraestrutura energética, a depender da escala de tempo analisada. 
[^11]: Essa retroação de um fenômeno macroscópico sobre suas componentes microscópicas é comumente chamada, na literatura de sistemas complexos, de *downward causation* (cf. @Kim2006, por exemplo). Aqui pressupõe-se a [[Ontologia|ontologia]] capitalista em que os átomos de uma economia são os indivíduos singulares, i.e. "atomismo social" [@Medeiros2013].
[^12]: @Lukacs2012, p. 332. 
[^13]: "...*nenhuma interação real (nenhuma real determinação de reflexão) existe sem momento predominante*. Quando essa relação fundamental não é levada na devida conta, tem-se ou uma série causal unilateral e, por isso, mecanicista, simplificadora e deformadora dos fenômenos, ou então aquela interação carente de direção, superficialmente rutilante, cuja ausência de ideia Hegel criticou com razão em seu tempo, mas sem encontrar solução para o problema. No caso da interação entre produção e consumo, é evidente que a primeira 'é o ponto de partida efetivo, e, por isso, também o momento predominante'. Precisamente porque essa última conclusão da análise das categorias econômicas foi entendida como uma das questões centrais do método marxiano, mas sem que se respeitassem os *pressupostos ontológicos de tais categorias*, tivemos de mostrar como essa verdade se converte em falsidade quando, deixados de lado tais pressupostos e suas consequências, ela é aplicada imediatamente à economia e ao ser social." [@Lukacs2012, p. 334, grifo meu]. 
