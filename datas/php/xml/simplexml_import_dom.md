# simplexml_import_dom

Source: https://devdocs.io/php/function.simplexml-import-dom

(PHP 5, PHP 7, PHP 8)

simplexml_import_dom — Get a SimpleXMLElement object from an XML or HTML node

### Description

```
simplexml_import_dom(object $node, ?string $class_name = SimpleXMLElement::class): ?SimpleXMLElement
```

This function takes a node of a DOM document and makes it into a SimpleXML node. This new object can then be used as a native SimpleXML element.

### Parameters

A DOM Element node

You may use this optional parameter so that simplexml_import_dom() will return an object of the specified class. That class should extend the SimpleXMLElement class.

### Return Values

Returns a SimpleXMLElement or null on failure.

### Errors/Exceptions

Throws a TypeError when passed a non-XML or non-HTML node.

### Changelog

### Examples

Example #1 Importing a DOMDocument

```
<?php
$dom = new DOMDocument;
$dom->loadXML('<books><book><title>blah</title></book></books>');
if (!$dom) {
    echo 'Error while parsing the document';
    exit;
}

$s = simplexml_import_dom($dom);

echo $s->book[0]->title;
?>
```

The above example will output:

```
blah
```

Example #2 Importing a Dom\Document

```
<?php
$dom = Dom\XMLDocument::createFromString('<books><book><title>blah</title></book></books>');

$s = simplexml_import_dom($dom);

echo $s->book[0]->title;
?>
```

The above example will output:

```
blah
```

### See Also

- dom_import_simplexml() - Gets a DOMAttr or DOMElement object from a SimpleXMLElement object
- Basic SimpleXML usage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.simplexml-import-dom.php
