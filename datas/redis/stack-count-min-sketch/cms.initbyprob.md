# CMS.INITBYPROB

Source: https://devdocs.io/redis/cms.initbyprob/index

```
CMS.INITBYPROB
```

```
CMS.INITBYPROB key error probability
```

Initializes a Count-Min Sketch to accommodate requested tolerances.

### Parameters:

- key: The name of the sketch.
- error: Estimate size of error. The error is a percent of total counted items. This effects the width of the sketch.
- probability: The desired probability for inflated count. This should be a decimal value between 0 and 1. This effects the depth of the sketch. For example, for a desired false positive rate of 0.1% (1 in 1000), error_rate should be set to 0.001. The closer this number is to zero, the greater the memory consumption per item and the more CPU usage per operation.

## Return

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

```
redis> CMS.INITBYPROB test 0.001 0.01
OK
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cms.initbyprob/
