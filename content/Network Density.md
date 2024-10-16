---
date: " 2024-07-04"
tags:
  - mathematics
aliases:
  - Network Connectance
---

up:: [[041 MOC Graph Theory]]

![[1_fDK6MfQvcliQ-u5lEmjc8Q.png]]
Image from [Sparse coding: A simple exploration | by Morgan | metaflow-ai](https://blog.metaflow.fr/sparse-coding-a-simple-exploration-152a3c900a7c).

Given a network $G$ with $N$ nodes and $m$ edges, we calculate its density (or connectance) as the fraction of all possible edges that it has. 

That is,
$$
\rho = \frac{m}{N \choose{2}}
$$

For undirected [[Simple Graph]]s, we have that
$$
\rho = \frac{2m}{N(N-1)} = \frac{\left<k\right>}{N-1}
$$
by the definition of [[Average Network Degree|Average Degree]].

# Miscellaneous
A network's density points to how "interconnected" it is. In particular, one says that a network is **sparse** if
$$
\lim\limits_{n \to \infty} \rho = 0
$$
and **dense** if it isn't sparse.

This seems to point to a Second Brain's "effectiveness": [[The best Second Brains are always dense networks]], since it's best to add new information by connecting it to previous knowledge; conversely, networks that grow with isolated (or poorly connected) nodes tend to be sparse.

---
### References
- NEWMAN, Mark. **Networks**. Oxford university press, 2018.