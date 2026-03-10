# SolrQuery::addSortField

Source: https://devdocs.io/php/solrquery.addsortfield

(PECL solr >= 0.9.2)

SolrQuery::addSortField — Used to control how the results should be sorted

### Description

```
public SolrQuery::addSortField(string $field, int $order = SolrQuery::ORDER_DESC): SolrQuery
```

Used to control how the results should be sorted.

### Parameters

The name of the field

The sort direction. This should be either SolrQuery::ORDER_ASC or SolrQuery::ORDER_DESC.

### Return Values

Returns the current SolrQuery object.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.addsortfield.php
