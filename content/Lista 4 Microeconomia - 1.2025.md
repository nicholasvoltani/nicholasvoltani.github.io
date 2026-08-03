---
date: "2025-06-24"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]]

# Utilidades esperadas e gestão de desastres
![[Pasted image 20250624153155.png|500]]
Fonte: MAS-COLELL et al., p. 208.

Temos a seguinte matriz de decisão:

| Inundação $\rightarrow$<br>$\downarrow$ Evacuação | $I$ | $\lnot I$ |
| ------------------------------------------------- | --- | --------- |
| $E$                                               | $C$ | $B$       |
| $\lnot E$                                         | $D$ | $A$       |
onde $A, B, C, D$ são as todas as possíveis situações. Tenha-se $P(I) = 0.01 \iff P(\lnot I) = 0.99$.

A agência de segurança possui as seguintes preferências ($p, q \in (0,1)$):
$$
\begin{cases}
B \sim p A + (1-p) D \\
C \sim q B + (1-q) D \\
A \succ D
\end{cases}
$$

### a)
*Ex hypothesi*, podemos criar uma [[Utilidade Esperada]] $U(\cdot)$ de tal forma que satisfaça as preferências acima:
$$
\begin{cases}
U(B) = p U(A) + (1-p) U(D) \\
U(C) = q U(B) + (1-q) U(D) \\
U(A) > U(D)
\end{cases}
$$
Defina-se $U(D) = 0$ e $U(A) = 1$. Segue então que $U(B) = p$ e $U(C) = q$.

### b)
Dadas probabilidades $P(E \mid I)$ e $P(E \mid \lnot I)$, junto de $P(I)$, pode-se inferir todas as probabilidades dos eventos $A, B, C, D$ pela definição de probabilidades bayesianas:
$$
\begin{cases}
P(C) = P(E \land I) &= P(E \mid I) \cdot P(I) \\
P(D) = P(\lnot E \mid I) &= P(\lnot E \mid I) \cdot P(I) \\
P(B) = P(E \land \lnot I) &= P(E \mid \lnot I) \cdot P(\lnot I) \\
P(A) = P(\lnot E \land \lnot I) &= P(\lnot E \mid \lnot I) \cdot P(\lnot I)
\end{cases}
$$
Critério $1$: 
- $P(E \mid I) = 0.90$ ($\implies P(\lnot E \mid I) = 0.10$)
- $P(E \mid \lnot I) = 0.10$ ($\implies P(\lnot E \mid \lnot I) = 0.90$)
Logo, tem-se que
$$
\begin{cases}
P(A) = 0.891 \\
P(B) = 0.099 \\
P(C) = 0.009 \\
P(D) = 0.001
\end{cases}
$$

Critério $2$:
- $P(E \mid I) = 0.95$ ($\implies P(\lnot E \mid I) = 0.05$)
- $P(E \mid \lnot I) = 0.15$ ($\implies P(\lnot E \mid \lnot I) = 0.85$)
Logo, tem-se que
$$
\begin{cases}
P(A) = 0.8415 \\
P(B) = 0.1485 \\
P(C) = 0.0095 \\
P(D) = 0.0005
\end{cases}
$$

As respectivas utilidades esperadas são simplesmente $\sum \limits_{i} P(X_{i}) \, U(X_{i})$. Deseja-se saber em quais casos se preferiria uma invés da outra; sem perda de generalidade, calculemos o caso de que se prefere (a loteria) $I$ ante (à loteria) $II$. Ou seja, $U(I) > U(II)$. Em números:
$$
\begin{align}
0.891 + 0.099 p + 0.0009 q &> 0.8415 + 0.1485p + 0.0095 q \\
\iff 0.495 &> 0.0495p + 0.005q
\end{align}
$$
Dividindo tudo por $0.005$, tem-se que o critério $I$ é preferível ao critério $II$ se e somente se
$$
99 > 99p + q
$$

$II$ é preferível a $I$ ao inverter a desigualdade.

# Exemplo de seguros
![[Pasted image 20250624155541.png|500]]
Fonte: MAS-COLELL et al., p. 187.

Informações do problema:
- Agente é estritamente [[Aversão ao Risco|avesso ao risco]]
- Riqueza inicial de $w$ (unidades monetárias)
- Risco de perda (sinistro) de $D$ (unidades monetárias)
	- A probabilidade desse sinistro é de $\pi \in (0,1]$
