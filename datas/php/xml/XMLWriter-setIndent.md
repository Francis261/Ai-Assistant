# XMLWriter::setIndent

Source: https://devdocs.io/php/xmlwriter.setindent

# xmlwriter_set_indent

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::setIndent -- xmlwriter_set_indent — Toggle indentation on/off

### Description

Object-oriented style

```
public XMLWriter::setIndent(bool $enable): bool
```

Procedural style

```
xmlwriter_set_indent(XMLWriter $writer, bool $enable): bool
```

Toggles indentation on or off.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

Whether indentation is enabled.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 XMLWriter::setIndent() and mixed Content

Enabling indentation is not suitable for mixed content, because the indent string is also inserted before inline elements.

```
<?php
$writer = new XMLWriter();
$writer->openMemory();
$writer->setIndent(2);
$writer->startDocument();
$writer->startElement('p');
$writer->text('before');
$writer->writeElement('a', 'element');
$writer->text('after');
$writer->endElement();
$writer->endDocument();
echo $writer->outputMemory();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<p>before <a>element</a>
after</p>
```

### Notes

Note:

The indent is reset when an xmlwriter is opened.

### See Also

- XMLWriter::setIndentString() - Set string used for indenting

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.setindent.php
