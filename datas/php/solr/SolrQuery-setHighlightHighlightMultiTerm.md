# SolrQuery::setHighlightHighlightMultiTerm

Source: https://devdocs.io/php/solrquery.sethighlighthighlightmultiterm

(PECL solr >= 0.9.2)

SolrQuery::setHighlightHighlightMultiTerm — Use SpanScorer to highlight phrase terms

### Description

```
public SolrQuery::setHighlightHighlightMultiTerm(bool $flag): SolrQuery
```

Use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document.

### Parameters

Whether or not to use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlighthighlightmultiterm.php
