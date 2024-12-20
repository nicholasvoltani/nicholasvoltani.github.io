---
date: " 2024-12-11"
tags:
  - economics
aliases:
---

up:: [[061 MOC Macroeconomia]]

# API Banco Central
Exemplo de código (fonte do código: [Como obter dados do BANCO CENTRAL diretamente usando PYTHON - YouTube](https://www.youtube.com/watch?v=pZlsfaVk7c0)):
```python

import pandas as pd
import matplotlib.pyplot as plt

def extracao_bcb(codigo: str, 
                 data_inicio: str, 
                 data_fim: str):
  url = f'https://api.bcb.gov.br/dados/serie/bcdata.sgs.{codigo}/dados?formato=json&dataInicial={data_inicio}&dataFinal={data_fim}'

  df = pd.read_json(url)
  df['data'] = pd.to_datetime(df['data'], dayfirst= True)
  
  return df


# Puxando dados (tabela 1178: "Taxa de juros - Selic anualizada base 252" \\
# cf https://www3.bcb.gov.br/sgspub/localizarseries/localizarSeries.do?method=prepararTelaLocalizarSeries)
df = extracao_bcb(1178, '01/01/2008', '11/12/2024')

# Transformar coluna de valor em decimal (está em percentual por padrão)
df['valor'] = df['valor'] / 100

plt.plot(df['data'], df['valor'])
```

![[Pasted image 20241211191149.png]]

# Portal da Transparência


---
### References
- [Como extrair dados do Portal da Transparência com PYTHON - YouTube](https://www.youtube.com/watch?v=bQLUceXgTsM)
	- [API Portal da Transparência](https://api.portaldatransparencia.gov.br/swagger-ui/index.html)
- [Como obter dados do BANCO CENTRAL diretamente usando PYTHON - YouTube](https://www.youtube.com/watch?v=pZlsfaVk7c0)
	- [Sistema Gerenciador de Séries Temporais - BCB](https://www3.bcb.gov.br/sgspub/localizarseries/localizarSeries.do?method=prepararTelaLocalizarSeries)