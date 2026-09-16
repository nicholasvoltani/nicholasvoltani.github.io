---
date: "2026-08-24"
tags:
  - daily
draft: "false"
aliases:
---

up:: [[0x51a MOC Revisão de Literatura Rebound-Backfire Effect]]

# Saunders 1992 - The Khazzoom-Brookes Postulate


# Saunders 2000a - "Does predicted rebound depend..."
@Saunders2000 exemplifica o surgimento de *rebound* num modelo de [[Função de Cobb-Douglas|Cobb-Douglas]] com dois setores, da forma:
$$
\begin{cases}
Y&=A K^{\alpha}L^{\beta}E^{1-\alpha-\beta} \\
E&=\tau \hat{K}^{\gamma}\hat{L}^{\delta}F^{1-\gamma-\delta}
\end{cases}
$$
em que $K$ e $L$ são fatores de produção capital e trabalho, $E$ é o fator energia, e $\hat{K}$ e $\hat{L}$ são os fatores empregados no setor de produção do fator energia, o qual emprega combustível $F$; os parâmetros $A$ e $\tau$ são parâmetros de ganhos de produtividade, em que $A$ indica o nível tecnológico geral e $\tau$ indica o nível de eficiência energética (no setor de produção de energia). 

Tenha-se que os crescimentos relativos sejam dados como seguinte:
$$
\begin{cases}
\dot{Y}=r \\
\dot{L}=n \\
\dot{F} = f  \\
\dot{\tau} = \mu
\end{cases}
$$
Denotem-se os crescimentos relativos dos fatores no setor energético como
$$
\begin{cases}
\dot{\hat{K}} \coloneqq \hat{k} \\
\dot{\hat{L}} \coloneqq \hat{l}
\end{cases}
$$

Assumindo a relação usual de crescimento de capital, temos que 
$$
\hat{K}=\dot{Y}=r
$$

Saunders assume que "A derivação de $\hat{k}$ e $\hat{l}$ requer que se invoquem condições de fungibilidade de fatores, as quais requerem que capital e trabalho sejam fungíveis entre os dois setores" [@Saunders2000, p. 499], com o que se pressupõe que
$$
\begin{cases}
\frac{ \partial Y }{ \partial \hat{K} }  = \frac{ \partial Y }{ \partial K } \\
\frac{ \partial Y }{ \partial \hat{L} } = \frac{ \partial Y }{ \partial L }  
\end{cases}
$$
Da primeira destas equações, obtém-se que
$$
\begin{align*}
\frac{ \partial Y }{ \partial \hat{K} } &= \frac{ \partial Y }{ \partial E } \frac{ \partial E }{ \partial \hat{K} }  \\
&= (1-\alpha-\beta) \frac{Y}{E} \frac{ \partial E }{ \partial \hat{K} } \\
&= (1-\alpha-\beta) \frac{Y}{E} \frac{\gamma E}{\hat{K}} \\
&= (1-\alpha-\beta) \gamma \frac{Y}{\hat{K}} \\
&= \frac{ \partial Y }{ \partial K } = \alpha \frac{Y}{K}
\end{align*}
$$
com o que se conclui que
$$
\frac{K}{\alpha} = \frac{\hat{K}}{\gamma (1-\alpha-\beta)}
$$
Similarmente, obtém-se que
$$
\frac{L}{\beta} = \frac{\hat{L}}{\delta(1-\alpha-\beta)}
$$

Por serem proporcionais uns aos outros, conclui-se que[^2]
$$
\begin{cases}
\dot{K} = \dot{\hat{K}} \\
\dot{L} = \dot{\hat{L}}
\end{cases}
$$

Como buscamos analisar aqui o efeito de um ganho de eficiência *independente de variações de preços*, supomos os preços (reais) do combustível $\overline{p_{f}}$ como fixos. Supondo que a produtividade marginal do combustível seja igual a seu preço (real), temos
$$
\begin{align*}
\overline{p_{f}} &= \frac{ \partial Y }{ \partial F } = \frac{ \partial Y }{ \partial E }  \frac{ \partial E }{ \partial F }  \\
&= (1-\alpha-\beta) (1-\gamma-\delta) \frac{Y}{F}
\end{align*}
$$
Como estes preços são fixos, sua derivada no tempo é $0$, com o que se pode obter
$$
\begin{align*}
0 &= \frac{d}{dt} \left( \frac{Y}{F} \right) \\
&= \frac{dY}{dt} \frac{1}{F} - \frac{Y}{F} \frac{1}{F} \frac{dF}{dt} \\
&= \left( \frac{1}{Y} \frac{dY}{dt} - \frac{1}{F} \frac{dF}{dt} \right) \frac{Y}{F} 
\end{align*}
$$
e, portanto, que o crescimento (relativo) do produto $\dot{Y}$ é igual ao crescimento (relativo) do consumo de combustível $f$.

