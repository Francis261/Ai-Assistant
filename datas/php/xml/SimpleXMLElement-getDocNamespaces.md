# SimpleXMLElement::getDocNamespaces

Source: https://devdocs.io/php/simplexmlelement.getdocnamespaces

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SimpleXMLElement::getDocNamespaces — Returns namespaces declared in document

### Description

```
public SimpleXMLElement::getDocNamespaces(bool $recursive = false, bool $fromRoot = true): array|false
```

Returns namespaces declared in document

### Parameters

If specified, returns all namespaces declared in parent and child nodes. Otherwise, returns only namespaces declared in root node.

Allows you to recursively check namespaces under a child node instead of from the root of the XML doc.

### Return Values

The getDocNamespaces method returns an array of namespace names with their associated URIs.

### Examples

Example #1 Get document namespaces

```
<?php

$xml = <<<XML
<?xml version="1.0" standalone="yes"?>
<people xmlns:p="http://example.org/ns">
    <p:person id="1">John Doe</p:person>
    <p:person id="2">Susie Q. Public</p:person>
</people>
XML;
 
$sxe = new SimpleXMLElement($xml);

$namespaces = $sxe->getDocNamespaces();
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

Example #2 Working with multiple namespaces

```
<?php

$xml = <<<XML
<?xml version="1.0" standalone="yes"?>
<people xmlns:p="http://example.org/ns" xmlns:t="http://example.org/test">
    <p:person t:id="1">John Doe</p:person>
    <p:person t:id="2" a:addr="123 Street" xmlns:a="http://example.org/addr">
        Susie Q. Public
    </p:person>
</people>
XML;
 
$sxe = new SimpleXMLElement($xml);

$namespaces = $sxe->getDocNamespaces(TRUE);
var_dump($namespaces);

?>
```

The above example will output:

```
array(3) {
  ["p"]=>
  string(21) "http://example.org/ns"
  ["t"]=>
  string(23) "http://example.org/test"
  ["a"]=>
  string(23) "http://example.org/addr"
}
```

### See Also

- SimpleXMLElement::getNamespaces() - Returns namespaces used in document
- SimpleXMLElement::registerXPathNamespace() - Creates a prefix/ns context for the next XPath query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.getdocnamespaces.php
