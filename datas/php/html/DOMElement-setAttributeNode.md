# DOMElement::setAttributeNode

Source: https://devdocs.io/php/domelement.setattributenode

(PHP 5, PHP 7, PHP 8)

DOMElement::setAttributeNode — Adds new attribute node to element

### Description

```
public DOMElement::setAttributeNode(DOMAttr $attr): DOMAttr|null|false
```

Adds new attribute node attr to element. If an attribute with the same name already exists on the element, that attribute is replaced by attr.

### Parameters

The attribute node.

### Return Values

Returns the old attribute if it has been replaced or null if there was no old attribute. If a DOM_WRONG_DOCUMENT_ERR error is raised, and strictErrorChecking is false, false is returned.

### Errors/Exceptions

Raised if attr belongs to a different document than the element.

### See Also

- DOMElement::hasAttribute() - Checks to see if attribute exists
- DOMElement::getAttributeNode() - Returns attribute node
- DOMElement::removeAttributeNode() - Removes attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.setattributenode.php
