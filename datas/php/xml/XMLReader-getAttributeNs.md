# XMLReader::getAttributeNs

Source: https://devdocs.io/php/xmlreader.getattributens

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::getAttributeNs — Get the value of an attribute by localname and URI

### Description

```
public XMLReader::getAttributeNs(string $name, string $namespace): ?string
```

Returns the value of an attribute by name and namespace URI or an empty string if attribute does not exist or not positioned on an element node.

### Parameters

The local name.

The namespace URI.

### Return Values

The value of the attribute, or null if no attribute with the given name and namespace is found or not positioned of element.

### Changelog

### See Also

- XMLReader::getAttribute() - Get the value of a named attribute
- XMLReader::getAttributeNo() - Get the value of an attribute by index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.getattributens.php