- Uma unidade de seguro custa $q$ (unidades monetárias por unidade de seguro)
	- Agente decide comprar $\alpha \geq 0$ unidades de seguro, gastando $\alpha q$ unidades monetárias
	- Ao acionar o seguro, cada unidade de seguro rende $\lambda$ unidades monetárias (recebe total de $\alpha \lambda$ de indenização do sinistro); note que $\lambda = 1$ no exercício, o que pode causar confusões de unidades conforme a resolução do exercício (melhor detalhado abaixo)

Logo, sua riqueza resultante esperada é
$$
\pi (w - \alpha q + \alpha \lambda - D) + (1-\pi) (w - \alpha q)
$$

A utilidade esperada (vN-M) é
$$
\pi \, u(w - \alpha q + \alpha \lambda - D) + (1-\pi) \, u(w -\alpha q)
$$

Deseja-se maximizar essa utilidade esperada com relação à quantidade de unidades de seguros compradas. A condição de primeira ordem é da forma
$$
\pi (\lambda - q) \, u'(w + (\lambda - q) \alpha^{*} - D) + (1-\pi) (-q) \, u'(w - \alpha^{*} q) \leq 0
$$
com igualdade se $\alpha^{*} > 0$.

O preço atuarialmente justo é obtido o custo do segurado é igual ao custo esperado da seguradora. Ou seja,
$$
q = \pi \lambda + (1-\pi) \cdot 0
$$
Logo, a seguradora cobra um preço atuarialmente justo quando $q = \pi \lambda$. Ressubstituindo na condição de primeira ordem, temos
$$
\begin{align}
\pi (\lambda - \pi \lambda) \, u' (\text{sinistro}) + (1-\pi) (-\pi\lambda) \, u'(\text{não-sinistro}) &\leq 0 \\
\cancel{ \pi \lambda (1 - \pi) } (u'(\text{sinistro}) - u'(\text{não-sinistro})) &\leq 0
\end{align}
$$
Logo, temos
$$
u'(w - D + \alpha^{*} \lambda (1- \pi)) \leq u'(w - \alpha^{*} \lambda \pi)
$$
Como temos um segurado que é estritamente avesso ao risco, então temos que, em particular,
$$
u'(w - D) > u'(w) 
$$
ou seja, quanto menos dinheiro ele tem, tanto mais sua utilidade vai crescer ao receber mais unidades monetárias. Como a desigualdade da condição de primeira ordem inverteu, e como $\alpha^{*} \geq 0$, então $\alpha^{*} > 0$, em cujo caso a desigualdade de primeira ordem vira uma igualdade.

Além disso, como $u$ é suposta estritamente crescente, ela é injetiva, portanto tem-se que
$$
\cancel{ w } - D + \alpha^{*} \lambda (1-\cancel{ \pi }) = \cancel{ w } - \cancel{ \alpha^{*} \lambda \pi }
$$
Ou seja,
$$
\alpha^{*} = \frac{D}{\lambda}
$$
Ou seja, o prêmio que o segurado paga é exatamente o que ele esperaria receber em um sinistro. Matematicamente, pode-se ver isso também: sua riqueza em ambos os casos ficaria a mesma:
$$
\begin{cases}
\pi: w - \frac{q}{\lambda} \pi D \\
(1-\pi): w - \frac{q}{\lambda} \pi D + \cancel{ D } - \cancel{ \alpha^{*} \lambda }
\end{cases}
$$

![[Pasted image 20250624162843.png|600]]
Fonte: Ibid., p. 209.

Suponhamos que o preço cobrado pelo seguro não seja atuarialmente justo: $q > \pi\lambda$. 

Suponha, por absurdo, que o segurado ainda queira cobrir-se completamente, i.e. $\alpha^{*} = \frac{D}{\lambda}$. 

Então teremos que sua riqueza não mudará, e sua condição de primeira ordem será
$$
\pi (\lambda - q)\, \underbrace{ u'\left( w - \frac{q}{\lambda} \pi D  \right) }_{ \coloneqq u' } + (1-\pi) (-q) \, \underbrace{ u'\left( w - \frac{q}{\lambda} \pi D \right) }_{ \coloneqq u' } \leq 0
$$
Reorganizando, temos
$$
(\pi \lambda - \cancel{ \pi q } - q + \cancel{ \pi q }) u' = \underbrace{ (\pi\lambda - q) }_{ < 0 } \underbrace{ u' }_{ \geq 0 } < 0
$$
Pelos critérios de Kuhn-Tucker, só se satisfaz a desigualdade estrita se $\alpha^{*} = 0$ — absurdo. Portanto, temos de ter que $\alpha^{*} \neq \frac{D}{\lambda}$.

---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.