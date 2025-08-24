---
date: "2024-12-05"
tags:
  - economics
aliases:
---

up:: [[061 MOC Macroeconomia]], [[062 MOC Microeconomia]]

![[Pasted image 20241205095408.png|500]]
Fonte: [Macroeconomia 033 Oferta Agregada Retorno de Escala - YouTube](https://youtu.be/jp2eK5hf-CI?list=PLT4EcyyDiDfs7KbIdVLwsxmld3yo9S1FW&t=681)

Retornos de escala de uma [[Função Produção]] $Y$ são dados por
$$
\frac{ \partial Y }{ \partial FP } \frac{FP}{Y}
$$
onde $FP$ são [[Fatores de Produção]] ($K$ ou $L$). *Grosso modo*, é uma espécie de **elasticidade**.

Pode-se reescrever essa equação através de $\ln$s como[^1]
$$
\frac{ \partial \ln Y }{ \partial \ln FP } 
$$
ou seja, com um *rescaling*. Dessa forma, pode-se ver que há uma diferença na "inclinação da reta" da função $\log$-produção em termos dos $\log$-fatores, dependendo dos retornos de escala da produção.

---
### References
- [Macroeconomia 033 Oferta Agregada Retorno de Escala - YouTube](https://youtu.be/jp2eK5hf-CI?list=PLT4EcyyDiDfs7KbIdVLwsxmld3yo9S1FW&t=681)

[^1]: Demonstração: Seja $K$ um fator de produção qualquer, e $Y = f(K) = f(e^{\ln K})$. Então $\frac{ \partial \ln f(K) }{ \partial \ln K } = \frac{f'(K)}{f(K)} \frac{ \partial (K=e^{\ln K)} }{ \partial \ln K } = \frac{ \partial Y }{ \partial K } \frac{K}{Y}$ (pois $K = e^{\ln K}$, para qualquer $K \neq 0$).