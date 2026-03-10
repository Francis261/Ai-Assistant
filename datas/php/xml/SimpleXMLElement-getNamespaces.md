# SimpleXMLElement::getNamespaces

Source: https://devdocs.io/php/simplexmlelement.getnamespaces

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SimpleXMLElement::getNamespaces — Returns namespaces used in document

### Description

```
public SimpleXMLElement::getNamespaces(bool $recursive = false): array
```

Returns namespaces used in document

### Parameters

If specified, returns all namespaces used in parent and child nodes. Otherwise, returns only namespaces used in root node.

### Return Values

The getNamespaces method returns an array of namespace names with their associated URIs.

### Examples

Example #1 Get document namespaces in use

```
<?php

$xml = <<<XML
<?xml version="1.0" standalone="yes"?>
<people xmlns:p="http://example.org/ns" xmlns:t="http://example.org/test">
    <p:person id="1">John Doe</p:person>
    <p:person id="2">Susie Q. Public</p:person>
</people>
XML;
 
$sxe = new SimpleXMLElement($xml);

$namespaces = $sxe->getNamespaces(true);
var_dump($namespaces);

?>
```

The above example will output:

```
array(1) {
  ["p"]=>
  string(21) "http://example.org/ns"
}
```

### See Also

- SimpleXMLElement::getDocNamespaces() - Returns namespaces declared in document
- SimpleXMLElement::registerXPathNamespace() - Creates a prefix/ns context for the next XPath query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.getnamespaces.php
