# DOMDocument::saveHTML

Source: https://devdocs.io/php/domdocument.savehtml

(PHP 5, PHP 7, PHP 8)

DOMDocument::saveHTML — Dumps the internal document into a string using HTML formatting

### Description

```
public DOMDocument::saveHTML(?DOMNode $node = null): string|false
```

Creates an HTML document from the DOM representation. This function is usually called after building a new dom document from scratch as in the example below.

### Parameters

Optional parameter to output a subset of the document.

### Return Values

Returns the HTML, or false if an error occurred.

### Examples

Example #1 Saving a HTML tree into a string

```
<?php

$doc = new DOMDocument('1.0');

$root = $doc->createElement('html');
$root = $doc->appendChild($root);

$head = $doc->createElement('head');
$head = $root->appendChild($head);

$title = $doc->createElement('title');
$title = $head->appendChild($title);

$text = $doc->createTextNode('This is the title');
$text = $title->appendChild($text);

echo $doc->saveHTML();

?>
```

### See Also

- DOMDocument::saveHTMLFile() - Dumps the internal document into a file using HTML formatting
- DOMDocument::loadHTML() - Load HTML from a string
- DOMDocument::loadHTMLFile() - Load HTML from a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.savehtml.php
