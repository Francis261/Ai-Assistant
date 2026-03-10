# XMLWriter::startAttributeNs

Source: https://devdocs.io/php/xmlwriter.startattributens

# xmlwriter_start_attribute_ns

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startAttributeNs -- xmlwriter_start_attribute_ns — Create start namespaced attribute

### Description

Object-oriented style

```
public XMLWriter::startAttributeNs(?string $prefix, string $name, ?string $namespace): bool
```

Procedural style

```
xmlwriter_start_attribute_ns(
 XMLWriter $writer,
 ?string $prefix,
 string $name,
 ?string $namespace
): bool
```

Starts a namespaced attribute.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The namespace prefix.

The attribute name.

The namespace URI. If namespace is null, the namespace declaration will be omitted.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::startAttribute() - Create start attribute
- XMLWriter::endAttribute() - End attribute
- XMLWriter::writeAttribute() - Write full attribute
- XMLWriter::writeAttributeNs() - Write full namespaced attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startattributens.php
