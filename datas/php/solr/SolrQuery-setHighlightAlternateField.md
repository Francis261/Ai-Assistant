# SolrQuery::setHighlightAlternateField

Source: https://devdocs.io/php/solrquery.sethighlightalternatefield

(PECL solr >= 0.9.2)

SolrQuery::setHighlightAlternateField — Specifies the backup field to use

### Description

```
public SolrQuery::setHighlightAlternateField(string $field, string $field_override = ?): SolrQuery
```

If a snippet cannot be generated because there were no matching terms, one can specify a field to use as the backup or default summary

### Parameters

The name of the backup field

The name of the field we are overriding this setting for.

### Return Values

Returns the current SolrQuery object, if the return value is used.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrquery.sethighlightalternatefield.php
