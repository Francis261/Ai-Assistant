# SolrDisMaxQuery::setPhraseSlop

Source: https://devdocs.io/php/solrdismaxquery.setphraseslop

(No version information available, might only be in Git)

SolrDisMaxQuery::setPhraseSlop — Sets the default slop on phrase queries (ps parameter)

### Description

```
public SolrDisMaxQuery::setPhraseSlop(string $slop): SolrDisMaxQuery
```

Sets the default amount of slop on phrase queries built with "pf", "pf2" and/or "pf3" fields (affects boosting). "ps" parameter

### Parameters

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setPhraseSlop() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');

$dismaxQuery->setPhraseSlop(4);
echo $dismaxQuery.PHP_EOL;

?>
```

The above example will output:

```
q=lucene&defType=edismax&ps=4
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setphraseslop.php
