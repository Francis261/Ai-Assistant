# DOMDocument::relaxNGValidateSource

Source: https://devdocs.io/php/domdocument.relaxngvalidatesource

(PHP 5, PHP 7, PHP 8)

DOMDocument::relaxNGValidateSource — Performs relaxNG validation on the document

### Description

```
public DOMDocument::relaxNGValidateSource(string $source): bool
```

Performs » relaxNG validation on the document based on the given RNG source.

### Parameters

A string containing the RNG schema.

### Return Values

Returns true on success or false on failure.

### See Also

- DOMDocument::relaxNGValidate() - Performs relaxNG validation on the document
- DOMDocument::schemaValidate() - Validates a document based on a schema. Only XML Schema 1.0 is supported.
- DOMDocument::schemaValidateSource() - Validates a document based on a schema
- DOMDocument::validate() - Validates the document based on its DTD

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.relaxngvalidatesource.php
