---
date: "2026-06-26"
tags:
  - mathematics
aliases:
---

up:: [[027 MOC Category Theory]]

![[Pasted image 20260626184839.png|298]]
Fonte: [Equaliser (mathematics) - Wikipedia](https://en.wikipedia.org/wiki/Equaliser_(mathematics))

Given objects $X, Y$ in some category $C$, and morphisms $f, g \in Hom_{C}(X, Y)$, then their *equalizer* is 
1) an object $E$, and
2) a morphism $eq: E \to X$

through which any other morphism $h \in Hom_{C}(Z \to X)$, for any other object $Z$ factors through $E$, i.e.
$$
f \circ h = g \circ h \implies \exists! u: Z \to E \mid h = eq \circ u
$$

The idea is that "$f=g$" is made possible through this categorical object. #to-be-elaborated 

Its [[Opposite Category|dual]] is a coequalizer.

# Examples
## Linear map's kernel in vector spaces
Given a [[Linear Operator]] $f: X \to Y$ between [[Vector Space|vector spaces]], then its kernel $\ker f \subseteq X$ can be thought to be an equalizer between $f$ and the $0_{Y}$ map ($0_{Y}(x) = 0_{Y}$) — or rather, an equalizer's object, whose morphism would be $eq(f, 0_{Y}) \equiv \iota: \ker f \hookrightarrow X$. We have the diagram
<!-- https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXGtlciBmIl0sWzIsMCwiWCJdLFs0LDAsIlkiXSxbMCwxLCJcXGlvdGEiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsxLDIsIjAiLDJdLFsxLDIsImYiLDAseyJvZmZzZXQiOi0zfV1d --> <iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXGtlciBmIl0sWzIsMCwiWCJdLFs0LDAsIlkiXSxbMCwxLCJcXGlvdGEiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsxLDIsIjAiLDJdLFsxLDIsImYiLDAseyJvZmZzZXQiOi0zfV1d&embed" width="688" height="176" style="border-radius: 8px; border: none;"></iframe>

Let some other $Z$ such that it also has some linear map $h$ that satisfies the above, i.e.
$$
\forall z \in Z: f(h(z)) = 0_{Y}[h(z)] = 0_{Y}
$$
Then, it'll be true that[^1]
$$
\forall z \in Z: h(z) \in \ker f
$$
Since that's the case, we can simply *use the very same map $h$* to connect $Z$ to $E$:
![[Pasted image 20260626191548.png|391]]

## Sheaves over Set
Given a [[Presheaf]] $F: Op(X)^{Op} \to Set$ over a [[Topological Space]] $(X, \tau \equiv Op(X))$ onto [[Set Category|Set]], it'll be a [[Sheaf]] over $Set$ when, for any open sets $U \in Op(X) \equiv \tau$ and open covers $\{U_{i}\}_{i}$ of these given $U$'s, the following equalizer diagram commutes:
![[Pasted image 20260626192103.png|576]]

Given $U \in Op(X)$ and an open cover of it, $\{ U_{i} \}_{i}$, let $s \in F(U)$ be an element of (the set) $F(U)$. #to-be-elaborated 


---
### References
- [III EBCT (Encontro Brasileiro em Teoria das Categorias) - 25/05 — ~01:47:00](https://youtu.be/eIfwFXrofp8?t=6418)
- [equalizer in nLab](https://ncatlab.org/nlab/show/equalizer)
- [quiver: a modern commutative diagram editor](https://q.uiver.app/)

[^1]: Remember that $h(z) \in X$.