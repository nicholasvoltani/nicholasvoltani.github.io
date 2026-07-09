---
date: "2026-07-02"
tags:
  - marxism
aliases:
---

up:: [[011c MOC Capital III]]

# Formalização da formação de preços de produção
Tenhamos que a economia é formada pelos [[capital|capitais]] 
$$
\{ \mathbb{C}_{i} = c_{i}+v_{i} \}_{i=1}^{n}
$$
com [[Composição de Valor do Capital|composições de valor]] $\frac{c_{i}}{v_{i}}$ cada um. Tenhamos a princípio que a [[Taxa de mais-valor|taxa de mais-valor]] seja igual a $m^{\prime}$ para todos. Defina-se $\mathbb{C} = \sum \limits_{i}\mathbb{C}_{i}$ como o capital total adiantado na economia.

Temos então que o valor que cada capital *produz* é
$$
V_{i} \equiv c_{i} + (1+m^{\prime})v_{i}
$$
e que o mais-valor produzido por cada um é
$$
m_{i} = m^{\prime}v_{i}
$$
O excedente total, produzido por todos os capitais na economia, é dado por
$$
M \equiv \sum \limits_{i} m_{i} = \sum \limits_{i} m^{\prime} v_{i}
$$

Logo, a [[Taxa de Lucro|taxa de lucro]] de cada capital será
$$
l^{\prime}_{i} \equiv \frac{m_{i}}{\mathbb{C}_{i}} = m^{\prime} \frac{v_{i}}{c_{i}+v_{i}} = \frac{m^{\prime}}{1+\frac{c_{i}}{v_{i}}}
$$
e a [[Taxa Esperada de Lucro|Taxa Média de Lucro]] será
$$
l^{\prime}_{m} = \frac{M}{\mathbb{C}} = \frac{\sum \limits_{i} m^{\prime}v_{i}}{\sum \limits_{i}(c_{i}+v_{i})} = \frac{m^{\prime}}{1 + \frac{\sum_{i} c_{i}}{\sum_{i} v_{i}}}
$$

Dessa forma, cada capital terá [[Preço de Produção|preço de produção]] igual a
$$
\begin{align*}
\mathcal{P}_{i} &= (1+l^{\prime}_{m}) \mathbb{C}_{i} \\
\end{align*}
$$
onde $\mathbb{C}_{i}$ é seu capital adiantado — que lhe aparece como seu [[Preço de Custo|preço de custo]] — e $l^{\prime}_{m}\mathbb{C}_{i}$ aparece-lhe como seu [[Lucro Esperado|lucro esperado]], i.e. o que ele espera obter como lucro a partir de seu "investimento" e dadas as condições médias de mercado. 

Supondo que os capitais vendam seus produtos por seus preços de produção $\mathcal{C}_{i}$ , temos que cada capital obteria uma receita (dada por estes preços) que, menos seu preço de custo $\mathbb{C}_{i}$, lhes traria um lucro igual a seu lucro esperado:
$$
l_{i} = l^{\prime}_{m} \mathbb{C}_{i} = \frac{\mathbb{C}_{i}}{\mathbb{C}} \cdot M
$$
Ou seja, cada capital $i$ "tem direito", por assim dizer, a uma parcela do excedente total $M$ produzido na economia, parcela esta dada pela proporção que seu capital investido $\mathbb{C}_{i}$ ocupa no capital (social) total $\mathbb{C}$.[^1]

Neste nível de concretude da análise, está escancarado que aquilo que o capital $i$ produz *não necessariamente* é igual ao valor de que ele se apropria efetivamente. Este diferencial de que ele se apropria sem ter produzido por si próprio é dado por
$$
\begin{align*}
\mathcal{P}_{i} - V_{i} &= \cancel{ \mathbb{C}_{i} } + l^{\prime}_{m}\mathbb{C}_{i} - (\cancel{ c_{i} } + (\cancel{ 1 }+m^{\prime})v_{i}) \\
&= l^{\prime}_{m} \mathbb{C}_{i} - m^{\prime} v_{i}
\end{align*}
$$

