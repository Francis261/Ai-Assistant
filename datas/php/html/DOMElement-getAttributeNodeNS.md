# DOMElement::getAttributeNodeNS

Source: https://devdocs.io/php/domelement.getattributenodens

(PHP 5, PHP 7, PHP 8)

DOMElement::getAttributeNodeNS — Returns attribute node

### Description

```
public DOMElement::getAttributeNodeNS(?string $namespace, string $localName): DOMAttr|DOMNameSpaceNode|null
```

Returns the attribute node in namespace namespace with local name localName for the current node.

### Parameters

The namespace URI.

The local name.

### Return Values

The attribute node. Note that for XML namespace declarations (xmlns and xmlns:* attributes) an instance of DOMNameSpaceNode is returned instead of a DOMAttr object.

### See Also

- DOMElement::hasAttributeNS() - Checks to see if attribute exists
- DOMElement::setAttributeNodeNS() - Adds new attribute node to element
- DOMElement::removeAttributeNode() - Removes attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.getattributenodens.php
