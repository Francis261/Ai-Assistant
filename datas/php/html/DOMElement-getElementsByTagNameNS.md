# DOMElement::getElementsByTagNameNS

Source: https://devdocs.io/php/domelement.getelementsbytagnamens

(PHP 5, PHP 7, PHP 8)

DOMElement::getElementsByTagNameNS — Get elements by namespaceURI and localName

### Description

```
public DOMElement::getElementsByTagNameNS(?string $namespace, string $localName): DOMNodeList
```

This function fetch all the descendant elements with a given localName and namespace.

### Parameters

The namespace URI of the elements to match on. The special value "*" matches all namespaces. Passing null matches the empty namespace.

The local name of the elements to match on. The special value "*" matches all local names.

### Return Values

This function returns a new instance of the class DOMNodeList of all matched elements in the order in which they are encountered in a preorder traversal of this element tree.

### Changelog

### See Also

- DOMElement::getElementsByTagName() - Gets elements by tagname

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.getelementsbytagnamens.php
