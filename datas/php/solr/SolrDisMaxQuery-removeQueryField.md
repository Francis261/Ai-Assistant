# SolrDisMaxQuery::removeQueryField

Source: https://devdocs.io/php/solrdismaxquery.removequeryfield

(No version information available, might only be in Git)

SolrDisMaxQuery::removeQueryField — Removes a Query Field (qf parameter)

### Description

```
public SolrDisMaxQuery::removeQueryField(string $field): SolrDisMaxQuery
```

Removes a Query Field (qf parameter) from the field list added by SolrDisMaxQuery::addQueryField()

qf: When building DisjunctionMaxQueries from the user's query it specifies the fields to search in, and boosts for those fields.

### Parameters

Field Name

### Return Values

SolrDisMaxQuery

### Examples

Example #1 SolrDisMaxQuery::removeQueryField() example

```
<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
    ->addQueryField('first', 3)
    ->addQueryField('second', 0.2)
    ->addQueryField('cat');
echo $dismaxQuery . PHP_EOL;
// remove field 'second'
echo $dismaxQuery->removeQueryField('second');
?>
```

The above example will output something similar to:

```
q=lucene&defType=edismax&qf=first^3 second^0.2 cat
q=lucene&defType=edismax&qf=first^3 cat
```

### See Also

- SolrDisMaxQuery::addQueryField() - Add a query field with optional boost (qf parameter)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdismaxquery.removequeryfield.php
