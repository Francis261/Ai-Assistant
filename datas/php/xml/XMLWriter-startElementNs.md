# XMLWriter::startElementNs

Source: https://devdocs.io/php/xmlwriter.startelementns

# xmlwriter_start_element_ns

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startElementNs -- xmlwriter_start_element_ns — Create start namespaced element tag

### Description

Object-oriented style

```
public XMLWriter::startElementNs(?string $prefix, string $name, ?string $namespace): bool
```

Procedural style

```
xmlwriter_start_element_ns(
 XMLWriter $writer,
 ?string $prefix,
 string $name,
 ?string $namespace
): bool
```

Starts a namespaced element.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The namespace prefix. If prefix is null, the namespace will be omitted.

The element name.

The namespace URI. If namespace is null, the namespace declaration will be omitted.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::endElement() - End current element
- XMLWriter::writeElementNs() - Write full namespaced element tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startelementns.php
