# SimpleXMLElement::hasChildren

Source: https://devdocs.io/php/simplexmlelement.haschildren

(PHP 8)

SimpleXMLElement::hasChildren — Checks whether the current element has sub elements

### Description

```
public SimpleXMLElement::hasChildren(): bool
```

Prior to PHP 8.0, SimpleXMLElement::hasChildren() was only declared on the subclass SimpleXMLIterator.

This method checks whether the current SimpleXMLElement element has sub-elements.

### Parameters

This function has no parameters.

### Return Values

true if the current element has sub-elements, otherwise false

### Examples

Example #1 Check whether the current element has sub-elements

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
    if ($xmlElement->hasChildren()) {
        var_dump($xmlElement->current());
    }
}
?>
```

The above example will output:

```
object(SimpleXMLElement)#2 (2) {
  ["title"]=>
  string(10) "PHP Basics"
  ["author"]=>
  string(9) "Jim Smith"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.haschildren.php
