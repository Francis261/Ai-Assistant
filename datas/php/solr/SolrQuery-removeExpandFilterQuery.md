# SolrQuery::removeExpandFilterQuery

Source: https://devdocs.io/php/solrquery.removeexpandfilterquery

(PECL solr >= 2.2.0)

SolrQuery::removeExpandFilterQuery — Removes an expand filter query

### Description

```
public SolrQuery::removeExpandFilterQuery(string $fq): SolrQuery
```

Removes an expand filter query.

### Parameters

### Return Values

SolrQuery

### See Also

- SolrQuery::setExpand() - Enables/Disables the Expand Component
- SolrQuery::addExpandSortField() - Orders the documents within the expanded groups (expand.sort parameter)
- SolrQuery::removeExpandSortField() - Removes an expand sort field from the expand.sort parameter
- SolrQuery::setExpandRows() - Sets the number of rows to display in each group (expand.rows). Server Default 5
- SolrQuery::setExpandQuery() - Sets the expand.q parameter
- SolrQuery::addExpandFilterQuery() - Overrides main filter query, determines which documents to include in the main group

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.removeexpandfilterquery.php
