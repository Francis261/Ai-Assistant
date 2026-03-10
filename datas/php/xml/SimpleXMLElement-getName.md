# SimpleXMLElement::getName

Source: https://devdocs.io/php/simplexmlelement.getname

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

SimpleXMLElement::getName — Gets the name of the XML element

### Description

```
public SimpleXMLElement::getName(): string
```

Gets the name of the XML element.

### Parameters

This function has no parameters.

### Return Values

The getName method returns as a string the name of the XML tag referenced by the SimpleXMLElement object.

### Examples

Note:

Listed examples may include examples/simplexml-data.php, which refers to the XML string found in the first example of the basic usage guide.

Example #1 Get XML element names

```
<?php
include 'examples/simplexml-data.php';
$sxe = new SimpleXMLElement($xmlstr);

echo $sxe->getName() . "\n";

foreach ($sxe->children() as $child)
{
    echo $child->getName() . "\n";
}

?>
```

The above example will output:

```
movies
movie
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.getname.php
