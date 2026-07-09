---
date: "2026-05-02"
tags:
  - marxism
aliases:
---

up:: [[Rotação Total do Capital|Tempo de Rotação Total do Capital]]

Justamente pelo tempo total de rotação do capital ser uma média harmônica ponderada dos [[Tempo de Rotação do Capital|tempos de rotação]] de seus componentes, temos que, quanto mais uma componente — com peso não-desprezível sobre o capital total adiantado — tenha tempo de rotação menor, tanto mais ela influirá na queda do tempo total de rotação do capital.

Formalmente, tenha-se $\{ \alpha_{1}, \dots, \alpha_{n} \}$ as proporções do capital adiantado despendidas em componentes com tempos de rotação $\{ t_{1},\dots,t_{n} \}$. Se $\alpha_{k}$ é alguma componente cujo tempo de rotação diminua[^1] $\downarrow t_{k} \iff \uparrow \frac{1}{t_{k}}$; então, por consequência, $\downarrow \frac{1}{\sum \frac{\alpha_{i}}{t_{i}}}$ em tanto maior grau quanto menos desprezível $\alpha_{k}$ for, claro.

# Exemplos [@Marx2014, p. 270-1]
Com um capital adiantado $V$, que subdivide-se em
$$
\begin{cases}
\alpha_{1} \leftrightarrow  (k_{1}, t_{1}) \\
\alpha_{2} \leftrightarrow  (k_{2}, t_{2}) \\
\vdots \\
\alpha_{n} \leftrightarrow  (k_{n}, t_{n})
\end{cases}
$$
em que $\alpha_{i}$ são as proporções em que $V$ é despendido em $k_{i}$ — i.e. $\frac{k_{i}}{V} = \alpha_{i}$, cujo tempo de rotação individual é $t_{i}$ — todos medidos com relação a algum tempo de referência em comum, p. ex. um ano.  Tomando $1$ ano como tempo referência, então um componente que é reposto em um ano terá $t=1$; um que é reposto duas vezes por ano terá $t=2$; um que é reposto a cada dois anos terá $t=\frac{1}{2}$.

Então, pressupondo aqui que não estamos distinguindo [[Capital Constante]] de [[Capital Variável]], teremos que o valor **empregado** $V^\prime$[^2] em um dado tempo de referência — p. ex. um ano — será
$$
\begin{align*}
V^\prime &= \left( \sum \limits_{i=1}^{n} \frac{\alpha_{i} \cdot V}{t_{i}} \right) \\
\implies \frac{V^\prime}{V} = \frac{1}{t_{g}} &= \sum \limits_{i=1}^{n} \frac{\alpha_{i}}{t_{i}}
\end{align*}
$$

Portanto, o tempo de rotação global do capital é
$$
t_{g} = \frac{1}{\sum \limits_{i=1}^{n} \alpha_{i} t_{i}^{-1}}
$$

O exemplo fornecido por Marx dita:
$$
\begin{cases}
V \text{ (Adiantado)} = 50k\\
\alpha_{1}=\frac{1}{2}, t_{1}=10 \text{ anos} \\
\alpha_{2}=\frac{1}{4}, t_{2}=2 \text{ anos}\\
\alpha_{3}=\frac{1}{4}, t_{3}=\frac{1}{2} \text{ ano}
\end{cases}
$$

O valor total **empregado** em um ano é
$$
50k \cdot \frac{1}{\frac{1}{2}\cdot \frac{1}{10} + \frac{1}{4} \cdot \frac{1}{2} + \frac{1}{4} \cdot \frac{1}{\frac{1}{2}}} \approx 33750
$$

Portanto, o tempo de rotação total é
$$
\frac{1}{\frac{1}{2}\cdot \frac{1}{10} + \frac{1}{4} \cdot \frac{1}{2} + \frac{1}{4} \cdot \frac{1}{\frac{1}{2}}} \approx 1.48 \text{ ano} \approx 17.78 \text{ meses}
$$

O número de rotações é 
$$
\frac{1 \text{ ano}}{1.48 \text{ ano}} \approx 0.676 \text{ rotação por ano}
$$


Mudando a composição, para que haja maior presença de elementos que sejam repostos *mais vezes por ano*:
$$
\begin{cases}
\alpha_{1}={\color{red} \frac{1}{4}}, t_{1}=10 \text{ anos} \\
\alpha_{2}=\frac{1}{4}, t_{2}={\color{red} 1} \text{ ano}\\
\alpha_{3}={\color{red} \frac{1}{2}}, t_{3}=\frac{1}{2} \text{ ano}
\end{cases}
$$

A mesma conta traz que o capital total **empregado** é
$$
50k \cdot \frac{1}{\frac{1}{4}\cdot \frac{1}{10} + \frac{1}{4} \cdot \frac{1}{1} + \frac{1}{2} \cdot \frac{1}{\frac{1}{2}}} \approx 63750
$$
e o tempo total de rotação
$$
\frac{1}{\frac{1}{4}\cdot \frac{1}{10} + \frac{1}{4} \cdot \frac{1}{1} + \frac{1}{2} \cdot \frac{1}{\frac{1}{2}}} \approx 0.78 \text{ ano} \approx 9.41 \text{ meses}
$$

O número de rotações é 
$$
\frac{1 \text{ ano}}{0.78 \text{ ano}} \approx 1.282 \text{ rotação por ano}
$$



---
### Referências
[^1]: E.g. obtém-se um "substituto perfeito" que possui tempo de rotação menor. Certamente o advento do *plástico* permitiu uma dessas revoluções no tempo de rotação do capital, por exemplo.
[^2]: Note-se que a parte *constante* do capital adiantado será meramente retransferida para o produto final, portanto reaparecendo no capital despendido!