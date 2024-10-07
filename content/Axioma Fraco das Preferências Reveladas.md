---
date: " 2024-10-02"
tags:
  - economics
aliases:
  - AFPR
  - Weak Axiom of Revealed Preferences
  - WARP
---

up:: [[062a MOC Teoria do Consumidor]]

![[images.png|500]]
Fonte: [areweb.berkeley.edu/\~fally/Courses/ARE202Lecture3.pdf](https://areweb.berkeley.edu/~fally/Courses/ARE202Lecture3.pdf)

O axioma fraco das preferências reveladas indica como espera-se que uma [[Demanda Marshalliana|escolha ótima]] mude após a alteração de preços dos bens de sua [[Cesta de Bens]]. A ideia é de que *a mudança de preços e/ou [[Restrição Orçamentária|renda]] induza a escolha de uma cesta ótima fora do alcance prévio*[^1].

A intuição é de que, após uma mudança de condições de compra, a nova cesta ótima escolhida deva estar fora do conjunto orçamentário prévio – pois, se estivesse ao alcance anteriormente, ele poderia tê-la escolhido[^2]. 

**Se ambos são escolhas ótimas dentro do mesmo conjunto orçamentário, não faz sentido que eu escolha uma em detrimento da outra!**

# Matematicamente
Sejam $(x,p,w)$ e $(x', p', w')$ cestas ótimas em respectivos conjuntos orçamentários $B(p,w)$ e $B(p',w')$.

Então, se temos que 
$$
\braket{ p | x' }  \leq w
$$
(ou seja, $x'$ está no conjunto orçamentário $B(p,w)$) e $x \neq x'$[^3], então temos que
$$
\braket{ p' | x } \nleq w'
$$
Ou seja, se uma nova cesta $x'$ estava no conjunto orçamentário prévio $B(p,w)$, **e é uma escolha ótima**, então (sob AFPR) não pode ser o caso de que ele estava no conjunto orçamentário prévio.

## Exemplo numérico
![[Pasted image 20241002092609.png]]
Fonte: [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - IMPA (38:43)](https://youtu.be/VCwsOAyFO_0?list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&t=2323)

Para os casos $1$ e $3$, temos que

|     | $p_{1}$ | $p_{2}$ | $x_{1}$ | $x_{2}$ | $m$<br>(cesta ótima) | $m$ <br>(outra cesta) |
| --- | ------- | ------- | ------- | ------- | -------------------- | --------------------- |
| (1) | 2       | 2       | 10      | 1       | 22                   | 18                    |
| (3) | 1       | 2       | 5       | 4       | 13                   | 12                    |

Ou seja, na situação (3), temos que a cesta foi $(5,4)$ com gasto total $13$ – mas ele poderia ter comprado a mesma cesta que em $(1)$ – i.e. $(10,1)$ (e ainda gastando menos)! 
Portanto, essa escolha não satisfaz o axioma fraco de preferências reveladas: não faz sentido que eu escolha (otimamente) uma delas em um caso, e a outra em outro caso, posto que ambas estavam ao meu alcance desde o começo.


---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - IMPA](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=5)
- [7 Minutes to Master WARP, the Weak Axiom of Revealed Preference - YouTube](https://www.youtube.com/watch?v=tIeclH3U-jA)

[^1]: Assumindo uma situação "pior" para uma "melhor". Caso haja o contrário, i.e. aumento de todos os preços e "piora" das condições de compra, podemos ver seu simétrico: ele *estava* melhor antes.
[^2]: E se ele fosse [[Curva de Indiferença|indiferente]] entre ambas, não faz muito sentido que uma mudança de preços faça com que elas deixem de ser indiferentes.
[^3]: Assumindo que a escolha ótima é única para dado conjunto orçamentário...?