Multiplicando e dividindo o último termo por $\mathbb{C}_{i}$, temos
$$
\begin{align*}
\mathcal{P}_{i} - V_{i} &= l^{\prime}_{m} \mathbb{C}_{i} - m^{\prime}v_{i} \frac{\mathbb{C}_{i}}{\mathbb{C}_{i}}\\
&=\left( l^{\prime}_{m} - \frac{m^{\prime}v_{i}}{c_{i}+v_{i}} \right) \mathbb{C}_{i} \\ 
&= (l^{\prime}_{m} - l^{\prime}_{i})\  \mathbb{C}_{i}
\end{align*}
$$

Portanto, o "lucro extraordinário" $\mathcal{P}_{i} -V_{i}$ de um dado capital depende, naturalmente, do volume adiantado deste capital, mas também depende do diferencial de taxa de lucro que ele possua *vis-à-vis* a taxa média de lucro — o que vai contra nossa intuição cotidiana, pois este resultado parece nos dizer que o capital "menos produtivo" consegue se aproveitar dos capitais "mais produtivos"! Isso, porém, é consequência deste nível de abstração: pressupor que um capital tenha taxa de lucro menor que a média, *mas que possa vender como se tivesse condições médias*, é pressupor que ele se apropriará de valor que ele próprio não adiantou e/ou não produziu em excedente. É neste sentido que Marx diz que #to-be-elaborated 
> "...os lucros extras [*Surplusprofit*] podem ter lugar quando certas esferas da produção se encontrem em condições de subtrair-se à transformação de seus *valores-mercadoria* em *preços de produção* e, assim, à redução de seus lucros ao lucro médio." 

#to-be-elaborated Mas então os capitais com taxas de lucro *menores* (*vis-à-vis* taxa média) são mais beneficiados!? Cabe entender direito, "sem moralismos", o que quer dizer "taxa de lucro menor".

# Ganho de produtividade e lucro extraordinário: capital a condições médias
Analisemos o caso de algum capital que comece com condições médias e tenha um ganho de [[Produtividade do Trabalho|produtividade]]. Tenhamos um mercado numa economia com capitais $\{ \mathbb{C}_{i} = c_{i}+v_{i} \}_{i=1}^{n}$, de tal forma que
$$
\begin{cases}
\langle \mathbb{C} \rangle_{n} \equiv \frac{\sum \limits_{i=1}^{n} \mathbb{C}_{i}}{n} \\ \\

\langle c \rangle_{n}  \equiv \frac{\left( \sum \limits_{i=1}^{n} c_{i} \right)}{n} \\ \\

\langle v \rangle_{n} \equiv \frac{\left( \sum \limits_{i=1}^{n} v_{i} \right)}{n}
\end{cases}
$$
sejam o capital médio, [[Capital Constante|capital constante]] médio e [[Capital Variável|capital variável]] médio, respectivamente. Seja a taxa de mais-valor $m^{\prime}$ dada e igual para todos os capitais.

Tenhamos agora um capital particular que adentre neste mercado, e que porventura tenha as mesmas condições médias deste mercado, em que esta média diz respeito *aos $n$ capitais "originais" neste mercado*. Pressuposto isso, e denotando as médias sem os subscritos $n$ por simplicidade de notação, temos que este capital adianta $c_{k} = \langle c \rangle$ e $v_{k} = \langle v \rangle$ em capital constante e variável respectivamente. Portanto, ele adianta $\mathbb{C}_{k} = \langle \mathbb{C} \rangle$, produz mais-valor $m_{k} = m^{\prime}\langle v \rangle$ e tem taxa de lucro
$$
l^{\prime}_{k} = \frac{m^{\prime}\langle v \rangle}{\langle \mathbb{C}\rangle} = \frac{m^{\prime}}{1+ \left\langle  \frac{c}{v}  \right\rangle }
$$
onde denotamos $\left\langle  \frac{c}{v}  \right\rangle$ por
$$
\left\langle  \frac{c}{v}  \right\rangle  \equiv \frac{\langle c \rangle }{\langle v \rangle } = \frac{\frac{\sum \limits_{i=1}^{n} c_{i}}{n}}{\frac{\sum \limits_{i=1}^{n}v_{i}}{n}} = \frac{\sum \limits_{i=1}^{n} c_{i}}{\sum \limits_{i=1}^{n}v_{i}}
$$
Ou seja, a "composição média de valor" é a fração do capital constante médio sobre o capital variável médio.[^2] Note-se que, como ele possui a mesma composição de capital que a média original, a média *da qual ele faz parte* será igual à média anterior à sua entrada no mercado: seu capital constante é igual à média de capital constante e *idem* para seu capital variável, ==mais-valor produzido e taxa de lucro.==

