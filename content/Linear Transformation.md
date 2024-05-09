---
Date: 2023-07-27
Tags: mathematics
alias: 
---
up:: [[Vector Space]]

Let $(V, +, \cdot), (W, +', \cdot')$ be vector spaces over the same [[Field (Algebra)|Field]] $\mathbb{K}$. A transformation $T: V \to W$ is said to be a linear transformation if
$$
\forall u, v \in V; \forall \lambda \in \mathbb{K}: T(u + \lambda v) = T(u) + \lambda T(v)
$$

Thus, it preserves the vector space operations from $V$ to $W$.

# Properties
- If $W = V$, we say that $T: V \to V$ is an [[Endomorphism]].
- [[A linear transformation is injective iff its kernel is trivial]]
- [[A linear transformation's image of a basis spans its image]]
- [[A linear transformation is injective iff it preserves linear independence]]
- [[A linear transformation between spaces of equal dimension is injective iff it's surjective iff it's an isomorphism]]

---
### References
- [Notas sobre Álgebra Linear](https://nicholasvoltani.github.io/2021-12-27-notas-alglin/)