# DOMDocument::getElementsByTagNameNS

Source: https://devdocs.io/php/domdocument.getelementsbytagnamens

(PHP 5, PHP 7, PHP 8)

DOMDocument::getElementsByTagNameNS — Searches for all elements with given tag name in specified namespace

### Description

```
public DOMDocument::getElementsByTagNameNS(?string $namespace, string $localName): DOMNodeList
```

Returns a DOMNodeList of all elements with a given local name and a namespace URI.

### Parameters

The namespace URI of the elements to match on. The special value "*" matches all namespaces. Passing null matches the empty namespace.

The local name of the elements to match on. The special value "*" matches all local names.

### Return Values

A new DOMNodeList object containing all the matched elements.

### Changelog

### Examples

Example #1 Get all the XInclude elements

```
<?php

$xml = <<<EOD
<?xml version="1.0" ?>
<chapter xmlns:xi="http://www.w3.org/2001/XInclude">
<title>Books of the other guy..</title>
<para>
 <xi:include href="book.xml">
  <xi:fallback>
   <error>xinclude: book.xml not found</error>
  </xi:fallback>
 </xi:include>
 <include>
  This is another namespace
 </include>
</para>
</chapter>
EOD;
$dom = new DOMDocument;

// load the XML string defined above
$dom->loadXML($xml);

foreach ($dom->getElementsByTagNameNS('http://www.w3.org/2001/XInclude', '*') as $element) {
    echo 'local name: ', $element->localName, ', prefix: ', $element->prefix, "\n";
}
?>
```

The above example will output:

```
local name: include, prefix: xi
local name: fallback, prefix: xi
```

### See Also

- DOMDocument::getElementsByTagName() - Searches for all elements with given local tag name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.getelementsbytagnamens.php
