# XMLReader::moveToNextAttribute

Source: https://devdocs.io/php/xmlreader.movetonextattribute

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::moveToNextAttribute — Position cursor on the next Attribute

### Description

```
public XMLReader::moveToNextAttribute(): bool
```

Moves cursor to the next Attribute if positioned on an Attribute or moves to first attribute if positioned on an Element.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### See Also

- XMLReader::moveToElement() - Position cursor on the parent Element of current Attribute
- XMLReader::moveToAttribute() - Move cursor to a named attribute
- XMLReader::moveToAttributeNo() - Move cursor to an attribute by index
- XMLReader::moveToAttributeNs() - Move cursor to a named attribute
- XMLReader::moveToFirstAttribute() - Position cursor on the first Attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.movetonextattribute.php
