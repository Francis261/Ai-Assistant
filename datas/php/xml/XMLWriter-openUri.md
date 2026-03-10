# XMLWriter::openUri

Source: https://devdocs.io/php/xmlwriter.openuri

# xmlwriter_open_uri

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::openUri -- xmlwriter_open_uri — Create new xmlwriter using source uri for output

### Description

Object-oriented style

```
public XMLWriter::openUri(string $uri): bool
```

Procedural style

```
xmlwriter_open_uri(string $uri): XMLWriter|false
```

Creates a new XMLWriter using uri for the output.

### Parameters

The URI of the resource for the output.

### Return Values

Object-oriented style: Returns true on success or false on failure.

Procedural style: Returns a new XMLWriter instance for later use with the xmlwriter functions on success, or false on failure.

### Changelog

### Examples

Example #1 Direct output of XML

It is possible to directly output XML by using the php://output stream wrapper.

```
<?php
$out =new XMLWriter();
$out->openURI('php://output');
?>
```

### Notes

Note:

On Windows, files opened with this function are locked until the writer is released.

### See Also

- XMLWriter::openMemory() - Create new xmlwriter using memory for string output

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.openuri.php
