# XMLWriter::writeElementNs

Source: https://devdocs.io/php/xmlwriter.writeelementns

# xmlwriter_write_element_ns

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeElementNs -- xmlwriter_write_element_ns — Write full namespaced element tag

### Description

Object-oriented style

```
public XMLWriter::writeElementNs(
 ?string $prefix,
 string $name,
 ?string $namespace,
 ?string $content = null
): bool
```

Procedural style

```
xmlwriter_write_element_ns(
 XMLWriter $writer,
 ?string $prefix,
 string $name,
 ?string $namespace,
 ?string $content = null
): bool
```

Writes a full namespaced element tag.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The namespace prefix. If prefix is null, the namespace will be omitted.

The element name.

The namespace URI. If namespace is null, the namespace declaration will be omitted.

The element contents.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startElementNs() - Create start namespaced element tag
- XMLWriter::endElement() - End current element
- XMLWriter::writeElement() - Write full element tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writeelementns.php
