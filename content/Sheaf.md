---
date: "2026-06-28"
tags:
  - mathematics
aliases:
---

up:: [[027 MOC Category Theory]]

A [[Presheaf]] of sets $F$ over a [[Topological Space]] $X$ is said to be a *sheaf* if it also satisfies the following axioms: For any given open set $U \in Open(X)$ and any open cover $\{ U_{i} \}_{i \in \mathcal{I}}$ of $U$, it follows that:
1) **Gluing**: For any family of elements $\{ s_{i} \in F(U_{i}) \}_{i \in \mathcal{I}}$, if $s_{i}\mid_{U_{i} \cap U_{j}} = s_{j}\mid_{U_{i} \cap U_{j}}$, **then** there'll be some $s \in F(U)$ which is the *gluing of these elements*, restricting to them accordingly ($s\mid_{U_{i}} = s_{i}$).
2) **Separability**: Given $s, s^{\prime} \in F(U)$ such that $s\mid_{U_{i}} = s^{\prime}\mid_{U_{i}}$ *for all $i \in\mathcal{I}$*, **then** they must be equal $s=s^{\prime}$. That is, the gluing of these $s_{i}$'s *is unique*.

This is why [[The functor of continuous functions over a topological space is a (pre)sheaf]]: because, given continuous functions $f_{i}: U_{i} \to \mathbb{R}$ — *locally* continuous within $U$ — which coincide in $U_{i} \cap U_{j}$, there *will* be a continuous function $f: U \to \mathbb{R}$ which is their (unique) gluing — that is, a *globally* continuous function in $U$ as a whole.

# Categorical definition of a sheaf (over a topological space)
A presheaf $F: Open(X)^{op}\to Set$ is a *sheaf* if, for any $U \in Open(X)$ and open covers of it $\{ U_{i} \}_{i \in \mathcal{I}}$, we have that the following [[Equalizer]] diagram commutes:
![[Pasted image 20260628192156.png|555]]

Given some element $s \in F(U)$, we have that
$$
\begin{cases}
e(s) \equiv \{ s\mid_{U_{i}} \}_{I \in \mathcal{I}} \equiv (s_{k})_{k \in \mathcal{I}} \\
f((s_{k})_{k \in \mathcal{I}}) \equiv (s_{\color{red}i}\mid_{U_{i} \cap U_{j}})_{({\color{red} i},j) \in \mathcal{I}\times\mathcal{I}} \\
g((s_{k})_{k \in \mathcal{I}}) \equiv (s_{\color{\pink} j}\mid_{U_{i} \cap U_{j}})_{(i,{\color{pink} j}) \in \mathcal{I}\times\mathcal{I}}
\end{cases}
$$

In this way, it spells out outright what the condition is: Given some function $s \in F(U)$[^1] — over the entire open set $U$ —, restricting it over each open set of one of its open covers $\{ U_{i} \}_{i}$ yields "partial functions" which must coincide in their intersections; this "equalling" of the partial functions is what the *equalizer* is imposing/guaranteeing, through the equalling of $f$ (first index of intersecting open sets) and $g$ (second index).



---
### References
- [III EBCT (Encontro Brasileiro em Teoria das Categorias) - 26/05 — ~02:24:00](https://youtu.be/x880fldbvT0?t=8633)

[^1]: It's useful to think about the sheaf of continuous functions $C: Open(X)^{op}\to \mathbb{R}$.