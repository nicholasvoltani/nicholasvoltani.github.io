---
date: 2026-06-28
tags:
  - mathematics
aliases:
  - presheaves
---

up:: [[027 MOC Category Theory]]

A presheaf *of sets* on a [[Category]] $C$ is a [[Contravariant Functor]] $F: C^{op}\to Set$. It can map onto other categories, e.g. $Rng$, $Top$, etc.

Presheaves which also satisfy *gluing* and *separability* axioms are called [[Sheaf|sheaves]]. 

# Presheaf of sets on a topological space
The usual example is a presheaf of sets *on a [[Topological Space]] $X$* 
$$
F: Open(X)^{op}\to Set
$$
for which we assume $Open(X)$ is a subcategory of $Poset$: $U \to V \iff U \subseteq V$, and for which 
$$
F(V) \overset{s\mid_{U}}{\to} F(U)
$$
where $s \mid_{U}$ is a "*restriction map*" — merely a function between those sets, given by $F$.

## Example: The functor of continuous functions (over $\mathbb{R}$)
Given $X$ a topological space, and $C(X)$ the set of continuous functions $f: X \to \mathbb{R}$. Then we can see that [[The functor of continuous functions over a topological space is a (pre)sheaf]]:
$$
\begin{align*}
C: Open(X)^{op}&\to Set \\
U \subseteq X &\mapsto C(U) \coloneqq \{ f: U \overset{\mathcal{C}}{\to}\mathbb{R} \}
\end{align*}
$$
$C$ can be seen as a functor. Given $U \subseteq V$, we can have simply
$$
\begin{align*}
C(V) &\to C(U) \\
f &\mapsto f\mid_{U}
\end{align*}
$$

It necessarily preserves composition of morphisms as well: Given $U \subseteq V \subseteq W$, we'll have
$$
\begin{align*}
F(W) &\to F(V) \to F(U) \\
f &\mapsto f\mid_{V} \mapsto f\mid_{V}\mid_{U}
\end{align*}
$$
which is the same as simply $f\mid_{U}$, since $U \subseteq V$: $U$ is already "more restrictive" than $V$. 

Therefore, the functor of continuous functions (on $\mathbb{R}$) over (open sets of) $X$ is a presheaf.

---
### References
- [III EBCT (Encontro Brasileiro em Teoria das Categorias) - 26/05 — ~02:24:00](https://youtu.be/x880fldbvT0?t=8633)
- [Category Theory - Toposes (MathProofsable)](https://www.youtube.com/playlist?list=PL4FD0wu2mjWM3ZSxXBj4LRNsNKWZYaT7k)