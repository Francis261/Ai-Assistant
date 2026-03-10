# SolrDocument::merge

Source: https://devdocs.io/php/solrdocument.merge

(PECL solr >= 0.9.2)

SolrDocument::merge — Merges source to the current SolrDocument

### Description

```
public SolrDocument::merge(SolrDocument $sourceDoc, bool $overwrite = true): bool
```

Merges source to the current SolrDocument.

### Parameters

The source document.

If this is true then fields with the same name in the destination document will be overwritten.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrdocument.merge.php
