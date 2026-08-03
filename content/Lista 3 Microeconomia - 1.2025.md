---
date: "2025-06-16"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]] // [[062b MOC Teoria do Consumidor]]

# Exercício 4
![[Pasted image 20250616170256.png|600]]

Seja $u(x_{1},x_{2}) = (x_{1}-\alpha_{1})^{\beta_{1}} (x_{2}-\alpha_{2})^{\beta_{2}}$ a [[Função Utilidade]], e $m = \braket{ p | x }$ a [[Restrição Orçamentária]]. 

O problema de minimização de dispêndio é
$$
\min\limits_{x} \braket{ p | x } \, \mid \, u(x) = \bar{u}
$$
O lagrangiano associado será
$$
\mathcal{L} = p_{1}x_{1} + p_{2}x_{2}  + \lambda\left((x_{1}-\alpha_{1})^{\beta_{1}} (x_{2}-\alpha_{2})^{\beta_{2}} - \bar{u}\right)
$$

As condições de primeira ordem serão
$$
\begin{cases}
\frac{ \partial \mathcal{L} }{ \partial x_{1} } = 0 \implies p_{1} &= - \lambda \beta_{1} (x_{1}-\alpha_{1})^{\beta_{1}-1} (x_{2}-\alpha_{2})^{\beta_{2}} \\
\frac{ \partial \mathcal{L} }{ \partial x_{2} } = 0 \implies p_{2} &= -\lambda \beta_{2} (x_{1}-\alpha_{1})^{\beta_{1}}(x_{2}-\alpha_{2})^{\beta_{2}-1} \\
\frac{ \partial \mathcal{L} }{ \partial \lambda }  = 0 \implies \bar{u} &= (x_{1}-\alpha_{1})^{\beta_{1}} (x_{2}-\alpha_{2})^{\beta_{2}}
\end{cases}
$$
Dividindo as primeiras duas equações, temos
$$
\begin{align}
\frac{p_{1}}{p_{2}} &= \frac{\beta_{1}}{\beta_{2}} \frac{x_{2}-\alpha_{2}}{x_{1}-\alpha_{1}} \\
\therefore x_{2} - \alpha_{2} &= \frac{\beta_{2}}{p_{2}} \frac{p_{1}}{\beta_{1}} (x_{1}-\alpha_{1})
\end{align}
$$
Pela restrição de utilidade, temos
$$
\bar{u} = \left( \frac{\beta_{2}}{p_{2}} \frac{p_{1}}{\beta_{1}} \right)^{\beta_{2}} (x_{1}-\alpha_{1})^{\beta_{1}+\beta_{2}}
$$
Portanto, isolando para $x_{1}$ —  e, portanto, para $x_{2}$ —, obtém-se as [[Demanda Hicksiana|Demandas Hicksianas]]
$$
\begin{cases}
x_{1}^* \eqqcolon h_{1} = \alpha_{1} + \bar{u}^{\frac{1}{\beta_{1}+\beta_{2}}} \left( \frac{\beta_{1}}{p_{1}} \frac{p_{2}}{\beta_{2}} \right)^{\frac{\beta_{2}}{\beta_{1}+\beta_{2}}} \\
x_{2}^* \eqqcolon h_{2} = \alpha_{2} + \bar{u}^{\frac{1}{\beta_{1}+\beta_{2}}} \left( \frac{\beta_{2}}{p_{2}} \frac{p_{1}}{\beta_{1}} \right)^{\frac{\beta_{1}}{\beta_{1}+\beta_{2}}}
\end{cases}
$$
A [[Função Dispêndio]] é
$$
e(p, \bar{u}) = \braket{ p | h } = p_{1} \left(\alpha_{1} + \bar{u}^{\frac{1}{\beta_{1}+\beta_{2}}} \left( \frac{\beta_{1}}{p_{1}} \frac{p_{2}}{\beta_{2}} \right)^{\frac{\beta_{2}}{\beta_{1}+\beta_{2}}} \right) + p_{2} \left(\alpha_{2} + \bar{u}^{\frac{1}{\beta_{1}+\beta_{2}}} \left( \frac{\beta_{2}}{p_{2}} \frac{p_{1}}{\beta_{1}} \right)^{\frac{\beta_{1}}{\beta_{1}+\beta_{2}}}\right)
$$
Tomando o dispêndio como sendo algum valor $w$, e isolando em termos de $\bar{u}$, temos a [[Função de Utilidade Indireta]] $v(p, w) \coloneqq \bar{u}$. Deixado como exercício para o leitor corajoso.[^1] Encontre também as demandas marshallianas *while you're at it*.

