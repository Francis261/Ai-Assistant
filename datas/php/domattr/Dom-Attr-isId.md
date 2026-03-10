# Dom\Attr::isId

Source: https://devdocs.io/php/dom-attr.isid

(PHP 8 >= 8.4.0)

Dom\Attr::isId — Checks if attribute is a defined ID

### Description

```
public Dom\Attr::isId(): bool
```

This function checks if the attribute is a defined ID.

According to the DOM standard this requires a DTD which defines the attribute ID to be of type ID. To utilise this method the document must be validated at parse time by passing LIBXML_DTDVALID as an option.

### Parameters

This function has no parameters.

### Return Values

Returns true if this attribute is a defined ID, false otherwise.

### Examples

Example #1 Dom\Attr::isId() Example

```
<?php

// We need to validate our document before referring to the id
$doc = Dom\XMLDocument::createFromFile('examples/book-docbook.xml', LIBXML_DTDVALID);

// We retrieve the attribute named id of the chapter element
$attr = $doc->getElementsByTagName('chapter')->item(0)->getAttributeNode('id');

var_dump($attr->isId()); // bool(true)

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-attr.isid.php