Tenhamos agora que este capital tenha um ganho de produtividade $p>1$, *mas que deseje manter seu capital adiantado o mesmo*. Ou seja, ele adianta $\langle \mathbb{C} \rangle$, mas agora sua proporção de capital constante e variável *vão divergir da média*. Sejam tais proporções denotadas por $\tilde{c}$ e $\tilde{v}$. Perceba-se que, mesmo que sua composição de valor seja diferente da média, o capital social total (assim como o capital social médio) não se altera. 

Como calculado previamente ==adicionar contas feitas no nível de abstração de produção== , temos que 
$$
\tilde{v} = \frac{\langle \mathbb{C} \rangle }{1 + p \left\langle  \frac{c}{v}  \right\rangle } =  \frac{\left( 1+ \left\langle  \frac{c}{v}  \right\rangle  \right)}{1+p \left\langle  \frac{c}{v}  \right\rangle } \langle v \rangle 
$$

A nova taxa de lucro média, com este capital mais produtivo, será
$$
\begin{align}
l^{\dagger}_{m} &= \frac{m^{\prime} \sum \limits_{i} v_{i} + m^{\prime} \tilde{v}}{\sum \limits_{i} \mathbb{C}_{i} + \langle \mathbb{C} \rangle } \\ 
 &= \frac{n m^{\prime}\langle v \rangle  + m^{\prime}\tilde{v}}{n\langle \mathbb{C} \rangle + \langle \mathbb{C} \rangle } \\
&= \frac{m^{\prime}\langle v \rangle }{(n+1) \langle \mathbb{C} \rangle } \left( n + \frac{1+\left\langle  \frac{c}{v}  \right\rangle}{1+p\left\langle  \frac{c}{v}  \right\rangle }  \right) \\ 
&= \frac{m^{\prime}\langle v \rangle }{(n+1) \langle \mathbb{C} \rangle } \left( \frac{n+np\left\langle  \frac{c}{v}  \right\rangle  + 1 + \left\langle  \frac{c}{v}  \right\rangle }{1+p\left\langle  \frac{c}{v}  \right\rangle } \right) \\
&= \frac{1 + \frac{np+1}{n+1} \left\langle  \frac{c}{v}  \right\rangle }{1+p \left\langle  \frac{c}{v}  \right\rangle } \frac{m^{\prime} \langle v \rangle }{\langle \mathbb{C} \rangle }
\end{align}
$$
Como *sanity check*, note-se que, quando temos $p=1$, esta expressão se reduz à taxa média de lucro original $l^{\dagger}_{m} = l^{\prime}_{m}$. Note-se também, abrindo a fórmula de forma sugestiva, que esta taxa média de lucro pós entrada deste capital é *maior* que a taxa média original:
$$
\begin{align*}
l^{\dagger}_{m} &= \frac{1 + \frac{1+np}{n+1} \left\langle  \frac{c}{v}  \right\rangle }{1+p \left\langle  \frac{c}{v}  \right\rangle } \frac{m^{\prime} \langle v \rangle }{\langle \mathbb{C} \rangle } \\
&= \frac{1 + \frac{1+p + (n-1)p}{n+1} \left\langle  \frac{c}{v}  \right\rangle }{1+p \left\langle  \frac{c}{v}  \right\rangle } \frac{m^{\prime} \langle v \rangle }{\langle \mathbb{C} \rangle } \\
&= \frac{m^{\prime}\langle v \rangle }{\langle \mathbb{C} \rangle } + \frac{p (n-1)}{1+p\left\langle  \frac{c}{v}  \right\rangle } \frac{m^{\prime}\langle v \rangle }{\langle \mathbb{C} \rangle } \\
&> \frac{m^{\prime} \langle v \rangle }{\langle \mathbb{C} \rangle } = l^{\prime}_{m}
\end{align*}
$$

