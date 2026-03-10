# XMLReader::readInnerXml

Source: https://devdocs.io/php/xmlreader.readinnerxml

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

XMLReader::readInnerXml — Retrieve XML from current node

### Description

```
public XMLReader::readInnerXml(): string
```

Reads the contents of the current node, including child nodes and markup.

### Parameters

This function has no parameters.

### Return Values

Returns the contents of the current node as a string. Empty string on failure.

### Notes

This function is only available when PHP is compiled against libxml 20620 or later.

### See Also

- XMLReader::readString() - Reads the contents of the current node as a string
- XMLReader::readOuterXml() - Retrieve XML from current node, including itself
- XMLReader::expand() - Returns a copy of the current node as a DOM object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.readinnerxml.php
