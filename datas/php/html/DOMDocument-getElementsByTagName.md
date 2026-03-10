# DOMDocument::getElementsByTagName

Source: https://devdocs.io/php/domdocument.getelementsbytagname

(PHP 5, PHP 7, PHP 8)

DOMDocument::getElementsByTagName — Searches for all elements with given local tag name

### Description

```
public DOMDocument::getElementsByTagName(string $qualifiedName): DOMNodeList
```

This function returns a new instance of class DOMNodeList containing all the elements with a given local tag name.

### Parameters

The local name (without namespace) of the tag to match on. The special value * matches all tags.

### Return Values

A new DOMNodeList object containing all the matched elements.

### Examples

Example #1 Basic Usage Example

```
<?php
$xml = <<< XML
<?xml version="1.0" encoding="utf-8"?>
<books>
 <book>Patterns of Enterprise Application Architecture</book>
 <book>Design Patterns: Elements of Reusable Software Design</book>
 <book>Clean Code</book>
</books>
XML;

$dom = new DOMDocument;
$dom->loadXML($xml);
$books = $dom->getElementsByTagName('book');
foreach ($books as $book) {
    echo $book->nodeValue, PHP_EOL;
}
?>
```

The above example will output:

```
Patterns of Enterprise Application Architecture
Design Patterns: Elements of Reusable Software Design
Clean Code
```

### See Also

- DOMDocument::getElementsByTagNameNS() - Searches for all elements with given tag name in specified namespace

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.getelementsbytagname.php
