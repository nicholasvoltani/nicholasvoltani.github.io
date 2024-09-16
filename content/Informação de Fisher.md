---
date: " 2024-09-11"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

Dada uma distribuição de probabilidade $f(x;\theta)$ que satisfaça algumas propriedades bem gerais[^1], temos que a informação de Fisher é dada por
$$
I(\theta) = \mathbb{E}[(\partial_{\theta}\log f)^{2}] = - \mathbb{E}[\partial_{\theta\theta}\log f]
$$

Ela é a variância da derivada em $\theta$ da [[Log-Verossimilhança]] (ufa!), e é uma quantidade crucial para o [[Limite Inferior de Cramér-Rao]], para definir um [[Estimador Eficiente]].

# Derivação de informação de Fisher
Derivando a condição de normalização da função de probabilidade, com relação a $\theta$, obtemos

$$
\begin{align}
1 &= \int f(x;\theta)dx \\
\implies 0 &= \int \frac{ \partial f(x;\theta) }{ \partial \theta } \frac{f(x;\theta)}{f(x;\theta) }dx \\
&= \int \frac{ \partial \log f(x;\theta) }{ \partial \theta } f(x;\theta) dx \\
&= \mathbb{E}\left[ \frac{ \partial \log f(x;\theta) }{ \partial \theta } \right]
\end{align}
$$

Aqui aparece a [[Log-Verossimilhança]], e inferimos que o valor esperado de sua derivada com relação ao parâmetro $\theta$ é $0$. Denote-se ela por 
$$
\mathcal{L} \equiv \mathcal{L}(x;\theta) \equiv \log f(x;\theta)
$$

Note-se que a variância de $\partial_{\theta}\mathcal{L}$ será
$$
Var(\partial_{\theta}\mathcal{L}) = \mathbb{E}[(\partial_{\theta}\mathcal{L})^{2}]
$$
pois sua média é $0$. 

Derivando novamente com relação a $\theta$, temos
$$
\begin{align}
0 &= \int \left( \frac{ \partial^{2} \mathcal{L} }{ \partial \theta^{2} } f(x;\theta) + \frac{ \partial \mathcal{L} }{ \partial \theta } \frac{ \partial f }{ \partial \theta } \frac{f(x;\theta)}{f(x;\theta)} \right) dx \\
&= \int \left( \frac{ \partial^{2} \mathcal{L} }{ \partial \theta^{2} } + \left( \frac{ \partial \mathcal{L} }{ \partial \theta } \right)^{2}  \right) f(x;\theta) dx
\end{align}
$$

Portanto, temos a definição da informação de Fisher:
$$
I(\theta) = \mathbb{E}\left[ \frac{ \partial^{2} \mathcal{L} }{ \partial \theta^{2} }  \right] = - \mathbb{E} \left[ \left(\frac{ \partial \mathcal{L} }{ \partial \theta } \right)^{2}\right] = Var\left( \frac{ \partial \mathcal{L} }{ \partial \theta }  \right)
$$

---
### References
- [O Teorema de Rao-Cramér para Estimadores de Máxima Verossimilhança, Mariella Ananias Bogoni (2019)](https://app.uff.br/riuff/bitstream/handle/1/22768/TCC_Mariella.pdf?sequence=1&isAllowed=y)

[^1]: 1) Injetividade no tocante ao parâmetro $\theta$: $f(x;\theta) \neq f(x; \theta')$ para $\theta \neq \theta'$; 
2) $f(x;\theta)$ possui mesmo conjunto de suporte para todos $\theta$;
   3) A função probabilidade $f(x;\theta)$ é duas vezes diferenciável sobre $\theta$;
   4) A integral $\int f(x;\theta)d\theta$ pode ser duas vezes diferenciável sobre $\theta$ sob sinal da integral.