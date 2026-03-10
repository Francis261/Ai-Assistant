# SolrQuery::setHighlightRegexSlop

Source: https://devdocs.io/php/solrquery.sethighlightregexslop

(PECL solr >= 0.9.2)

SolrQuery::setHighlightRegexSlop — Sets the factor by which the regex fragmenter can stray from the ideal fragment size

### Description

```
public SolrQuery::setHighlightRegexSlop(float $factor): SolrQuery
```

The factor by which the regex fragmenter can stray from the ideal fragment size ( specfied by SolrQuery::setHighlightFragsize )to accommodate the regular expression

### Parameters

The factor by which the regex fragmenter can stray from the ideal fragment size

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightregexslop.php
