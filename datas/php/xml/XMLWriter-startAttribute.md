# XMLWriter::startAttribute

Source: https://devdocs.io/php/xmlwriter.startattribute

# xmlwriter_start_attribute

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::startAttribute -- xmlwriter_start_attribute — Create start attribute

### Description

Object-oriented style

```
public XMLWriter::startAttribute(string $name): bool
```

Procedural style

```
xmlwriter_start_attribute(XMLWriter $writer, string $name): bool
```

Starts an attribute.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The attribute name.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Basic XMLWriter::startAttribute() Usage

```
<?php
$writer = new XMLWriter;
$writer->openURI('php://output');
$writer->startDocument('1.0', 'UTF-8');
$writer->startElement('element');
$writer->startAttribute('attribute');
$writer->text('value');
$writer->endAttribute();
$writer->endElement();
$writer->endDocument();
```

The above example will output something similar to:

```
<?xml version="1.0" encoding="UTF-8"?>
<element attribute="value"/>
```

### See Also

- XMLWriter::startAttributeNs() - Create start namespaced attribute
- XMLWriter::endAttribute() - End attribute
- XMLWriter::writeAttribute() - Write full attribute
- XMLWriter::writeAttributeNs() - Write full namespaced attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.startattribute.php
