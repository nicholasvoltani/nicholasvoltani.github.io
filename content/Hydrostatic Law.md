---
date: "2025-10-25"
tags:
  - physics
aliases:
---

up:: [[034 MOC Atmospheric Physics]]

Given a differential element of area $dA$ and height $dz$,[^1] it will feel a pressure $P$ above it, and a pressure $P + dP$ below it.

Thus, the resultant force it feels is
$$
(P+dP - P) dA = dP dA
$$

The acceleration it feels is $-g$, and its mass is $\rho dA dz$.

Equalling both, we have
$$
\begin{align}
dPdA &= -\rho g\, dAdz 
\end{align}
$$

Therefore,
$$
dP = -\rho g dz
$$

This equation motivates the definition of a [[Geopotential]]
$$
\Phi \coloneqq \int_{0}^z gdz
$$
and a [[Geopotential Height]]
$$
Z \coloneqq \frac{\Phi(z)}{g_{0}}
$$

---
### References
- WALLACE, John Michael; HOBBS, Peter Victor. **Atmospheric science: an introductory survey**. 2nd ed ed. Amsterdam Paris: Academic press, 2006.

[^1]: And **given a gravitational acceleration** $g$ and constant density $\rho$.