---
date: "2025-04-24"
tags:
  - economics
aliases:
---

up:: [[0x5 MOC Mestrado]] // [[062b MOC Teoria do Consumidor]]

# Exercício 2 — Utilidade CES
![[Pasted image 20250424142741.png|500]]

Tem-se que a [[Função de Utilidade CES]]
$$
u(x) = (\alpha_{1} x_{1}^\rho + \alpha_{2}x_{2}^\rho)^{1/\rho}
$$
é linear quando $\rho = 1$, e converge para a [[Função de Cobb-Douglas]] quando $\rho \to 0$. 
**Suponha-se também que $\sum_{i} \alpha_{i} = 1$.**

Para verificar isso, podemos fazer a sequência de operações[^6]
$$
\ln \to \lim_{ \rho \to 0 } \to \exp \iff \lim_{ \rho \to 0 } 
$$



$$
\tilde{u}_{\rho}(x) \equiv \ln(u(x)) = \frac{1}{\rho} \ln(\alpha_{1} x_{1}^\rho + \alpha_{2}x_{2}^\rho)
$$
Tomando o limite, teríamos uma situação $\frac{0}{0}$, i.e. regra de L'Hôpital:
$$
\lim_{ \rho \to 0 } \tilde{u}_{\rho}(x) = \frac{\frac{ \partial  }{ \partial \rho } \ln(\alpha_{1} x_{1}^\rho + \alpha_{2}x_{2}^\rho)}{1}
$$

Porém, **a derivada não é em relação a $x$**!
$$
\frac{ \partial x^\rho }{ \partial \rho } = \frac{ \partial  }{ \partial \rho } \exp(\ln x^\rho) = \frac{ \partial  }{ \partial \rho } \exp(\rho \ln x) = \ln(x) \exp(\ln x^\rho) = \ln(x) x^\rho
$$

Portanto, o limite fica
$$
\begin{align*}
\lim_{ \rho \to 0 } \tilde{u}_{\rho}(x) &= \lim_{ \rho \to 0 } \frac{\alpha_{1} \ln(x_{1}) x_{1}^\rho + \alpha_{2} \ln(x_{2}) x_{2}^\rho}{\alpha_{1} x_{1}^\rho + \alpha_{2} x_{2}^\rho} \\
&= \alpha_{1} \ln x_{1} + \alpha_{2} \ln x_{2}
\end{align*}
$$
Re-exponenciando, temos que
$$
\lim_{ \rho \to 0 } u(x) = x_{1}^{\alpha_{1}} x_{2}^{\alpha_{2}}
$$

