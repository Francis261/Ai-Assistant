# DOMDocument::schemaValidate

Source: https://devdocs.io/php/domdocument.schemavalidate

(PHP 5, PHP 7, PHP 8)

DOMDocument::schemaValidate — Validates a document based on a schema. Only XML Schema 1.0 is supported.

### Description

```
public DOMDocument::schemaValidate(string $filename, int $flags = 0): bool
```

Validates a document based on the given schema file.

### Parameters

The path to the schema.

A bitmask of Libxml schema validation flags. Currently the only supported value is LIBXML_SCHEMA_CREATE. Available since Libxml 2.6.14.

### Return Values

Returns true on success or false on failure.

### See Also

- DOMDocument::schemaValidateSource() - Validates a document based on a schema
- DOMDocument::relaxNGValidate() - Performs relaxNG validation on the document
- DOMDocument::relaxNGValidateSource() - Performs relaxNG validation on the document
- DOMDocument::validate() - Validates the document based on its DTD

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.schemavalidate.php
