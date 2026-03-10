# DOMElement::getAttributeNode

Source: https://devdocs.io/php/domelement.getattributenode

(PHP 5, PHP 7, PHP 8)

DOMElement::getAttributeNode — Returns attribute node

### Description

```
public DOMElement::getAttributeNode(string $qualifiedName): DOMAttr|DOMNameSpaceNode|false
```

Returns the attribute node with name qualifiedName for the current element.

### Parameters

The name of the attribute.

### Return Values

The attribute node. Note that for XML namespace declarations (xmlns and xmlns:* attributes) an instance of DOMNameSpaceNode is returned instead of a DOMAttr.

### See Also

- DOMElement::hasAttribute() - Checks to see if attribute exists
- DOMElement::setAttributeNode() - Adds new attribute node to element
- DOMElement::removeAttributeNode() - Removes attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.getattributenode.php
