---
date: "2025-07-02"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]]

# $\star$ Grupo 1: Rational Fools (SEN, 1977)
[[Resumo - 'Rational Fools', Amartya Sen]]

**Objetivo**: Crítica à noção de "racionalidade" proposta pela [[Teoria Neoclássica]], em que pressupõe-se o [[Axioma Fraco das Preferências Reveladas]]: a *escolha* de uma opção frente a outra dá a entender — "portanto", a afirmar-se — que aquela é a opção *preferida* dentre ambas.

**Conceitos abordados**: [[Preferências Racionais]], [[062e MOC Teoria do Bem-Estar]] 

**Metodologia**: Discussão "filosófica" sobre a identificação que os neoclássicos fazem entre a *escolha* de indivíduos "racionais" e suas *preferências*: escolhem o que preferem, e não escolherão o que não lhes for preferido.

**Resultados**: Sen propõe novas categorias que ditam a escolha de agentes "racionais": *simpatia* [*sympathy*] e *comprometimento* [*commitment*], com foco neste último. Um agente escolhe por comprometimento quando sua escolha *não está* dentre suas opções pessoalmente preferidas, e no entanto a escolhe mesmo assim; ou seja, infere-se, caso ele esteja agindo *racionalmente*, que há algo a mais ditando seu processo de escolha *além de suas preferências pessoais*. 

# Grupo 2: Estudo da Pesquisa de Orçamentos Familiares POF (VAZ, HOFFMAN, 2020)
**Objetivo**: Estimações de elasticidade-renda da demanda de frações da população brasileira (via edições de POFs) para vários tipos de alimentos

**Conceitos abordados**: [[Elasticidade de Renda da Demanda|Elasticidade-Renda da Demanda]]

**Metodologia**: Divisão em $10$ "classes" orçamentárias da população, para cada tipo de produto. Estimativa de elasticidades *para cada tipo de produto* através de uma [[Regressão de Mínimos Quadrados Ordinária]] (ish), da forma
$$
\ln Y_{i} = \alpha + \beta \ln X_{i} + \sum \limits_{h=1}^{2} \epsilon_{h} Z_{h,i} (\ln X_{i} - \ln \theta_{h}) + u_{i} 
$$
onde $Y_{i}$ é a despesa média da fração $i$ para este produto, $X_{i}$ a renda per capita das famílias, $\theta_{h}$ é renda estimada para divisão da população em $3$ extratos de renda ($I, II, III$), e $Z_{h,i}$ é uma função Heaviside com respeito a $X_{i} > \theta_{h}$. Os coeficientes $\beta$ e $\epsilon_{h}$ são elasticidades, onde os **extratos** (e respectivas classes) possuem, portanto, as seguintes elasticidades:
- $I$: $\beta$
- $II$: $\beta + \epsilon_{1}$
- $III$: $\beta + \epsilon_{1}+ \epsilon_{2}$

**Resultados**: Com preços constantes de $2018$ (última POF considerada no artigo), há diminuição de consumo de produtos da cesta básica, como arroz, feijão, macarrão. 
- Paralelamente, há aumento de elasticidade média de alimentação **fora do domicílio** *vis-à-vis* em casa (com **queda** de consumo na última rodada), assim como de alimentos preparados
- Queda de consumo de "carnes, vísceras e pescados" (elasticidade média mantida)

