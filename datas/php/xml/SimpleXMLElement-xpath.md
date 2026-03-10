# SimpleXMLElement::xpath

Source: https://devdocs.io/php/simplexmlelement.xpath

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::xpath — Runs XPath query on XML data

### Description

```
public SimpleXMLElement::xpath(string $expression): array|null|false
```

The xpath method searches the SimpleXML node for children matching the XPath expression.

### Parameters

An XPath path

### Return Values

Returns an array of SimpleXMLElement objects on success; or null or false in case of an error.

### Examples

Example #1 Xpath

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
    echo '/a/b/c: ',$node,"\n";
}

/* Relative paths also work... */
$result = $xml->xpath('b/c');

foreach ($result as $node) {
    echo 'b/c: ',$node,"\n";
}
?>
```

The above example will output:

```
/a/b/c: text
/a/b/c: stuff
b/c: text
b/c: stuff
```

Notice that the two results are equal.

### See Also

- SimpleXMLElement::registerXPathNamespace() - Creates a prefix/ns context for the next XPath query
- SimpleXMLElement::getDocNamespaces() - Returns namespaces declared in document
- SimpleXMLElement::getNamespaces() - Returns namespaces used in document
- Basic SimpleXML usage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.xpath.php