A taxa própria de lucro deste capital, após este "choque de produtividade", devém
$$
\begin{align*}
l^{\prime}_{k} &= \frac{m^{\prime} \tilde{v}}{\langle \mathbb{C} \rangle } \\
&= \frac{1+\left\langle  \frac{c}{v}  \right\rangle }{1 + p \left\langle  \frac{c}{v}  \right\rangle } \frac{m^{\prime} \langle v \rangle }{\langle \mathbb{C} \rangle } \\
&< \frac{m^{\prime}\langle v \rangle }{\langle \mathbb{C} \rangle }
\end{align*}
$$
Ou seja, este ganho de produtividade aumenta a taxa *média* de lucro, embora diminua a taxa *própria* de lucro do capital mais produtivo. Ele, porém, vende ao preço de produção, tendo seu lucro *atrelado à taxa média*. Embora ele extraia menos trabalho excedente em seu próprio processo de produção, ele compensa-o através da apropriação da produção social — ou seja, da produção de seus demais concorrentes.

Portanto, o lucro extraordinário que este capital mais produtivo consegue extrair da economia será, como analisado anteriormente
$$
\begin{align*}
\Delta V_{k} &= (l^{\dagger}_{m} - l^{\prime}_{k}) \mathbb{C}_{k} \\
&= (l^{\dagger}_{m} - l^{\prime}_{k})  \langle  \mathbb{C} \rangle \\
&= \left( \cancel{ 1 } + \frac{np+1}{n+1} \left\langle  \frac{c}{v}  \right\rangle - \cancel{ 1 }-\left\langle  \frac{c}{v}  \right\rangle  \right) \frac{1}{1+p \left\langle  \frac{c}{v}  \right\rangle } m^{\prime}\langle v \rangle \\
&= \left(\frac{np+1}{n+1} \left\langle  \frac{c}{v}  \right\rangle -\left\langle  \frac{c}{v}  \right\rangle  \right) \frac{1}{1+p \left\langle  \frac{c}{v}  \right\rangle } m^{\prime}\langle v \rangle  \\
\end{align*}
$$
Fazendo o denominador de ambos os termos entre parênteses igual a $n+1$, temos
$$
\begin{align*}
\Delta V_{k} &= \left(\frac{np+ \cancel{ \left\langle  \frac{c}{v}  \right\rangle }- n\left\langle  \frac{c}{v}  \right\rangle  - \cancel{ \left\langle  \frac{c}{v}  \right\rangle }}{n+1}  \right) \frac{1}{1+p \left\langle  \frac{c}{v}  \right\rangle } m^{\prime}\langle v \rangle \\
&= \frac{n}{n+1} \frac{(p-1) \left\langle  \frac{c}{v}  \right\rangle }{1+p\left\langle  \frac{c}{v}  \right\rangle } m^{\prime}\langle v \rangle
\end{align*}
$$

