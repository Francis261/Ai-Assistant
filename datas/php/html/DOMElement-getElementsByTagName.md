# DOMElement::getElementsByTagName

Source: https://devdocs.io/php/domelement.getelementsbytagname

(PHP 5, PHP 7, PHP 8)

DOMElement::getElementsByTagName — Gets elements by tagname

### Description

```
public DOMElement::getElementsByTagName(string $qualifiedName): DOMNodeList
```

This function returns a new instance of the class DOMNodeList of all descendant elements with a given tag qualifiedName, in the order in which they are encountered in a preorder traversal of this element tree.

### Parameters

The tag name. Use * to return all elements within the element tree.

### Return Values

This function returns a new instance of the class DOMNodeList of all matched elements.

### See Also

- DOMElement::getElementsByTagNameNS() - Get elements by namespaceURI and localName

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.getelementsbytagname.php
