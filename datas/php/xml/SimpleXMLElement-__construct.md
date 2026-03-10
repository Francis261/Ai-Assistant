# SimpleXMLElement::__construct

Source: https://devdocs.io/php/simplexmlelement.construct

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::__construct — Creates a new SimpleXMLElement object

### Description

Creates a new SimpleXMLElement object.

### Parameters

A well-formed XML string or the path or URL to an XML document if dataIsURL is true.

Optionally used to specify additional Libxml parameters, which affect reading of XML documents. Options which affect the output of XML documents (e.g. LIBXML_NOEMPTYTAG) are silently ignored.

Note:

It may be necessary to pass LIBXML_PARSEHUGE to be able to process deeply nested XML or very large text nodes.

By default, dataIsURL is false. Use true to specify that data is a path or URL to an XML document instead of string data.

Namespace prefix or URI.

true if namespaceOrPrefix is a prefix, false if it's a URI; defaults to false.

### Errors/Exceptions

Produces an E_WARNING error message for each error found in the XML data and additionally throws an Exception if the XML data could not be parsed.

Use libxml_use_internal_errors() to suppress all XML errors, and libxml_get_errors() to iterate over them afterwards.

### Examples

Note:

Listed examples may include examples/simplexml-data.php, which refers to the XML string found in the first example of the basic usage guide.

Example #1 Create a SimpleXMLElement object

```
<?php

include 'examples/simplexml-data.php';

$sxe = new SimpleXMLElement($xmlstr);
echo $sxe->movie[0]->title;

?>
```

The above example will output:

```
PHP: Behind the Parser
```

Example #2 Create a SimpleXMLElement object from a URL

```
<?php

$sxe = new SimpleXMLElement('http://example.org/document.xml', 0, true);
echo $sxe->asXML();

?>
```

### See Also

- Basic SimpleXML usage
- simplexml_load_string() - Interprets a string of XML into an object
- simplexml_load_file() - Interprets an XML file into an object
- Dealing with XML errors
- libxml_use_internal_errors() - Disable libxml errors and allow user to fetch error information as needed
- libxml_set_streams_context() - Set the streams context for the next libxml document load or write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.construct.php
