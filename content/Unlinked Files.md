---
date: 2023-05-01
tags:
  - links
draft: 'true'
---
up:: [[Unlinked Files]]

# Transient Notes to be *connected*
```dataview
list
date
FROM ""
WHERE !contains(file.name, "emplate") AND (length(file.outlinks) = 0 OR length(file.inlinks) = 0)
SORT date DESC
LIMIT 10
```

# Draft notes
```dataview
TABLE WITHOUT ID 
key AS "ToBeCreatedZettel", rows.file.link AS "ReferencingFile", rows.date AS "CreationDate"
FLATTEN file.outlinks as outlinks
WHERE !(outlinks.file) AND !(contains(meta(outlinks).path, "/")) AND draft 
GROUP BY outlinks
SORT rows.date DESC
LIMIT 10
```

# Notes to be *created*
```dataview
TABLE WITHOUT ID 
key AS "ToBeCreatedZettel", rows.file.link AS "ReferencingFile", rows.date AS "CreationDate"
FLATTEN file.outlinks as outlinks
WHERE !(outlinks.file) AND !(contains(meta(outlinks).path, "/")) AND !endswith(rows.name, "svg")
GROUP BY outlinks
SORT rows.date DESC
LIMIT 10
```

---
# Referência
- [Find orphan notes - Feature archive - Obsidian Forum](https://forum.obsidian.md/t/find-orphan-notes/817/15)
- [Dataview in Obsidian: A Beginner's Guide - Obsidian Rocks](https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/)