# SimpleXMLElement::attributes

Source: https://devdocs.io/php/simplexmlelement.attributes

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::attributes — Identifies an element's attributes

### Description

```
public SimpleXMLElement::attributes(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement
```

This function provides the attributes and values defined within an xml tag.

Note: SimpleXML has made a rule of adding iterative properties to most methods. They cannot be viewed using var_dump() or anything else which can examine objects.

### Parameters

An optional namespace for the retrieved attributes

Default to false

### Return Values

Returns a SimpleXMLElement object that can be iterated over to loop through the attributes on the tag.

Returns null if called on a SimpleXMLElement object that already represents an attribute and not a tag.

### Examples

Example #1 Interpret an XML string

```
<?php
$string = <<<XML
<a>
 <foo name="one" game="lonely">1</foo>
</a>
XML;

$xml = simplexml_load_string($string);
foreach($xml->foo[0]->attributes() as $a => $b) {
    echo $a,'="',$b,"\"\n";
}
?>
```

The above example will output:

```
name="one"
game="lonely"
```

### See Also

- Basic SimpleXML usage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.attributes.php
