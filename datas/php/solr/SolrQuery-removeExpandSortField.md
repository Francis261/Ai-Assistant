# SolrQuery::removeExpandSortField

Source: https://devdocs.io/php/solrquery.removeexpandsortfield

(PECL solr >= 2.2.0)

SolrQuery::removeExpandSortField — Removes an expand sort field from the expand.sort parameter

### Description

```
public SolrQuery::removeExpandSortField(string $field): SolrQuery
```

Removes an expand sort field from the expand.sort parameter.

### Parameters

field name

### Return Values

SolrQuery

### See Also

- SolrQuery::setExpand() - Enables/Disables the Expand Component
- SolrQuery::addExpandSortField() - Orders the documents within the expanded groups (expand.sort parameter)
- SolrQuery::setExpandRows() - Sets the number of rows to display in each group (expand.rows). Server Default 5
- SolrQuery::setExpandQuery() - Sets the expand.q parameter
- SolrQuery::addExpandFilterQuery() - Overrides main filter query, determines which documents to include in the main group
- SolrQuery::removeExpandFilterQuery() - Removes an expand filter query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.removeexpandsortfield.php
