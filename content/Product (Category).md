---
date: 2023-08-21
tags:
  - mathematics
aliases:
  - Product
  - Coproduct
---
up:: [[027 MOC Category Theory]]

![[Pasted image 20230821211433.png|300]]

Given a [[Category]] $C$, and objects $X_1, X_2 \in Ob(C)$, we have that their product $X_1 \times X_2$ is defined by the diagram above. For every $X_i$, there is a **projection morphism** $X_1 \times X_2 \overset{\pi_i}{\longrightarrow} X_i$.

Its [[Opposite Category|Dual]] is a coproduct.

If there is some other object $Y \in Ob(C)$ which has morphisms to the individual objects $Y \overset{f_i}{\longrightarrow} X_i$, then there is a **unique** morphism from it to the product $Y \overset{h}{\longrightarrow} X_1 \times X_2$. This makes it so that any object which satisfies this property is [[Isomorphism (Category)|isomorphic]] to each other, i.e. *there is only one product up to isomorphism* (if there is any product at all in $C$).

## Examples in [[Set Category|Set]]
### Cartesian products in Set are categorical products
Given two sets $X_1, X_2$, denote their cartesian product as $X_1 \times X_2$, and let
$$
\pi_i: X_1 \times X_2 \to X_i
$$
be the respective **projection maps**. Let some other set $Y$ have functions $f_{i}: Y \to X_{i}$. Then we will always be able to factor $Y$ through the product $X_{1} \times X_{2}$, since we can construct $f: Y \to X_{1} \times X_{2}$ through
$$
\begin{align*}
\forall y \in Y: 
\begin{cases}
f_{1}(y) = \pi_{1}(f(y))  \\
f_{2}(y) = \pi_{2}(f(y))
\end{cases} \implies f(y) = (f_{1}(y), f_{2}(y))
\end{align*}
$$
Since it is explicitly constructed through $f_{1}, f_{2}$, then it is unique (given these functions and $Y$). 

### Disjoint unions of sets are categorical coproducts
The disjoint union of $A=\{ 1,2,3 \}$ and $B=\{ 3,4,5 \}$ is the set
$$
\{ 1_{A}, 2_{A}, 3_{A}, 3_{B}, 4_{B}, 5_{B} \}
$$
the union of their elements, *discriminated by their sets of origin*.

Given sets $X_{1}, X_{2}$ and their disjoint union $A \coprod B$, there exist natural inclusion maps $\iota_{i}: X_{i} \hookrightarrow X_{1} \bigsqcup X_{2}$ from each of these sets onto their coproduct
$$
\begin{align*}
\iota_{1(2)}: X_{1(2)}& \hookrightarrow X_{1} \bigsqcup X_{2} \\
&x \mapsto x_{1(2)}
\end{align*}
$$
i.e. it just labels each element according to its original set.

Note that, for any set $Y$ such that $X_{i} \overset{f_{i}}{\to} Y$, a function $f: X_{1} \bigsqcup X_{2} \to Y$ can be constructed as
$$
\begin{align*}
\forall x \in X_{1}, z \in X_{2}: 
\begin{cases}
f_{1}(x) &= f(\iota_{1}(x)) = f(x_{1}) \\
f_{2}(z) &= f(\iota_{2}(z)) = f(z_{2})
\end{cases}
\end{align*}
$$
That is, $f$ is defined as follows:
$$
\forall x \in X_{1} \bigsqcup X_{2}: 
\begin{cases}
\exists x_{1} \in X_{1} \mid \iota_{1}(x_{1}) = x \implies  f(x_{1}) &= f_{1}(x_{1})  \\
\exists x_{2} \in X_{2} \mid \iota_{2}(x_{2}) = x \implies \forall x_{2} \in X_{2}: f(x_{2}) &= f_{2}(x_{2})
\end{cases}
$$
I.e. we just check $x$'s label, and use its respective $f_{i}: X_{i} \to Y$.

## Examples in [[Partially Ordered Set|Poset]]
### Categorical (co)products in posets are meets (joins)
Let $P$ be the poset category with morphisms being its preorder. Then an object which is a product of given $A, B \in P$ means that
$$
A \overset{\geq}{\leftarrow} A \times B \overset{\leq}{\to} B
$$
I.e. $A \times B$ is a **lower bound** of $A$ and $B$.

Given another object $Y$ that also has morphisms to $A$ and $B$ — i.e. is also a lower bound of them —, then $A \times B$ is their product when there is a morphism from $Y$ to $A \times B$. That is, $A \times B$ must be the **greatest lower bound** of $A$ and $B$, i.e. their meet $A \land B$.

Conversely for the coproduct: $A \coprod B$ is the **least upper bound** of $A$ and $B$, i.e.  their *join* $A \lor B$.


---
### References
- MAC LANE, Saunders, **Categories for the Working Mathematician**, New York, NY: Springer New York, 1978.
- [III EBCT (Encontro Brasileiro em Teoria das Categorias) - 25/05 — ~01:47:00](https://youtu.be/eIfwFXrofp8?t=6418)