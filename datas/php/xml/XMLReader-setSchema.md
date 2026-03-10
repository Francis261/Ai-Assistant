# XMLReader::setSchema

Source: https://devdocs.io/php/xmlreader.setschema

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

XMLReader::setSchema — Validate document against XSD

### Description

```
public XMLReader::setSchema(?string $filename): bool
```

Use W3C XSD schema to validate the document as it is processed. Activation is only possible before the first Read().

### Parameters

The filename of the XSD schema.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Issues E_WARNING if libxml was built without schema support, the schema contains errors or if XMLReader::read() has already been called.

### Notes

This function is only available when PHP is compiled against libxml 20620 or later.

### See Also

- XMLReader::setRelaxNGSchema() - Set the filename or URI for a RelaxNG Schema
- XMLReader::setRelaxNGSchemaSource() - Set the data containing a RelaxNG Schema
- XMLReader::isValid() - Indicates if the parsed document is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.setschema.php
