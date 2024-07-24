---
date: " 2024-07-18"
tags:
  - mathematics
aliases:
---

up:: [[Kuramoto Model]]

![[Pasted image 20240718161659.png]]
(Strogatz)

The Kuramoto model has a [[Second-Order Phase Transition]] with respect to its coupling parameter $K$. 

This means that, below some critical coupling threshold $K_{c}$, there can be no synchronization ($R = 0$), no matter how long one waits or how many oscillators there are. 

Only past this threshold can synchronization begin to happen (asymptotically in $t$ and $N$).

# Derivation of threshold
One can find this critical threshold solving a self-consistent equation for the [[Kuramoto Model Order Parameter]] $R$, of the form
$$
R = K R \int_{-\frac{\pi}{2}}^{\pi/2} \cos^{2}\theta \, g(\lambda R \sin\theta) \, d\theta
$$

By making $R \to 0^{+}$[^1], one finds the critical coupling
$$
R_{c} = \frac{2}{\pi \, g(0)}
$$

# Derivation of second-order transition
Expanding $g({K R \sin \theta})$ around $0$ up to second order[^2], and since $g''(0) = -\frac{2}{\pi}$, we have
$$
R \sim \sqrt{\frac{8(\lambda - \lambda_{c})}{\lambda_{c}^{3}} } \sim (\lambda - \lambda_{c})^{1/2}
$$


---
### References
- KURAMOTO, Y. **Self-entrainment of a population of coupled non-linear oscillators**. (H. Araki, Ed.), 1975.
- STROGATZ, S. H. **Nonlinear Dynamics and Chaos: With Applications to Physics, Biology, Chemistry, and Engineering**. 3. ed. CRC Press, 2019.
- [2011 Simons Lectures - Steven Strogatz, Coupled Oscillators That Synchronize Themselves - YouTube](https://www.youtube.com/watch?v=5zFDMyQ8z8g&list=PLZQSCiYQXGz8QIEgXyfF8uiiCpkGJuzhr&index=2)

[^1]: And implicitly assuming continuity of $g$.
[^2]: Assuming $g(\omega)$ follows a Lorentzian distribution $g(\omega) = \frac{1}{\pi (1 + \omega^2)}$ ($\gamma = 1$), as (Kuramoto, 1975).