---
date: 2026-06-27
tags:
  - moc
aliases:
  - Pushout
---

up:: [[027 MOC Category Theory]]

The pullback of two morphisms $A \overset{ f }{ \to } C$ and $B \overset{ g }{ \to } C$ is 
- the object $P$ and
- morphisms $P \overset{p_{1}}{\to}A$ and $P \overset{p_{2}}{\to}B$ 

such that the following diagram commutes:
![[Pasted image 20260627153743.png|331]]

It's a universal construction: for any other object $Z$ which has $Z \overset{q_{1}}{\to}A$ and $Z \overset{q_{2}}{\to}B$,  there'll be a unique arrow $Z \overset{u}{\to} P$ through which Z's morphisms factor through $P$.

Its [[Opposite Category|Dual]] is a *pushout*.
# Examples in [[Set Category|Set]]
### Intersection of sets
![[Pasted image 20260628183802.png|307]]

The pullback of sets $A$ and $B$ whose morphisms are $\iota_{A}$ and $\iota_{B}$ is the intersection of $A$ and $B$: 
$$
\begin{align*}
A \cap B \ni p \begin{cases}
\mapsto p \in A \mapsto f(p) \in C \\
\mapsto p \in B \mapsto g(p) \in C
\end{cases}
\end{align*}
$$
This diagram can only commute if $p \in A$ and $p \in B$ at the same time, i.e. $p \in A \cap B$.

### Pullback of functions
Given $A \overset{ f }{ \to } C$ and $B \overset{ g }{ \to } C$, then their pullback $P$ will be — alongside projection morphisms $P \overset{p_{1}}{\to}A$ and $P \overset{p_{2}}{\to}B$ —  the *fiber product* of these functions: the elements in the [[Preimage of Function|preimage]] of the intersection of their [[Image of Function|images]], or rather, the cartesian product of these elements' fibers over $f$ and $g$. That is,
$$
P \equiv A \times_{C} B = \bigcup \limits_{c \in f(A) \cap g(B)} f^{-1}(\{c\}) \times g^{-1}(\{ c \})
$$

Note that, for any $(a,b) \in P$, we'll have that
$$
\begin{cases}
f(p_{1}((a,b))) &= f(a) \\
g(p_{2}((a,b))) &= g(b)
\end{cases}
$$
which means that, since $(a,b)$ is in the intersection of their images, $f(a)=g(b)$.

This example can also be seen as the [[Equalizer]] of the morphisms $f \circ p_{1}: A \times B \to C$ and $g \circ p_{2}: A \times B \to C$ (where $A \times B$ is their [[Product (Category)|Product]]) — I assume the equalizer's object $E$ is the fiber product itself, and its morphism $eq(f,g)$to $A \times B$ is just an inclusion map? #to-be-elaborated Note that, since it's an *equalizer*, it ensures that $f \circ p_{1} = g \circ p_{2}$, i.e. that $f=g$ ($f$ *equals* $g$) in a "common domain" (given by $E$, embedded in $A \times B$ via $eq(f,g)$).

### Function's graph

Given a function $f: X \to Y$, its graph $\Gamma_{f}\coloneqq \{ (x,f(x)):x \in X \}$ can be seen as $f$'s pullback with $Y \overset{Id}{\to}Y$. 

![[Pasted image 20260627161218.png|257]]

For all $(x,f(x)) \in \Gamma_{f}$,
$$
\begin{cases}
(x,f(x)) \overset{p_{1}}{\mapsto} x &\overset{f}{\mapsto}f(x) \\
(x, f(x)) \overset{p_{2}}{\mapsto} f(x) &\overset{Id}{\mapsto} f(x)  
\end{cases}
$$

### Preimage of a function
Given a function $f: X \to Y$ and a subset $Y_{0} \subseteq Y$, then the pullback of $f$ and the inclusion map $Y_{0} \overset{\iota_{Y}}{\to}Y$ is the preimage $f^{-1}(Y_{0})$, alongside morphisms $\iota_{X}$ to $X$ and the restriction $f\mid_{f^{-1}(Y_{0})}$ to $Y$:
![[Pasted image 20260627161616.png|333]]

Note that, for some $x \in f^{-1}(Y_{0})$,
$$
\begin{cases}
x \mapsto x \in X &\mapsto f(x) \in Y \\
x \mapsto f(x) \in Y_{0} &\mapsto f(x) \in Y
\end{cases}
$$

Do note that it also works when $Y_{0} = \emptyset$, since $\emptyset$ is an [[Initial Object]] in $Set$: it's guaranteed to exist morphisms from it to $X$ and $Y_{0}$. In any case, it'd be a pretty boring diagram, going from nowhere to nowhere.



---
### References
-  [III EBCT (Encontro Brasileiro em Teoria das Categorias) - 25/05 — ~01:47:00](https://youtu.be/eIfwFXrofp8?t=6418)
- [Pullback (category theory) - Wikipedia](https://en.wikipedia.org/wiki/Pullback_(category_theory)#)
- [quiver: a modern commutative diagram editor](https://q.uiver.app/)