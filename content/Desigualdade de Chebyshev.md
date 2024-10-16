---
date: " 2024-09-12"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

![[Chebyshev.png]]

A desigualdade de Chebyshev explica a relação entre variância e o *spread* de uma variável aleatória com relação à sua média. É dela que vem a noção de que a variância é a "amplitude" de uma distribuição de probabilidade.

Equivalentemente, diz que o peso das caudas de uma distribuição de probabilidade possuem um *upper-bound* baseado na variância.

Seja $X$ uma variável aleatória, e sejam 
- $\mu = \mathbb{E}[X] < \infty$ 
- $\sigma^{2} = Var(X) = \mathbb{E}[(X-\mu)^{2}] < \infty$

Então, para todo $t > 0$,
$$
P(|X-\mu| \geq t) \leq \frac{\sigma^{2}}{t^{2}}
$$

# Demonstração
Note-se que, como $t > 0$, temos que
$$
|t| = t \leq |X - \mu| \iff t^{2} \leq |X-\mu|t \leq |X-\mu|^{2}
$$

Portanto, o resultado segue trivialmente da [[Desigualdade de Markov]]:
$$
P(|X-\mu|\geq t) = P(|X-\mu|^{2}\geq t^{2}) \leq \frac{\sigma^{2}}{t^{2}}
$$

# Corolários
Tendo $t = k \sigma$, temos trivialmente que, para qualquer $k >0$,
$$
P(|X-\mu| \geq k\sigma) \leq \frac{1}{k^{2}}
$$

Ou seja, para a regra heurística usual de "$3$ sigmas", temos que a probabilidade do evento estar dentro de $3 \sigma$ é igual a $1 - \frac{1}{9} = \frac{8}{9} \approx 89\%$. Este *upper-bound* é bem relaxado quando comparado com o que certas distribuições conseguem, como a distribuição normal ($99.7\%$).


---
### References
- [Variance](http://www.randomservices.org/random/expect/Variance.html#chb)
- [19. Weak Law of Large Numbers - YouTube](https://www.youtube.com/watch?v=3eiio3Tw7UQ&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=19)