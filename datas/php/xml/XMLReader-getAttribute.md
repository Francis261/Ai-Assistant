# XMLReader::getAttribute

Source: https://devdocs.io/php/xmlreader.getattribute

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::getAttribute — Get the value of a named attribute

### Description

```
public XMLReader::getAttribute(string $name): ?string
```

Returns the value of a named attribute or null if the attribute does not exist or not positioned on an element node.

### Parameters

The name of the attribute.

### Return Values

The value of the attribute, or null if no attribute with the given name is found or not positioned on an element node.

### Changelog

### See Also

- XMLReader::getAttributeNo() - Get the value of an attribute by index
- XMLReader::getAttributeNs() - Get the value of an attribute by localname and URI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.getattribute.php
