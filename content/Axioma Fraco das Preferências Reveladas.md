---
date: "2024-10-02"
tags:
  - economics
aliases:
  - AFPR
  - Weak Axiom of Revealed Preferences
  - WARP
---

up:: [[062b MOC Teoria do Consumidor]]

> "Se é observado que você *escolheu* $x$, rejeitando $y$, [então] você declarou ter 'revelado' uma *preferência* de $x$ sobre $y$" (SEN, p. 322; grifo meu)

O axioma fraco das preferências reveladas diz que, caso prefira-se $A \succeq B$[^1], então sempre que $A$ for *affordable*, e tanto $A$ quanto $B$ sejam opções de escolha, então eu escolherei $A$.  

O AFPR também indica como espera-se que uma [[Demanda Marshalliana|escolha ótima]] mude após a alteração de preços dos bens de sua [[Cesta de Bens]]. A ideia é de que *a mudança de preços e/ou [[Restrição Orçamentária|renda]] induza a escolha de uma cesta ótima fora do alcance prévio*[^2]. A intuição é de que, após uma mudança de condições de compra, a nova cesta ótima escolhida deva estar fora do conjunto orçamentário prévio – pois, se estivesse ao alcance anteriormente, ele poderia tê-la escolhido[^3]. 

**Se ambos são escolhas ótimas dentro do mesmo conjunto orçamentário, não faz sentido que eu escolha uma em detrimento da outra!**

# Matematicamente

Sejam $(x,p,w)$ e $(x', p', w')$ cestas ótimas em respectivos conjuntos orçamentários $B(p,w)$ e $B(p',w')$.[^4]

Então, se temos que 
$$
x' \in B(p,w) \iff \braket{ p | x' }  \leq w
$$
(ou seja, $x'$ está no conjunto orçamentário $B(p,w)$), e que $x \neq x'$[^5], então temos que
$$
x \notin B(p', w') \iff \braket{ p' | x } \nleq w' \iff \braket{ p' | x } > w'
$$

Ou seja, se uma cesta $x'$ já estava no conjunto orçamentário prévio $B(p,w)$, **e é uma escolha ótima nesta cesta**, então (sob AFPR) **não** pode ser o caso de que ela estava no conjunto orçamentário prévio.
# Exemplo gráfico
![[Pasted image 20250418182123.png|500]]
Fonte: [areweb.berkeley.edu/\~fally/Courses/ARE202Lecture3.pdf](https://areweb.berkeley.edu/~fally/Courses/ARE202Lecture3.pdf)

No caso à esquerda, temos que $x \equiv x(p,w)$ é cesta ótima do conjunto orçamentário original $B(p,w)$, e temos que $x' \equiv x(p',w')$ — ou seja, a cesta ótima do novo conjunto orçamentário $B(p',w')$ — já estava disponível em $B(p,w)$ originalmente. Satisfaz-se AFPR, pois tem-se que $x \succeq x'$, e, quando $x$ não está mais ao alcance da escolha, há agora possibilidade de se escolher $x'$.

No caso à direita, não satisfaz-se AFPR, pois ambos $x$ e $x'$ estão ao alcance da escolha em ambos os conjuntos orçamentários; portanto, não faz sentido que um seja preferível ao outro, posto que estão "ao alcance da mão" em ambos os casos. Ou seja, houve uma violação de [[Independência de Alternativas Irrelevantes]]: mudaram-se condições desrelacionadas à preferência $\succeq$, no tocante a $x$ e $x'$, mas mesmo assim houve uma mudança de preferência de um para o outro.

## Exemplo numérico
![[Pasted image 20241002092609.png]]
Fonte: [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - IMPA (38:43)](https://youtu.be/VCwsOAyFO_0?list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&t=2323)

Para os casos $1$ e $3$, temos que

|          | $p_{1}$ | $p_{2}$ | $x_{1}$ | $x_{2}$ | $m$<br>(cesta ótima) | $m$ <br>(outra cesta) |
| -------- | ------- | ------- | ------- | ------- | -------------------- | --------------------- |
| (Caso 1) | 2       | 2       | 10      | 1       | 22                   | 18                    |
| (Caso 3) | 1       | 2       | 5       | 4       | 13                   | 12                    |

Ou seja, na situação (3), temos que a cesta foi $(5,4)$ com gasto total $13$ – mas ele poderia ter comprado a mesma cesta que em $(1)$ – i.e. $(10,1)$ (e ainda gastando menos)! 
Portanto, essa escolha **não** satisfaz o axioma fraco de preferências reveladas: não faz sentido que eu escolha (otimamente) uma delas em um caso, e a outra em outro caso, posto que ambas estavam ao meu alcance desde o começo (em ambos os casos 1 e 3).


---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - IMPA](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=5)
- [7 Minutes to Master WARP, the Weak Axiom of Revealed Preference - YouTube](https://www.youtube.com/watch?v=tIeclH3U-jA)
- SEN, Amartya K. Rational fools: A critique of the behavioral foundations of economic theory. **Philosophy & public affairs**, p. 317-344, 1977.


[^1]: Notar que, na economia neoclássica, confunde-se a noção de "alternativa favorita" com "alternativa escolhida". Cf. SEN, 1977.
[^2]: Assumindo uma situação "pior" para uma "melhor". Caso haja o contrário, i.e. aumento de todos os preços e "piora" das condições de compra, podemos ver seu simétrico: ele *estava* melhor antes.
[^3]: E se ele fosse [[Curva de Indiferença|indiferente]] entre ambas, não faz muito sentido que uma mudança de preços faça com que elas deixem de ser indiferentes.
[^4]: Ou seja, $x$ e $x'$ estão **sobre** a [[Restrição Orçamentária|Reta Orçamentária]], cf. [[Lei de Walras]].
[^5]: Assumindo que a escolha ótima é única para dado conjunto orçamentário.
[^6]: No que diz respeito ao AFPR.
[^7]: $B(p, w)$ refere-se ao *budget* de preço $p$ e renda $w$; $B$ sozinho refere-se à escolha $B$ na figura.