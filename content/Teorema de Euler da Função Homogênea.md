---
date: " 2024-10-02"
tags:
  - mathematics
aliases:
---

up:: [[062a MOC Teoria do Consumidor]], [[020 MOC Mathematics]]

Seja $F: \mathbb{R}^{L}\setminus \{0\} \to \mathbb{R}$ uma função continuamente diferenciável. Então[^1]
$$
F(\alpha \vec{x}) = \alpha^{n}F(\vec{x}) \implies \vec{x} \cdot \nabla F(\vec{x}) = nF(\vec{x})
$$

# Demonstração
$F(t \vec{x})=t^{n}F(\vec{x})$ por hipótese. Diferenciando com relação a $t$, temos
$$
\frac{d}{dt} F(t\vec{x}) = \frac{ \partial F }{ \partial t\vec{x} } \cdot \vec{x} = n t^{n-1}F(\vec{x})
$$

Fazendo $t=1$, resta
$$
\nabla F \cdot \vec{x} = n F(\vec{x})
$$

---
### References
- [(14/01/2022) - Iniciação Científica: Introdução à Economia Matemática - Campo Elias - Aula 05 - IMPA](https://www.youtube.com/watch?v=VCwsOAyFO_0&list=PLo4jXE-LdDTTjttEZI1t-7aVeFuMYkZuI&index=5)

[^1]: A volta também vale, mas não parece ser pertinente para problemas de Micro. (E também eu não sabia demonstrar.)