Uma visualização dessa convergência:
![[ConstantElasticityOfSubstitution.mp4|500]]
Fonte: [Eu mesmo!](https://github.com/nicholasvoltani/Manimations/tree/master/ConstantElasticitySubstitution_Function)

# Exercício 3
![[Pasted image 20250424155348.png|500]]

### Demandas walrasianas da CES
Pode-se resolver a [[Demanda Marshalliana|Demanda Walrasiana]] para a [[Função de Utilidade CES]] em geral. Para isso, compensa resolver o problema de otimização para a nova utilidade[^4]
$$
\tilde{u}(x) \equiv \rho \, u(x)^\rho = \rho (\alpha_{1} x_{1}^\rho + \alpha_{2} x_{2}^\rho)
$$

Pela otimização do lagrangiano associado, temos[^1]
$$
\begin{align*}
\frac{\partial_{1}\tilde{u}}{p_{1}} &= \frac{\partial_{2}\tilde{u}}{p_{2}} \\
\implies \frac{\alpha_{1} x_{1}^{\rho-1}}{p_{1}} &= \frac{\alpha_{2} x_{2}^{\rho -1}}{p_{2}} \\
\therefore x_{2} &= x_{1} \left( \frac{\alpha_{1}}{\alpha_{2}} \frac{p_{2}}{p_{1}} \right)^{\frac{1}{\rho-1}}
\end{align*}
$$
Assumindo $\alpha_{1} = \alpha_{2}$[^2], e ressubstituindo na [[Restrição Orçamentária]], temos
$$
\begin{align*}
w &= x_{1}\left( p_{1} + \frac{p_{2}^{1 + 1/(\rho-1)}}{p_{1}^{1/(\rho-1)}} \right) \\
&= x_{1} \frac{(p_{1}^{\rho/(\rho-1)} + p_{2}^{\rho/(\rho-1)})}{p_{1}^{1/(\rho-1)}}
\end{align*}
$$

Defina-se $\delta \equiv \frac{\rho}{\rho-1}$; portanto, $\delta-1 = \frac{1}{\rho-1}$. Estamos analisando $\rho \in (-\infty, 1) \iff \delta \in (-\infty, 1)$, onde $(\rho=1) \leftrightarrow (\delta \to -\infty)$ e vice-versa.

Logo, as demandas walrasianas para a função CES (com pesos iguais) são
$$
\begin{cases}
x_{1} = \frac{p_{1}^{\delta-1}}{p_{1}^\delta + p_{2}^\delta} w \\
x_{2} = \frac{p_{2}^{\delta-1}}{p_{1}^\delta + p_{2}^\delta} w
\end{cases}
$$

Note-se que é possível reescrevê-las como
$$
\begin{cases}
x_{1} = \frac{1}{1 + \left( \frac{p_{2}}{p_{1}} \right)^\delta} \frac{w}{p_{1}} \\
x_{2} = \frac{1}{\left( \frac{p_{1}}{p_{2}} \right)^\delta + 1} \frac{w}{p_{2}}
\end{cases}
$$

O caso linear $(\rho=1) \leftrightarrow (\delta \to -\infty)$ depende dos preços relativos, ficando[^3]
$$
x(p, w) = 
\begin{cases}
\left( \frac{w}{p_{1}}, 0 \right) \,\, &\text{se } p_{1} < p_{2}  \\
\forall \lambda \in [0,1]: \left( \lambda \frac{w}{p}, (1-\lambda) \frac{w}{p} \right) \,\, &\text{se } p_{1} = p_{2} \equiv p \\
\left( 0, \frac{w}{p_{2}} \right) \,\, &\text{se } p_{1} > p_{2}
\end{cases}
$$

A [[Função de Leontief]] vem quando $(\rho \to -\infty) \leftrightarrow (\delta = 1)$:
$$
x_{1} = \frac{w}{p_{1} + p_{2}} = x_{2}
$$

### Elasticidades de substituição
![[Pasted image 20250424162324.png|500]]

A elasticidade de substituição de $x_{1}$ por $x_{2}$ é definida como:
$$
\xi_{12}(p, w) = \frac{ \partial x_{1}/x_{2} }{ \partial p_{1}/p_{2} } \frac{ p_{1}/p_{2}}{x_{1}/x_{2}} 
$$
Em verdade, se está falando da elasticidade no tocante à [[Taxa Marginal de Substituição]]:
$$
\xi_{12}(p, w) = \frac{ \partial \ln (\frac{x_{1}}{x_{2}}) }{ \partial \ln(TMS_{12}) } 
$$

Note-se que ela geralmente é **negativa**, pois, conforme se aumenta o preço relativo $\frac{p_{1}}{p_{2}}$ (p. ex. $p_{1}$ aumentando conforme $p_{2}=const$), a demanda relativa $\frac{x_{1}}{x_{2}}$ aumenta[^5]; portanto, aumentar um **diminui** o outro, e a elasticidade fica negativa.

No caso geral da função CES (com $\alpha_{1} = \alpha_{2}$), tem-se que
$$
\frac{x_{1}}{x_{2}} = \left( \frac{p_{1}}{p_{2}} \right)^{\delta-1}
$$
Derivando com relação a $\frac{p_{1}}{p_{2}}$, tem-se
$$
\frac{ \partial \left( \frac{x_{1}}{x_{2}} \right) }{ \partial \left( \frac{p_{1}}{p_{2}} \right) } = (\delta-1) \left( \frac{p_{1}}{p_{2}} \right)^{\delta-2} 
$$
Portanto, a elasticidade de substituição fica
$$
\xi_{12}(p,w) = (\delta - 1) \cancel{ \frac{\left( \frac{p_{1}}{p_{2}} \right)^{\delta - 2} \frac{p_{1}}{p_{2}}}{\left( \frac{p_{2}}{p_{1}} \right)^{\delta - 1}} }
$$
Reabrindo com relação ao parâmetro original da CES, tem-se
$$
\xi_{12}(p,w) = \delta - 1 = \frac{1}{\rho - 1} \left( = - \frac{1}{1 - \rho} \right)
$$

Para a utilidade linear, $\xi_{12} \to - \infty$; para Cobb-Douglas, $\xi_{12} \to -1$; e para Leontief, $\xi_{12} \to 0$. 



---
### References
- VARIAN, Hal R. **Intermediate microeconomics: a modern approach**. 9 ed. W. W. Norton, 2014.
- [Constant elasticity of substitution - Wikipedia](https://en.wikipedia.org/wiki/Constant_elasticity_of_substitution)
	- [CES: Production function: Elasticity of substitution \$\\sigma = 1/(1 + \\rho)\$ - Economics Stack Exchange](https://economics.stackexchange.com/questions/11412/ces-production-function-elasticity-of-substitution-sigma-1-1-rho)
- [econ.ucsb.edu/\~tedb/Courses/GraduateTheoryUCSB/elasticity\_of\_substitution2015.pdf](https://www.econ.ucsb.edu/~tedb/Courses/GraduateTheoryUCSB/elasticity_of_substitution2015.pdf)

[^1]: Notação para simplicidade: $\partial_{i}u \equiv \frac{ \partial u }{ \partial x_{i} }$.
[^2]: Não creio que seja correto fazer ambos iguais a $1$, pois (ao que parece) deve-se ter $\alpha_{1}+\alpha_{2}=1$. De qualquer forma, quer dizer a mesma coisa: ambos $x_{1}$ e $x_{2}$ possuem mesmo "peso".
[^3]: Caso $p_{1} \neq p_{2}$, então $\left( \frac{p_{1}}{p_{2}} \right)^\delta$ ou $\left( \frac{p_{2}}{p_{1}} \right)^\delta$ vai divergir conforme $\delta \to -\infty$, caso $p_{1}<p_{2}$ ou $p_{1} > p_{2}$ respectivamente. Caso $p_{1}=p_{2}$, não faz diferença alguma intercambiar $x_{1}$ por $x_{2}$, sendo qualquer combinação convexa de ambos equivalente.
[^4]: De novo, [[Funções monotônicas preservam curvas de indiferença]].
[^5]: Para [[Bens Normais]], que são o mais comum. Para [[Bens de Giffen]], seria positivo: aumentar o preço relativo aumentaria a demanda relativa.
[^6]: Isso é o que chamam em Teoria de Grupos de [conjugação](https://en.wikipedia.org/wiki/Conjugacy_class), i.e. dado um elemento $g$, fazemos $h^{-1} \cdot g \cdot h$ com algum $h$. Nesse caso, com a expectativa de que $h^{-1} \cdot g \cdot h = g$: tirar o $\log$, tomar o limite, e re-exponenciar, é o mesmo que tomar o limite, *pois as funções são contínuas e bem-definidas no domínio das cestas de bens $\mathbb{R}_{+}^L$*.