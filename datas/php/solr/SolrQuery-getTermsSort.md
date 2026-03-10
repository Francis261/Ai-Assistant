# SolrQuery::getTermsSort

Source: https://devdocs.io/php/solrquery.gettermssort

(PECL solr >= 0.9.2)

SolrQuery::getTermsSort — Returns an integer indicating how terms are sorted

### Description

```
public SolrQuery::getTermsSort(): int
```

SolrQuery::TERMS_SORT_INDEX indicates that the terms are returned by index order. SolrQuery::TERMS_SORT_COUNT implies that the terms are sorted by term frequency (highest count first)

### Parameters

This function has no parameters.

### Return Values

Returns an integer on success and null if not set.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.gettermssort.php
