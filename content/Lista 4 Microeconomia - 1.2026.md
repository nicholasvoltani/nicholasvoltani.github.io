---
date: "2026-03-30"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]] // [[Esquema Listas Microeconomia]]

# Conceitos introdutórios
## Aversão ao risco
::: definition
O equivalente certo de um tomador de risco é a quantidade monetária não-aleatória com a qual ele obtém utilidade igual à sua *utilidade média*. 

Dada uma [[Loteria (Microeconomia)|loteria]] $L$ e uma [[utilidade de Bernoulli]] $u(\cdot)$, o equivalente certo (ou equivalente de certeza) $C(L, u)$ é o valor (monetário) *com probabilidade $100\%$ de ser recebido* que faz com que a utilidade de Bernoulli se iguale à [[Utilidade Esperada]] $U(\cdot)$ da loteria $L$, i.e. $U(L)$.[^1] 

Formalmente, temos que, para uma loteria $(p_{1}, \dots, p_{n})$ relacionada às utilidades (de Bernoulli) $(u_{1} \coloneqq u(x_{1}), \dots, u_{n}:= u(x_{n}))$, a definição do equivalente certo segue a forma
$$
u(C(L, u)) = \sum \limits_{k} p_{k} u_{k} = U(L)
$$

Pensando em termos de gráficos: $c$ é o valor (não-aleatório, "*certo*") com o qual o indivíduo alcança a utilidade média (dadas as suas possibilidades $u_{1},\dots, u_{n}$). Intuitivamente, pensaríamos que este ponto seria
$$
c = \sum \limits_{i=1}^{n} p_{i} x_{i}
$$
i.e. o valor esperado dentre as possibilidades $x_{i}$. Este caso, porém, é o que se chama de "indiferente ao risco". Indivíduos que têm *aversão* ao risco, por outro lado, preferem um valor *menor, porém certo*, para evitar a aleatoriedade; eles se dispõem a receber um valor menor, contanto que não se indisponham a "recebíveis" incertos. *Mutatis mutandis* para indivíduos *propensos* ao risco: eles precisam ser pagos valores certos *maiores* para que se abstenham do risco. 

![[Pasted image 20260416180100.png|445]]
Fonte: @Cowell2004, p. 191. Na figura, os possíveis acontecimentos são $x_{\color{red} Red}, x_{\color{blue} Blue}$ (implicitamente com probabilidades respectivas $p_{\color{red} Red}, p_{\color{blue} Blue}$), $\mathcal{E}x$ é o valor esperado dos acontecimentos $x$ (i.e. $\sum p_{i}x_{i}$), e $\xi$ é o equivalente certo para este indivíduo. Note-se que, como $\xi < \mathcal{E}x$, este indivíduo é *avesso* ao risco; isso também é notável por sua utilidade *côncava* ($u^{\prime\prime}<0$).
:::

::: definition
Dado um indivíduo com um equivalente certo $C(L, u)$ e cujos possíveis acontecimentos $x_{1},\dots,x_{n}$ (com resp. probabillidades $p_{1},\dots,p_{n}$) tenham valor esperado 
$$
\left<x\right> \coloneqq \sum \limits_{i=1}^{n} p_{i} x_{i}
$$
define-se seu *prêmio de risco* como $\left< x \right> - C(L,u)$ [@Cowell2004, p. 191].[^2]

Para indivíduos indiferentes ao risco, ele é $= 0$; para os avessos ao risco, é $>0$; para os propensos ao risco, é $<0$.
:::

%%
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
Os *retornos de escala* de uma função produção $f(z)$ 

:::

O problema da firma possui um paralelo com o problema do consumidor, consistindo em dois problemas duais: a firma pode buscar *minimizar seu custo de produção*, assim como pode buscar *maximizar seu lucro*. Tais problemas são passíveis de ser descritos pelo formalismo acima.

