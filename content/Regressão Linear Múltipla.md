---
date: " 2024-11-18"
tags:
  - mathematics
aliases:
---

up:: [[064 MOC Estatística em Economia]]

![[Pasted image 20241118095128.png|400]]
Fonte: [Multiple Linear Regression-An intuitive approach | by Niketh Narasimhan | Analytics Vidhya | Medium](https://medium.com/analytics-vidhya/multiple-linear-regression-an-intuitive-approach-f874f7a6a7f9)

Um modelo de regressão linear múltipla segue a forma
$$
\vec{Y} = X \vec{\beta} + \vec{\epsilon}
$$
onde
- $\vec{Y}, \vec{\epsilon} \in \mathbb{R}^{n}$ (dependem da quantidade de *observações*)
- $\vec{\beta} \in \mathbb{R}^{p+1}$ (depende da quantidade de *características* $p$, mais viés $\beta_{0}$)
- $X \in \mathbb{R}^{n \times (p+1)}$ é a *matriz de desenho* (*design matrix*), que possui as observações das variáveis independentes $X_{i}^{k}$ 

Para fazer uma regressão linear múltipla, seguem-se as *hipóteses de Gauss-Markov*:
1. $\mathbb{E}[\vec{\epsilon}] = \vec{0} \in \mathbb{R}^{n}$
	1. Portanto, $\mathbb{E}[\vec{Y}] = X \vec{\beta}$[^1]
2. $Var(\vec{\epsilon}) = \sigma^{2}\mathbb{1}_{n \times n}$  
	1. Portanto, $Var(\vec{Y}) = \sigma^{2} \mathbb{1}_{n \times n}$[^2]

# Solução de Mínimos Quadrados
Ao obter o mínimo do erro quadrático
$$
||\vec{\epsilon}||^{2} = ||\vec{Y} - X\vec{\beta}||^{2}
$$
obtém-se que a melhor estimativa para $\beta$ é[^3]
$$
\hat{\beta} = (X^{T}X)^{-1} X^{T} \vec{Y}
$$

Disso, obtém-se que a previsão de $Y$ é
$$
\hat{Y} = X \hat{\beta} = \underbrace{ X (X^{T}X)^{-1}X^{T} }_{ \equiv H } \vec{Y}
$$
onde $H \in \mathbb{R}^{n \times n}$ é uma matriz de projeção ortogonal[^4]  ao plano determinado por $\hat{\beta}$. 

# Propriedades de $\hat{\beta}$
O valor esperado de $\hat{\beta}$ é (vide propriedade 1 acima)
$$
\begin{align}
\mathbb{E}[\hat{\beta}] &= (X^{T}X)^{-1}X^{T} \mathbb{E}[Y]  \\
&= \cancel{ (X^{T}X)^{-1} }\cancel{ X^{T} X } \beta \\
&= \beta
\end{align}
$$
Portanto, $\hat{\beta}$ é um [[Estimador Não-Enviesado]].

A variância de $\hat{\beta}$ é (vide propriedade $2$ acima)
$$
\begin{align}
Var(\hat{\beta}) &= Var(\underbrace{ (X^{T}X)^{-1}X^{T} }_{ \equiv A } \vec{Y}) \\
&= \mathbb{E}[\braket{ A(\vec{Y} - \vec{\mu}) | A (\vec{Y}) - \vec{\mu} } ] \\
&= \mathbb{E}[A (\vec{Y}-\vec{\mu})(\vec{Y}-\vec{\mu})^{T} A^T] \\
&= Var(\vec{Y}) A A^{T} \\
&= \sigma^{2} (X^{T}X)^{-1}
\end{align}
$$
Este estimador $\hat{\beta}$ é o [[Melhor Estimador Linear Não-Enviesado]] de $\beta$  (ou seja, de menor variância dentre estimadores lineares) devido ao [[Teorema de Gauss-Markov]].


---
### References
- GUJARATI, Damodar N. **Basic econometrics**. 5ª edição.
- [09. Modelos de Regressão Linear Múltipla - Parte 1 - YouTube](https://www.youtube.com/watch?v=E--rXAFmm-A)
- [6. Regression Analysis - YouTube](https://www.youtube.com/watch?v=l1kLCrxL9Hk&list=PLUl4u3cNGP63ctJIEC1UnZ0btsphnnoHR&index=5)
- [A brief summary on Machine Learning (Nicholas Funari Voltani)](https://drive.google.com/file/d/13552--FtRgltLTbYhh2zbWZiE76LAZVV/view)

[^1]: I.e. o preditor linear $\hat{Y} = X \hat{\beta}$ é igual ao valor esperado da variável que ele busca estimar, $Y$.
[^2]: Pois assume-se que a matriz de design $X$ é *determinística* (!!!)
[^3]: Estamos falando de *estimadores*, pois estamos fazendo *mínimos quadrados*, ou seja, estamos trabalhando com uma quantidade finita $n$ de dados, não com a distribuição estatística "verdadeira" de $X$ e $Y$. Pressupondo que $\vec{Y} = X \vec{\beta}$ "realmente", então nossa melhor estimativa dessa relação, com nossos $n$ dados, será através de $\hat{\beta}$.
[^4]: Em inglês, alguns chamam ela de *hat matrix*, pois ela converte $\vec{Y}$ em $\hat{Y}$ ("*Y-hat*"). Cf. [*problem set* do MIT](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/61d868106b4de23e5c59c04512954a8b_MIT18_S096F13_pset3.pdf).
