# DOMElement::setAttribute

Source: https://devdocs.io/php/domelement.setattribute

(PHP 5, PHP 7, PHP 8)

DOMElement::setAttribute — Adds new or modifies existing attribute

### Description

```
public DOMElement::setAttribute(string $qualifiedName, string $value): DOMAttr|bool
```

Sets an attribute with name qualifiedName to the given value. If the attribute does not exist, it will be created.

### Parameters

The name of the attribute.

The value of the attribute.

### Return Values

The created or modified DOMAttr or false if an error occurred.

### Errors/Exceptions

Raised if the node is readonly.

### Examples

Example #1 Setting an attribute

```
<?php
$doc = new DOMDocument("1.0");
$node = $doc->createElement("para");
$newnode = $doc->appendChild($node);
$newnode->setAttribute("align", "left");
?>
```

### See Also

- DOMElement::hasAttribute() - Checks to see if attribute exists
- DOMElement::getAttribute() - Returns value of attribute
- DOMElement::removeAttribute() - Removes attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.setattribute.php
