---
date: "2026-08-23"
tags:
  - daily
draft: "false"
aliases:
---
up:: 

![[exemplo_hofig_muller_2022.drawio.svg]]

Assuma-se como dado:
1) Empréstimos são feitos a uma taxa $i_{X}$, pagos a cada intervalo de tempo de $T$
2) Depósitos rendem a uma taxa $i_{Y}$, pagos a cada intervalo de tempo $T$ (assumido igual ao acima, por simplicidade)
3) Juros *simples*: o valor a se pagar após tempo $t$ depois do empréstimo é $\left( 1+i_{X} \frac{t}{T} \right) D$, e *mutatis mutandis* para o rendimento de depósitos com taxa $i_{Y}$
4) O capital adiantado pelo setor capitalista como um todo — produtor de meios de produção e meios de consumo — é $D=D_{FT} + D_{MP}$, com o qual seu produto tem [[valor]] $D^{\prime}=D_{MC^{\prime}}+D_{MP^{\prime}} > D$

Supomos que, após o capitalista fazer um empréstimo de $D$, a uma dada taxa $i_{X}$ e demandando juros $i_{X}D$ a cada período de tempo $T$, ele irá comprar tanto [[meios de produção]], de valor $D_{MP}$, quanto [[Força de Trabalho|força de trabalho]], de valor $D_{FT}$. 

Após o pagamento da força de trabalho — que assumimos aqui que seja feito *no momento de sua contratação*, supomos que este dinheiro permaneça em depósito, rendendo juros à taxa $i_{Y}$. 

### 1) $T_{D-M}$
Após comprar todos os meios necessários, e prestes a começar o processo de produção, temos as seguintes situações:
- **Capitalistas** (K): Despenderam $D$; até agora, deve $\left( 1+i_{X} \frac{T_{D-M}}{T} \right)D$ ao banco
- **Trabalhadores** (W): Receberam $D_{FT}$ em $T_{D-FT}$, que ficou depositado até $T_{D-M}$. Ao final deste período, têm em depósito $\left( 1+i_{Y}\frac{(T_{D-M}-T_{D-FT})}{T} \right)D_{FT}$ 

Note-se que, caso os capitalistas — denotados por K — pague os trabalhadores — denotados por W — no momento de sua contratação, é lógico que ele o fará *logo antes do processo de produção*, fazendo com que este valor seja, no mínimo, desprezível. No entanto, mantenhamos ele e vejamos como ele comparece no resultado final.

## 2) $T_{prod}$
Após o período de produção, temos que:
1) **Capitalistas** (K): Possuem agora produto de valor $D^{\prime}=D_{MC^{\prime}}+D_{MP^{\prime}}$; até agora, devem ao banco $\left( 1+i_{X} \frac{T_{prod}}{T} \right)D$
2) **Trabalhador** (W): Têm em depósito $\left( 1+i_{Y}\frac{(T_{prod}-T_{D-FT})}{T} \right)D_{FT}$

## 3) Venda do produto
Aqui faz diferença a ordem das vendas: se o capitalista vende os meios de produção primeiro ou os meios de consumo — assumindo que os venda de uma só vez, claro.

### 3a) $T_{MP^{\prime}-D^{\prime}}<T_{MC^{\prime}-D^{\prime}}$
Vendendo os meios de produção primeiro, então em $T_{MP^{\prime}-D^{\prime}}$ 
- K recebe $D_{MP^{\prime}}$ 
- W possui em depósito $\left( 1+i_{Y}\frac{(T_{MP^{\prime}-D^{\prime}}-T_{D-FT})}{T} \right)D_{FT}$

Após a venda dos meios de consumo, em $T_{MC^{\prime}-D^{\prime}}$ — que é igual a $T$ —, temos
- K recebe $D_{MC^{\prime}}$, e possui em depósito $\left( 1+i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{MP^{\prime}-D^{\prime}})}{T} \right) D_{MP^{\prime}}$
- W paga $D_{MC^{\prime}}$, e agora possui em depósito $\left( 1+i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} \right)D_{FT} - D_{MC^{\prime}}$

Lembremos que o capitalista produziu o equivalente ao valor $D^{\prime}=D_{MC^{\prime}}+D_{MP^{\prime}}>D$, digamos
$$
D^{\prime}=D+l
$$
em que $l>0$ é seu [[Lucro (Marx)|lucro]].

Logo que vende, que é quando seu relógio bate $T$, o capitalista já paga ao banco o que deve, i.e. $(1+i_{X})D$, embora demande juros pelo dinheiro $D_{MP^{\prime}}$ que deixou em depósito. Dessa forma, o que o banco obtém de lucro por parte de K é
$$
i_{X}D - i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{MP^{\prime}-D^{\prime}})}{T}  D_{MP^{\prime}}
$$
Por parte de W, ele sempre tem de pagar juros
$$
i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT}
$$

Somando ambos, temos que seu lucro (neste período $T$) é
$$
i_{X}D - i_{Y} \left(\frac{(T_{MC^{\prime}-D^{\prime}}-T_{MP^{\prime}-D^{\prime}})}{T}  D_{MP^{\prime}} + \frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT} \right)
$$

Primeiramente, supondo que a venda do produto se dê simultaneamente, i.e. que $T_{MC^{\prime}-D^{\prime}}=T_{MP^{\prime}-D^{\prime}}\equiv T_{M^{\prime}-D^{\prime}}$, temos que resta somente o termo
$$
i_{X}D - i_{Y} \left(\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT} \right)
$$