O usual é de se falar sobre a minimização do custo $\sum \limits_{i=1}^{n} p_{i}z_{i}$ — em que $p_{i}$[^3] é o custo do input $i$, consumido em $z_{i} \in \mathbb{R}$ "unidades" neste processo específico — para a produção de uma dada quantidade $\bar{q} \in \mathbb{R}$  de output, com alguma função produção $f(z_{1},\dots,z_{n})$. Ou seja, usualmente fala-se do problema de *minimização do custo*. Por outro lado, o formalismo mais geral de conjuntos de produção, em que inputs são "negativos" e outputs são "positivos", permite uma descrição mais elegante do problema de *maximização do lucro*.

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
é a *restrição orçamentária mínima* com a qual alcança-se um nível de utilidade $\bar{u}$ sob preços $p$ dos bens consumidos $x_{i}^{*}$[^4] em uma cesta.
:::

::: definition
O problema de maximização do lucro de uma firma que tenha um conjunto de produção $Y \in \mathbb{R}^{n}$ pode ser escrito, no caso geral, como
$$
\max\limits_{y \in Y} \sum \limits_{i=1}^{n} p_{i}y_{i}= \max \underbrace{ \sum \limits_{i} p_{i} y_{i} }_{ \underset{(y_{i} > 0)}{\text{Receita } }} + \underbrace{ \sum \limits_{j} p_{i}y_{j} }_{ \underset{(y_{j} < 0)}{\text{Custo}}}
$$

**Ver casos distintos de como lidar com o problema: Cowell lida com max de lucro dada função custo (já minimizou custo); Mas-Colell maximiza lucro com função produção mas com $\braket{ w | z }$**.

O caso usual, em que empregam-se $n$ inputs $x_{1},\dots,x_{n}$ (com preços $w_{1},\dots,w_{n}$) para a produção de $1$ output $q$ (com preço $p$), escreve-se como
$$
\max\limits_{x_{i}, q \,\in \mathbb{R}} pq - \sum \limits_{i}p_{i}x_{i}
$$

Supondo que a firma tenha uma função produção $f(x_{1},\dots,x_{n}) \equiv f(x)$, o problema se escreve
$$
\max\limits_{x \in \mathbb{R}^{n}} pf(x) - \sum \limits_{i}p_{i}x_{i}
$$

:::
%%

# Exercícios
%%
## Aversão ao risco
%%

::: exercise
[@Varian2014, pp. 233-5] Suponhamos que um indivíduo possui renda $w$ e queira investir uma parcela $x$ dela em algum ativo arriscado, tal que divida sua renda de forma
$$
\begin{cases}
x&: \text{Ativo arriscado}\\
w-x&: \text{Riqueza não-investida} 
\end{cases}
$$

Este ativo pode ter um retorno $r_{b}$ em um cenário "ruim" com probabilidade $p$, e um retorno $r_{g}$ em um cenário "bom" com probabilidade $1-p$.[^5] Consideremos, em geral, que $r_{g}> 0$, e que, ao menos, $r_{b}<r_{g}$, em geral tendo $r_{b}<0 < r_{g}$.

A riqueza deste indivíduo, em ambos os cenário, será

$$
\begin{align*}
W_{g} = (w-x) + x (1+r_{g}) = w + x r_{g}\\
W_{b} = (w-x) + x (1+r_{b}) = w + x r_{b}
\end{align*}
$$

A utilidade esperada deste indivíduo será
$$
\left<u\right> = p \,u(W_{b}) + (1-p) \,u(W_{g})
$$
e este indivíduo deseja encontrar $x$ ótimo que maximize sua utilidade esperada. Supomos também que ele é [[Aversão ao Risco|avesso ao risco]].

No que tange à derivada da utilidade esperada com relação a $x$, investigue o caso em que $x=0$. Qual é a condição com que se pode garantir que haja $x^*>0$? Como ela relaciona-se com $\langle r \rangle = p r_{b}+(1-p)r_{g}$? 

Satisfeitas as condições necessárias para que $x^*>0$, investigue o que ocorre quando temos uma taxação sobre os retornos: 
$$
r_{i} \mapsto \tilde{r}_{i} = (1-t) r_{i}
$$

