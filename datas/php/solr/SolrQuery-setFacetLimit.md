# SolrQuery::setFacetLimit

Source: https://devdocs.io/php/solrquery.setfacetlimit

(PECL solr >= 0.9.2)

SolrQuery::setFacetLimit — Maps to facet.limit

### Description

```
public SolrQuery::setFacetLimit(int $limit, string $field_override = ?): SolrQuery
```

Maps to facet.limit. Sets the maximum number of constraint counts that should be returned for the facet fields.

### Parameters

The maximum number of constraint counts

The name of the field.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.setfacetlimit.php
