# XMLWriter::writeCdata

Source: https://devdocs.io/php/xmlwriter.writecdata

# xmlwriter_write_cdata

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

XMLWriter::writeCdata -- xmlwriter_write_cdata — Write full CDATA tag

### Description

Object-oriented style

```
public XMLWriter::writeCdata(string $content): bool
```

Procedural style

```
xmlwriter_write_cdata(XMLWriter $writer, string $content): bool
```

Writes a full CDATA.

### Parameters

Only for procedural calls. The XMLWriter instance that is being modified. This object is returned from a call to xmlwriter_open_uri() or xmlwriter_open_memory().

The contents of the CDATA.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Basic xmlwriter_write_cdata() Usage

```
<?php
// set up the document
$xml = new XmlWriter();
$xml->openMemory();
$xml->setIndent(true);
$xml->startDocument('1.0', 'UTF-8');
$xml->startElement('mydoc');
$xml->startElement('myele');

// CData output
$xml->startElement('mycdataelement');
$xml->writeCData("text for inclusion as CData");
$xml->endElement();

// end the document and output
$xml->endElement();
$xml->endElement();
echo $xml->outputMemory(true);
?>
```

The above example will output:

```
<mydoc>
 <myele>
  <mycdataelement><![CDATA[text for inclusion as CData]​]></mycdataelement>
 </myele>
</mydoc>
```

### See Also

- XMLWriter::startCdata() - Create start CDATA tag
- XMLWriter::endCdata() - End current CDATA

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlwriter.writecdata.php
