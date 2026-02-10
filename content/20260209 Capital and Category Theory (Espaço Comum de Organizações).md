---
date: "2026-02-09"
tags:
  - daily
draft: "false"
aliases:
---

up:: [[099 MOC Rascunhos|099 MOC Anotações]]

The analysis through Category Theory aims to bridge the "space of organizations" with the "space of capital". 

Why is the [[Aparência|appearance]] of capitalism what it is? Why do we see [[Processo de Troca de Mercadorias|exchanges]] as depending on *prices*, not [[Valor|value]]? Because we're talking about **property** (laws, rights, ...) and how it operates.[^1] 

```tikz
\usepackage{tikz-cd}
\begin{document}
% https://tikzcd.yichuanshen.de/#N4Igdg9gJgpgziAXAbVABwnAlgFyxMJZABgBpiBdUkANwEMAbAVxiRAEEQBfU9TXfIRQAmclVqMWbAELdeIDNjwEiogIzj6zVohABhbuJhQA5vCKgAZgCcIAWyRkQOCEjU8rth4icukwrgouIA
\begin{tikzcd}
A \arrow[rr] \arrow[rrd] &  & B \\
                         &  & C
\end{tikzcd} 

% https://tikzcd.yichuanshen.de/#N4Igdg9gJgpgziAXAbVABwnAlgFyxMJZABgBpiBdUkANwEMAbAVxiRAEEQBfU9TXfIRQBGclVqMWbAELdeIDNjwEio4ePrNWiEAGFu4mFADm8IqABmAJwgBbJGRA4ISYT0s37iR86QAmLgouIA
\begin{tikzcd}
A \arrow[r] \arrow[rd] & B \\
                       & C
\end{tikzcd}

\\

% https://tikzcd.yichuanshen.de/#N4Igdg9gJgpgziAXAbVABwnAlgFyxMJZABgBpiBdUkANwEMAbAVxiRAEEQBfU9TXfIRQBGclVqMWbAELdeIDNjwEio4ePrNWiEABE5fJYKJl11TVJ0BhbuJhQA5vCKgAZgCcIAWyRkQOCCRREAY6ACMYBgAFfmUhEJhXHBBzSW0QVxSQOAALLCTfHjdPH0Q-AKQAZmoGLDB0uAhaqCyLdJyDDJKg6grEACZUrTYHTo9vKt7AgaHLEByAbkya8MiYoxUddywHHOSiromyqaRBkLr0qDpc+1a0tkXXAAIAXifXBdHqXPzksq4KFwgA
\begin{tikzcd}
A \arrow[r, "f"] \arrow[d, "h"] \arrow[rd, "h;f = f;g", dashed] & B \arrow[d, "g"] \\
C \arrow[r, "h;f"']                                             & D               
\end{tikzcd}

\end{document}
```

# Recap
Given a domain $D$ of objects, we say there is an exchangeability function $e: D \times D \to T$ which evaluates the "similarity" between two "commodities" in $D$, which is given in a Heyting algebra. 

[Mentions **William Lawvere**'s work on Dialectical Logic!] 

Evaluating some object under some evaluation -> value. When re-evaluating the object by coming from its value, it's seen "from a different angle", not merely its original object, but something *more*. 

> Need to explain this "kernel stability" and how it births the "commodity form", and how this yields the "commodity allegory"

![[Pasted image 20260209194945.png|200]]
Given a commodity's value, "seeing backwards" allows one to see *all commodities equivalent to it*. But there needs to be some *consistency between commodities' equivalents lists*. 

![[Pasted image 20260209194931.png|200]]
Thus, there must be some commodity which creates these coherent "grids" of equivalence of all commodities. 

In this sense, changes in this new commodity — money —'s value, then it translates into a list of all commodities equivalent to this value. So what $M$ buys, $\frac{M}{2}$ buys half of, and $2M$ buys twice as.

*It's not an evaluation to a Heyting algebra here!* In this sense, there is an **incarnation of value**, and a lattice that is induced by it.

---
The *price* is the monetary expression of a commodity $X$: $m(X)$. But note that changes in monetary *magnitudes* don't really translate into merely *quantitative changes in equivalent commodities*: there may also be *qualitative changes* of this new quantity's equivalence list. E.g. a cow may be worth $M$, but half a cow isn't really worth anything ***qua* cow** — may be worth something *as meat*, or *as leather* etc.

So *il faut de* create some magnitude operator that takes *some combination* of commodities, and allow for it to "preserve" this "addition". Formally, we seek some $\oplus$ and $m$ that satisfy:
$$
m(A \oplus B) = m(A) + m(B)
$$

An analogy given is that *prices measure distances*, but changing the space makes prices change more than merely changing distances — there are *intrinsic factors* to be taken into account.
![[Pasted image 20260209200334.png]]

Another problem is how to determine the **magnitude base**: 
![[Pasted image 20260209200550.png|300]]

However, we need to **find out what** is this base, not pressupose it. It must be:
- Homomeric (changes in quantity maintain its quality as such)
- Operable
- Homogeneous
- "Covariance" (2x in something is captured by 2x of the given measure unit)

Conclusion (to be derived): **labor** is the most stable unit, as number of (comparable) commodities increases.

---
# Chapter 8, Primer
Suppose that commodity exchange is **not a value concept**. We suppose here that, if $A =B$ (value), **then** $A$ belongs to some proprietor, and $B$ to another (property)... but we don't know what property means here!

So knowing how some objects are *property of* given "peoples", then exchanges occur when there are **mutual alienation of commodities**. There is some "layer convergence" when one layer (e.g. property) allows for the occurence of another (e.g. value). 

---
# Section 9, Primer: The problem of exchange composition
When we suppose the assymetry $C-M$ of buying/selling commodities — as opposed to barter —, there can be some *enchainment of operations*, i.e. **circulation paths**.[^2] 

Since we assume the layers of *property* and *value*, there can be different movements of both.

![[Pasted image 20260209203242.png|200]]

Different circulation spaces can be locally constant with regards to total money quantity (split quantities [10 -> 5 + 5] + hoarded quantities [5 + 5 -> 10]). 

Then there is the problem of **composing different circulation spaces**.

However, there is the problem of **commodity depletion**: money can keep on circulating, but commodities **vanish when they're consumed**!
1) Merely increasing the circulation space, by commodifying more things, is only a *temporary solution* 
2) The **production of goods** solves both the return of commodities into circulation (under value conservation), and also the augmentation of the circulation space. Thus, production **stabilizes** a circulation space ([[Stabilizer of Group Action]]?
)

---
Mention of [[Função de Leontief]] — Leontief matrix — and [Hawkins–Simon condition - Wikipedia](https://en.wikipedia.org/wiki/Hawkins%E2%80%93Simon_condition).

---
# Some Hegel
**Space**: "Here" and "there" are **external** negations of one another. Mereological thing, good for logic: $A \subseteq B$.

**Time**: "Now" and "after" are **internal** negations, and **irreversible**. Intransitive.

**Scale**: Microscopic can explain macroscopic, but macro can't recompose micro exactly! (And also, some macro things can't be explained by the micro things!) "Intransitive mereology"!


---
### References
- YAO, Yuan; TUPINAMBÁ, Gabriel. A Primer on Political Phenomenology. 2021.



[^1]: That's why it's important that Marx talks about the [[Lei Geral da Acumulação Capitalista|general law of capitalist accumulation]]: because it's where the appearance of the phenomenon breaks down!
[^2]: [[011a MOC Capital I]], Cap. 4.