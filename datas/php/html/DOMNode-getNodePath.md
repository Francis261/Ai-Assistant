# DOMNode::getNodePath

Source: https://devdocs.io/php/domnode.getnodepath

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DOMNode::getNodePath — Get an XPath for a node

### Description

```
public DOMNode::getNodePath(): ?string
```

Gets an XPath location path for the node.

### Parameters

This function has no parameters.

### Return Values

Returns a string containing the XPath, or null in case of an error.

### Examples

Example #1 DOMNode::getNodePath() example

```
<?php
// Create a new DOMDocument instance
$dom = new DOMDocument;

// Load the XML
$dom->loadXML('
<fruits>
 <apples>
  <apple>braeburn</apple>
  <apple>granny smith</apple>
 </apples>
 <pears>
  <pear>conference</pear>
 </pears>
</fruits>
');

// Print XPath for each element
foreach ($dom->getElementsByTagName('*') as $node) {
    echo $node->getNodePath() . "\n";
}
?>
```

The above example will output:

```
/fruits
/fruits/apples
/fruits/apples/apple[1]
/fruits/apples/apple[2]
/fruits/pears
/fruits/pears/pear
```

### See Also

- DOMXPath

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.getnodepath.php
