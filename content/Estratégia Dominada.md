---
date: " 2024-10-29"
tags:
  - mathematics
aliases:
  - Estratégia Dominante
  - Estratégia Fracamente Dominada
  - Estratégia Fracamente Dominante
---

up:: [[062e MOC Teoria dos Jogos]]

Dado um jogador $i$ com utilidade $u_{i}: S \to \mathbb{R}$ e com estratégias $S_{i}$, temos que uma estratégia $s_{i}$ é *estritamente dominada* se houver alguma outra estratégia $s_{i}'$ que seja melhor que ela, independente da reação dos demais jogadores.

Formalmente:
$$
\exists s_{i}' \in S_{i}: \forall s_{-i} \in S_{-i}: u_{i}(s_{i}', s_{-i}) > u_{i}(s_{i},s_{-i}) 
$$
A estratégia $s_{i}'$ é dita ser uma estratégia estritamente dominante.

A estratégia é dita *fracamente* dominada (dominante) se a desigualdade não for estrita.

Em outros termos, dada a estratégia $s_{-i}$ dos demais jogadores, a [[Melhor Resposta]] é $s_{i}'$.

---
### References
- [(17/02/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 16 - YouTube](https://www.youtube.com/watch?v=Y-zCkufFXAw&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=16)
