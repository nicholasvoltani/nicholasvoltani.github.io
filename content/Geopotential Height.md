---
date: "2025-10-25"
tags:
  - physics
aliases:
---

up:: [[034 MOC Atmospheric Physics]]

Given a [[Geopotential]] $\Phi$, the geopotential height is defined as
$$
Z(z) \coloneqq \frac{\Phi(z)}{g_{0}} = \int_{0}^z \frac{g}{g_{0}} dz
$$
where $g_{0}$ is the gravitational field at $z=0$, the usual $9.81 \frac{m}{s}$.


When $g \approx g_{0}$, one has $Z(z) \approx z$, differing from it when $g \neq g_{0}$, i.e. at higher altitudes.

# For a gravitational field
Opening $g$ as[^1]
$$
g(z) = \frac{GM}{(R+z)^2}
$$
we have the same results for the respective geopotential, just also dividing by $g_{0}=\frac{GM}{R^2}$:
$$
Z(z) = \left( \frac{R}{R+z} \right) z
$$

When $z \ll R$, naturally we have
$$
Z(z) \approx z
$$


---
### References
- WALLACE, John Michael; HOBBS, Peter Victor. **Atmospheric science: an introductory survey**. 2nd ed ed. Amsterdam Paris: Academic press, 2006.

[^1]: Naturally supposing that the Earth is spherical, i.e. integrating over $z$ is equivalent to integrating radially.