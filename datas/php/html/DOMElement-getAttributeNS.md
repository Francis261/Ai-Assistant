# DOMElement::getAttributeNS

Source: https://devdocs.io/php/domelement.getattributens

(PHP 5, PHP 7, PHP 8)

DOMElement::getAttributeNS — Returns value of attribute

### Description

```
public DOMElement::getAttributeNS(?string $namespace, string $localName): string
```

Gets the value of the attribute in namespace namespace with local name localName for the current node.

### Parameters

The namespace URI.

The local name.

### Return Values

The value of the attribute, or an empty string if no attribute with the given localName and namespace is found.

### See Also

- DOMElement::hasAttributeNS() - Checks to see if attribute exists
- DOMElement::setAttributeNS() - Adds new attribute
- DOMElement::removeAttributeNS() - Removes attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.getattributens.php
