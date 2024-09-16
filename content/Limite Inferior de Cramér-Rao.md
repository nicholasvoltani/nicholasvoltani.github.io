---
date: " 2024-09-11"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

Dadas amostras $\{X_{i}\}$ i.i.d. obtida de uma distribuição de probabilidade $f(x;\theta)$ que satisfaça algumas propriedades bem gerais[^1], $\theta \in I \subset \mathbb{R}$, então uma dada estatística 
$$
Y = \mu(\{X_{i}\})
$$
com média sendo uma função de $\theta$
$$
\mathbb{E}[Y] = k(\theta)
$$
então temos que a variância dessa estatística $Y$ possui *lower bound*
$$
Var(Y) \geq \frac{k'(\theta)^{2}}{n I(\theta)}
$$
onde $I(\theta)$ é a [[Informação de Fisher]].

# Demonstração
$Y$ é função das variáveis aleatórias $\{X_{i}\}$, portanto temos que sua média é
$$
k(\theta) = \int_{\mathbb{R}^{n}} \mu(\{X_{i}\}) \prod\limits_{i=1}^{n} f(x_{i};\theta) dx_{i}
$$

Derivando com relação a $\theta$, temos, pela regra do produto[^2],
$$
k'(\theta) = \int_{\mathbb{R}^{n}} \mu(\{X_{i}\}) \underbrace{ \left( \sum\limits_{i=1}^{n} \frac{ \partial f(x_{i};\theta) }{ \partial \theta } \frac{1}{f(x_{i};\theta)} \right) }_{ \equiv Z } \prod\limits_{i=1}^{n} f(x_{i};\theta) dx_{i}
$$

Note-se que o termo em parênteses é a soma das [[Log-Verossimilhança]]s; conforme demonstrado [[Informação de Fisher#Derivação de informação de Fisher|algures]], temos que o valor esperado de $Z$ será $0$, e que a *variância* será igual a $n I(\theta)$ ([[Informação de Fisher]]). 

Portanto, temos[^3]
$$
\begin{align}
k'(\theta) &= \mathbb{E}[YZ] = \mathbb{E}[Y]\mathbb{E}[Z] + \rho(Y,Z) \sigma_{Y} \sigma_{Z} \\
&= \rho \sigma_{Y} \sigma_{Z}
\end{align}
$$

Isolando $\sigma_{Y} = Var(Y)$ e sabendo que $\rho^{2} \geq 1$, temos que
$$
Var(Y) \geq \frac{(k'(\theta))^{2}}{n I(\theta)}
$$
onde este valor à direita é o *limite inferior de Cramér-Rao*.

# Relação com estimadores eficientes
Podemos, portanto, definir um [[Estimador Eficiente]]: ele é um [[Estimador Não-Enviesado]] cuja variância é exatamente o limite inferior de Cramér-Rao (e não mais).

Para um estimador não-enviesado, em particular, temos que
$$
\mathbb{E}[\hat{\theta}] = \theta = k(\theta)
$$

Portanto, temos
$$
Var(\hat{\theta}) \geq \frac{1}{n I(\theta)}
$$

---
### References
- [O Teorema de Rao-Cramér para Estimadores de Máxima Verossimilhança, Mariella Ananias Bogoni (2019)](https://app.uff.br/riuff/bitstream/handle/1/22768/TCC_Mariella.pdf?sequence=1&isAllowed=y)

[^1]: 1) Injetividade no tocante ao parâmetro $\theta$: $f(x;\theta) \neq f(x; \theta')$ para $\theta \neq \theta'$; 
2) $f(x;\theta)$ possui mesmo conjunto de suporte para todos $\theta$;
3) O valor verdadeiro do parâmetro $\theta$ (chame-o de $\theta_{0}$) é ponto interior do intervalo em que $\theta \in I \subset \mathbb{R}$; 
   4) A função probabilidade $f(x;\theta)$ é duas vezes diferenciável sobre $\theta$;
   5) A integral $\int f(x;\theta)d\theta$ pode ser duas vezes diferenciável sobre $\theta$ sob sinal da integral.
[^2]: $\frac{ \partial (f g) }{ \partial x } =  \frac{ \partial f }{ \partial x }g + f \frac{ \partial g }{ \partial x } = (\frac{ \partial f }{ \partial x } \frac{1}{f} + \frac{ \partial g }{ \partial x } \frac{1}{g}) fg$.
[^3]: Cf [Stack Exchange](https://math.stackexchange.com/questions/3555291/covariance-and-expected-value-of-product-of-random-variables-definitions-going-i).