# SolrDisMaxQuery::addBoostQuery

Source: https://devdocs.io/php/solrdismaxquery.addboostquery

(No version information available, might only be in Git)

SolrDisMaxQuery::addBoostQuery — Adds a boost query field with value and optional boost (bq parameter)

### Description

```
public SolrDisMaxQuery::addBoostQuery(string $field, string $value, string $boost = ?): SolrDisMaxQuery
```

Adds a Boost Query field with value [and boost] (bq parameter)

### Parameters

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::addBoostQuery() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBoostQuery('cat', 'clothing', 2)
    ->addBoostQuery('cat', 'electronics', 5.1)
;
echo $dismaxQuery.PHP_EOL;
?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&bq=cat:clothing^2 cat:electronics^5.1
```

### See Also

- SolrDisMaxQuery::removeBoostQuery() - Removes a boost query partial by field name (bq)
- SolrDisMaxQuery::setBoostQuery() - Directly Sets Boost Query Parameter (bq)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.addboostquery.php
