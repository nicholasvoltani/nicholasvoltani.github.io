---
date: " 2024-10-08"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

![[Pasted image 20241008093107.png]]
Fonte: [4. Counting - YouTube](https://youtu.be/6oV3pKLgW2I?list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&t=1356).

Dado um conjunto de $n$ elementos, a quantidade de subconjuntos de $k \leq n$ elementos é dada pelo binômio de Newton $n\choose k$. 

Isso é equivalente do que obter todas as sequências possíveis[^1] de $k$ elementos.

Por um lado, partindo de $n$ elementos, tem-se que a quantidade de possíveis sequências tais é
$$
n \cdot (n-1) \dots (n-(k-1)) = \frac{n!}{(n-k)!}
$$

Partindo de $k$ elementos pré-selecionados (dentre todos os $n\choose k$ conjuntos), tem-se que é simplesmente $k!$ possíveis permutações. Portanto, o total de tais permutações é ${{n}\choose{k}} k!$.

Igualando ambos, temos que
$$
{n \choose k} = \frac{n!}{(n-k)! \, k!}
$$
# Exemplos numéricos
Dado conjunto $\{1,2,3,4\}$, temos:
- Possíveis conjuntos de 2 elementos ${4 \choose 2} = 6$
	- $\{1,2/3/4\}$, $\{2, 3/4\}$, $\{3,4\}$
- Possíveis conjuntos de 3 elementos ${4 \choose 3} = 4$
	- $\{1,2,3/4\}$, $\{1,3,4\}$, $\{2,3,4\}$ 

---
### References
- [4. Counting - YouTube](https://www.youtube.com/watch?v=6oV3pKLgW2I&list=PLUl4u3cNGP61MdtwGTqZA0MreSaDybji8&index=4)

[^1]: Independente da ordem dos elementos, isso é importante.