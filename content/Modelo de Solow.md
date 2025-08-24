---
date: "2024-10-30"
tags:
  - economics
aliases:
---

up:: [[061 MOC Macroeconomia]]

![[Pasted image 20241031085653.png|600]]
Fonte: [Noahpinion](https://www.noahpinion.blog/p/what-the-solow-model-can-teach-us).

O modelo de Solow é um modelo sobre o crescimento econômico *lato sensu* de uma economia. 

# Definição matemática
Dada uma [[Função Produção]] $Y = f(K,L)$ que descreve o [[Produto Agregado]] em termos do [[Capital Constante|Capital]] $K$ e da [[Capital Variável|Força de Trabalho]] $L$, supõe-se que ela tenha *retornos constantes em escala*:
$$
f(\alpha K, \alpha L) = \alpha f(K,L)
$$
Ou seja, supõe-se que a economia seja desenvolvida o suficiente para conseguir um retorno proporcional ao capital a mais investido na produção.

Além disso, empregam-se as seguintes equações dinâmicas:
$$
\begin{cases}
K_{t+1} = I_{t} + (1-\delta)K_{t} \\
I_{t} = sY_{t} \\
C_{t} = Y_{t}-I_{t} = (1-s)Y_{t}
\end{cases}
$$
onde $0 < \delta < 1$ é a taxa de [[Depreciação]], $I_{t}$ é o [[Investimentos|Investimento]] no tempo $t$ e $s$ é a taxa de [[Poupança]]. 

Além disso, podemos supor que
$$
Y = A f(K,L)
$$
onde $A \in \mathbb{R}$ representa o *nível de tecnologia* da economia[^1].

# Modelo de Solow com Força de Trabalho constante/exógena
Supondo $L$ constante, podemos trabalhar com as *variáveis per capita*:
$$
\begin{cases}
k_{t}=\frac{K_{t}}{L} \\
y_{t} = \frac{Y_{t}}{L} = f\left( \frac{K_{t}}{L} \right) = f(k_{t}) \\
i_{t}=\frac{I_{t}}{L} \\
c_{t} = \frac{C_{t}}{L}
\end{cases}
$$

Analisando o crescimento de capital per capita, temos
$$
\begin{align}
k_{t+1}-k_{t} &= i_{t}-\delta k_{t} \\
\therefore \frac{k_{t+1}-k_{t}}{k_{t}} &= \frac{i_{t}}{k_{t}} - \delta
\end{align}
$$

Como temos que $i_{t} = s y_{t}$, temos
$$
g(k) = \frac{k_{t+1}-k_{t}}{k_{t}} = s \frac{y_{t}}{k_{t}} - \delta
$$
onde $g(k)$ é o crescimento (*growth*) percentual de $k$ no tempo $t$.

## *Steady states*
Buscando um estado estável neste modelo, fazemos $g(k)=0$. Disso temos[^2]
$$
\begin{cases}
y^{*} &= \frac{\delta}{s} k^{*} \\
i^{*} &= \delta k^{*} \\
c^{*} &= \frac{1-s}{s} \delta k^{*}
\end{cases}
$$
que são as variáveis de equilíbrio *per capita*. Note-se que, como $L$ é exógeno, as variáveis base também alcançarão um equilíbrio (só multiplicar as respectivas variáveis per capita por $L$).

Ou seja, note-se que
- mudanças permanentes na *poupança* têm efeitos diretamente proporcionais em todas variáveis – *menos no consumo*
- mudanças permanentes no *nível tecnológico* têm efeitos diretamente proporcionais em todas variáveis
- mudanças permanentes na *depreciação* têm efeitos *inversamente* proporcionais em todas variáveis

O [[Consumo Agregado|Consumo]], em particular, é afetado inversamente pela poupança do que os investimentos são. Portanto, precisa ser considerado diferentemente. Busquemos então algum $\bar{s}$ que maximize o consumo de equilíbrio. Isso é equivalente a buscar o máximo consumo no tocante ao capital de equilíbrio:
$$
\begin{align}
c^{*} = y^{*}-i^{*} = f(k^{*})-\delta k^{*} \\
\therefore\frac{dc^{*}}{dk^{*}} = 0 \implies \frac{ \partial f }{ \partial k }(k^{*})=\delta 
\end{align}
$$

Este ponto é um máximo, devido à hipótese que a função de produção possui *retornos marginais decrescentes*, i.e. 
$$
\frac{ \partial^{2} f }{ \partial^{2} k } < 0
$$

Portanto, através do investimento, temos que
$$
\begin{align}
i^{*} &= \delta k^{*} = \frac{ \partial f }{ \partial k } (k^{*})  \\
&= \bar{s} y^{*} = \bar{s} f(k^{*}) \\
\therefore \bar{s} &= \frac{\delta k^{*}}{f(k^{*})}  \\
&= \frac{ \partial f }{ \partial k } (k^{*}) \frac{k^{*}}{f(k^{*})}
\end{align}
$$
é a taxa de poupança necessária para maximizar o consumo. Essa é a chamada *regra de ouro* do modelo de Solow. 

## Equilíbrio com produção Cobb-Douglas
Supondo, por exemplo, uma [[Função de Cobb-Douglas]] de produção, temos
$$
\begin{align}
Y_{t} &= A K_{t}^{\alpha} L^{1-\alpha} \\
y_{t} &= \frac{Y_{t}}{L} = A k_{t}^{\alpha}
\end{align}
$$

Dessa forma, teríamos
$$
\begin{cases}
k^{*} &= \left( \frac{sA}{\delta} \right)^{\frac{1}{1-\alpha}} \\
y^{*} &= \left( \frac{s}{\alpha} \right)^{\frac{1}{1-\alpha}} A^{\frac{\alpha}{1-\alpha}} \\
i^{*} &= \left( \frac{1}{\delta} \right)^{\frac{1}{1-\alpha}} (sA)^{\frac{\alpha}{1-\alpha}} \\
c^{*} &= (1-s)\left( \frac{s}{\alpha} \right)^{\frac{1}{1-\alpha}} A^{\frac{\alpha}{1-\alpha}}
\end{cases}
$$

# Modelo de Solow com Força de Trabalho variável/endógena
Supomos, além das equações prévias, uma equação dinâmica da variável $L_{t}$:
$$
L_{t} = (1+n)L_{t-1} = (1+n)^{t}L_{0}
$$
onde $n$ é a taxa de crescimento da força de trabalho (exógena). Note-se que isso é equivalente a dizer que
$$
\frac{L_{t+1}}{L_{t}} = 1 + n
$$

As variáveis per capita agora são baseadas em $L_{t}$:
$$
\begin{cases}
k_{t}=\frac{K_{t}}{L_{t}} \\
y_{t} = \frac{Y_{t}}{L_{t}} = f\left( \frac{K_{t}}{L_{t}} \right) = f(k_{t}) \\
i_{t}=\frac{I_{t}}{L_{t}} \\
c_{t} = \frac{C_{t}}{L_{t}}
\end{cases}
$$


Note-se que o crescimento do capital per capita muda:
$$
\begin{align}
k_{t+1} &= \frac{K_{t+1}}{L_{t+1}} = \frac{I_{t}}{L_{t+1}} \frac{L_{t}}{L_{t}} + (1-\delta)\frac{K_{t}}{L_{t+1}} \frac{L_{t}}{L_{t}} \\
&=i_{t} \frac{1}{1+n} + \frac{1-\delta}{1+n} k_{t}  \\
&\approx i_{t} (1-n) + (1-\delta-n) k_{t}
\end{align}
$$
onde usa-se a aproximação[^3] $(1+x)^{n} \approx 1+n x$, e aproximações de primeira ordem em $\delta, n$[^4].

Fazendo $i_{t} = sy_{t}$, temos[^5]
$$
k_{t+1} - k_{t} \approx sy_{t} - (\delta + n) k_{t}
$$

## *Steady states*
No equilíbrio, o capital per capita é constante. Disso obtemos
$$
\begin{cases}
y^{*} &= \frac{\delta+n}{s} k^{*} \\
i^{*} &= (\delta + n) k^{*} \\
c^{*} &= \frac{1-s}{s} (\delta + n) k^{*}
\end{cases}
$$

A regra de ouro tem como taxa de poupança ótima 
$$
\bar{s} = (\delta+n) \frac{k^{*}}{f(k^{*})}
$$

## Crescimento de variáveis base
Enquanto as variáveis per capita chegam a um equilíbrio, as variáveis base *têm crescimento não-nulo*. Note-se que $L$ está crescendo geometricamente: o capital *per capita* chega a uma constante, pois o capital em si passa a crescer na mesma taxa que a taxa de crescimento da força de trabalho. Matematicamente:
$$
\begin{align}
\frac{K_{t+1}-K_{t}}{K_{t}} &= \frac{I_{t}}{K_{t}} \frac{L_{t}}{L_{t}} - \delta \\
&= \frac{i_{t}}{k_{t}} - \delta \\
\therefore \lim\limits_{t\to \infty} g(K) = \frac{i^{*}}{k^{*}} - \delta = n
\end{align}
$$

Para todas as variáveis que chegam a um equilíbrio *per capita*, temos que elas crescerão na proporção da força de trabalho em suas variáveis base: seja $X$ uma variável cujo per capita $x$ chega a um equilíbrio $x^{*}$ conforme $t \to \infty$. Então temos
$$
\begin{align}
\lim\limits_{t \to \infty} \frac{X_{t+1}-X_{t}}{X_{t}} &= \lim\limits_{t \to \infty} \frac{x_{t+1} L_{t+1}}{x_{t} L_{t}} - 1 \\
&=  \frac{\cancel{ x^{*} }}{\cancel{ x^{* }}} (1+n) - 1 \\
&= n
\end{align}
$$

Ou seja, neste modelo, o crescimento econômico em geral cresce na mesma proporção que o aumento da força de trabalho. Este é o chamado "caminho de crescimento sustentado" (*balanced growth path*). 

---
### References
- [Solow Growth Model - YouTube](https://www.youtube.com/playlist?list=PLNpHl8d_AfqtgRADRBw4u-Kz5Y6X06d6t)
- [What the Solow Model can teach us about China (Noahpinion)](https://www.noahpinion.blog/p/what-the-solow-model-can-teach-us) 
- [solow\_SL.pdf](https://lhendricks.org/econ720/ih2/solow_SL.pdf)
- [macroeconomics - Three types of Neutral technological Change - Economics Stack Exchange](https://economics.stackexchange.com/questions/55254/three-types-of-neutral-technological-change)

[^1]: Supondo que a função produção tenha retornos constantes em escala, esse $A$ sai como fator de ambos $K$ e $L$, sendo uma nível tecnológico médio geral da economia.
[^2]: Note-se que, neste estado de equilíbrio, temos que o investimento é exatamente igual à depreciação, nem mais, nem menos. Quando se chega a este estado, investir mais acaba sendo detrimental, devido à força de trabalho constante "ficar para trás".
[^3]: Quando $|x|\ll 1$, mas duvido que economistas tenham isso em mente.
[^4]: I.e. desconsiderando termos $\delta^{2}, n^{2}, n\delta$ etc. De novo, isso vale quando $|\delta|, |n|\ll 1$, e, de novo, vide acima.
[^5]: De novo, assumindo $|s| \ll 1$, ou ao menos que $|s n| \ll 1$.