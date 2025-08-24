---
date: "2025-04-21"
tags:
  - economics
aliases:
  - Dispêndio
---

up:: [[062b MOC Teoria do Consumidor]]

![[Pasted image 20250421141511.png]]
Problema de minimização da função dispêndio. Fonte: MAS-COLLELL et al, p. 58.

A função dispêndio indica a [[Restrição Orçamentária|Renda]] $m$ mínima necessária para se alcançar uma dada [[Função Utilidade|Utilidade]] $\bar{u}$ (*dados preços $p$*). Ela, portanto, é função dos preços e da utilidade $\bar{u}$ desejada.

Como assumimos que a [[Demanda Marshalliana|Cesta Ótima]] $x^*$ satisfaz [[Lei de Walras]], temos que a função dispêndio $e(p,\bar{u})$ toma a forma
$$
e(p,\bar{u}) = \braket{ p | x^* }\, \text{  tal que } \, \, u(x^*) = \bar{u} 
$$

# Problema de otimização & Lagrangiano associado
Formalmente, o dispêndio vem do problema de otimização
$$
\begin{align*}
\min_{x \geq 0} \braket{ p | x } \, \text{ tal que } \, \, u(x) = \bar{u} 
\end{align*}
$$

Para o problema de otimização, o lagrangiano associado ao problema de multiplicadores de Lagrange é[^1]
$$
\mathcal{L}(x; p, \bar{u}) = \braket{ p | x } + \lambda (u(x) - \bar{u}) \equiv f(x; p, \bar{u}) + \lambda \, g(x; p, \bar{u})  
$$

Para fins de conferência: o valor do multiplicador $\lambda$ tem a forma[^4]:
$$
\frac{ \partial \mathcal{L} }{ \partial x } = 0 \implies \lambda = -\frac{\frac{ \partial f }{ \partial x }}{\frac{ \partial g }{ \partial x } } = -\frac{p}{\frac{ \partial U }{ \partial x } } 
$$

A otimização de $f(x; p, \bar{u}) = \braket{ p | x }$ com relação a $x$, mediante $u(x)=\bar{u}$, assume a forma da função dispêndio quando $x=h^*$ é a cesta ótima associada a esta otimização[^2]:
$$
\begin{align*}
e(p, \bar{u}) &= f(h^*(p, \bar{u}); p, \bar{u}) = \braket{ p | h^* } \\
&\equiv f^*(p, \bar{u})
\end{align*}
$$

A cesta $h^*(p, \bar{u})$ é dita ser a [[Demanda Hicksiana]]. 

# Relações com outros problemas de otimização do consumidor
De acordo com o [[Envelope Theorem]], temos que a derivada da função dispêndio com relação ao preço $p$[^3] pode ser obtido através da derivada do lagrangiano otimizado (avaliado na cesta ótima) com relação ao preço:
$$
\frac{ \partial e(p,\bar{u}) }{ \partial p } = \frac{ \partial \mathcal{L(x;p, \bar{u})} }{ \partial p }\Bigg|_{h^*(p, \bar{u})} = h^*(p, \bar{u}) 
$$

Ou seja, [[Lema de Shephard|A demanda hicksiana é o gradiente da função dispêndio]]. 

Ademais, trivialmente temos — dado $p$ — que, se a [[Demanda Marshalliana]] é a cesta ótima num nível de utilidade $\bar{u}$, então a renda certamente tem de ser igual à função dispêndio $e(p, \bar{u})$, a qual é o mínimo nível de renda para se alcançar $\bar{u}$, igualando-se à demanda hicksiana. Portanto, temos a identidade
$$
h^*(p, \bar{u}) = x^*(p, e(p, \bar{u}))
$$

O inverso também vale: dado $p$ e certa [[Restrição Orçamentária|restrição orçamentária (i.e. renda)]] $w$, a demanda hicksiana assumida em $p$ e no nível de utilidade da [[Função de Utilidade Indireta]] $v(p, w)$ certamente tem de ser igual à demanda walrasiana:
$$
x^*(p, w) = h(p, v(p, w))
$$
# Propriedades
**A função dispêndio é côncava**, logo, possui *segunda derivada negativa*. Isso se reflete no fato de que [[A Matriz de Slutsky é semi-definida negativa]]. 

---
### References
- MAS-COLELL, Andreu et al. **Microeconomic theory**. New York: Oxford university press, 1995.
- [Lab 2.7 Concavity of Expenditure Function (Raphaëlle Chappe)](https://www.youtube.com/watch?v=HCANzswyhis)

[^1]: $\mathcal{L}$ também é função de $\lambda$, mas não o denoto para não distrair do problema principal: trata-se da otimização (minimização) no tocante a $x$.
[^2]: $x^*$ é unívoco por assumirmos [[Preferências do Consumidor]] que sejam **estritamente convexas**, **localmente não-saciáveis**.
[^3]: Formalmente, com relação a algum preço $p_{l}$ de um bem $l$, de quantidade ótima consumida $x_{l}$.
[^4]: Escrevo com derivada parcial para relembrar que $x$ é, na verdade um vetor; portanto, o correto seria escrever $\frac{ \partial U }{ \partial x_{l} }$ para cada bem $l$.