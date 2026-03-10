# DOMDocument::validate

Source: https://devdocs.io/php/domdocument.validate

(PHP 5, PHP 7, PHP 8)

DOMDocument::validate — Validates the document based on its DTD

### Description

```
public DOMDocument::validate(): bool
```

Validates the document based on its DTD.

You can also use the validateOnParse property of DOMDocument to make a DTD validation.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure. If the document has no DTD attached, this method will return false.

### Examples

Example #1 Example of DTD validation

```
<?php
$dom = new DOMDocument;
$dom->load('examples/book.xml');
if ($dom->validate()) {
    echo "This document is valid!\n";
}
?>
```

You can also validate your XML file while loading it:

```
<?php
$dom = new DOMDocument;
$dom->validateOnParse = true;
$dom->load('examples/book.xml');
?>
```

### See Also

- DOMDocument::schemaValidate() - Validates a document based on a schema. Only XML Schema 1.0 is supported.
- DOMDocument::schemaValidateSource() - Validates a document based on a schema
- DOMDocument::relaxNGValidate() - Performs relaxNG validation on the document
- DOMDocument::relaxNGValidateSource() - Performs relaxNG validation on the document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.validate.php
