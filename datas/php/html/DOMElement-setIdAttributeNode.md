# DOMElement::setIdAttributeNode

Source: https://devdocs.io/php/domelement.setidattributenode

(PHP 5, PHP 7, PHP 8)

DOMElement::setIdAttributeNode — Declares the attribute specified by node to be of type ID

### Description

```
public DOMElement::setIdAttributeNode(DOMAttr $attr, bool $isId): void
```

Declares the attribute specified by attr to be of type ID.

### Parameters

The attribute node.

Set it to true if you want name to be of type ID, false otherwise.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the node is readonly.

Raised if name is not an attribute of this element.

### See Also

- DOMDocument::getElementById() - Searches for an element with a certain id
- DOMElement::setIdAttribute() - Declares the attribute specified by name to be of type ID
- DOMElement::setIdAttributeNS() - Declares the attribute specified by local name and namespace URI to be of type ID

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.setidattributenode.php