**Apontamentos meus**: Há um hiato de tempo enorme entre a POF de 2008-9 e 2017-8! Muita coisa aconteceu nesse período: consequências da [[Crise do Subprime (2007)]] pela Europa (e [[Efeito Transbordamento]] ao resto do mundo), reeleição do PT via Dilma Rousseff, [[Crise Econômica Brasileira de 2014]] após o fim do [[Boom das Commodities (anos 2000)]], *impeachment*, medidas de Michel Temer...  É difícil fazer afirmações como "queda no consumo de carnes foi acompanhada de aumento de e.g. ovos", pois até pode ser o caso *imediatamente*/*ocasionalmente*, mas esse consumo certamente oscilou muito ao longo desses quase $10$ anos de defasagem das POFs, ao ponto que me parece indevido fazer uma relação de causalidade entre uma e outra.

Além disso, as separações extremas de tais extratos — por exemplo, 1-8-1 — são discutíveis sobre sua assertividade com relação à explicação dos dados (embora tais averiguações requerissem ver os dados um por um, naturalmente levando tempo).


# Grupo 3: Labor Economics (CAHUC, CARCILLO, ZYLBERBERG, 2014)
**Objetivo**: 

**Conceitos abordados**:  [[061d MOC Mercado de Trabalho]], [[Efeito Substituição de Slutsky]], [[Salário]]

**Metodologia**: 

**Resultados**: 

# Grupo 4: Influência de Taxação em Famílias e Oferta de Trabalho (ATKINSON, STIGLITZ, 2013)
**Objetivo**: Analisar os efeitos de taxação sobre renda na oferta de trabalho.

**Conceitos abordados**: Oferta de [[Força de Trabalho]], [[Impostos]], [[Efeito Renda]], [[Efeito Substituição]], "Financial Effect" (evasão de impostos de maneiras lícitas)

**Metodologia**: Impostos de renda aplicados à [[Restrição Orçamentária|Restrições Orçamentárias]] $Y = wL + I$ ($I$ [[Restrição Orçamentária|Renda]] exógena) ocasionam um efeito renda $I \mapsto  M \coloneqq (1-t)I$ (pressupondo que $\frac{ \partial L }{ \partial M } < 0$, i.e. lazer $L_{0}-L$ é um [[Bens Normais|Bem Normal]]), e um [[Efeito Preço]] devido a $w \mapsto \omega \coloneqq (1-t) w$ (por [[Equação de Slutsky]]), via
$$
\frac{ \partial L }{ \partial w } = \left( \frac{ \partial L }{ \partial w }  \right)_{\bar{U}} + L \frac{ \partial L }{ \partial M } 
$$

Portanto, a mudança de $L$ com relação ao imposto $t$ é
$$
\frac{ \partial L }{ \partial t } = \frac{ \partial L }{ \partial \omega } \frac{ \partial \omega }{ \partial t } + \frac{ \partial L }{ \partial M } \frac{ \partial M }{ \partial t } = -w\left( \left( \frac{ \partial L }{ \partial \omega } \right)_{\bar{U}} + L \frac{ \partial L }{ \partial M }  \right) - I \frac{ \partial L }{ \partial M } = -w \left( \frac{ \partial L }{ \partial \omega } \right)_{\bar{U}}  - (wL + I) \frac{ \partial L }{ \partial M }   
$$
A composição dos dois efeitos é representada da seguinte forma:
![[Pasted image 20250707145557.png|400]]
Fonte: ATKINSON, STIGLITZ, 2013, p. 27.

(Ou seja, pode haver casos em que o trabalho **aumente** após taxação.)

**Resultados**: Diferentes tipos de taxação podem induzir efeitos diferentes sobre a oferta de \[força de\] trabalho.  

*Lump-sum tax*: $Y = wL + I \mapsto wL + I - G$ (taxação de igual valor para todos)

*Wage tax*: $Y = wL + I \mapsto (1-t_{w})wL + I$.

*Proportional [income] tax*: $Y = wL + I \mapsto (1-t) (wL+I)$. É igual a uma taxação *lump-sum* ($I \mapsto (1-t)I$) mais uma taxação sobre salário ($w \mapsto (1-t)w$).


# Grupo 5: Influência de Taxação para Fumantes (GRUBER, KŐSZEGI, 2004; 2008)
**Objetivo**: Modelar como aumento de impostos podem influenciar em um menor consumo de cigarros, assumindo que fumantes possuem inconsistência temporal no tocante a suas taxas de desconto de utilidades futuras

**Conceitos abordados**: [[Impostos]], [[Desconto Exponencial]], [[Desconto Hiperbólico]], Inconsistência Temporal

**Metodologia**: Observa-se experimentalmente que fumantes possuem taxas de desconto mais baixas para o futuro distante do que para o futuro próximo: são mais impacientes quanto ao futuro próximo, e mais pacientes quanto ao futuro distante. Portanto, o modelo assume uma taxa de desconto de curto prazo $\beta$ e uma taxa de desconto de longo prazo $\delta$. 

**Conclusões**: Faz-se importante considerar um modelo diferente do usual de "agentes racionais" quanto à modelagem de fumantes, em que haja inconsistência temporal quanto ao desconto de utilidades futuras. 

Além disso, Gruber e Koszegi mostram (2008) que o impacto em utilidade para tais indivíduos com inconsistência temporal, mediante aumento de preço $\Delta p_{t}$ do bem viciante, é
$$
-N_{t} \Delta p_{t} \left( 1 - \epsilon_{p_{t}} (1-\beta) \frac{\delta h}{p_{t}} \right)
$$
onde $N_{t}$ é quantidade de fumantes, $\epsilon_{p_{t}}$ é elasticidade-preço, $\delta h$ é o dano [*harm*] causado a longo prazo (descontado por $\delta$).

Portanto, como indivíduos de renda menor possuem [[Elasticidade de Preço da Demanda|Elasticidade-Preço da Demanda]] maior para cigarros — preços maiores induzem uma queda razoável em seu consumo —, o benefício que adquirem com a aplicação de impostos (supondo-os temporalmente inconsistentes em seu consumo) **aumenta** mais rápido que para maiores rendas. Ou seja, a aplicação de impostos para esses bens é **progressiva**! 
# Grupo 6: Paying Not to Go to the Gym (DELLA VIGNA, MALMENDIER, 2006)
- Objetivo: 
- Conceitos abordados: [[Desconto Exponencial]], [[Desconto Hiperbólico]], Inconsistência Temporal
- Metodologia: 
- Resultados: 

---
# Grupo 6: Elasticidades de Firmas (HSIEH, 2010)
- Objetivo: 
- Conceitos abordados: [[062c MOC Teoria da Firma]], Elasticidade-Trabalho do [[Função Produção|Produto]]  
- Metodologia: 
- Resultados: 

# Grupo 5: Estimação de eficiência na educação (IZADI et al., 2002)
- Objetivo: 
- Conceitos abordados: [[Função de Utilidade CES]] 
- Metodologia: 
- Resultados: 

# Grupo 4: Cultural Economics (THROSBY, 1994)
- Objetivo: 
- Conceitos abordados: 
- Metodologia: 
- Resultados: 

# Grupo 3: Função de Produção estimada para a Educação (FIGLIO, 1999)
- Objetivo: 
- Conceitos abordados: [[Função Produção]] 
- Metodologia: 
- Resultados: 

# Grupo 2: Impactos da COVID-19 e renda emergencial (CARDOSO et al., 2021)
- Objetivo: 
- Conceitos abordados: [[Efeito Renda]]
- Metodologia: 
- Resultados: 


# $\star$ Grupo 1: Crítica ao Maximin (HARSANYI, 1975)
[[Resumo - Maximin Principle as a Basis for Morality (Harsanyi, 1975)]]

**Objetivo**: Expor teoria de John Rawls sobre escolhas éticas, e propor uma alternativa a este mecanismo de escolhas entre alternativas.

**Conceitos abordados**: [[Função de Bem-Estar Social de Rawls]], [[Função de Bem-Estar Social de Bentham|Função de Bem-Estar Utilitarista]], [[Utilidade de von Neumann-Morgenstern]]

**Resultados**: 

---
### References
- SEN, Amartya K. Rational fools: A critique of the behavioral foundations of economic theory. **Philosophy & public affairs**, p. 317-344, 1977.
- VAZ, Daniela Verzola; HOFFMANN, Rodolfo. Elasticidade-renda e concentração das despesas com alimentos no Brasil: uma análise dos dados das POF de 2002-2003, 2008-2009 e 2017-2018. **Revista de Economia**, v. 41, n. 75, 2020.
- CAHUC, Pierre; CARCILLO, Stéphane; ZYLBERBERG, André. **Labor economics**. MIT Press, 2014.
- ATKINSON, Anthony B.; STIGLITZ, Joseph E. **Lectures on public economics**. 2013.
- GRUBER, Jonathan; KŐSZEGI, Botond. Tax incidence when individuals are time-inconsistent: the case of cigarette excise taxes. **Journal of Public Economics**, v. 88, n. 9-10, p. 1959-1987, 2004.
- GRUBER, Jonathan; KŐSZEGI, Botond. A modern economic view of tobacco taxation. **Paris: International Union Against Tuberculosis and Lung Disease**, 2008.
- DELLA VIGNA, Stefano; MALMENDIER, Ulrike. Paying not to go to the gym. **American Economic Review**, v. 96, n. 3, p. 694-719, 2006.
- HSIEH, Wen-Jen. Test of variable output and scale elasticities for 20 US manufacturing industries. **Applied Economics Letters**, v. 2, n. 8, p. 284-287, 1995.
- IZADI, Hooshang et al. Stochastic frontier estimation of a CES cost function: The case of higher education in Britain. **Economics of Education Review**, v. 21, n. 1, p. 63-71, 2002.
- THROSBY, David. The production and consumption of the arts: A view of cultural economics. **Journal of Economic Literature**, v. 32, n. 1, p. 1-29, 1994.
- FIGLIO, David N. Functional form and the estimated effects of school resources. **Economics of Education Review**, v. 18, n. 2, p. 241-252, 1999.
- CARDOSO, Débora Freire et al. **Pandemia de COVID-19 e famílias: impactos da crise e da renda básica emergencial**. IPEA, 2021.
- HARSANYI, John C. Can the maximin principle serve as a basis for morality? A critique of John Rawls's theory. **American Political Science Review**, v. 69, n. 2, p. 594-606, 1975.