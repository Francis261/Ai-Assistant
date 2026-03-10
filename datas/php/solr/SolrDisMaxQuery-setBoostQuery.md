# SolrDisMaxQuery::setBoostQuery

Source: https://devdocs.io/php/solrdismaxquery.setboostquery

(No version information available, might only be in Git)

SolrDisMaxQuery::setBoostQuery — Directly Sets Boost Query Parameter (bq)

### Description

```
public SolrDisMaxQuery::setBoostQuery(string $q): SolrDisMaxQuery
```

Sets Boost Query Parameter (bq)

### Parameters

query

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::setBoostQuery() example

```
<?php
$dismaxQuery = new SolrDisMaxQuery("lucene");

$dismaxQuery->setBoostQuery('cat:electronics manu:local^2');
echo $dismaxQuery.PHP_EOL;
?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&bq=cat:electronics manu:local^2
```

### See Also

- SolrDisMaxQuery::addBoostQuery() - Adds a boost query field with value and optional boost (bq parameter)
- SolrDisMaxQuery::removeBoostQuery() - Removes a boost query partial by field name (bq)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.setboostquery.php
