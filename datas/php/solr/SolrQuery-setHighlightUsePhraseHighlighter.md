# SolrQuery::setHighlightUsePhraseHighlighter

Source: https://devdocs.io/php/solrquery.sethighlightusephrasehighlighter

(PECL solr >= 0.9.2)

SolrQuery::setHighlightUsePhraseHighlighter — Whether to highlight phrase terms only when they appear within the query phrase

### Description

```
public SolrQuery::setHighlightUsePhraseHighlighter(bool $flag): SolrQuery
```

Sets whether or not to use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document

### Parameters

Whether or not to use SpanScorer to highlight phrase terms only when they appear within the query phrase in the document

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightusephrasehighlighter.php
