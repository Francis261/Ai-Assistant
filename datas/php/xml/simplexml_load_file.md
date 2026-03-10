# simplexml_load_file

Source: https://devdocs.io/php/function.simplexml-load-file

(PHP 5, PHP 7, PHP 8)

simplexml_load_file — Interprets an XML file into an object

### Description

```
simplexml_load_file(
 string $filename,
 ?string $class_name = SimpleXMLElement::class,
 int $options = 0,
 string $namespace_or_prefix = "",
 bool $is_prefix = false
): SimpleXMLElement|false
```

Convert the well-formed XML document in the given file to an object.

### Parameters

Path to the XML file

You may use this optional parameter so that simplexml_load_file() will return an object of the specified class. That class should extend the SimpleXMLElement class.

Bitwise OR of the libxml option constants.

Namespace prefix or URI.

true if namespace_or_prefix is a prefix, false if it's a URI; defaults to false.

### Return Values

Returns an object of class SimpleXMLElement with properties containing the data held within the XML document, or false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Errors/Exceptions

Produces an E_WARNING error message for each error found in the XML data.

Use libxml_use_internal_errors() to suppress all XML errors, and libxml_get_errors() to iterate over them afterwards.

### Examples

Example #1 Interpret an XML document

```
<?php
// The file examples/book.xml contains an XML document with a root element
// and at least an element /[root]/title.

if (file_exists('examples/book.xml')) {
    $xml = simplexml_load_file('examples/book.xml');
 
    print_r($xml);
} else {
    exit('Failed to open examples/book.xml.');
}
?>
```

This script will display, on success:

```
SimpleXMLElement Object
(
  [book] => Array
  ...
)
```

At this point, you can go about using $xml->title and any other elements.

### See Also

- simplexml_load_string() - Interprets a string of XML into an object
- SimpleXMLElement::__construct() - Creates a new SimpleXMLElement object
- Dealing with XML errors
- libxml_use_internal_errors() - Disable libxml errors and allow user to fetch error information as needed
- Basic SimpleXML usage
- libxml_set_streams_context() - Set the streams context for the next libxml document load or write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.simplexml-load-file.php
