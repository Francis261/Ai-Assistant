# XMLWriter::writeAttribute

Source: https://devdocs.io/php/xmlwriter.writeattribute

# xmlwriter_write_attribute

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeAttribute -- xmlwriter_write_attribute — Write full attribute

### Description

Object-oriented style

```
public XMLWriter::writeAttribute(string $name, string $value): bool
```

Procedural style

```
xmlwriter_write_attribute(XMLWriter $writer, string $name, string $value): bool
```

Writes a full attribute.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The name of the attribute.

The value of the attribute.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Intermixing Sub-elements and Attributes

If writing sub-elements and attributes is intermixed, any attempt to write attributes after the first sub-element will fail and return false.

```
<?php
$xml = new XMLWriter();
$xml->openMemory();

$xml->startElement('element');
$xml->writeAttribute('attr1', '0');
$xml->writeElement('subelem', '0');
var_dump($xml->writeAttribute('attr2', '0'));
$xml->endElement();

echo $xml->flush();
?>
```

The above example will output:

```
bool(false)
<element attr1="0"><subelem>0</subelem></element>
```

### See Also

- XMLWriter::writeAttributeNs() - Write full namespaced attribute
- XMLWriter::startAttribute() - Create start attribute
- XMLWriter::startAttributeNs() - Create start namespaced attribute
- XMLWriter::endAttribute() - End attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writeattribute.php