A partir dos resultados acima derivados, deseja-se verificar a relação de $f$ com demais parâmetros, em particular buscando verificar sua relação com o crescimento da economia no estado estacionário sem ganhos de eficiência — no qual, relembre-se, todos os fatores crescem à mesma taxa $r=n$. 

Verifiquemos a derivada de $Y$ com relação ao tempo, portanto.
$$
\frac{dY}{dt} = \frac{ \partial Y }{ \partial K } \frac{dK}{dt} + \frac{ \partial Y }{ \partial L } \frac{dL}{dt} + \frac{ \partial Y }{ \partial E } \frac{dE}{dt} 
$$
em que se deve abrir as derivadas parciais de $E$ com relação a *suas* variáveis dependentes:
$$
\frac{dE}{dt} = \frac{ \partial E }{ \partial \hat{K} } \frac{d \hat{K}}{dt} + \frac{ \partial E }{ \partial \hat{L} } \frac{d\hat{L}}{dt} + \frac{ \partial Y }{ \partial F } \frac{dF}{dt} + \frac{ \partial Y }{ \partial \tau } \frac{d\tau}{dt}
$$

Todos estes termos de $\frac{dY}{dt}$ são abaixo calculados:
$$
\begin{cases}
\frac{ \partial Y }{ \partial K } \frac{dK}{dt} = \alpha Y \frac{1}{K} \frac{dK}{dt} = \alpha Y \dot{K} &= \alpha Yr\\
\frac{ \partial Y }{ \partial L } \frac{dL}{dt} = \beta Y \frac{1}{L} \frac{dL}{dt} = \beta Y \dot{L} &= \beta Y n\\
 \frac{ \partial Y }{ \partial E }\frac{ \partial E }{ \partial \hat{K} } \frac{d \hat{K}}{dt} = (1-\alpha-\beta) \frac{Y}{E} \gamma E \frac{1}{\hat{K}} \frac{d\hat{K}}{dt} = \gamma Y\dot{\hat{K}} &= \gamma Y r \\
  \frac{ \partial Y }{ \partial E }\frac{ \partial E }{ \partial \hat{L} } \frac{d \hat{L}}{dt} = (1-\alpha-\beta) \frac{Y}{E} \delta E \frac{1}{\hat{L}} \frac{d\hat{L}}{dt} = \delta Y \dot{\hat{L}} &= \delta Yn \\
  \frac{ \partial Y }{ \partial E }\frac{ \partial Y }{ \partial \tau } \frac{d\tau}{dt} = \frac{Y}{E} E \frac{1}{\tau} \frac{d\tau}{dt} = Y \dot{\tau} &= Y \mu
