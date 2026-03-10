# SolrQuery::setTimeAllowed

Source: https://devdocs.io/php/solrquery.settimeallowed

(PECL solr >= 0.9.2)

SolrQuery::setTimeAllowed — The time allowed for search to finish

### Description

```
public SolrQuery::setTimeAllowed(int $timeAllowed): SolrQuery
```

The time allowed for a search to finish. This value only applies to the search and not to requests in general. Time is in milliseconds. Values less than or equal to zero implies no time restriction. Partial results may be returned, if there are any.

### Parameters

The time allowed for a search to finish.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.settimeallowed.php
