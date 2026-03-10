# DOMElement::setAttributeNS

Source: https://devdocs.io/php/domelement.setattributens

(PHP 5, PHP 7, PHP 8)

DOMElement::setAttributeNS — Adds new attribute

### Description

```
public DOMElement::setAttributeNS(?string $namespace, string $qualifiedName, string $value): void
```

Sets an attribute with namespace namespace and name qualifiedName to the given value. If the attribute does not exist, it will be created.

### Parameters

The namespace URI.

The qualified name of the attribute, as prefix:tagname.

The value of the attribute.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the node is readonly.

Raised if qualifiedName is a malformed qualified name, or if qualifiedName has a prefix and namespace is null.

### See Also

- DOMElement::hasAttributeNS() - Checks to see if attribute exists
- DOMElement::getAttributeNS() - Returns value of attribute
- DOMElement::removeAttributeNS() - Removes attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.setattributens.php
