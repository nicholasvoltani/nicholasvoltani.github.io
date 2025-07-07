---
date: " 2024-10-29"
tags:
  - mathematics
aliases:
  - Best Response
---

up:: [[062f MOC Teoria dos Jogos]]

Dado um jogador $i$ e uma estratégia $s_{-i}$ escolhida pelos demais jogadores, uma escolha $\hat{s}_{i} \in S_{i}$ é dita ser sua *melhor escolha* se
$$
\forall s_{i} \in S_{-i}: u_{i}(\hat{s}_{i}, s_{-i}) \geq u_{i}(s_{i},s_{-i})
$$

Ou seja, caso o jogo chegue a que as demais estratégias sejam $u_{-i}$ em específico, então a melhor reação do jogador $i$ é de jogar com estratégia $\hat{s}_{i}$, pois é o que mais utilidade lhe trará.

# Melhor resposta sob estratégias mistas
Caso o jogo permita estratégias mistas, então uma estratégia em $\Delta S_{i}$[^1] é dita ser a melhor resposta se 
$$
\forall s_{i} \in \Delta S_{i} : \mathbb{E}[u_{i}(\hat{s}_{i},s_{-i})] \geq \mathbb{E}[u_{i}(s_{i},s_{-i})]
$$

# Relação com [[Equilíbrio de Nash]]
[[Um equilíbrio de Nash é a interseção de todas as melhores respostas]].

---
### References
- [4. Best responses in soccer and business partnerships - YouTube](https://www.youtube.com/watch?v=YYUPc-cfPyc&list=PLDv_VQy7kufe5YMXjf6LkacYBrSjlXQB8&index=4)

[^1]: $\Delta S_{i}$ é o simplexo sobre o conjunto $S_{i}$: é o conjunto das combinações convexas das estratégias puras, com coeficientes somando a $1$. Caso haja $3$ estratégias puras, $\Delta S_i$ é o plano que intersecta $\hat{e}_{i} \in \mathbb{R}^{3}$. 