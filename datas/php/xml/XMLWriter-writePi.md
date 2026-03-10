# XMLWriter::writePi

Source: https://devdocs.io/php/xmlwriter.writepi

# xmlwriter_write_pi

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writePi -- xmlwriter_write_pi — Writes a PI

### Description

Object-oriented style

```
public XMLWriter::writePi(string $target, string $content): bool
```

Procedural style

```
xmlwriter_write_pi(XMLWriter $writer, string $target, string $content): bool
```

Writes a processing instruction.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The target of the processing instruction.

The content of the processing instruction.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startPi() - Create start PI tag
- XMLWriter::endPi() - End current PI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writepi.php