# Exercício 6
![[Pasted image 20250616180829.png|600]]
A função utilidade é uma [[Função de Cobb-Douglas]] $u(x_{1},x_{2}) = x_{1}^{1/2}x_{2}^{1/3}$, com restrição orçamentária $m = \braket{ p | x }$.

O problema de maximização de utilidade tem as condições de primeira ordem:
$$
\begin{cases}
\frac{1}{2} x_{1}^{-1/2}x_{2}^{1/3} = -\lambda p_{1} \\
\frac{1}{3}x_{1}^{1/2}x_{2}^{-2/3} = -\lambda p_{2}
\end{cases}
$$
Dividindo a primeira pela segunda, temos
$$
\begin{align}
\frac{3}{2} x_{1}^{-1} x_{2}^{1} = \frac{p_{1}}{p_{2}} \\
\therefore x_{2} = \frac{p_{1}}{p_{2}} \frac{2}{3} x_{1}

\end{align}
$$
Substituindo na restrição orçamentária, temos as [[Demanda Marshalliana|Demandas Marshallianas]]:
$$
\begin{align}
p_{1}x_{1} + p_{2} \frac{p_{1}}{p_{2}} \frac{2}{3} x_{1} = m \\
\therefore \begin{cases}
x_{1} = \frac{3}{5} \frac{m}{p_{1}} \\
x_{2} = \frac{2}{5} \frac{m}{p_{2}}
\end{cases}
\end{align}
$$
Perceba-se que as frações são os pesos que esses bens possuem numa função Cobb-Douglas normalizada:[^2]
$$
\begin{align}
\frac{1}{2} + \frac{1}{3} &= 1 \\
=  \frac{3}{5} + \frac{2}{5}  
\end{align}
$$

Através dela, podemos obter a [[Função de Utilidade Indireta]], utilidade obtida nesta cesta ótima:
$$
\begin{align}
v(p, w) &= u(x^*) = \left( \frac{3}{5} \frac{m}{p_{1}} \right)^{1/2} \left( \frac{2}{5} \frac{m}{p_{2}} \right)^{1/3}  \\
&= \left( \frac{m}{5} \right)^{5/6} \left( \frac{3}{p_{1}} \right)^{1/2} \left( \frac{2}{p_{2}}\right)^{1/3} \\
&= \left( \frac{m}{5} \right)^{5/6} \left( 3 p_{1}^{-1} \right)^{1/2} \left( 2 p_{2}^{-1}\right)^{1/3}
\end{align}
$$
Fazendo com que $v(p,w) = \bar{u}$, e isolando em função de $e(p, \bar{u}) \coloneqq m$, temos a [[Função Dispêndio]]
$$
e(p, \bar{u}) = 5 \left( \frac{p_{1}}{3} \right)^{3/5} \left( \frac{p_{2}}{2} \right)^{2/5} \bar{u}^{6/5}
$$

Como [[Lema de Shephard|A demanda condicional de fatores de produção é o gradiente da função custo]], temos que a [[Demanda Hicksiana]] é
$$
\begin{cases}
h_{1}(p, \bar{u}) = \frac{ \partial e }{ \partial p_{1} } = \left( \frac{p_{1}}{3} \right)^{-2/5} \left( \frac{p_{2}}{2} \right)^{2/5} \bar{u}^{6/5} \\
h_{2}(p, \bar{u}) = \frac{ \partial e }{ \partial p_{2} } = \left( \frac{p_{1}}{3} \right)^{3/5} \left( \frac{p_{2}}{2} \right)^{-3/5} \bar{u}^{6/5}
\end{cases}
$$



---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.

[^1]: A vida é curta demais para resolver um problema imbecil como esse!
[^2]: [[Funções monotônicas preservam curvas de indiferença]]. A função monotônica que levaria a função dada pelo exercício a essa normalizada seria a função potência $f(z) = z^{6/5}$: $x^{1/2} \mapsto x^{3/5}$; $x^{1/3} \mapsto x^{2/5}$. 