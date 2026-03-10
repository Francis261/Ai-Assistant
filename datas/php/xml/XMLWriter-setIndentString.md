# XMLWriter::setIndentString

Source: https://devdocs.io/php/xmlwriter.setindentstring

# xmlwriter_set_indent_string

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::setIndentString -- xmlwriter_set_indent_string — Set string used for indenting

### Description

Object-oriented style

```
public XMLWriter::setIndentString(string $indentation): bool
```

Procedural style

```
xmlwriter_set_indent_string(XMLWriter $writer, string $indentation): bool
```

Sets the string which will be used to indent each element/attribute of the resulting xml.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The indentation string.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

The indent is reset when an xmlwriter is opened.

### See Also

- XMLWriter::setIndent() - Toggle indentation on/off

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.setindentstring.php
