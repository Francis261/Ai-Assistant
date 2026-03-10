# CMS.MERGE

Source: https://devdocs.io/redis/cms.merge/index

```
CMS.MERGE
```

```
CMS.MERGE destination numKeys source [source ...] [WEIGHTS weight
  [weight ...]]
```

Merges several sketches into one sketch. All sketches must have identical width and depth. Weights can be used to multiply certain sketches. Default weight is 1.

### Parameters:

- dest: The name of destination sketch. Must be initialized.
- numKeys: Number of sketches to be merged.
- src: Names of source sketches to be merged.
- weight: Multiple of each sketch. Default =1.

## Return

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

```
redis> CMS.MERGE dest 2 test1 test2 WEIGHTS 1 3
OK
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cms.merge/
