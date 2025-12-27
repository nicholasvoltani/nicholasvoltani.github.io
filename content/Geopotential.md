---
date: 2025-10-25
tags:
  - physics
aliases:
---

up:: [[034 MOC Atmospheric Physics]]

The geopotential is the amount of [[Work (Physics)|Work]] required to lift an air parcel *of unit mass* from the Earth's surface ($z=0$) to a height $z$.

Defined as[^1]
$$
\Phi(z) \coloneqq \int_{0}^z g dz
$$
where it's defined as $0$ at $z=0$, much like (usually) the gravitational potential.

# Alternative formula for ideal gases
Due to the [[Hydrostatic Law]], we have
$$
\Phi(z) = \int_{0}^z gdz = -\int_{P({z=0})}^{P(z)} \frac{dp}{\rho}  
$$

Supposing it's an *unit mass* parcel of air, we can write its *specific volume* $\alpha = \frac{1}{\rho}$ and thus
$$
\Phi(z) = -\int_{P_{0}}^{P(z)} \alpha dp
$$

# Using gravitational field formula
Opening up $g$,[^2] we have
$$
\Phi(z) = \int_{0}^z \frac{GM}{(R+z)^2}dz
$$
where $R$ is the Earth's (or any planet's) radius. It's the same as
$$
\begin{align*}
&\int_{R}^{R+z} GM \frac{dr}{r^2}  \\
&= - GM [(R+z)^{-1} - R^{-1}] \\
&= GM \frac{z}{(R+z)R}
\end{align*}
$$
When $z \ll R$, we have the usual result
$$
\Phi(z) \approx \frac{GM}{R^2} z \equiv g z
$$

---
### References
- WALLACE, John Michael; HOBBS, Peter Victor. **Atmospheric science: an introductory survey**. 2nd ed ed. Amsterdam Paris: Academic press, 2006.

[^1]: Seeing it as the work of gravitational force: $\Phi = \int_{0}^z mg dz$, where $m=1$ (air parcel of unit mass).
[^2]: Newton's gravitational law for some mass $M$: gravitational force (*on unit mass air parcel*) $F(r) = \frac{GM}{r^2}$, which is just the gravitational field $g=g(r)$.