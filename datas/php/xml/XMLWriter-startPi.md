# XMLWriter::startPi

Source: https://devdocs.io/php/xmlwriter.startpi

# xmlwriter_start_pi

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startPi -- xmlwriter_start_pi — Create start PI tag

### Description

Object-oriented style

```
public XMLWriter::startPi(string $target): bool
```

Procedural style

```
xmlwriter_start_pi(XMLWriter $writer, string $target): bool
```

Starts a processing instruction tag.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The target of the processing instruction.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endPi() - End current PI
- XMLWriter::writePi() - Writes a PI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startpi.php
