---
date: 2026-06-28
tags:
  - mathematics
aliases:
  - Isomorphism
  - Isomorphic
---

up:: [[027 MOC Category Theory]]

Given a [[Category]] $C$, objects $A, B \in Ob(C)$, and morphisms $A \overset{f}{\to}B$ and $A \overset{g}{\leftarrow}B$, we say that $f$ (and/or $g$) is an *isomorphism* if these morphisms are *inverses*, in the sense that[^1]
$$
\begin{cases}
f;g = 1_{A} \\
g;f = 1_{B}
\end{cases}
$$

Thus, $A$ and $B$ are said to be *isomorphic*.



[^1]: $f;g$ means "**first** $f$, **then** $g$". Namely: $A \overset{f}{\to}B \overset{g}{\to}A$.