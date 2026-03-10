# SolrQuery::getFacetSort

Source: https://devdocs.io/php/solrquery.getfacetsort

(PECL solr >= 0.9.2)

SolrQuery::getFacetSort — Returns the facet sort type

### Description

```
public SolrQuery::getFacetSort(string $field_override = ?): int
```

Returns an integer (SolrQuery::FACET_SORT_INDEX or SolrQuery::FACET_SORT_COUNT)

### Parameters

The name of the field

### Return Values

Returns an integer (SolrQuery::FACET_SORT_INDEX or SolrQuery::FACET_SORT_COUNT) on success or null if not set.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.getfacetsort.php
