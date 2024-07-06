---
date: " 2024-07-05"
tags:
  - mathematics
aliases:
  - Cosine Similarity
---

up:: [[040 MOC Complex Systems]]

Given an [[Adjacency Matrix]] $A$ for a [[Simple Graph]], one can calculate the similarity between nodes $i, j$ by comparing the neighbors of each, through their rows[^1] in the adjacency matrix, $A_{i}, A_{j}$ respectively.

Thus, each node has a corresponding vector $A_{i\to*} \equiv A_{i}$, and their cosine similarity is
$$
\cos \theta_{ij} = \frac{\left<A_{i}\mid A_{j}\right>}{||A_{i}||\, ||A_{j}||} 
$$

In terms of powers of the adjacency matrix, and noting that $||A_{i}|| = \sqrt{deg(i)}$ is $i$'s [[Node Degree]][^2], one can re-write this as
$$
\cos \theta_{ij} = \frac{(A^{2})_{ij}}{\sqrt{deg(i)} \, \sqrt{deg(j)}}
$$
since $A^2$ measures the number of 2-paths between nodes. We also define $\cos \theta_{ij} = 0$ if $i$ and $j$ are in disjoint components[^3].

An alternative way to measure similarity between nodes is the [[Jaccard Similarity]], which is the fraction of common neighbors over all *distinct* shared neighbors.

---
### References
- NEWMAN, Mark. **Networks**. Oxford University Press, 2018.

[^1]: Using the convention that $A_{ij} \equiv A_{i \to j}$ corresponds to an edge going **from** $i$ **towards** $j$.
[^2]: Note that this makes sense for undirected networks and not necessarily for **directed** networks, since $||A_i||^2 = \left<A_i|A_i\right> = \sum_k A_{ik} A_{ki} = (A^2)_{ii}$. That is, $||A_i||$ is (the square root of) the number of 2-loops of node $i$, which coincide with $i$'s degree for undirected networks (for directed networks, this needs not apply).
[^3]: A rationalization of this would be that, since nodes with $0$ similarity can't reach each other, they might as well be entirely disconnected from the entire network, as far as "being connected to each other" goes!