# SolrInputDocument::addField

Source: https://devdocs.io/php/solrinputdocument.addfield

(PECL solr >= 0.9.2)

SolrInputDocument::addField — Adds a field to the document

### Description

```
public SolrInputDocument::addField(string $fieldName, string $fieldValue, float $fieldBoostValue = 0.0): bool
```

For multi-value fields, if a valid boost value is specified, the specified value will be multiplied by the current boost value for this field.

### Parameters

The name of the field

The value for the field.

The index time boost for the field. Though this cannot be negative, you can still pass values less than 1.0 but they must be greater than zero.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrinputdocument.addfield.php
