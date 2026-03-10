# DOMElement::setIdAttribute

Source: https://devdocs.io/php/domelement.setidattribute

(PHP 5, PHP 7, PHP 8)

DOMElement::setIdAttribute — Declares the attribute specified by name to be of type ID

### Description

```
public DOMElement::setIdAttribute(string $qualifiedName, bool $isId): void
```

Declares the attribute qualifiedName to be of type ID.

### Parameters

The name of the attribute.

Set it to true if you want qualifiedName to be of type ID, false otherwise.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the node is readonly.

Raised if qualifiedName is not an attribute of this element.

### See Also

- DOMDocument::getElementById() - Searches for an element with a certain id
- DOMElement::setIdAttributeNode() - Declares the attribute specified by node to be of type ID
- DOMElement::setIdAttributeNS() - Declares the attribute specified by local name and namespace URI to be of type ID

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.setidattribute.php
