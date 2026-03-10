# XSLTProcessor::transformToXml

Source: https://devdocs.io/php/xsltprocessor.transformtoxml

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::transformToXml — Transform to XML

### Description

```
public XSLTProcessor::transformToXml(object $document): string|null|false
```

Transforms the source node to a string applying the stylesheet given by the xsltprocessor::importStylesheet() method.

### Parameters

The Dom\Document, DOMDocument, SimpleXMLElement or libxml-compatible object to be transformed.

This optional parameter may be used so that XSLTProcessor::transformToDoc() will return an object of the specified class. That class should either extend or be the same class as document's class.

### Errors/Exceptions

The following errors are possible when using an expression that invokes PHP callbacks.

- Throws an Error if a PHP callback is invoked but there were no callbacks registered, or if the named callback was not registered.
- Throws a TypeError if the php:function syntax is used and the handler name is not a string.
- Throws an Error if a non-DOM object was returned from a callback.

### Return Values

The result of the transformation as a string or false on error.

### Changelog

### Examples

Example #1 Transforming to a string

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

echo $proc->transformToXML($xml);

?>
```

The above example will output:

```
Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

<h1>Fight for your mind</h1><h2>by Ben Harper - 1995</h2><hr>
<h1>Electric Ladyland</h1><h2>by Jimi Hendrix - 1997</h2><hr>
```

Example #2 Transforming to a string using Dom\Document

```
<?php

$xml = Dom\XMLDocument::createFromFile('collection.xml');
$xsl = Dom\XMLDocument::createFromFile('collection.xsl');

// Configure the transformer
$proc = new XSLTProcessor;
$proc->importStyleSheet($xsl); // attach the xsl rules

echo $proc->transformToXML($xml);

?>
```

The above example will output:

```
Hey! Welcome to Nicolas Eliaszewicz's sweet CD collection!

<h1>Fight for your mind</h1><h2>by Ben Harper - 1995</h2><hr>
<h1>Electric Ladyland</h1><h2>by Jimi Hendrix - 1997</h2><hr>
```

### See Also

- XSLTProcessor::transformToDoc() - Transform to a document
- XSLTProcessor::transformToUri() - Transform to URI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/xsltprocessor.transformtoxml.php
