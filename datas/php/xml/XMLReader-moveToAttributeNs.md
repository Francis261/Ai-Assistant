# XMLReader::moveToAttributeNs

Source: https://devdocs.io/php/xmlreader.movetoattributens

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::moveToAttributeNs — Move cursor to a named attribute

### Description

```
public XMLReader::moveToAttributeNs(string $name, string $namespace): bool
```

Positions cursor on the named attribute in specified namespace.

### Parameters

The local name.

The namespace URI.

### Return Values

Returns true on success or false on failure.

### See Also

- XMLReader::moveToElement() - Position cursor on the parent Element of current Attribute
- XMLReader::moveToAttribute() - Move cursor to a named attribute
- XMLReader::moveToAttributeNo() - Move cursor to an attribute by index
- XMLReader::moveToFirstAttribute() - Position cursor on the first Attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.movetoattributens.php
