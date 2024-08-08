---
date: " 2024-08-06"
tags:
  - economics
aliases:
---

up:: [[Curva de Indiferença]]

![[Pasted image 20240806154330.png]]

Dada uma [[Curva de Indiferença]] $x_{2}(x_{1})$, temos que a taxa marginal de substituição – para uma dada [[Cesta de Bens]] $(\tilde{x}_{1},\tilde{x}_{2})$ – é a inclinação da curva
$$
\frac{dx_{2}}{dx_{1}}\Bigg|_{\tilde{x}_{1}} < 0
$$
Ela mede a mudança **marginal**[^1] de $x_{2}$ que é induzida por uma mudança de $x_{1}$. Note que [[A taxa marginal de substituição precisa ser negativa para preferências bem-comportadas]].

# Relação com função utilidade
Dada uma [[Função Utilidade]] $U(x_{1},x_{2})$, temos que a taxa marginal de substituição pode ser obtida pela variação na cesta de bens **para uma utilidade constante** (i.e. dada curva de indiferença). 

Trata-se, portanto, de algo do tipo
$$
dU = \frac{ \partial U }{ \partial x_{1} } dx_{1} + \frac{ \partial U }{ \partial x_{2} } dx_{2} = 0
$$

Disso sai que[^2]
$$
\frac{dx_{2}}{dx_{1}} = -\frac{\frac{ \partial U }{ \partial x_{1} }}{\frac{ \partial U }{ \partial x_{2} }} \bigg|_{U =  \bar{U}}
$$
É crucial notar, aqui, que estamos fazendo essa derivação **para alguma utilidade $\bar{U}$ específica**! 

Note também que, como estamos considerando [[Preferências bem-comportadas]] – e, em particular, que [[Preferências bem-comportadas são monotônicas]] –, temos que $\frac{ \partial U }{ \partial x_{i} } > 0$, pois "mais é melhor". Portanto, temos, de fato, que $\frac{dx_{2}}{dx_{1}} < 0$.


---
### References
- VARIAN, Hal. **Microeconomia**: uma abordagem moderna. 9 ed. Elsevier, 2015.

[^1]: Leia-se: **adicional**.
[^2]: Caso tenha ojeriza a dividir infinitesimais, note que estamos usando a função implícita $x_2 = x_2(x_1)$. A mesma derivação segue ao abrir $\frac{ \partial U }{ \partial x_{1} }$.