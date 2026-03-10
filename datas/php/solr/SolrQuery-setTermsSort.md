# SolrQuery::setTermsSort

Source: https://devdocs.io/php/solrquery.settermssort

(PECL solr >= 0.9.2)

SolrQuery::setTermsSort — Specifies how to sort the returned terms

### Description

```
public SolrQuery::setTermsSort(int $sortType): SolrQuery
```

If SolrQuery::TERMS_SORT_COUNT, sorts the terms by the term frequency (highest count first). If SolrQuery::TERMS_SORT_INDEX, returns the terms in index order

### Parameters

SolrQuery::TERMS_SORT_INDEX or SolrQuery::TERMS_SORT_COUNT

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.settermssort.php
