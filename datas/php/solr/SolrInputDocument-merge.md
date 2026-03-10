# SolrInputDocument::merge

Source: https://devdocs.io/php/solrinputdocument.merge

(PECL solr >= 0.9.2)

SolrInputDocument::merge — Merges one input document into another

### Description

```
public SolrInputDocument::merge(SolrInputDocument $sourceDoc, bool $overwrite = true): bool
```

Merges one input document into another.

### Parameters

The source document.

If this is true it will replace matching fields in the destination document.

### Return Values

Returns true on success or false on failure. In the future, this will be modified to return the number of fields in the new document.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrinputdocument.merge.php
