# XMLWriter::writeRaw

Source: https://devdocs.io/php/xmlwriter.writeraw

# xmlwriter_write_raw

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL xmlwriter >= 2.0.4)

XMLWriter::writeRaw -- xmlwriter_write_raw — Write a raw XML text

### Description

Object-oriented style

```
public XMLWriter::writeRaw(string $content): bool
```

Procedural style

```
xmlwriter_write_raw(XMLWriter $writer, string $content): bool
```

Writes a raw xml text.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The text string to write.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::text() - Write text

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writeraw.php
