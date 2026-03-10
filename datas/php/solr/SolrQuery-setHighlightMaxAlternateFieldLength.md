# SolrQuery::setHighlightMaxAlternateFieldLength

Source: https://devdocs.io/php/solrquery.sethighlightmaxalternatefieldlength

(PECL solr >= 0.9.2)

SolrQuery::setHighlightMaxAlternateFieldLength — Sets the maximum number of characters of the field to return

### Description

```
public SolrQuery::setHighlightMaxAlternateFieldLength(int $fieldLength, string $field_override = ?): SolrQuery
```

If SolrQuery::setHighlightAlternateField() was passed the value true, this parameter specifies the maximum number of characters of the field to return

Any value less than or equal to 0 means unlimited.

### Parameters

The length of the field

The name of the field.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightmaxalternatefieldlength.php
