# SolrInputDocument::setFieldBoost

Source: https://devdocs.io/php/solrinputdocument.setfieldboost

(PECL solr >= 0.9.2)

SolrInputDocument::setFieldBoost — Sets the index-time boost value for a field

### Description

```
public SolrInputDocument::setFieldBoost(string $fieldName, float $fieldBoostValue): bool
```

Sets the index-time boost value for a field. This replaces the current boost value for this field.

### Parameters

The name of the field.

The index time boost value.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/solrinputdocument.setfieldboost.php
