---
date: " 2024-07-18"
tags:
  - mathematics
aliases:
---

up:: [[040 MOC Complex Systems]]

In 1967, Winfree posited a simple model to predict synchronization in biological systems. 

# Assumptions of Winfree's model
## 1) Individuals are essentially oscillators in state space
![[Pasted image 20240718153109.png]]
The individuals in the system are essentially oscillators, i.e. they are "rotating around some [[Limit Cycle]]" in state space. Thus, they can be approximately describe by one variable (some angle $\theta$).

## 2) Symmetric frequency distribution (and unimodal)
![[Pasted image 20240718153420.png]]

Each oscillator has some natural frequency $\omega$, sampled from a symmetric distribution $g(\omega)$, reasonably narrow, and implicitly assumed unimodal.

## 3) Oscillators are equally coupled
All oscillators can **send** some signal of strength $P(\theta)$ and **adjust** their own frequency by an amount $R(\theta)$, with $P, R$ equal for all oscillators for simplicity.

## 4) All oscillators respond only to a mean field
Oscillators only respond to a mean response of all others. Thus, their equations of motion are
$$
\dot{\theta}_{i} = \omega_{i} + \left(\frac{1}{N} \sum\limits_{k = 1}^{N} P(\theta_{k})\right) R(\theta_{i})
$$

---
### References
- [2011 Simons Lectures - Steven Strogatz, Coupled Oscillators That Synchronize Themselves - YouTube](https://www.youtube.com/watch?v=5zFDMyQ8z8g&list=PLZQSCiYQXGz8QIEgXyfF8uiiCpkGJuzhr&index=2)
- WINFREE, Arthur T. Biological rhythms and the behavior of populations of coupled oscillators. **Journal of theoretical biology**, v. 16, n. 1, p. 15-42, 1967.