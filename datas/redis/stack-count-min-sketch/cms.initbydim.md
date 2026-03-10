# CMS.INITBYDIM

Source: https://devdocs.io/redis/cms.initbydim/index

```
CMS.INITBYDIM
```

```
CMS.INITBYDIM key width depth
```

Initializes a Count-Min Sketch to dimensions specified by user.

### Parameters:

- key: The name of the sketch.
- width: Number of counters in each array. Reduces the error size.
- depth: Number of counter-arrays. Reduces the probability for an error of a certain size (percentage of total count).

## Return

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

```
redis> CMS.INITBYDIM test 2000 5
OK
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cms.initbydim/
