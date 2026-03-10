# SolrDisMaxQuery::addQueryField

Source: https://devdocs.io/php/solrdismaxquery.addqueryfield

(No version information available, might only be in Git)

SolrDisMaxQuery::addQueryField — Add a query field with optional boost (qf parameter)

### Description

```
public SolrDisMaxQuery::addQueryField(string $field, string $boost = ?): SolrDisMaxQuery
```

Add a query field with optional boost (qf parameter)

### Parameters

field name

Boost value. Boosts documents with matching terms.

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::addQueryField() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery("lucene");
$dismaxQuery
    ->addQueryField("location", 4)
    ->addQueryField("price")
    ->addQueryField("sku")
    ->addQueryField("title",3.4)
;
echo $dismaxQuery;

?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&qf=location^4 price sku title^3.4
```

### See Also

- SolrDisMaxQuery::removeQueryField() - Removes a Query Field (qf parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.addqueryfield.php
