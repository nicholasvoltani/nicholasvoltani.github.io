---
date: 2025-10-25
tags:
  - physics
aliases:
  - Virtual Temperature
---

up:: [[034 MOC Atmospheric Physics]]

Given a parcel of moist air, its virtual temperature is the temperature that "would be" required for it to behave as an ideal gas, with dry air's specific constant $R_{d}$. Given a(n effective) temperature $T$ (and consequent pressure $p$), it's given as
$$
T_{v} \coloneqq \frac{1}{T}\left( 1 - (1-\epsilon) \frac{p_{w}}{p} \right)
$$

Given the [[Ideal Gas Law]] for dry air[^1]
$$
p_{d} = \rho_{d} R_{d} T
$$
and for water vapor:[^3]
$$
p_{w} = \rho_{w} R_{w} T
$$
as well as defining
$$
\epsilon \coloneqq \frac{R_{d}}{R_{w}}
$$
We have that the density of moist air is composed of its water vapor density and its "dry"/non-water-vapor density:
$$
\rho = \frac{m_{w} + m_{d}}{V} = \rho_{w} + \rho_{d}
$$

Substituting for the respective ideal gas laws, for a given temperature $T$:
$$
\rho = \frac{1}{T}\left( \frac{p_{d}}{R_{d}} + \underbrace{ p_{w} \frac{\epsilon}{R_{d}} }_{ = \frac{p_{w}}{R_{w}} } \right)
$$
Due to Dalton's [[Partial Pressure|partial pressures]] law, we have that 
$$
p = p_{d} + p_{w}
$$
and, thus, isolating variables with dry air's constant, we have
$$
\rho = \frac{p}{R_{d}} \underbrace{ \frac{1}{T}\left( 1 - (1-\epsilon) \frac{p_{w}}{p} \right) }_{ \coloneqq T_{v} }
$$
$T_{v}$ is called the *virtual temperature* of air, i.e. the temperature that air "*should have*" to behave itself as an ideal gas[^2].

# Sanity check
If the air is too saturated with water vapor, we have that $p \to p_{w}$, and thus
$$
\begin{align}
\rho &= \frac{p_{w}}{R_{d}} \frac{1}{T} (1 - (1-\epsilon)) \\
&= \frac{p_{w}}{T} \frac{\epsilon}{R_{d}} \\
&= \frac{p_{w}}{T} \frac{1}{R_{w}}
\end{align}
$$
and thus the water vapor's gas law is recovered.

If air is too dry, we have that $\frac{p_{w}}{p} \to 0$ and[^4] $p = p_{w} + p_{d} \to p_{d}$
$$
\rho = \frac{p_{d}}{R_{d}} \frac{1}{T}
$$
i.e. dry air's gas law is recovered.

---
### References
- WALLACE, John Michael; HOBBS, Peter Victor. **Atmospheric science: an introductory survey**. 2nd ed ed. Amsterdam Paris: Academic press, 2006.

[^1]: $R_{d}$ the specific air constant for dry air.
[^2]: With dry air's specific air constant $R_{d}$.
[^3]: Usually $p_{w}$ is denoted as $e$. I'm writing it as $p_{w}$ to make it more legible for me ($w$ as in "*water* vapor"). I also avoided naming it $p_{v}$ (as in "water *vapor*") to not mistake this subscript with virtual temperature's $T_{v}$.
[^4]: Dalton's partial pressures law.