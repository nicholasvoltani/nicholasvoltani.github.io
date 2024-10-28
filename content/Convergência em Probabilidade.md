---
date: " 2024-10-17"
tags:
  - mathematics
aliases:
  - Converge em Probabilidade
---

up:: [[064 MOC Estatística em Economia]]

![[Pasted image 20241017143130.png]]
Fonte: [Convergence In Probability | A Rambling On](https://kristianeschenburg.netlify.app/post/convergence-in-probability/)

Temos que uma sequência de variáveis aleatórias i.i.d. ${X_{i}}$ converge para um número $t$ quando,
para qualquer $\epsilon > 0$,
$$
\lim\limits_{n \to \infty} P(|X_{n} - t| \geq \epsilon) = 0
$$

![[Pasted image 20241017143454.png]]
Fonte: [19. Weak Law of Large Numbers - YouTube](https://youtu.be/3eiio3Tw7UQ?list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&t=1125)

Ou seja, conforme aumenta o tamanho da amostra $n$, temos que a **probabilidade** de que $X_{n}$ caia fora de algum intervalo $[t-\epsilon, t+\epsilon]$[^1] vai a $0$. I.e. a distribuição de probabilidade de $X_{n}$ tende a uma *delta de Dirac* centrada em $t$ no **limite** (não necessariamente para algum $n < \infty$).


---
### References
- [19. Weak Law of Large Numbers - YouTube](https://www.youtube.com/watch?v=3eiio3Tw7UQ&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=19)

[^1]: Para vetores de variáveis aleatórias (que possuam alguma [[Metric Function|métrica]]), a probabilidade de que $X_{n}$ caia fora de alguma [[Open Balls (Metric Spaces)|bola aberta]] $B_{\epsilon}(t)$, sendo $t$ um vetor.