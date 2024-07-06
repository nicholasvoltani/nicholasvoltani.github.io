---
date: " 2024-07-04"
tags:
  - mathematics
aliases:
  - Average Degree
---

up:: [[Node Degree]]

Given a network $G$ with $N$ nodes and $m$ edges, its average degree is simply
$$
\left<k\right> = \frac{\sum\limits_{i=1}^{N}k_{i}}{N} = \frac{\sum\limits_{{i}} \sum\limits_{j} A_{ij}}{N}
$$

using the [[Adjacency Matrix]].

---

For undirected [[Simple Graph]]s, we always have that
$$
\left<k\right>_{undirected} = \frac{2m}{N}
$$
since all edges have **two** ends. In other words, we are counting all edges $\{i-j\}$ twice: $\{i\to j\}$ and $\{j\to i\}$.

---
For directed [[Simple Graph]]s, we always have that
$$
\left<k\right>_{directed} = \frac{m}{N}
$$
in which we don't have the "ambiguity" that undirected networks have.

Note, also, that this value is unambiguous even for directed graphs, since
$$
\begin{align*}
\left<k\right>_{directed} &= \frac{\sum\limits_{{i}} \sum\limits_{j} A_{ij}}{N}\\
&= \frac{\left<k\right>_{in}}{N}\\
&= \frac{\left<k\right>_{out}}{N}\\
\end{align*}
$$
Thus, the average degree of a directed network is unambiguous, since it is the average [[In Degree]] and also the average [[Out Degree]], by changing the order of the sums[^1].

---
### References
- NEWMAN, Mark. **Networks**. Oxford University Press, 2018.

[^1]: With no problem, since we are summing over **finite** graphs.