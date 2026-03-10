# XMLReader::getAttributeNo

Source: https://devdocs.io/php/xmlreader.getattributeno

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::getAttributeNo — Get the value of an attribute by index

### Description

```
public XMLReader::getAttributeNo(int $index): ?string
```

Returns the value of an attribute based on its position or an empty string if attribute does not exist or not positioned on an element node.

### Parameters

The position of the attribute.

### Return Values

The value of the attribute, or null if no attribute exists at index or is not positioned on the element.

### See Also

- XMLReader::getAttribute() - Get the value of a named attribute
- XMLReader::getAttributeNs() - Get the value of an attribute by localname and URI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.getattributeno.php
