# SolrQuery::addExpandSortField

Source: https://devdocs.io/php/solrquery.addexpandsortfield

(PECL solr >= 2.2.0)

SolrQuery::addExpandSortField — Orders the documents within the expanded groups (expand.sort parameter)

### Description

```
public SolrQuery::addExpandSortField(string $field, string $order = ?): SolrQuery
```

Orders the documents within the expanded groups (expand.sort parameter).

### Parameters

field name

Order ASC/DESC, utilizes SolrQuery::ORDER_* constants.

Default: SolrQuery::ORDER_DESC

### Return Values

SolrQuery

### See Also

- SolrQuery::setExpand() - Enables/Disables the Expand Component
- SolrQuery::removeExpandSortField() - Removes an expand sort field from the expand.sort parameter
- SolrQuery::setExpandRows() - Sets the number of rows to display in each group (expand.rows). Server Default 5
- SolrQuery::setExpandQuery() - Sets the expand.q parameter
- SolrQuery::addExpandFilterQuery() - Overrides main filter query, determines which documents to include in the main group
- SolrQuery::removeExpandFilterQuery() - Removes an expand filter query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.addexpandsortfield.php
