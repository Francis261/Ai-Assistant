# SolrQuery::getHighlightFragsize

Source: https://devdocs.io/php/solrquery.gethighlightfragsize

(PECL solr >= 0.9.2)

SolrQuery::getHighlightFragsize — Returns the number of characters of fragments to consider for highlighting

### Description

```
public SolrQuery::getHighlightFragsize(string $field_override = ?): int
```

Returns the number of characters of fragments to consider for highlighting. Zero implies no fragmenting. The entire field should be used.

### Parameters

The name of the field

### Return Values

Returns an integer on success or null if not set.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.gethighlightfragsize.php