Mostre que a solução ótima de riqueza pós-taxação $\hat{x}$ de se investir satisfaz
$$
\hat{x} = \frac{x^*}{1-t}
$$
quando $x^*$ é solução ótima pré-taxação. Isso condiz com sua intuição de $\hat{x} \gtrless x^*$?

Sinta-se livre para explorar este exercício nesta simulação: [Investimentos e Taxação (Simulação no Desmos)](https://www.desmos.com/calculator/ppkg28wznf)!
:::

::: exercise
[@Cowell2004, pp. 223-4] Um indivíduo precisa declarar sua renda $y$ às autoridades. A renda que ele pode declarar, $0 \leq x \leq y$, será taxada a uma taxa $t \in (0,1)$. 

Suponha que a probabilidade de que sua renda declarada seja *auditada* é $p$. Caso o indivíduo declare $x < y$, então ele deverá pagar a mais como multa, de tal forma que sua renda disponível fica na forma:
$$
\begin{cases}
\text{Sem auditoria: } y - tx \\
\text{Com auditoria: } (1-(1+s)t)y + stx 
\end{cases}
$$

Suponha que o indivíduo é avesso ao risco, e que tenha utilidade $u(\cdot)$. Escreva a utilidade média $\langle u \rangle$, e obtenha a condição de primeira ordem da maximização da utilidade média (com relação a $x$). 

Através da condição de primeira ordem, mostre que, quando $s=\frac{1-p}{p}$, vale que $x=y$, e que quando $s>\frac{(1-p)}{p}$, valerá que $x < y$.

::: remark
O motivo de o segundo caso ficar dessa forma é o seguinte. Supondo que *vá haver auditoria*, temos os casos extremos 1) para $x=y$, naturalmente ele terá $(1-t)y$ de renda disponível em ambos os casos (afinal, quem não deve, não teme); 2) com $x=0$, ele fica com $(1 - (1+s)t)y$ (o imposto pago é cobrado a mais). Por regra de três/triângulos equivalentes, temos que 

$$
\begin{align*}
\frac{[(1-(1+s)t)y] - [(1-t)y]}{y - 0} = \frac{Y - [(1-t)y]}{(y - x) - 0} \\
\therefore Y = (1-(1+s)t)y + stx
\end{align*}
$$
:::
:::


::: exercise
Mostre que o [[Equivalente Certo|equivalente certo]] de uma função utilidade exponencial $u(x) = - e^{-ax}$ assume a forma 
$$
C = - \frac{1}{a} \ln\left( \sum \limits_{i}p_{i}e^{-ax_{i}} \right) = \frac{1}{a} \ln\left( \frac{1}{\sum \limits_{i}p_{i}e^{-ax_{i}}} \right)
$$
Fazendo a transformação $x_i = \ln \frac{\tilde{x_{i}}}{a}$ e $C = \ln \frac{\tilde{C}}{a}$, esta fórmula assume a forma de uma *média harmônica ponderada*
$$
\tilde{C} = \frac{1}{\sum \limits_{i} p_{i} \frac{1}{\tilde{x}_{i}}} 
$$

:::

::: exercise
Mostre que o equivalente certo de uma função utilidade isoelástica $u(x) = \frac{x^{1-\rho}-1}{1-\rho}$ assume a forma de uma *$(1-\rho)$-norma ponderada*, i.e. 
   $$
   C(L, \rho) = \left( \sum \limits_{i} p_{i} x_{i}^{1-\rho} \right)^{1/(1-\rho)}
   $$
:::

::: exercise
Mostre que o equivalente certo de uma função utilidade logarítmica $u(x) = \ln x$ tem a forma de uma *média geométrica ponderada*
$$
C(L) = \prod \limits_{i=1}^{n} x_{i}^{p_{i}}
$$
:::

