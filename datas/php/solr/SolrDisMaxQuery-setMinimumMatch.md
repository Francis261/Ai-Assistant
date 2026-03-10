# SolrDisMaxQuery::setMinimumMatch

Source: https://devdocs.io/php/solrdismaxquery.setminimummatch

(No version information available, might only be in Git)

SolrDisMaxQuery::setMinimumMatch — Set Minimum "Should" Match (mm)

### Description

```
public SolrDisMaxQuery::setMinimumMatch(string $value): SolrDisMaxQuery
```

Set Minimum "Should" Match parameter (mm). If the default query operator is AND then mm=100%, if the default query operator (q.op) is OR, then mm=0%.

### Parameters

Minimum match value/expression

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setMinimumMatch() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
// 75% of the query clauses must match
$dismaxQuery->setMinimumMatch("75%");
echo $dismaxQuery . PHP_EOL;

?>
```

The above example will output:

```
q=lucene&defType=edismax&mm=75%
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setminimummatch.php
