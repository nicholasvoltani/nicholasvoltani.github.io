---
date: " 2025-06-23"
tags:
  - moc
  - economics
---

up:: [[062 MOC Microeconomia]]

- [[Ótimo de Pareto]]
- [[Caixa de Edgeworth]]
	- [[Conjunto de Pareto]]
- [[Primeiro Teorema do Bem-Estar]]
- [[Segundo Teorema do Bem-Estar]]
- [[Excedente Total]]
	- [[Excedente do Consumidor]]
	- [[Excedente do Produtor]]
	- [[Perda de Peso Morto]]
- [[Imposto Específico]]
	- [[Quanto mais inelástico, mais sensível ao imposto específico]]
- [[Imposto Ad Valorem]]
- [[O mercado é eficiente quando ele maximiza o excedente total]]
	- $\iff$ [[O mercado é eficiente quando ele minimiza a perda de peso morto]]
- [[Externalidade]]
- [[Função de Bem-Estar Social de Bentham]] ("Utilitarista"?)
- [[Função de Bem-Estar Social de Rawls]]

Quando se trata de economia de bem-estar (*welfare state economics*), trabalha-se (cf. MWG) com um modelo que tome em conta *consumidores*, *firmas* e *bens*. Assume-se que:
- Existem $L$ bens
	- Seus preços $p \in \mathbb{R}^L_{+}$ são *dados*
	- A dotação inicial do bem $l$ será denotada como $\omega_{l}$
- Existem $I$ consumidores (*households*, o que seja; consumo improdutivo)
	- Cada indivíduo $i$ possui uma dotação $w^{(i)}_{l}$ do bem $l$, de tal forma que $w_{l} = \sum_{i} w^{(i)}_{l}$
	- Uma *alocação* do bem $l$ ao consumidor $i$ será denotada como $x^{(i)}_{l}$: demanda pelo bem $l$ do consumidor $i$
	- Demanda total do consumidor $i$: $x^{(i)} \coloneqq \sum_{l} x^{(i)}_{l}$
	- Demanda total pelo bem $l$: $x_{l} \coloneqq \sum_{i} x^{(i)}_{l}$
	- Cada indivíduo possui uma [[Função Utilidade]] $u_{i}: \mathbb{R}^L \to \mathbb{R}$ 
- Existem $J$ firmas (consumo produtivo)
	- Sua demanda por *netputs* será denotada como $y^{j}_{l}$: demanda pelo bem $l$ da firma $j$
	- Demanda total por *netputs* da firma $j$: $y^{(j)} \coloneqq \sum_{l} y_{l}^{(j)}$
	- Quantidade total disponível do *netput* $l$: $y_{l} \coloneqq \sum_{j}y^{(j)}_{l}$
	- Cada indivíduo $i$ possui uma fração $\theta_{ij}$ das ações da firma $j$, de tal forma que $\sum_{i} \theta_{ij} = 1$. Devido aos dividendos que decorrem dessa fração, ele recebe uma fração $\theta_{ij} \braket{ p | y_{j} }$ do lucro da firma $j$

Note-se, portanto, que a quantidade inicial de cada bem na economia é $\omega_{l} + y_{l} = \omega_{l} + \sum_{j}y^{(j)}_{l}$.

Uma alocação é dita *factível* se ela estiver dentro dessa "[[Restrição Orçamentária]]", i.e.
$$
\begin{align}
x_{l} &\leq w_{l} + y_{l} \\
\iff \sum \limits_{i} x_{l}^{(i)} & \leq w_{l} + \sum \limits_{j} y^{(j)}_{l}
\end{align}
$$
Uma noção crucial em economia de bem-estar é a noção de ótimo de Pareto: uma alocação factível é ótimo de Pareto se um desvio dela deixar ao menos alguma das partes pior do que nela. Nesse sentido, uma alocação do tipo será a mais eficiente possível (*dadas as utilidades dos agentes*).

Uma certa alocação é um *equilíbrio competitivo (ou Walrasiano)* se satisfaz:
1) Maximização de lucros (para cada firma $j$)
$$
\max\limits_{y_{j} \in Y_{j}} \braket{ p^{*} | y_{j} } 
$$
2) Maximização de utilidade (para cada consumidor $i$)
$$
\max\limits_{x_{i} \in X_{i}} u_{i}(x_{i}) \mid \braket{ p^{*} | x_{i} }  \leq \braket{ p^{*} | \omega_{i} }  + \sum \limits_{j} \theta_{ij} \braket{ p^{*} | y_{j} } 
$$
3) *Market clearing* (para cada bem $l$)
$$
\sum \limits_{i} x^{*(i)}_{l} = \omega_{l} + \sum \limits_{j} y^{*(j)}_{l}
$$
Note-se que a solução do problema — a alocação $(x_{1}^{*}, \dots, x_{I},^{*} y_{1}^{*}, \dots, y^{*}_{J})$ — é invariante a mudanças da forma $p^{*} \mapsto \alpha p^{*}$ (para $\alpha>0$). Portanto, o problema apresenta $(I+J)L -1$ graus de liberdade. É, portanto, possível de normalizar os preços, a fim de usar um deles como numerário.

---
### References
- MAS-COLELL, Andreu; WHINSTON, Michael Dennis; GREEN, Jerry R. **Microeconomic theory**. New York: Oxford University Press, 1995.
- [MIT 14.04 Intermediate Microeconomic Theory, Fall 2020 (Robert Townsend)](https://www.youtube.com/playlist?list=PLUl4u3cNGP63wnrKge9vllow3Y2OOOKqF)