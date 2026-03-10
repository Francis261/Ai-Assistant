# SolrQuery::setFacetSort

Source: https://devdocs.io/php/solrquery.setfacetsort

(PECL solr >= 0.9.2)

SolrQuery::setFacetSort — Determines the ordering of the facet field constraints

### Description

```
public SolrQuery::setFacetSort(int $facetSort, string $field_override = ?): SolrQuery
```

Determines the ordering of the facet field constraints

### Parameters

Use SolrQuery::FACET_SORT_INDEX for sorting by index order or SolrQuery::FACET_SORT_COUNT for sorting by count.

The name of the field.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.setfacetsort.php
