# XSLTProcessor::transformToDoc

Source: https://devdocs.io/php/xsltprocessor.transformtodoc

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::transformToDoc — Transform to a document

### Description

```
public XSLTProcessor::transformToDoc(object $document, ?string $returnClass = null): object|false
```

Transforms the source node to a document (e.g. DOMDocument) applying the stylesheet given by the XSLTProcessor::importStylesheet() method.

### Parameters

The Dom\Document, DOMDocument, SimpleXMLElement or libxml-compatible object to be transformed.

This optional parameter may be used so that XSLTProcessor::transformToDoc() will return an object of the specified class. That class should either extend or be the same class as document's class.

### Errors/Exceptions

The following errors are possible when using an expression that invokes PHP callbacks.

- Throws an Error if a PHP callback is invoked but there were no callbacks registered, or if the named callback was not registered.
- Throws a TypeError if the php:function syntax is used and the handler name is not a string.
- Throws an Error if a non-DOM object was returned from a callback.

### Return Values

The resulting document or false on error.

### Changelog

### Examples

Example #1 Transforming to a DOMDocument

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

echo trim($proc->transformToDoc($xml)->firstChild->wholeText);

?>
```

The above example will output:

```
Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!
```

Example #2 Transforming to a Dom\Document

```
<?php

$xml = Dom\XMLDocument::createFromFile('collection.xml');
$xsl = Dom\XMLDocument::createFromFile('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

echo trim($proc->transformToDoc($xml)->firstChild->wholeText);

?>
```

The above example will output:

```
Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!
```

### See Also

- XSLTProcessor::transformToUri() - Transform to URI
- XSLTProcessor::transformToXml() - Transform to XML

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.transformtodoc.php
