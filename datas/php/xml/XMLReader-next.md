# XMLReader::next

Source: https://devdocs.io/php/xmlreader.next

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::next — Move cursor to next node skipping all subtrees

### Description

```
public XMLReader::next(?string $name = null): bool
```

Positions cursor on the next node skipping all subtrees. If no such node exists, the cursor is moved to the end of the document.

### Parameters

The name of the next node to move to.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLReader::moveToNextAttribute() - Position cursor on the next Attribute
- XMLReader::moveToElement() - Position cursor on the parent Element of current Attribute
- XMLReader::moveToAttribute() - Move cursor to a named attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.next.php