Com $p=1$, naturalmente $\Delta V_{k}=0$: este capital não se distinguiria da média e, portanto, não possuiria nenhum diferencial de taxa de lucro *vis-à-vis* a taxa média. Note-se que, conforme há mais e mais capitais presentes neste mercado, i.e. quando $n\to \infty$, temos
$$
\lim \limits_{n \to \infty} \Delta V_{k} = \frac{(p-1) \left\langle  \frac{c}{v}  \right\rangle }{1+p\left\langle  \frac{c}{v}  \right\rangle } m^{\prime} \langle v \rangle 
$$
que é igual ao [[Mais-Valor Extra|mais-valor adicional]] que este capital extrairia ao abstrair de taxas médias de lucro! Ou seja, o exercício feito quando abstraíamos fatores fora da esfera de produção deste capital é recuperado quando este capital está em um mercado "saturado", i.e. quando ele consegue extrair este excedente "sem afetar as condições médias". Não é difícil perceber que há um claro análogo com a noção neoclássica de [[Competição Perfeita|competição perfeita]] — 
i.e. de mercados em que há uma quantidade "infinita" de firmas —, embora estejamos aqui falando de extração de mais-valor e lucros extraordinários, não de "*price takers*" etc. Porém, note-se que todo o argumento feito até aqui dependeu de que $\mathbb{C}_{k}=\langle \mathbb{C} \rangle_{n}$, ou seja, que a grandeza deste capital está na mesma "ordem de magnitude" que a da média do mercado em que ele adentrou. Um cenário totalmente diferente seria a da entrada de um capital muito maior do que a média antes de sua entrada, p. ex. como na competição assimétrica (e poder-se-ia dizer "desleal") que redes de supermercados conseguem exercer sobre comércios locais. A economia neoclássica, porém, vê este resultado como se juntasse o útil ao agradável: quanto mais *players* de mercado, tanto mais "igualitário" ele será, posto que cada capital "terá peso menor" no todo. Tal discurso, porém, pressupõe que todos os capitais tenham grandezas de mesma ordem de magnitude, ou melhor, que não haja algum capital que difira demais da média; pressupõe, fiel a seu próprio discurso, que o mercado é meritocrático da base à cúpula. Em suma, inverte a ordem lógica, correta, do argumento: não é por haver mais competição num mercado que ele se torna mais equitativo, e sim que é por tratar-se, desde o início, de um mercado com pouca variabilidade nas grandezas dos capitais individuais que pode haver uma "competição mais justa" — e até mesmo isso é ambíguo, ao menos que se aceite, sem pudores e com todos os pingos nos i's, que o mercado é um genuíno [[Jogo de Soma Zero|jogo de soma zero]] no qual capitais mais produtivos irão[^3] se apropriar, além de seu próprio valor produzido, de parte do mais-valor produzido pelos menos produtivos.

# Capital com ganho de produtividade sobre composição média
O mesmo exercício pode ser feito com condições menos restritivas: em vez de este capital adiantar $\langle \mathbb{C} \rangle$, i.e. o adiantamento médio do mercado, suponhamos meramente que ele adianta um dado valor $K$, e que sua produtividade seja maior que a produtividade média do setor (sem considerá-lo). Ou seja, suponhamos que ele satisfaz as condições
$$
\begin{cases}
\tilde{c}+\tilde{v} = K \\
\frac{\tilde{c}}{\tilde{v}} = p \left\langle  \frac{c}{v}  \right\rangle 
\end{cases}
$$

Podemos recuperar $\tilde{c}$ e $\tilde{v}$ em função de $K$ e $\left\langle  \frac{c}{v}  \right\rangle$:
$$
\begin{cases}
\tilde{v} = \frac{K}{1+ p \left\langle  \frac{c}{v}  \right\rangle } = \frac{K}{p \langle c \rangle + \langle v \rangle } \langle v \rangle  \\
\tilde{c} = p \left\langle  \frac{c}{v}  \right\rangle \tilde{v} = \frac{p \left\langle  \frac{c}{v}  \right\rangle K}{1+p \left\langle  \frac{c}{v}  \right\rangle }
\end{cases}
$$

Sabemos, portanto, que este capital produzirá mais-valor igual a
$$
m^{\prime}\tilde{v} = \frac{m^{\prime}}{1+p \left\langle  \frac{c}{v}  \right\rangle } K = \frac{K}{p \langle c \rangle  + \langle v \rangle } m^{\prime} \langle v \rangle 
$$

