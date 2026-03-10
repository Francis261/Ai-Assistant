# XMLReader::isValid

Source: https://devdocs.io/php/xmlreader.isvalid

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::isValid — Indicates if the parsed document is valid

### Description

```
public XMLReader::isValid(): bool
```

Returns a boolean indicating if the document being parsed is currently valid according to the DTD, or an XML or RelaxNG schema. If there is no schema, and the DTD validation option is not provided, this method will return false.

### Parameters

This function has no parameters.

### Return Values

Returns true when the document is valid or false otherwise.

### Examples

Example #1 Validating XML

```
<?php
$xml = XMLReader::open('examples/book-simple.xml');

// The validate parser option must be enabled for 
// this method to work properly
$xml->setParserProperty(XMLReader::VALIDATE, true);

var_dump($xml->isValid());
?>
```

### Notes

Note: This checks the current node, not the entire document.

### See Also

- XMLReader::setParserProperty() - Set parser options
- XMLReader::setRelaxNGSchema() - Set the filename or URI for a RelaxNG Schema
- XMLReader::setRelaxNGSchemaSource() - Set the data containing a RelaxNG Schema
- XMLReader::setSchema() - Validate document against XSD

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.isvalid.php