Segundamente, supondo que K somente faça o empréstimo *no momento em que contrata força de trabalho*, teremos que $T_{D-FT}=0$, ou, o que é o mesmo,
$$
T_{MC^{\prime}-D^{\prime}}-T_{D-FT} = T
$$
Ou seja, W manterá $D_{FT}$ depositado desde o momento da contratação até o momento em que compra meios de consumo, que é o momento em que K quita seu empréstimo.

Por fim, supondo que K possua meios de produção *in specie*, então ele pede empréstimo somente de $D\equiv D_{FT}$, em cujo caso o lucro do banco será
$$
(i_{X} - i_{Y})D
$$
Ou seja, sua taxa de *spread* será $i_{X}-i_{Y}$

### 3b) $T_{MC^{\prime}-D^{\prime}}<T_{MP^{\prime}-D^{\prime}}$
Vendendo os meios de consumo primeiro, temos
- K recebe $D_{MC^{\prime}}$
- W paga $D_{MC^{\prime}}$, tendo agora em depósito $\left( 1+i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} \right)D_{FT} - D_{MC^{\prime}}$

Note-se, porém, que $D_{MC^{\prime}}=D_{FT}$, i.e. os trabalhadores compram, com seu salário $D_{FT}$, os meios de consumo para a reprodução de sua força de trabalho[^1]. Portanto, o saldo de W é $i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT}$.

Após a venda dos meios de produção, temos
- K recebe $D_{MP^{\prime}}$, e possui em depósito $\left( 1+i_{Y}\frac{(T_{MP^{\prime}-D^{\prime}}-T_{MC^{\prime}-D^{\prime}})}{T} \right) D_{MC^{\prime}}$
- W possui em depósito $\left( 1+i_{Y} \frac{T_{MP^{\prime}-D^{\prime}}-T_{MC^{\prime}-D^{\prime}}}{T}  \right) i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT}$

%%
Este último termo é o mesmo que seu dinheiro ter rendido normalmente até $T_{MP^{\prime}-D^{\prime}}$, i.e.
$$
\left( 1+i_{Y}\frac{(T_{MP^{\prime}-D^{\prime}}-T_{D-FT})}{T} \right)D_{FT}
$$
menos o rendimento que $D_{MC^{\prime}}$ teria tido após sua alienação, i.e.
$$
-\left( 1+i_{Y} \frac{T_{MP^{\prime}-D}-T_{MC^{\prime}-D^{\prime}}}{T} \right) D_{MC^{\prime}}
$$
Portanto, seu rendimento é a soma de ambos. Portanto, o saldo de W é
$$
\begin{align*}
&i_{Y}\left(\frac{(T_{MP^{\prime}-D^{\prime}}-T_{D-FT})}{T} - \frac{T_{MP^{\prime}-D}-T_{MC^{\prime}-D^{\prime}}}{T} \right) D_{FT} \\
&= i_{Y} \frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT}
\end{align*}
$$
%%

Logo após esta última venda, K paga $(1+i_{X})D$ ao banco, porém demanda $i_{Y}\frac{(T_{MP^{\prime}-D^{\prime}}-T_{MC^{\prime}-D^{\prime}})}{T}  D_{MC^{\prime}}$ em juros. O lucro que o banco aufere de K será, portanto,
$$
i_{X}D - i_{Y}\frac{(T_{MP^{\prime}-D^{\prime}}-T_{MC^{\prime}-D^{\prime}})}{T}  D_{MC^{\prime}}
$$
No que diz respeito a W, o banco paga pelos juros
$$
\left( 1+i_{Y} \frac{T_{MP^{\prime}-D^{\prime}}-T_{MC^{\prime}-D^{\prime}}}{T}  \right) i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT}
$$

Ou seja, em suma, abrindo a fórmula acima, o lucro do banco será
$$
\begin{align*}
i_{X}D &- i_{Y}\frac{(T_{MP^{\prime}-D^{\prime}}-T_{MC^{\prime}-D^{\prime}})}{T}  D_{MC^{\prime}} \\
& - i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT}  \\
& - i_{Y}^2 \frac{T_{MP^{\prime}-D^{\prime}}-T_{MC^{\prime}-D^{\prime}}}{T} \frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT} 
\end{align*}
$$

Primeiramente, assumindo venda simultânea dos produtos, $T_{MP^{\prime}-D^{\prime}}=T_{MC^{\prime}-D^{\prime}} \equiv T_{M^{\prime}-D^{\prime}}$, em cujo caso temos
$$
i_{X}D - i_{Y}\frac{(T_{MC^{\prime}-D^{\prime}}-T_{D-FT})}{T} D_{FT} 
$$

Segundo, caso o empréstimo se dê quando da contratação de força de trabalho, $T_{M^{\prime}-D^{\prime}}-T_{D-FT}=T$, e o lucro do banco será
$$
i_{X}D - i_{Y} D_{FT} 
$$

Por fim, caso K já possua meios de produção *in specie*, requerendo somente empréstimo para contratar força de trabalho, então $D_{FT}=D$, e o lucro do banco será
$$
(i_{X}-i_{Y})D
$$
e a taxa de *spread* do banco será $i_{X}-i_{Y}$.

---
### Referências

[^1]: Assumindo que seu salário seja igual ao [[Valor da Força de Trabalho|valor da força de trabalho]].