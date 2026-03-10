# DOMAttr::isId

Source: https://devdocs.io/php/domattr.isid

(PHP 5, PHP 7, PHP 8)

DOMAttr::isId — Checks if attribute is a defined ID

### Description

```
public DOMAttr::isId(): bool
```

This function checks if the attribute is a defined ID.

According to the DOM standard this requires a DTD which defines the attribute ID to be of type ID. You need to validate your document with DOMDocument::validate or DOMDocument::$validateOnParse before using this function.

### Parameters

This function has no parameters.

### Return Values

Returns true if this attribute is a defined ID, false otherwise.

### Examples

Example #1 DOMAttr::isId() Example

```
<?php

$doc = new DOMDocument;

// We need to validate our document before referring to the id
$doc->validateOnParse = true;
$doc->load('examples/book-docbook.xml');

// We retrieve the attribute named id of the chapter element
$attr = $doc->getElementsByTagName('chapter')->item(0)->getAttributeNode('id');

var_dump($attr->isId()); // bool(true)

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domattr.isid.php
