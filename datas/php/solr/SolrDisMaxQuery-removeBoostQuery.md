# SolrDisMaxQuery::removeBoostQuery

Source: https://devdocs.io/php/solrdismaxquery.removeboostquery

(No version information available, might only be in Git)

SolrDisMaxQuery::removeBoostQuery — Removes a boost query partial by field name (bq)

### Description

```
public SolrDisMaxQuery::removeBoostQuery(string $field): SolrDisMaxQuery
```

Removes a boost query partial from the existing query, only if SolrDisMaxQuery::addBoostQuery() was used.

### Parameters

Field Name

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::removeBoostQuery() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addBoostQuery('cat', 'electronics', 5.1)
    ->addBoostQuery('cat', 'hard drive')
;
echo $dismaxQuery.PHP_EOL;
// now remove a query part with field 'cat'
$dismaxQuery
->removeBoostQuery('cat');
echo $dismaxQuery . PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&bq=cat:electronics^5.1 cat:hard drive
q=lucene&defType=edismax&bq=cat:hard drive
```

### See Also

- SolrDisMaxQuery::addBoostQuery() - Adds a boost query field with value and optional boost (bq parameter)
- SolrDisMaxQuery::setBoostQuery() - Directly Sets Boost Query Parameter (bq)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.removeboostquery.php