::: exercise
[@Varian2014, p. 230-1] Suponha uma comunidade de $N$ indivíduos, cada um com renda $w$ e com uma probabilidade $0\leq p \leq 1$ de sofrer uma perda $L$ (ou seja, ficando com renda $w-L$). 

Suponha que estes indivíduos reservem uma quantidade $q$ de suas rendas (ficando com renda $w-q$) em um "*pool*" comum, de tal forma que indivíduos que sofram perdas possam ressarcir-se a partir deste *pool*. 

Supondo que os riscos dos indivíduos sejam *independentes entre si*, calcule qual tem de ser essa quantidade $q$ em função de $p$ e $L$. Ela depende de $N$? Por quê/por que não? 

Ademais, verifique que este valor é justamente o que um indivíduo *indiferente ao risco* pagaria por este seguro: se sua função utilidade for $u(x) = ax$ ($a>0$), então ele pagaria este mesmo valor. (Dica: a fórmula do equivalente certo diz sobre *a renda equivalente*, enquanto aqui queremos *o valor subtraído da renda* que ele aceita para se desfazer do risco.)

Obs: Isto é o que se costuma chamar de *mutualismo*, ou *risk pooling*, em ciências atuariais.

Obs²: Sinta-se à vontade para testar este exemplo com algumas funções utilidade comuns nesta simulação: [Equivalentes certos (Simulação Desmos)](https://www.desmos.com/calculator/quce5bk5v5).
:::


%%
## Teoria da firma
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
e respectivas [[Função Custo|funções custo]]:[^6]

$$
\begin{align*}
&\text{Curto prazo: } C(w,r,q; \bar{K}) = r \bar{K} + w \left( \frac{q}{\bar{K}^{\alpha}}\right)^{1/\beta} \\
&\text{Longo prazo: } C(w, r, q) = q^{1/\alpha+\beta}  \left[ r^{\alpha} \left(w \frac{\alpha}{\beta} \right)^{\beta/\alpha+\beta}
+ w^{\beta} \left( r \frac{\beta}{\alpha} \right)^{\alpha/\alpha+\beta} \right]
\end{align*}
$$
:::
%%

# Resoluções
%% 
## Aversão ao risco
%%

::: exercise
Diferenciando $\langle u \rangle$ com relação a $x$, temos
$$
\frac{d\langle u \rangle}{dx} = p r_{b} \, u^\prime(W_{b}) +(1-p) r_{g} \, u^\prime(W_{g})
$$

A segunda derivada fica como
$$
\frac{d^{2}\langle u \rangle}{dx^{2}} = p r_{b}^{2} \, u^{\prime\prime}(W_{b}) +(1-p) r_{g}^{2} \, u^{\prime\prime}(W_{g}) < 0
$$
que é $<0$ por conta da aversão ao risco pressuposta.

É pertinente que consideremos o caso da derivada de $\langle u \rangle$ em que $x=0$, pois, caso sua utilidade esperada *somente caia* para $x>0$, ele não investirá nada, pois terá seu máximo em $x=0$. Seu valor é

$$
\begin{align*}
\frac{d\langle u \rangle}{dx}(x=0) &= p r_{b} u^\prime(w) + (1-p) r_{g} u^\prime \\
&= u^\prime(w) \langle r \rangle 
\end{align*}
$$
onde $\langle r \rangle=p r_{b} + (1-p) r_{g}$ é o retorno esperado. Naturalmente, ele estará mais instigado a investir caso $\langle r \rangle>0$[^7]. Portanto, tomando também que $u^\prime(w)>0$[^8], então sua utilidade marginal tenderá a aumentar caso $\langle r \rangle>0$, portanto instigando-o a investir alguma parcela $x>0$ de sua riqueza neste ativo.

Voltando ao caso geral: supomos que a função utilidade é bem-comportada o suficiente para que encontremos $x^*$ ótimo através de $\frac{d\langle u \rangle}{dx}=0$. 

Buscamos agora o efeito de uma taxação sobre os rendimentos deste retorno. Ou seja, os retornos pós-taxação serão $(1-t)r_{g}$ e $(1-t)r_{b}$[^9], de forma que sua riqueza fica da forma

$$
\begin{align*}
W_{g} = (w-(1-t)x) + (1-t)x (1+r_{g}) = w + (1-t)x r_{g}\\
W_{b} = (w-(1-t)x) + (1-t)x (1+r_{b}) = w + (1-t)x r_{b}
\end{align*}
$$
A utilidade marginal fica da mesma forma, embora $W_{i}(t>0) < W_{i}(t=0)$. Sua derivada fica numa forma similar:

$$
\begin{align*}
\frac{d\langle u \rangle}{dx} &= p (1-t)r_{b}\,u^\prime(w + (1-t)x r_{b}) + (1-p) (1-t)r_{g}\,u^\prime(w + (1-t)x r_{g})
\end{align*}
$$

Chame-se sua solução ótima pós-taxação de $\hat{x}$. Note-se que a solução
$$
\hat{x} = \frac{x^*}{1-t}
$$
satisfaz que $\frac{d\langle u \rangle}{dx}=0$:

$$
\begin{align*}
\frac{d\langle u \rangle}{dx} &= p (1-t)r_{b}\,u^\prime\left( w + \frac{\cancel{ (1-t) }x^*}{\cancel{ 1-t }} r_{b} \right) + (1-p) (1-t)r_{g}\,u^\prime\left( w + \frac{\cancel{ (1-t) }x^*}{\cancel{ 1-t }} r_{g} \right) \\
&= 0
\end{align*}
$$
pois torna-se a condição ótima de $x^*$ (pré-taxação).

Note-se, portanto, que aumentar $t$ **aumenta o percentual de riqueza investida**! A explicação de Varian é a seguinte

> "Mediante imposto, o indivíduo terá um ganho menor no cenário bom, *mas também terá uma perda menor no cenário ruim*. Ao aumentar seu investimento inicial em $1/(1 - t)$, o consumidor pode reproduzir os mesmos retornos *pós-impostos* que obtinha antes da implementação do imposto. O imposto reduz seu retorno esperado, mas também reduz seu risco: ao aumentar seu investimento, o consumidor pode obter exatamente o mesmo padrão de retornos que tinha antes e, assim, compensar completamente o efeito do imposto. Um imposto sobre um investimento arriscado representa um subsídio sobre a perda quando o retorno é negativo."  [@Varian2014, p. 235]

Relembrando: sinta-se livre para explorar este exercício nesta simulação: [Investimentos e Taxação (Simulação no Desmos)](https://www.desmos.com/calculator/ppkg28wznf)!
:::

::: exercise
Escrevendo $y_{n} = y-tx$ e $y_{a}=(1-(1+s)t)y + stx$ as rendas disponíveis no caso sem e com auditoria, respectivamente. Então a condição de primeira ordem fica como (já cancelando o fator $t$ devido ao $=0$)

$$
\begin{align*}
(1-p) u^\prime(y_{n}) + sp u^\prime(y_{a}) \mp sp u^\prime(y_{n}) &= 0 \\
(1-p - sp) u^\prime(y_{n}) + sp (\underbrace{ u^\prime(y_{n}) - u^\prime(y_{a}) }_{ \leq 0 }) &=0
\end{align*}
$$

Como $y_{a} \leq y_{n}$ — e, evidentemente, $y_{a}=y_{n} \iff x = y$ —, temos que, embora $u(y_{a}) \leq u(y_{n})$ ("mais é melhor"), temos que $u^\prime(y_{a}) \geq u^\prime(y_{n}) \iff u^\prime(y_{n})- u^\prime(y_{a}) \leq 0$, por conta de utilidades marginais decrescentes. Porém, a condição de primeira ordem somente é satisfeita quando, além de $x=y$,
$$
s = \frac{1-p}{p}
$$

Caso $1- p - sp < 0 \iff s > \frac{1-p}{p}$, a condição de primeira ordem nunca pode ser $=0$, pois a expressão inteira é $<0$ — a não ser que o indivíduo declare, *voluntariamente*, ter *mais* do que ele tem (i.e. se dispor a pagar por renda que ele *não* tem)!

Portanto, caso $s < \frac{1-p}{p}$, teremos que a escolha ótima do indivíduo será reportar $0 < x^{*} < y$.
:::


::: exercise
Dada uma loteria $L = (p_{1},\dots,p_{n})$ de possíveis resultados $x=(x_{1},\dots,x_{n})$, o equivalente certo $C(L, u)$ é a quantidade monetária que garante a utilidade média (i.e. [[Utilidade Esperada|utilidade de von Neumann-Morgenstern]]). Como a utilidade $u(x) = - e^{-ax}$ é definida pelo coeficiente $a$, podemos escrever $C(L, u) = C(L, a)$.

Portanto,

$$
\begin{align*}
\cancel{ - }e^{-aC} &= \sum \limits_{i=1}^{n} p_{i} (\cancel{ - }e^{-ax_{i}}) \\
&= \sum \limits_{i=1}^{n} p_{i} e^{-ax_{i}}
\end{align*}
$$
Isolando $C$, temos

$$
\begin{align*}
C(L, a) &= -\frac{1}{a} \ln\left( \sum \limits_{i=1}^{n}p_{i} e^{-ax_{i}} \right) \\
&= \frac{1}{a}\ln \left( \frac{1}{\left( \sum \limits_{i=1}^{n}p_{i} e^{-ax_{i}} \right)} \right)
\end{align*}
$$
Defina-se, a fins de simplificação, variáveis auxiliares $\tilde{x}_{i}$ tais que
$$
x_{i} = \frac{1}{a} \ln \tilde{x}_{i} \iff \tilde{x}_{i}^{-1} = e^{-ax_{i}}
$$
Dessa forma, temos que
$$
\begin{align*}
C(L, a) &= \frac{1}{a}  \ln \left( \frac{1}{\left( \sum \limits_{i=1}^{n}p_{i} \frac{1}{\tilde{x}_{i}} \right)} \right) 
\end{align*}
$$

Fazendo o mesmo para $C$, i.e. $C = \frac{1}{a}\ln \tilde{C}$, temos
$$
\begin{align*}
\tilde{C} &= \frac{1}{\left( \sum \limits_{i=1}^{n}p_{i} \frac{1}{\tilde{x}_{i}} \right)}  \\
&= \frac{\sum \limits_{i=1}^{n} p_{i}}{\left( \sum \limits_{i=1}^{n}p_{i} \frac{1}{\tilde{x}_{i}} \right)} 
\end{align*}
$$

Ou seja, é possível escrever o equivalente certo de uma utilidade exponencial como uma média *harmônica ponderada*. 

A fins de *sanity check*: suponhamos que algum dos $x_{i}$'s tende a $0$[^10] — *mas não sua probabilidade* $p_i$ —, ou seja, é um caso que tende à perda máxima do indivíduo com uma probabilidade não-nula.

Teremos, portanto, que, neste caso extremo,
$$
C \to \frac{1}{a}  \ln \left( \frac{x_{i}}{p_{i}}\right) 
$$

Ou seja, o equivalente certo torna-se (muito mais) dependente deste caso extremo: o quanto se desejará pagar para evitar a aleatoriedade desta loteria será contingente 

:::

::: exercise
Com a utilidade $u(x) = \frac{x^{1-\rho}-1}{1-\rho}$, temos que $C(L, u) = C(L, \rho)$, obtido da seguinte forma:

$$
\begin{align*}
\frac{C^{1-\rho}-\cancel{ 1 }}{\cancel{ 1-\rho }} &= \sum \limits_{i=1}^{n} p_{i} \frac{x_{i}^{1-\rho}-\cancel{ 1 }}{\cancel{ 1-\rho }} \\
\end{align*}
$$

Isolando $C$, temos
$$
C(L, \rho) = \left( \sum \limits_{i=1}^{n} p_{i} x_{i}^{1-\rho} \right)^{1/(1-\rho)}
$$

Ou seja, o equivalente certo de uma utilidade isoelástica é uma [p-norma](<https://en.wikipedia.org/wiki/Norm_(mathematics)#p-norm>)[^11] — no caso, uma $(1-\rho)$-norma — **ponderada** (!!!). 
:::

::: exercise

$$
\begin{align*}
\ln C &= \sum \limits_{i=1}^{n} p_{i} \ln x_{i} \\
&= \sum \limits_{i=1}^{n} \ln x_{i}^{p_{i}} \\
&= \ln \left( \prod \limits_{i=1}^{n} x_{i}^{p_{i}} \right)
\end{align*}
$$

Portanto,

$$
\begin{align*}
C &= \prod \limits_{i=1}^{n} x_{i}^{p_{i}} \\
&= \left( \prod \limits_{i=1}^{n} x_{i}^{p_{i}} \right)^{1/\sum \limits_{i}p_{i}}
\end{align*}
$$

Ou seja, o equivalente certo de uma utilidade logarítmica é uma média geométrica *ponderada*. Note-se que, aqui, não é uma média *aritmética*, ou seja, estamos falando de variações *multiplicativas* de riqueza, muito propício p. ex. em contextos financeiros.
:::

::: exercise
A probabilidade de que qualquer indivíduo $i$ sofra uma perda $L_{i}$ é
$$
P(L_{i}) = p
$$

Supondo que haja *um* indivíduo que sofra essa perda, a quantidade que todos — incluindo o próprio indivíduo — pagariam para ressarci-lo seria $\frac{L}{N}$. 

Como os riscos são independentes, a quantidade média de indivíduos que será afetada é $p\cdot N$. Multiplicando ambos, teremos a quantidade que cada indivíduo deve pagar para ressarcir esta quantidade média de indivíduos:
$$
q=\frac{L}{\cancel{ N }} \cancel{ N } p = pL
$$

Note-se que, embora a quantidade para ressarcir *um único indivíduo* seja inversamente proporcional a $N$, a quantidade média de *indivíduos a se ressarcir* é diretamente proporcional a $N$, o que faz com que $q$ não dependa de $N$, e sim da probabilidade $p$ em si. Lembre-se que estamos considerando aqui **riscos independentes**!!

Tomando um indivíduo indiferente ao risco com $u(x)=ax$, pela definição de equivalente certo, teremos
$$
\begin{align*}
u(w-q) = \cancel{ a }(w-q) &= (1-p)u(w) + p u(w-L) \\
&= (1-p) \cancel{ a }w + p \cancel{ a }w - p \cancel{ a }L \\
\implies q &= pL
\end{align*}
$$
:::

::: exercise
Tomando as utilidades dos exercícios anteriores, teremos:

1- Exponencial

$$
\begin{align*}
-e^{-a(w-q)} &= -(1-p)e^{-aw} - pe^{-a(w-L)} \\
\implies e^{-a(\cancel{ w }-q)} &= \cancel{ e^{-aw} }(1-p + p e^{aL}) \\
\implies q &= \frac{1}{a}\ln(1-p+pe^{aL})
\end{align*}
$$
2 - Isoelástica (já cancelando os termos $1-\rho$ do denominador)
$$
\begin{align*}
(w-q)^{1-\rho}-\cancel{ 1 } &= (1-p)(w^{1-\rho}-\cancel{ 1 }) + p ((w-L)^{1-\rho}-\cancel{ 1 }) \\
\implies (w-q)^{1-\rho} &= w^{1-\rho}\left( 1-p + p \left( 1-\frac{L}{w} \right)^{1-\rho} \right) \\
\implies q &= w \left(1- \left( 1-p + p \left( 1-\frac{L}{w} \right)^{1-\rho} \right)\right)^{1/1-\rho}
\end{align*}
$$

3 - Logarítmica
$$
\begin{align*}
\ln(w-q) &= (1-p)\ln w + p\ln(w-L) \\
&=\ln w^{1-p}+ \ln(w-L)^{p} \\
&= \ln(w^{1-p}(w-L)^{p})\\
\implies w-q &= w ^{1-p} (w-L)^{p} \\
&= w \left( 1-\frac{L}{w} \right)^{p}\\
\implies q = w\left( 1-\left( 1-\frac{L}{w} \right)^{p} \right)
\end{align*}
$$

De novo: fique à vontade para testar a simulação [Equivalentes certos (Simulação Desmos)](https://www.desmos.com/calculator/quce5bk5v5)!
:::

%%
## Teoria da firma
::: exercise
Exercício de **retornos de escala não-decrescentes**.

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

Dividindo a primeira equação pela segunda[^12], temos
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
%%



[^1]: @Cowell2004, p. 188 comenta sobre a confusão que ambas estas utilidades — utilidade "de Bernoulli" (cf. @Mas-Colell1995, p. 184) e utilidade de von Neumann-Morgenstern — podem suscitar: "Here we encounter a terminologically awkward corner. We should not really call $u$ ["utilidade de Bernoulli"] 'the utility function' because the whole expression [utilidade de von Neumann-Morgenstern, $U(L) = \sum \limits_{k} p_{k} u_{k}$] is the person's utility; so $u$ is sometimes known as the individual's *cardinal utility function* or *felicity function*; arguably neither term is a particularly happy choice of words.".
[^2]: Note-se que esta definição **não** é a mesma que @Mas-Colell1995 faz: MWG definem o que chamaram de "*probability premium*" (definição **6.C.2 (ii)**, p. 186), mas não o *risk premium* *per se*.
[^3]: Não raro, autores de Microeconomia empregam a letra $w_{i}$ como o custo do insumo $i$, como um análogo ao **w**age/preço da força de trabalho. Escolhemos utilizar aqui a letra $p_{i}$ de preços/*prices* para não confundir com o uso comum da letra $w$ para restrições orçamentárias — letra a qual, diga-se de passagem, também não faz sentido, sendo comum usar-se as letras $m$ (*money*) ou $I$ (*income*). Mas enfim... **são só letras!** 
[^4]: Demandas estas que, sob o problema de minimização do dispêndio, são [[Demanda Hicksiana|Demandas Hicksianas]].
[^5]: Caso vá checar no Varian, ele utiliza $p$ para o resultado *bom* e $1-p$ para o resultado *ruim*. Caso haja algum erro aqui, com certeza se deu devido a esta alteração aqui.
[^6]: Citando o honorável professor João Carlos Alves Barata — autor das enciclopédicas [Notas (de Física Matemática) do Barata](https://denebola.if.usp.br/~jbarata/Notas_de_aula/capitulos.html) —, é bom "fazer estas contas ao menos uma vez na vida".
[^7]: Por ser avesso ao risco. Não tende a ser o mesmo para propenso ao risco.
[^8]: Pois sempre pressupomos que o indivíduo prefere mais dinheiro do que menos — ou seja, derivada positiva —, não obstante ele ter "utilidade marginal decrescente". Só porque o Tio Patinhas se satisfaz menos com uma moeda a mais em seu cofre cheio do que nele vazio, não quer dizer que ele não se satisfaça *algum pouquinho a mais*!
[^9]: A rigor, não faria muito sentido taxar no caso $r_{b}<0$ — o indivíduo seria *ressarcido* (parcialmente) pelo governo por sua perda! Desconsideremos este caso, por simplicidade... Mas note que este "deslize" desempenha um papel não-desprezível no resultado obtido deste exercício.
[^10]: Em verdade: consideremos $x_{i}$ se aproximando de $0$. Não queremos tomar o limite formal $\lim\limits_{x\to_{0}}$ neste caso.
[^11]: É uma $p$-norma *de facto* assumindo-se que $x_{i}>0$.
[^12]: Sem dividir por zero, evidentemente.
