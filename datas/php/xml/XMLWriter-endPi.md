# XMLWriter::endPi

Source: https://devdocs.io/php/xmlwriter.endpi

# xmlwriter_end_pi

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::endPi -- xmlwriter_end_pi — End current PI

### Description

Object-oriented style

```
public XMLWriter::endPi(): bool
```

Procedural style

```
xmlwriter_end_pi(XMLWriter $writer): bool
```

Ends the current processing instruction.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startPi() - Create start PI tag
- XMLWriter::writePi() - Writes a PI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.endpi.php
