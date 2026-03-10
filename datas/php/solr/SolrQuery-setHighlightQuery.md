# SolrQuery::setHighlightQuery

Source: https://devdocs.io/php/solrquery.sethighlightquery

(PECL solr >= 2.7.0)

SolrQuery::setHighlightQuery — A query designated for highlighting (hl.q)

### Description

```
public SolrQuery::setHighlightQuery(string $q): SolrQuery
```

A query to use for highlighting. This parameter allows one to highlight different terms or fields than those being used to retrieve documents.

Default value when not set: the value of the request's q parameter

Solr Parameter reference: hl.q

### Parameters

Highlight Query

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightquery.php
