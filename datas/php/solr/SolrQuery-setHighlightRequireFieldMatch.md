# SolrQuery::setHighlightRequireFieldMatch

Source: https://devdocs.io/php/solrquery.sethighlightrequirefieldmatch

(PECL solr >= 0.9.2)

SolrQuery::setHighlightRequireFieldMatch — Require field matching during highlighting

### Description

```
public SolrQuery::setHighlightRequireFieldMatch(bool $flag): SolrQuery
```

If true, then a field will only be highlighted if the query matched in this particular field.

This will only work if SolrQuery::setHighlightUsePhraseHighlighter() was set to true

### Parameters

true or false

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightrequirefieldmatch.php
