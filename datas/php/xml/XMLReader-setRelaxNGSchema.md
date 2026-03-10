# XMLReader::setRelaxNGSchema

Source: https://devdocs.io/php/xmlreader.setrelaxngschema

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

XMLReader::setRelaxNGSchema — Set the filename or URI for a RelaxNG Schema

### Description

```
public XMLReader::setRelaxNGSchema(?string $filename): bool
```

Set the filename or URI for the RelaxNG Schema to use for validation.

### Parameters

filename or URI pointing to a RelaxNG Schema.

### Return Values

Returns true on success or false on failure.

### See Also

- XMLReader::setRelaxNGSchemaSource() - Set the data containing a RelaxNG Schema
- XMLReader::setSchema() - Validate document against XSD
- XMLReader::isValid() - Indicates if the parsed document is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xmlreader.setrelaxngschema.php
