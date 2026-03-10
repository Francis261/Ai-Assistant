# SimpleXMLElement::__toString

Source: https://devdocs.io/php/simplexmlelement.tostring

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SimpleXMLElement::__toString — Returns the string content

### Description

```
public SimpleXMLElement::__toString(): string
```

Returns text content that is directly in this element. Does not return text content that is inside this element's children.

### Parameters

This function has no parameters.

### Return Values

Returns the string content on success or an empty string on failure.

### Examples

Example #1 Get string content

```
<?php
$xml = new SimpleXMLElement('<a>1 <b>2 </b>3</a>');
echo $xml;
?>
```

The above example will output:

```
1 3
```

### See Also

- SimpleXMLElement::asXML() - Return a well-formed XML string based on SimpleXML element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.tostring.php
