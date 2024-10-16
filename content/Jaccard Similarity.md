---
date: " 2024-07-05"
tags:
  - mathematics
aliases:
  - Intersection over Union
---

up:: [[041 MOC Graph Theory]]

![[Intersection_over_Union_-_visual_equation.png]]
Intersection over Union, visually. Source: [Wikipedia](https://en.wikipedia.org/wiki/Jaccard_index#/media/File:Intersection_over_Union_-_visual_equation.png).

Given a [[Simple Graph]] with [[Adjacency Matrix]] $A$ and nodes $i,j$, then their Jaccard similarity is the fraction of common neighbors out of the union of all of their neighbors.

One can calculate the Jaccard similarity between $i$ and $j$ as
$$
J_{ij} = \frac{n_{ij}}{deg(i)+deg(j)-n_{ij}}
$$
where $n_{ij} = (A^{2})_{ij}$ is the amount of common neighbors of $i$ and $j$, i.e. the amount of nodes through which $i$ can go to $j$ and vice-versa[^1], or the number of 2-paths from $i$ to $j$.

Note that this formula could be rewritten as
$$
\begin{align*}
J_{ij} &= \frac{\#\left( I \cap J \right)}{\#(I \cup J)}\\
&= \frac{\#\left( I \cap J \right)}{\#I + \#J - \#(I \cap J)}
\end{align*}
$$
I.e. it is the fraction of common neighbors (intersection) out of all of both's neighbors (union). This measure is also used in Computer Vision, under the guise of "Intersection over Union".

![[Intersection_over_Union_-_object_detection_bounding_boxes.jpg]]

---
Note that, when compared with [[Salton's Cosine|Cosine Similarity]], it can be proven that [[Jaccard Similarity is a lower-bound for Cosine Similarity]]: $J_{ij} < \cos \theta_{ij}$ for any (non-disjoint) nodes $i, j$. That is, cosine similarity is a more "loose" measure of similarity than Jaccard similarity.

---
### References
- NEWMAN, Mark. **Networks**. Oxford University Press, 2018.
- [Jaccard index - Wikipedia](https://en.wikipedia.org/wiki/Jaccard_index)

[^1]: Note this makes sense only for **undirected** networks.