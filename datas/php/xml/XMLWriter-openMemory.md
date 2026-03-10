# XMLWriter::openMemory

Source: https://devdocs.io/php/xmlwriter.openmemory

# xmlwriter_open_memory

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::openMemory -- xmlwriter_open_memory — Create new xmlwriter using memory for string output

### Description

Object-oriented style

```
public XMLWriter::openMemory(): bool
```

Procedural style

```
xmlwriter_open_memory(): XMLWriter|false
```

Creates a new XMLWriter using memory for string output.

### Parameters

This function has no parameters.

### Return Values

Object-oriented style: Returns true on success or false on failure.

Procedural style: Returns a new XMLWriter for later use with the xmlwriter functions on success, or false on failure.

### Changelog

### See Also

- XMLWriter::openUri() - Create new xmlwriter using source uri for output

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.openmemory.php
