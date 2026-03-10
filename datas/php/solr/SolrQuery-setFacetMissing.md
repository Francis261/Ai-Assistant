# SolrQuery::setFacetMissing

Source: https://devdocs.io/php/solrquery.setfacetmissing

(PECL solr >= 0.9.2)

SolrQuery::setFacetMissing — Maps to facet.missing

### Description

```
public SolrQuery::setFacetMissing(bool $flag, string $field_override = ?): SolrQuery
```

Used to indicate that in addition to the Term-based constraints of a facet field, a count of all matching results which have no value for the field should be computed

### Parameters

true turns this feature on. false disables it.

The name of the field.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.setfacetmissing.php
