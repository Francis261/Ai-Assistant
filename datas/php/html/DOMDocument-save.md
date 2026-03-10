# DOMDocument::save

Source: https://devdocs.io/php/domdocument.save

(PHP 5, PHP 7, PHP 8)

DOMDocument::save — Dumps the internal XML tree back into a file

### Description

```
public DOMDocument::save(string $filename, int $options = 0): int|false
```

Creates an XML document from the DOM representation. This function is usually called after building a new dom document from scratch as in the example below.

### Parameters

The path to the saved XML document.

Additional Options. Currently only LIBXML_NOEMPTYTAG is supported.

### Return Values

Returns the number of bytes written or false if an error occurred.

### Examples

Example #1 Saving a DOM tree into a file

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

echo 'Wrote: ' . $doc->save("/tmp/test.xml") . ' bytes'; // Wrote: 72 bytes

?>
```

### See Also

- DOMDocument::saveXML() - Dumps the internal XML tree back into a string
- DOMDocument::load() - Load XML from a file
- DOMDocument::loadXML() - Load XML from a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.save.php