\end{cases}
$$
Dessa forma, e buscando isolar $f$, temos que o crescimento (relativo) de $Y$, que é igual a $f$ — pois $r=f$ —, traz o seguinte resultado:
$$
\begin{align*}
\dot{Y} = \frac{1}{Y} \frac{dY}{dt} &= f\\
&= \alpha f + \beta n + (1-\alpha-\beta) (\cancel{ \gamma f } + \delta n + (1-\cancel{ \gamma }-\delta) f + \mu)
\end{align*}
$$
Isolando em função de $f$, temos
$$
\begin{align*}
[1 - \alpha - (1-\alpha-\beta)(1-\delta) ] f &= \beta n + (1-\alpha-\beta) (\mu + \delta n) \\
[\cancel{ 1 }-\cancel{ \alpha } - \cancel{ 1 }+\cancel{ \alpha }+\beta + \delta(1-\alpha-\beta)] f &= (\beta + \delta(1-\alpha-\beta)) n + \delta(1-\alpha-\beta) \mu \\
[\beta+\delta(1-\alpha-\beta] f &= (\beta + \delta(1-\alpha-\beta)) n + \delta(1-\alpha-\beta) \mu
\end{align*}
$$

Portanto, temos que 
$$
f = n + \frac{\delta (1-\alpha-\beta)}{\beta+\delta(1-\alpha-\beta)} \mu
$$
Ou seja, o modelo de Cobb-Douglas com dois setores prevê que a taxa de crescimento (relativo) do consumo de combustíveis, com ganhos de eficiência no setor produtor de energia, é *estritamente maior* do que a taxa de crescimento sem ganhos de eficiência — que é o caso em que $\mu=0$. 

Este resultado é crucial para o argumento de Saunders, que busca demonstrar que a própria teoria neoclássica — ou, ao menos, um dos modelos mais proeminentes da teoria do crescimento — prevê que uma economia capitalista não consegue aumentar a eficiência do consumo de combustíveis sem que este próprio fazer instigue o aumento de seu consumo.[^3] Mais do que isso: vide Saunders, nos modelos neoclássicos, estes ganhos "pontuais" de eficiência não mudam a *taxa de crescimento* da economia, mas sim "dão à economia um *one-time boost* a uma trajetória mais elevada", donde faz-se necessário que, para que a teoria neoclássica do crescimento ganhe maior credibilidade em suas previsões, "melhorias contínuas na eficiência de combustíveis [*ongoing fuel efficiency improvements*] alterem a taxa de crescimento econômico" [@Saunders2000, p. 444].


# Saunders 2000 - A view from the macro side
> "*An* [sic] *historical note*: the term "Khazzoom-Brookes" Postulate was first coined with the intent of crediting Daniel Khazzoom and Leonard Brookes with being the first in the profession to discuss the concept of rebound" [@Saunders2000, p. 440]

Formulação neoclássica:
$$
Y = Y(K, L, \tau_{F} F)
$$
onde $F$ é *combustível* (*fuel*), e $\tau_{F}$ é um "parâmetro de ganho de eficiência de combustíveis", "*fuel-augmenting technical progress*" (p. 440).
> "It is the increase in the efficiency with which fuel enters the production function (or the decrease in cost of fuel in the cost function)." (ibid.)

Dessa forma, "*conservação de combustível*" é a **elasticidade de uso de combustível** *vis-à-vis* tal eficiência $\tau_{F}$, i.e.
$$
\eta^F_{\tau_{F}} = \frac{d\ln F}{d\ln \tau_{F}}
$$
Ou seja, é "o efeito deste parâmetro no uso de combustíveis". (Note que $F$ aqui é **fuel**, é um **fator de produção**!)

O *rebound*, dessa forma, é medido como
$$
R = 1 + \eta^{F}_{\tau_{F}}
$$

Note-se que, se $\eta^{F}_{\tau_{F}}<0$, temos que o aumento da eficiência engendra uma queda no consumo de$F$ (enquanto *fator de produção*); se é $=0$, temos que não há efeito discernível entre ambos, ou melhor, qualquer possível conservação de combustível é contrabalanceada na visão agregada[^1]; e se é $>0$, temos que o aumento da eficiência *aumenta* o consumo de $F$.

# Saunders 2009 - Theoretical foundations of the rebound effect
A conclusão à que se chega na economia da energia, mesmo dentro da própria economia neoclássica, é a de que não há remédios ao efeito *rebound* que não sejam amargos: até mesmo a restrição estatal mais aceitável (ou melhor, menos indesejada) por economistas desta área — qual seja, um "imposto de carbono" (*carbon tax*) que sirva de freio às atividades mais emissoras de gases de efeito estufa — pode causar uma diminuição do uso de energia ao custo de um estrangulamento do crescimento do produto da economia. Parece até mesmo que a própria economia conspira para que se deixe que o mercado alcance, por conta própria, a solução mais custo-benefício. 

---
### Referências

[^1]: Saunders tem plena ciência do caráter "agregado" dos elementos de sua análise, assim como de seus resultados. "Note that this is a very general definition of fuel conservation that inherently contemplates notions of behavioural response and general-equilibrium effects — i.e., whatever might cause $F$ to change in response to a change in $\tau_{F}$. It also contemplates time dynamics, reflecting the long-run change in the rate of fuel use $F$ (say, annual consumption of fuel) spurred by a one-time change in fuel efficiency. In this paper, a neoclassical growth framework is used. Neoclassical growth theory deals well with time dynamics but, owing to its assumption of a single 'aggregate output', does not speak to general equilibrium issues in the sense of completely describing market clearing prices and volumes for multiple output products and multiple consumers." [@Saunders2000, p. 440, n. 2]
[^2]: $\frac{dK}{dt} =\frac{\alpha}{\gamma(1-\alpha-\beta)} \frac{d\hat{K}}{dt}$ e, portanto, $\dot{K} = \frac{\alpha}{\gamma(1-\alpha-\beta)} \frac{1}{K} \frac{d \hat{K}}{dt} = \frac{\alpha}{\gamma(1-\alpha-\beta)} \frac{\gamma(1-\alpha-\beta)}{\alpha} \dot{\hat{K}} = \dot{\hat{K}}$. *Mutatis mutandis* para $L$ e $\hat{L}$. 
[^3]: Saunders obtém resultados similares para vários outros modelos da teoria neoclássica, cf. @Saunders2000 e @Saunders2008 — inclusive, e crucialmente, para certas funções de produção que retornos de escala *não*-constantes (ao contrário e.g. da Cobb-Douglas, Leontief e de funções de produção CES em geral).