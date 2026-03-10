# SolrQuery::setExpand

Source: https://devdocs.io/php/solrquery.setexpand

(PECL solr >= 2.2.0)

SolrQuery::setExpand — Enables/Disables the Expand Component

### Description

```
public SolrQuery::setExpand(bool $value): SolrQuery
```

Enables/Disables the Expand Component.

### Parameters

Bool flag

### Return Values

SolrQuery

### Examples

Example #1 SolrQuery::setExpand() example

```
<?php

$query = new SolrQuery('lucene');

$query
    ->setExpand(true)
    ->setExpandRows(50)
    ->setExpandQuery('text:product')
    ->addExpandFilterQuery('manu:apple')
    ->addExpandFilterQuery('inStock:true')
    ->addExpandSortField('score', SolrQuery::ORDER_DESC)
    ->addExpandSortField('title', SolrQuery::ORDER_ASC);

echo $query.PHP_EOL;

?>
```

The above example will output something similar to:

```
q=lucene&expand=true&expand.rows=50&expand.q=text:product&expand.fq=manu:apple&expand.fq=inStock:true&expand.sort=score desc,title asc
```

### See Also

- SolrQuery::addExpandSortField() - Orders the documents within the expanded groups (expand.sort parameter)
- SolrQuery::removeExpandSortField() - Removes an expand sort field from the expand.sort parameter
- SolrQuery::setExpandRows() - Sets the number of rows to display in each group (expand.rows). Server Default 5
- SolrQuery::setExpandQuery() - Sets the expand.q parameter
- SolrQuery::addExpandFilterQuery() - Overrides main filter query, determines which documents to include in the main group
- SolrQuery::removeExpandFilterQuery() - Removes an expand filter query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.setexpand.php
