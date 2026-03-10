# SimpleXMLElement::getChildren

Source: https://devdocs.io/php/simplexmlelement.getchildren

(PHP 8)

SimpleXMLElement::getChildren — Returns the sub-elements of the current element

### Description

```
public SimpleXMLElement::getChildren(): ?SimpleXMLElement
```

Prior to PHP 8.0, SimpleXMLElement::getChildren() was only declared on the subclass SimpleXMLIterator.

This method returns a SimpleXMLElement object containing sub-elements of the current SimpleXMLElement element.

### Parameters

This function has no parameters.

### Return Values

Returns a SimpleXMLElement object containing the sub-elements of the current element.

### Examples

Example #1 Return the sub-elements of the current element

```
<?php
$xml = <<<XML
<books>
    <book>
        <title>PHP Basics</title>
        <author>Jim Smith</author>
    </book>
    <book>XML basics</book>
</books>
XML;

$xmlElement = new SimpleXMLElement($xml);
for ($xmlElement->rewind(); $xmlElement->valid(); $xmlElement->next()) {
    foreach($xmlElement->getChildren() as $name => $data) {
    echo "The $name is '$data' from the class " . get_class($data) . "\n";
    }
}
?>
```

The above example will output:

```
The title is 'PHP Basics' from the class SimpleXMLElement
The author is 'Jim Smith' from the class SimpleXMLElement
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.getchildren.php
