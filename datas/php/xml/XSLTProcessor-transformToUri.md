# XSLTProcessor::transformToUri

Source: https://devdocs.io/php/xsltprocessor.transformtouri

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::transformToUri — Transform to URI

### Description

```
public XSLTProcessor::transformToUri(object $document, string $uri): int
```

Transforms the source node to an URI applying the stylesheet given by the XSLTProcessor::importStylesheet() method.

### Parameters

The Dom\Document, DOMDocument, SimpleXMLElement or libxml-compatible object to be transformed.

The target URI for the transformation.

### Errors/Exceptions

The following errors are possible when using an expression that invokes PHP callbacks.

- Throws an Error if a PHP callback is invoked but there were no callbacks registered, or if the named callback was not registered.
- Throws a TypeError if the php:function syntax is used and the handler name is not a string.
- Throws an Error if a non-DOM object was returned from a callback.

### Return Values

Returns the number of bytes written or false if an error occurred.

### Changelog

### Examples

Example #1 Transforming to a HTML file

```
<?php

// Load the XML source
$xml = new DOMDocument;
$xml->load('collection.xml');

$xsl = new DOMDocument;
$xsl->load('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

$proc->transformToURI($xml, 'file:///tmp/out.html');

?>
```

Example #2 Transforming to a HTML file using Dom\Document

```
<?php

$xml = Dom\XMLDocument::createFromFile('collection.xml');
$xsl = Dom\XMLDocument::createFromFile('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

$proc->transformToURI($xml, 'file:///tmp/out.html');

?>
```

### See Also

- XSLTProcessor::transformToDoc() - Transform to a document
- XSLTProcessor::transformToXml() - Transform to XML

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.transformtouri.php
