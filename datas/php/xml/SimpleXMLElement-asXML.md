# SimpleXMLElement::asXML

Source: https://devdocs.io/php/simplexmlelement.asxml

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::asXML — Return a well-formed XML string based on SimpleXML element

### Description

```
public SimpleXMLElement::asXML(?string $filename = null): string|bool
```

The asXML method formats the parent object's data in XML version 1.0.

### Parameters

If a string value is provided, the function writes the data to the file rather than returning it.

### Return Values

If the filename isn't specified, this function returns a string on success and false on error. If the parameter is specified, it returns true if the file was written successfully and false otherwise.

### Changelog

### Examples

Example #1 Get XML

```
<?php
$string = <<<XML
<a>
 <b>
  <c>text</c>
  <c>stuff</c>
 </b>
 <d>
  <c>code</c>
 </d>
</a>
XML;

$xml = new SimpleXMLElement($string);

echo $xml->asXML();

?>
```

The above example will output:

```
<?xml version="1.0"?>
<a>
 <b>
  <c>text</c>
  <c>stuff</c>
 </b>
 <d>
  <c>code</c>
 </d>
</a>
```

asXML also works on Xpath results:

Example #2 Using asXML() on SimpleXMLElement::xpath() results

```
<?php
$string = <<<XML
<a>
 <b>
  <c>text</c>
  <c>stuff</c>
 </b>
 <d>
  <c>code</c>
 </d>
</a>
XML;

$xml = new SimpleXMLElement($string);

/* Search for <a><b><c> */
$result = $xml->xpath('/a/b/c');

foreach ($result as $node) {
    echo $node->asXML();
}
?>
```

The above example will output:

```
<c>text</c><c>stuff</c>
```

### See Also

- SimpleXMLElement::__toString() - Returns the string content
- Basic SimpleXML usage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.asxml.php
