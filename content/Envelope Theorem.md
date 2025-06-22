---
date: " 2025-04-19"
tags:
  - economics
  - mathematics
aliases:
---

up:: [[062 MOC Microeconomia]]

Seja uma função $f(x,\alpha)$ que deve ser otimizada[^1] com relação a $x$, sob restrição $g(x, \alpha) = 0$, ambas as funções suficientemente diferenciáveis, e $x > 0$[^2].

Então devemos otimizar o lagrangiano
$$
\mathcal{L}(x, \alpha) = f(x,\alpha) + \lambda g(x,\alpha)
$$
através das derivadas
$$
\begin{cases*}
\frac{\partial \mathcal{L}}{\partial x} = \frac{\partial f}{\partial x}|_{x^*} + \lambda \frac{\partial g}{\partial x}|_{x^*}  &= 0 \\
\frac{\partial \mathcal{L}}{\partial \lambda} = g(x^*, \alpha) &= 0
\end{cases*}
$$

Seja $x^* = x^*(\alpha)$ o valor que otimiza $\mathcal{L}$ (portanto, $f$ sob restrição $g$). Portanto, temos que o lagrangiano otimizado[^3] é
$$
\begin{align*}
\mathcal{L}^*(\alpha) &\equiv \mathcal{L}(x^*(\alpha), \alpha) = f(x^*(\alpha), \alpha) + \lambda g(x^*(\alpha), \alpha) \\
&= f(x^*(\alpha), \alpha) \equiv f^*(\alpha)
\end{align*}
$$

Logo, temos que a variação da função $f$ **otimizada** com relação à variável $\alpha$ se dá através do lagrangiano otimizado[^4].

Podemos analisar as derivadas de $\mathcal{L}$ com relação a $\alpha$, para depois avaliarmos em seu ponto ótimo $x^*(\alpha)$. Como $\mathcal{L}$ foi maximizada com relação a $x$ e $\lambda$, não há problema nessa comutação, ou seja,
$$
\frac{d \mathcal{L}^*}{d\alpha} = \frac{ \partial \mathcal{L}(x=x^*(\alpha), \alpha) }{ \partial \alpha } =  \frac{ \partial \mathcal{L(x, \alpha)} }{ \partial \alpha }\Bigg|_{x^*(\alpha)} 
$$

Expandindo $\frac{ \partial \mathcal{L} }{ \partial \alpha }$, temos
$$
\begin{align*}
\frac{df^*}{d\alpha} = 
\frac{ \partial \mathcal{L} }{ \partial \alpha }\Bigg|_{x^*(\alpha)} &= 
\left[ \frac{ \partial f }{ \partial x } \frac{ \partial x }{ \partial \alpha } \right]_{x^*} + 
\left[ \frac{ \partial f }{ \partial \alpha } \right]_{x^*}  + 
\left[ \frac{ \partial \lambda }{ \partial \alpha } g \right]_{x^*} + 
\lambda \left[ \frac{ \partial g }{ \partial x } \frac{ \partial x }{ \partial \alpha } + 
\frac{ \partial g }{ \partial \alpha } \right]_{x^*} \\
&= \frac{ \partial x }{ \partial \alpha } \cancelto{ 0 }{ \left[ \frac{ \partial f }{ \partial x } + 
\lambda \frac{ \partial g }{ \partial x }  \right]_{x^*} } + 
\cancelto{ 0 }{ \left[ \frac{ \partial \lambda }{ \partial \alpha } g \right]_{x^*} } +
\left[ \frac{ \partial f }{ \partial \alpha } + \lambda \frac{ \partial g }{ \partial \alpha } \right]_{x^*}
\end{align*}
$$

Portanto, temos que
$$
\frac{df^*(\alpha)}{d\alpha} = \frac{ \partial f(x^*(\alpha), \alpha) }{ \partial \alpha } = \left[ \frac{ \partial f }{ \partial \alpha } + \lambda \frac{ \partial g }{ \partial \alpha } \right]_{x^*}  
$$

# Corolários
Corolários muito importantes para a Microeconomia são a [[Identidade de Roy]] e o [[Lema de Shephard]] ([[062b MOC Teoria do Consumidor]]), assim como o [[Lema de Hotelling]] ([[062b MOC Teoria da Firma]]). 

---
### References
- [24a. Proving The Envelope Theorem - YouTube](https://www.youtube.com/watch?v=87YkZWH66xk)
- [Envelope theorem - Wikipedia](https://en.wikipedia.org/wiki/Envelope_theorem)

[^1]: Minimizada ou maximizada (intercambiáveis por sinais negativos).
[^2]: Evita questões de Kuhn-Tucker etc.
[^3]: Também chamado de função valor [*value function*].
[^4]: $\mathcal{L}$ este que, no fim das contas, dita como $f^*(\alpha)$ vem a ser, a partir de $f$ e $g$.