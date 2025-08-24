---
date: "2025-06-23"
tags:
  - economics
aliases:
  - Coeficiente de Aversão Absoluta ao Risco
---

up:: [[062d MOC Loterias]]

Dada uma [[Utilidade de Bernoulli]] $u(\cdot)$ duplamente diferenciável, o coeficiente de Arrow-Pratt, de **aversão absoluta ao risco**, é definido como
$$
r_{A}(x) \coloneqq -\frac{u''(x)}{u'(x)}
$$

Essa definição não é meramente $u''(x)$, pois tal medida não seria invariante a transformações lineares da função utilidade.

O sinal negativo é por convenção: $r_{A}$ é positivo para agentes [[Aversão ao Risco|avessos ao risco]], $0$ para neutros ao risco, e negativo para amantes ao risco.

Este coeficiente se trata de aversão *absoluta* ao risco, ou seja, trata-se de desvios em valor *absoluto* de uma dada riqueza inicial $x$. Há também o [[Coeficiente de Aversão Relativa ao Risco]], que se trata de desvios *percentuais* de dada riqueza $x$.

# Relação com Prêmio de Risco
Dada uma riqueza $x$, analisando o [[Prêmio de Risco]] $\pi(x, \epsilon, u)$, denote-se $\pi(\epsilon) \coloneqq  \pi(x, \epsilon, u)$. Analisamos sua variação conforme $\epsilon \to 0$. A definição de prêmio de risco é
$$
u(x) = \left( \frac{1}{2} + \pi(\epsilon) \right) u(x+\epsilon) + \left( \frac{1}{2} - \pi(\epsilon) \right) u(x-\epsilon)
$$

Derivando uma vez com relação a $\epsilon$, segue
$$
0 = \pi'(\epsilon) u(x+\epsilon) + \left( \frac{1}{2} + \pi(\epsilon) \right) u'(x+\epsilon) - \pi'(\epsilon) u(x-\epsilon) - \left( \frac{1}{2} - \pi(\epsilon) \right) u'(x-\epsilon)
$$

Derivando de novo com relação a $\epsilon$, segue
$$
\begin{align}
0 = &\pi''(\epsilon) u(x+\epsilon) + \pi'(\epsilon) u'(x+\epsilon) + \pi'(\epsilon) u'(x+\epsilon) + \left( \frac{1}{2} + \pi(\epsilon) \right) u''(x+\epsilon)  \\
&- \pi''(\epsilon) u(x-\epsilon) +\pi'(\epsilon) u'(x-\epsilon) + \pi'(\epsilon) u'(x-\epsilon) + \left( \frac{1}{2} - \pi(\epsilon) \right) u''(x-\epsilon)
\end{align}
$$
Tomando o limite $\epsilon \to 0$, temos
$$
\begin{align}
0 = &\cancel{ \pi''(0) u(x) } + \pi'(0) u'(x) + \pi'(0) u'(x) + \left( \frac{1}{2} + \cancel{ \pi(0) } \right) u''(x)  \\
&- \cancel{ \pi''(0) u(x) } +\pi'(0) u'(x) + \pi'(0) u'(x) + \left( \frac{1}{2} - \cancel{ \pi(0) } \right) u''(x)
\end{align}
$$
do qual vem
$$
\begin{align}
4 \pi'(0) u'(x) + u''(x) = 0 \\
\therefore r_{A}(x) = 4 \pi'(0)
\end{align}
$$
# Equivalência com Equivalente Certo
Supondo uma loteria $L = (x+\epsilon, x-\epsilon; \frac{1}{2}, \frac{1}{2})$, para uma dada riqueza $x$ e uma variação $\epsilon$. 

O [[Equivalente Certo]] $c(L, u) \eqqcolon c(\epsilon)$ para esta loteria $L$ satisfaz
$$
u(c(\epsilon)) = \frac{1}{2}u(x+\epsilon) + \frac{1}{2}u(x-\epsilon)
$$
A primeira derivada com relação a $\epsilon$ traz (usando $c \coloneqq c(\epsilon)$)
$$
u'(c) \, c' = \frac{1}{2} u'(x+\epsilon) - \frac{1}{2} u'(x-\epsilon)
$$
A segunda derivada traz
$$
u''(c) (c')^{2} + u'(c) c'' = \frac{1}{2} (u''(x+\epsilon) + u''(x - \epsilon)) 
$$
Tomando $\epsilon \to 0$, temos
$$
u''(c(0)) (c'(0))^{2} + u'(c(0)) c''(0) = u''(x)
$$
Note-se que $c(0) = x$, pois não há variação ao redor de $x$. Portanto,
$$
u''(x) (c'(0))^2 + u'(x) c''(0) = u''(x)
$$
Isolando $c''(0)$, temos
$$
c''(0) = \frac{u''(x)}{u'(x)} (1- (c'(0))^{2})
$$
Porém, tomando a equação da primeira derivada com $\epsilon \to 0$, tem-se
$$
c'(0) = 0
$$
Portanto,
$$
\therefore c''(0) = \frac{u''(x)}{u'(x)} = - r_{A}(x)
$$

---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.