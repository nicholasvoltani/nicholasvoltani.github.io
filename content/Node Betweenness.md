---
date: " 2024-05-27"
tags:
  - mathematics
aliases:
---

up:: [[041 MOC Graph Theory]]

![[Pasted image 20240704192945.png|400]]

Example of node with high betweenness but low degree.

> "A point is considered to be central here to the degree that it falls between other points on their shortest or geodesic communication paths. A point falling between two others can facilitate, block, distort or falsify communication between the two; **it can more or less completely control their communication**. But if it falls on some but not all of the geodesics connecting a pair of points, its potential for control is more limited." (Freeman, 1977; my emphasis)

The betweeness of a node $i$ (in a [[Simple Graph]] $G$) is a measure of, given [[Shortest Path Distance]]s between all nodes $j \neq k$, how "likely" it is to have to pass through $i$. It is a measure of $i$'s **centrality**.

It's given by
$$
b_{i} = \frac{2}{(N-1)(N-2)}\sum\limits_{j \neq k} \frac{\# Geodesics(j \to i \to k)}{\#Geodesics(j\to k)}
$$

This normalization factor $\frac{(N-1)(N-2)}{2}$ is the amount of possible shortest paths from $j$ to $k$ through $i$.[^1]

The maximal case in which $i$ is central is a [graph component which is a] [[Star Graph]] where $i$ is the central node.

---
### References
- FREEMAN, L. C. A Set of Measures of Centrality Based on Betweenness. **Sociometry**, v. 40, n. 1, p. 35–41, 1977.
- NEWMAN, Mark. **Networks**. Oxford University Press, 2018.

[^1]: Taking into account only nodes which are reachable in the network, and disconsidering those that are in separate components.