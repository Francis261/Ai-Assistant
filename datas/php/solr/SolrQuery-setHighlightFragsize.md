# SolrQuery::setHighlightFragsize

Source: https://devdocs.io/php/solrquery.sethighlightfragsize

(PECL solr >= 0.9.2)

SolrQuery::setHighlightFragsize — The size of fragments to consider for highlighting

### Description

```
public SolrQuery::setHighlightFragsize(int $size, string $field_override = ?): SolrQuery
```

Sets the size, in characters, of fragments to consider for highlighting. "0" indicates that the whole field value should be used (no fragmenting).

### Parameters

The size, in characters, of fragments to consider for highlighting

The name of the field.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightfragsize.php