A taxa média de lucro, mediante a entrada deste capital mais produtivo, será
$$
\begin{align*}
l^{\dagger}_{m} &= \frac{m^{\prime} \sum v_{i} + m^{\prime} \tilde{v}}{\sum \mathbb{C}_{i} + K} \\
&= \frac{m^{\prime} n \langle v \rangle + m^{\prime}\tilde{v}}{n\langle \mathbb{C} \rangle + K} \\
&= \frac{n \langle v \rangle + \frac{\langle \mathbb{C} \rangle}{1+p \left\langle  \frac{c}{v}  \right\rangle }}{n \langle \mathbb{C} \rangle  + K} m^{\prime} \\
&= \frac{n \langle v \rangle  + pn \langle c \rangle \pm n\langle c \rangle  +\langle \mathbb{C} \rangle}{n \langle \mathbb{C} \rangle  + K} \frac{1}{1 + p \left\langle  \frac{c}{v}  \right\rangle } m^{\prime} \\
&= \frac{(n+1) \langle \mathbb{C}  \rangle + n (p-1)\langle c \rangle  }{n \langle \mathbb{C} \rangle  + K} \frac{1}{1 + p \left\langle  \frac{c}{v}  \right\rangle } m^{\prime} \frac{\langle v \rangle }{\langle v \rangle } \\
&= \frac{(n+1) \left( 1+ \left\langle  \frac{c}{v}  \right\rangle  \right) + n (p-1)\left\langle  \frac{c}{v}  \right\rangle  }{n \langle \mathbb{C} \rangle  + K} \frac{1}{1 + p \left\langle  \frac{c}{v}  \right\rangle } m^{\prime}\langle v \rangle  
\end{align*}
$$
(Na antepenúltima linha, somou-se e subtraiu-se $n \langle c \rangle$, e na penúltima linha multiplicou-se e dividiu-se por $\langle v \rangle \neq 0$.) Não é a expressão mais esteticamente agradável, mas ela se reduz à fórmula anterior no caso em que $K=\langle \mathbb{C} \rangle$:[^4]
$$
\begin{align}
l^{\dagger}_{m}[K=\mathbb{C}] &= \frac{(n+1) \left( 1+ \left\langle  \frac{c}{v}  \right\rangle  \right) + n (p-1)\left\langle  \frac{c}{v}  \right\rangle  }{n \langle \mathbb{C} \rangle  + \langle \mathbb{C} \rangle } \frac{1}{1 + p \left\langle  \frac{c}{v}  \right\rangle } m^{\prime}\langle v \rangle \\
&= \frac{\left( 1+ \left\langle  \frac{c}{v}  \right\rangle  \right) + \frac{n}{n+1} (p-1) \left\langle  \frac{c}{v}  \right\rangle}{1+p \left\langle  \frac{c}{v}  \right\rangle} \frac{m^{\prime} \langle v \rangle}{\langle \mathbb{C} \rangle } \\
&= \frac{1 +  \frac{\cancel{ n } + 1 + n(p-\cancel{ 1 }) }{n+1} \left\langle  \frac{c}{v}  \right\rangle}{1+p \left\langle  \frac{c}{v}  \right\rangle} \frac{m^{\prime} \langle v \rangle}{\langle \mathbb{C} \rangle } \\
&= \frac{1 +  \frac{np + 1 }{n+1} \left\langle  \frac{c}{v}  \right\rangle}{1+p \left\langle  \frac{c}{v}  \right\rangle} \frac{m^{\prime} \langle v \rangle}{\langle \mathbb{C} \rangle }
\end{align}
$$



---
### Referências

[^1]: A este nível de abstração, claro. Na realidade concreta, há muitos agravantes, tanto de ordem teórica quanto de questões contingentes e dadas pelo acaso, que perturbam este meritocrático "a cada qual segundo sua capacidade" do livre-mercado "em sua pureza".
[^2]: Se ela for pensada como uma "média das composições de valor" $\left( \frac{c}{v} \right)_{i}$, então ela tem de ser pensada como uma média *ponderada* pelas proporções que cada capital possui em capital variável *vis-à-vis* capital variável total. Isso se dá pois $\left\langle  \frac{c}{v}  \right\rangle = \sum_{i} \left( \frac{c}{v} \right)_{i} \frac{v_{i}}{\sum_{i}v_{i}} = \sum_{i} \frac{c_{i}}{\sum_{i}v_{i}} = \frac{\sum_{i}c_{i}}{\sum_{i}v_{i}}$, sendo igual à definição dada.
[^3]: Neste nível de abstração. Na realidade concreta, isso não é mais que uma tendência.
[^4]: E que, como temos $\frac{\tilde{c}}{\tilde{v}} = p \left\langle  \frac{c}{v}  \right\rangle$, já recuperamos que $\langle \mathbb{C} \rangle = \left( 1+p \left\langle  \frac{c}{v}  \right\rangle \right) \tilde{v} \implies \tilde{v}=\frac{\langle \mathbb{C} \rangle}{1+p \left\langle  \frac{c}{v}  \right\rangle}$  
