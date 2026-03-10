# DOMElement::removeAttributeNode

Source: https://devdocs.io/php/domelement.removeattributenode

(PHP 5, PHP 7, PHP 8)

DOMElement::removeAttributeNode — Removes attribute

### Description

```
public DOMElement::removeAttributeNode(DOMAttr $attr): DOMAttr|false
```

Removes attribute attr from the element.

### Parameters

The attribute node.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Raised if the node is readonly.

Raised if attr is not an attribute of the element.

### See Also

- DOMElement::hasAttribute() - Checks to see if attribute exists
- DOMElement::getAttributeNode() - Returns attribute node
- DOMElement::setAttributeNode() - Adds new attribute node to element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.removeattributenode.php
