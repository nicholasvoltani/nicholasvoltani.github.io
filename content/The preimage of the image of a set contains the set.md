---
Date: 2023-07-01
tags:
  - mathematics
aliases: 
excalidraw-open-md: true
excalidraw-plugin: parsed
---
![[The preimage of the image of a set contains the set.svg]]

up:: [[020 MOC Mathematics]]

The intuition is that the preimage of a set can be bigger than the set itself (due to different points mapping to the same output).

Let $f: X \to Y$ be a function, and $A \subseteq X$ a subset.

Let $x \in A$. Then
$$x\in A {\color{red} \implies} f(x) \in f(A)$$
that is, $f(x)$ is in its [[Image of Function|image]].

By the definition of the [[Preimage of Function]] $f$, this is equivalent to
$$x \in f^{-1} (f(A))$$
# Counterexample of equality
![[Pasted image 20230701151408.png|500]]

Note that $f(x) \in f(A)$ need not imply that $x \in A$: there can be some point $c \in X \setminus A$ such that $f(c) \in f(A)$. That is why [[The injective preimage of the image of a set is equal to the set]].

---
### References
- [Notas para um Curso de Física-Matemática, João Carlos Alves Barata. Cap. 01](http://denebola.if.usp.br/~jbarata/Notas_de_aula/arquivos/nc-cap01.pdf) 

%%
# Text Elements
# Embedded files
40737b74df40b406da4ae75a1aadd16a93ed0ac8: $$S$$
8b1707cbfb1e4b43b29c2ca728d541d93f3fab6b: $$Im_f(S)$$
97be54482d51c51866b94d8705ff8f176413929e: $$Preim_f(Im_f(S))$$
cb1dfaec6ab3016cdd403b7536b311406d394620: $$f: A \to B$$
8ba1af8d49a9759785427f0fb7e2f7497f055f0a: $$A$$
559025c05e431d271fab77ed0e2144d01e9a6eaa: $$B$$

# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.1.6",
	"elements": [
		{
			"type": "ellipse",
			"version": 65,
			"versionNonce": 1499834244,
			"isDeleted": false,
			"id": "-XYqI68B9poAMr7uzvgtu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -153.6631622314453,
			"y": -135.8420181274414,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 106.66665649414062,
			"height": 211.66665649414062,
			"seed": 437660220,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1689518899075,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 157,
			"versionNonce": 903367996,
			"isDeleted": false,
			"id": "JK8cx_oXR9tBjEJQUA3_K",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 173.0034637451172,
			"y": -139.17536163330078,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 106.66665649414062,
			"height": 211.66665649414062,
			"seed": 1238922500,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1689518909689,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 60,
			"versionNonce": 1047744060,
			"isDeleted": false,
			"id": "WNSaaG1qbaMF3N2XLaMbE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -123.66313171386719,
			"y": -68.61978912353516,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 50,
			"height": 68.88888549804688,
			"seed": 684594948,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "SfwvHT5Y4YjeYF7V222S-",
					"type": "arrow"
				}
			],
			"updated": 1689518952888,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 178,
			"versionNonce": 1061567420,
			"isDeleted": false,
			"id": "zvKXbYwEI29zQ60THXwvd",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 196.3368377685547,
			"y": -76.95313262939453,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 58.88885498046874,
			"height": 86.111083984375,
			"seed": 1564552252,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "_J0m6vAb2aUD8F-de_Z1s",
					"type": "arrow"
				},
				{
					"id": "kBn5lfNI7eWR_CWZ6RqMk",
					"type": "arrow"
				},
				{
					"id": "3OodAf6nY_pP17T-KLok7",
					"type": "arrow"
				},
				{
					"id": "SfwvHT5Y4YjeYF7V222S-",
					"type": "arrow"
				}
			],
			"updated": 1689518979893,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 305,
			"versionNonce": 1850019204,
			"isDeleted": false,
			"id": "SfwvHT5Y4YjeYF7V222S-",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -97.83595457175122,
			"y": -68.64281247436904,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 309.5918331464007,
			"height": 3.918253692066628,
			"seed": 1135101244,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1689518980444,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WNSaaG1qbaMF3N2XLaMbE",
				"focus": -1.0003222801925507,
				"gap": 1
			},
			"endBinding": {
				"elementId": "zvKXbYwEI29zQ60THXwvd",
				"focus": 0.9020796618439646,
				"gap": 1
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					309.5918331464007,
					-3.918253692066628
				]
			]
		},
		{
			"type": "arrow",
			"version": 137,
			"versionNonce": 2071544764,
			"isDeleted": false,
			"id": "_J0m6vAb2aUD8F-de_Z1s",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -98.33076550525277,
			"y": -0.17263423425362134,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 317.8255751020737,
			"height": 9.050565149106149,
			"seed": 2069650180,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1689518985295,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "zvKXbYwEI29zQ60THXwvd",
				"focus": -0.997464973243385,
				"gap": 1
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					317.8255751020737,
					9.050565149106149
				]
			]
		},
		{
			"type": "arrow",
			"version": 439,
			"versionNonce": 917176636,
			"isDeleted": false,
			"id": "kBn5lfNI7eWR_CWZ6RqMk",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 210.6617633231467,
			"y": -72.64232669376737,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 304.3239429228053,
			"height": 26.14251995247544,
			"seed": 1600241852,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1689519067187,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "zvKXbYwEI29zQ60THXwvd",
				"gap": 1.3972325476815888,
				"focus": 0.8682149800548333
			},
			"endBinding": {
				"elementId": "JORMLtoB",
				"gap": 4.629061199085078,
				"focus": 1.3318043398541748
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-304.3239429228053,
					-26.14251995247544
				]
			]
		},
		{
			"type": "arrow",
			"version": 347,
			"versionNonce": 1525122108,
			"isDeleted": false,
			"id": "3OodAf6nY_pP17T-KLok7",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 217.0128345227413,
			"y": 9.331409101700594,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 303.3771426413814,
			"height": 30.258956373511715,
			"seed": 469527044,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1689519010983,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "zvKXbYwEI29zQ60THXwvd",
				"focus": -0.9814357367254152,
				"gap": 1.9506584774247244
			},
			"endBinding": {
				"elementId": "A5arUnP-JwGGBU5Tqo9OU",
				"focus": 0.9803898486848402,
				"gap": 1
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-303.3771426413814,
					30.258956373511715
				]
			]
		},
		{
			"type": "ellipse",
			"version": 151,
			"versionNonce": 372358788,
			"isDeleted": false,
			"id": "A5arUnP-JwGGBU5Tqo9OU",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -133.66310119628906,
			"y": -98.61978912353516,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 73.333251953125,
			"height": 140.5555419921875,
			"seed": 162461828,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "3OodAf6nY_pP17T-KLok7",
					"type": "arrow"
				}
			],
			"updated": 1689519010743,
			"link": null,
			"locked": false
		},
		{
			"type": "image",
			"version": 50,
			"versionNonce": 1413058364,
			"isDeleted": false,
			"id": "3UVik4s5",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -106.55213928222656,
			"y": -41.28645324707031,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 18,
			"height": 12,
			"seed": 33174,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1689518832718,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "40737b74df40b406da4ae75a1aadd16a93ed0ac8",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "image",
			"version": 56,
			"versionNonce": 1212756996,
			"isDeleted": false,
			"id": "rhy4BGCc",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 205.64981065843278,
			"y": -41.072838735821456,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 43.007893546990125,
			"height": 13.794984722619473,
			"seed": 83932,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1689518842302,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "8b1707cbfb1e4b43b29c2ca728d541d93f3fab6b",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "image",
			"version": 175,
			"versionNonce": 371242684,
			"isDeleted": false,
			"id": "JORMLtoB",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -123.12351717471563,
			"y": -111.15228068750238,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 54.96100514856065,
			"height": 7.786142396046091,
			"seed": 49915,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "kBn5lfNI7eWR_CWZ6RqMk",
					"type": "arrow"
				}
			],
			"updated": 1689519066688,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "97be54482d51c51866b94d8705ff8f176413929e",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "image",
			"version": 83,
			"versionNonce": 1220844420,
			"isDeleted": false,
			"id": "gCuMU4yp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 18.8078805257936,
			"y": -147.22031146525532,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 72.99315036357864,
			"height": 15.20690632574555,
			"seed": 24667,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1689519129013,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "cb1dfaec6ab3016cdd403b7536b311406d394620",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "image",
			"version": 73,
			"versionNonce": 2122701060,
			"isDeleted": false,
			"id": "lLzL3J0W",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -112.90475723937146,
			"y": 78.42225276128501,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 19.493588689617926,
			"height": 12.311740225021849,
			"seed": 97609,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1689519133283,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "8ba1af8d49a9759785427f0fb7e2f7497f055f0a",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "image",
			"version": 46,
			"versionNonce": 1183198396,
			"isDeleted": false,
			"id": "AqNJuiLI",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 221.1510499344007,
			"y": 77.76724313088243,
			"strokeColor": "#000000",
			"backgroundColor": "transparent",
			"width": 19.493588689617926,
			"height": 11.285761872936694,
			"seed": 89676,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1689519137394,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "559025c05e431d271fab77ed0e2144d01e9a6eaa",
			"scale": [
				1,
				1
			]
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1971c2",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 0,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 170.67789768528291,
		"scrollY": 250.45597693093183,
		"zoom": {
			"value": 1.85
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		},
		"objectsSnapModeEnabled": false
	},
	"files": {}
}
```
%%