---
date: " 2024-07-05"
tags:
  - mathematics
aliases:
  - Geodesic Path
---

up:: [[040 MOC Complex Systems]]

Given a graph with [[Adjacency Matrix]] $A$, to find the shortest path from nodes $i$ to $j$, one can investigate the components of different powers of $A$:
- $A_{ij}$ finds $1$-paths between them (i.e. direct paths)
- $(A^{2})_{ij}$ finds $2$-paths between them, etc

The shortest path between nodes $i$ and $j$ will be an $r$-path, where
$$
r = \min\limits_{n \in \mathbb{N}} \{(A^{n})_{ij} > 0\} 
$$
That is, $r$ is the shortest a path has to be to allow for $i$ to reach $j$. 

Denoting the shortest path between $i$ and $j$ by $l_{ij}$, one can also calculate their [[Node Closeness]] through the inverse $\frac{1}{l_{ij}}$, with the caveat that disconnected nodes have $l_{ij} \to \infty$.

# Finding the existence of shortest paths
Finding the existence of shortest distance paths through finding the minimal $r$ as above is a [[Breadth-First Search]], since it's essentially calculating
$$
(A^{n})_{ij} = \sum\limits_{k} (A^{n-1})_{ik} A_{kj}
$$
for all $n >1$, until it is greater than $0$ (if $A_{ij} > 0$, then no search is done, just get the edge $i \to j$). Note it doesn't necessarily spit out the shortest paths themselves, it just says "is $(A^n)_{ij} > 0$?".

Since we're talking about finite graphs, this routine is guaranteed to terminate at, at most, $N$ steps, where $N$ is the total number of nodes in the entire graph; if it doesn't terminate by then, then both nodes are disconnected, i.e. couldn't be reached in any more iterations. Thus, it makes sense to say that $l_{ij} \to \infty$, since, no matter *how many steps* one takes, starting from $i$, one cannot reach $j$.

Of course the most famous algorithm for finding shortest distances is [[Dijkstra's Algorithm]]. 

---
### References
- NEWMAN, Mark. **Networks**. Oxford University Press, 2018.