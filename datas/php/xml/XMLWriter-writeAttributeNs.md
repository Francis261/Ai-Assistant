# XMLWriter::writeAttributeNs

Source: https://devdocs.io/php/xmlwriter.writeattributens

# xmlwriter_write_attribute_ns

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeAttributeNs -- xmlwriter_write_attribute_ns — Write full namespaced attribute

### Description

Object-oriented style

```
public XMLWriter::writeAttributeNs(
 ?string $prefix,
 string $name,
 ?string $namespace,
 string $value
): bool
```

Procedural style

```
xmlwriter_write_attribute_ns(
 XMLWriter $writer,
 ?string $prefix,
 string $name,
 ?string $namespace,
 string $value
): bool
```

Writes a full namespaced attribute.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The namespace prefix. If prefix is null, the namespace will be omitted.

The attribute name.

The namespace URI. If namespace is null, the namespace declaration will be omitted.

The attribute value.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- XMLWriter::writeAttribute() - Write full attribute
- XMLWriter::startAttribute() - Create start attribute
- XMLWriter::startAttributeNs() - Create start namespaced attribute
- XMLWriter::endAttribute() - End attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writeattributens.php
