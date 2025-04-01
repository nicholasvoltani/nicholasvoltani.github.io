---
date: " 2024-11-22"
tags:
  - economics
aliases:
---

up:: [[062a MOC ANPEC Microeconomia]]

related:: [[062c MOC Teoria do Bem-Estar]]

![[Pasted image 20241122145238.png|500]]

Questão sobre [[Imposto Específico]].

# Cálculos preliminares
A função de demanda é
$$
Q^{d} = 60 - 2P
$$
e a função de oferta é
$$
Q^{s} = P
$$

O imposto específico $T$ sobre o ofertante faz com que
$$
Q^{s}(P) \mapsto Q^{s}(P-T) \equiv Q^{s'}
$$
Portanto, a função de oferta após o imposto específico é
$$
Q^{s'} = P - T
$$
em que $T = 15$.

# Item 0: Verdadeiro
O preço de equilíbrio é obtido igualando a demanda $Q^{d}$ e a oferta $Q^{s}$:
$$
\begin{align}
60 - 2P^{*} &= P^{*} \\
\therefore P^{*} &= 20
\end{align}
$$

A quantidade de equilíbrio obtida é 
$$
\begin{align}
Q^{d}(P^{*}) = 60 - 40 &= 20  \\
&= Q^{s}(P^{*})
\end{align}
$$
# Item 1: Verdadeiro
O preço pós-imposto é obtido igualando $Q^{d}$ com a oferta pós-imposto $Q^{s'}$:
$$
\begin{align}
60 - 2P_{t} &= P_{t} - 15 \\
\therefore &= P_{t} = 25
\end{align}
$$

A quantidade de equilíbrio é, então
$$
\begin{align}
Q^{d}(P_{t}) = 60 - 50 &= 10 \\
&=Q^{s'}(P_{t})
\end{align}
$$
que é metade da quantidade pré-imposto.

# Item 2: Falso
A arrecadação do governo é dada pelo preço do imposto vezes a quantidade de equilíbrio do mercado (pós-imposto). Portanto,
$$
15 \cdot 10 = 150
$$

Inclusive, é possível fazer a parcela de imposto que foi paga pelo produtor e pelo consumidor. Da parte do consumidor, é o tanto a mais que ele paga, que é
$$
(P_{t}-P^{*}) \cdot Q_{t} = 5 \cdot 10 = 50
$$
e da parte do produtor, o tanto que ele deixa de receber de receita, que é a diferença entre o preço anterior (que era do equilíbrio de livre-mercado) e o preço pelo qual ele produziria a nova quantidade de equilíbrio, $P_{t}-T$
$$
(P^{*} - (P_{t} - T)) \cdot Q_{t} = (20 - (25-15)) \cdot 10 = 100
$$

A soma de ambos tem de ser a arrecadação do governo (inclusive a soma dá exatamente $T \cdot Q_{t}$ .)

# Item 3: Falso
~~Sacanagem~~ Para os *demandantes*, $25$ é o preço que eles pagam, porém *não é o preço que o ofertante põe a mercado*! A taxação ocorre *entre* o produtor colocar o produto no mercado (a preço de equilíbrio $P^{*}$) e o momento da compra.

# Item 4: Falso
O cálculo da [[Perda de Peso Morto]] pode ser feita ao decompor as perdas do consumidor e do produtor.

Da parte do consumidor, a perda é a área do triângulo
$$
\frac{(P_{t}-P^{*}) \cdot (Q^{*}-Q_{t})}{2}
$$

Da parte do produtor, a perda é a área do triângulo
$$
\frac{(P^{*}- (P_{t}-T)) \cdot (Q^{*}-Q_{t})}{2}
$$

Somando ambos, obtém-se[^1]
$$
DWL = \frac{T \cdot (Q^{*}-Q_{t})}{2} = \frac{15 \cdot 10}{2} = \frac{150}{2}
$$

# Discussão Posterior
O que ocorre com o imposto específico é o seguinte movimento:
![[excise_tax_generalized.mp4]]
Fonte: [Eu mesmo!](https://github.com/nicholasvoltani/Manimations/tree/master/ExciseTaxGif)

Note que, neste caso, a perda de excedente do produtor (tanto pela receita do governo quanto pelo *deadweight loss*) são bem maiores que a perda de excedente do consumidor. Isso ocorre devido a que a [[Elasticidade de Preço da Demanda|Elasticidade-Preço da Demanda]] é menor (mais inelástica) do que a elasticidade-preço da oferta[^2].

---
### References
- VASCONCELLOS, Marco Antonio Sandoval de. **Economia: micro e macro**. 6 ed.
- [Concorrência Perfeita com Tributação : IMPOSTO por unidade - YouTube](https://www.youtube.com/watch?v=IkZNUZ7j9zE)

[^1]: Base $\times$ altura sobre $2$, essencialmente.
[^2]: Eu acho...?