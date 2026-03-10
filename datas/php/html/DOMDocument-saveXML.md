# DOMDocument::saveXML

Source: https://devdocs.io/php/domdocument.savexml

(PHP 5, PHP 7, PHP 8)

DOMDocument::saveXML — Dumps the internal XML tree back into a string

### Description

```
public DOMDocument::saveXML(?DOMNode $node = null, int $options = 0): string|false
```

Creates an XML document from the DOM representation. This function is usually called after building a new dom document from scratch as in the example below.

### Parameters

Use this parameter to output only a specific node without XML declaration rather than the entire document.

### Return Values

Returns the XML, or false if an error occurred.

### Errors/Exceptions

Raised if node is from another document.

### Changelog

### Examples

Example #1 Saving a DOM tree into a string

```
<?php

$doc = new DOMDocument('1.0');
// we want a nice output
$doc->formatOutput = true;

$root = $doc->createElement('book');
$root = $doc->appendChild($root);

$title = $doc->createElement('title');
$title = $root->appendChild($title);

$text = $doc->createTextNode('This is the title');
$text = $title->appendChild($text);

echo "Saving all the document:\n";
echo $doc->saveXML() . "\n";

echo "Saving only the title part:\n";
echo $doc->saveXML($title);

?>
```

The above example will output:

```
Saving all the document:
<?xml version="1.0"?>
<book>
  <title>This is the title</title>
</book>

Saving only the title part:
<title>This is the title</title>
```

### See Also

- DOMDocument::save() - Dumps the internal XML tree back into a file
- DOMDocument::load() - Load XML from a file
- DOMDocument::loadXML() - Load XML from a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.savexml.php
