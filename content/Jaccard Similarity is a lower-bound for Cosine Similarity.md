---
date: " 2024-07-05"
tags:
  - mathematics
aliases:
---

up:: [[Jaccard Similarity]], [[Salton's Cosine|Cosine Similarity]]

Given an undirected [[Simple Graph]] with [[Adjacency Matrix]] $A$ and nodes $i, j$, then their Jaccard similarity is
$$
J_{ij} = \frac{(A^{2})_{ij}}{deg(i)+deg(j)-(A^{2})_{ij}}
$$

Their cosine similarity is 
$$
\cos \theta_{ij} = \frac{(A^{2})_{ij}}{\sqrt{deg(i)} \, \sqrt{deg(j)}}
$$

Multiplying and dividing $J_{ij}$ by $\sqrt{ deg(i)} \sqrt{ deg(j)}$[^1], we have
$$
\begin{align*}
J_{ij} &= \frac{(A^{2})_{ij}}{\sqrt{ deg(i)} \sqrt{ deg(j)}} \frac{\sqrt{ deg(i)} \sqrt{ deg(j)}}{deg(i)+deg(j)-(A^{2})_{ij}} \\
&= \cos \theta_{ij} \frac{1}{\sqrt{ \frac{deg(i)}{deg(j)} } + \sqrt{ \frac{deg(j)}{deg(i)} } - \cos \theta_{ij}} \\
&\leq \cos \theta_{ij} \frac{1}{\sqrt{ \frac{deg(i)}{deg(j)} } + \sqrt{ \frac{deg(j)}{deg(i)} }}
\end{align*}
$$
since 
$$
\begin{align*}
\cos \theta_{ij} \leq 1 \implies -\cos \theta_{ij} \geq 1 \\
\therefore \forall \alpha \geq 0: \alpha - \cos \theta_{ij} &\geq 1- \alpha \\
&\geq 1
\end{align*}
$$ 
with $\alpha = \sqrt{ \frac{deg(i)}{deg(j)} }+ \sqrt{ \frac{deg(j)}{deg(i)} }$.

We need to consider two cases:
1) $deg(i) = deg(j) \implies \alpha=2$, in which case we simply have
$$
\begin{align*}
J_{ij} \leq \frac{\cos \theta_{ij}}{2} < \cos \theta_{ij}
\end{align*}
$$
2) $deg(i) > deg(j)$ without loss of generality, for which we have
$$
\sqrt{ \frac{deg(i)}{deg(j)} }> 1
$$
Since 
$$
\sqrt{ \frac{deg(j)}{deg(i)} } \geq 0
$$
we have that $\alpha > 1$ as defined above.

Thus, we conclude that
$$
J_{ij} < \cos \theta_{ij}
$$
That is, the Jaccard similarity of two nodes is more *stringent* than their cosine similarity.

[^1]: Assuming both have degree greater than $0$.