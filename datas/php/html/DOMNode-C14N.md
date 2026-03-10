# DOMNode::C14N

Source: https://devdocs.io/php/domnode.c14n

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DOMNode::C14N — Canonicalize nodes to a string

### Description

```
public DOMNode::C14N(
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): string|false
```

Canonicalize nodes to a string

### Parameters

Enable exclusive parsing of only the nodes matched by the provided xpath or namespace prefixes.

Retain comments in output.

An array of XPaths to filter the nodes by. Each entry in this array is an associative array with:

- A required query key containing the XPath expression as a string.
- An optional namespaces key containing an array that maps namespace prefixes (keys) to namespace URIs (values).

An array of namespace prefixes to filter the nodes by.

### Return Values

Returns canonicalized nodes as a string or false on failure

### Examples

Example #1 Example with XPath query

This example demonstrates advanced usage canonicalizing and filtering the nodes by an XPath query.

```
<?php

$dom = new DOMDocument();
$dom->loadXML(<<<XML
<root xmlns:food="urn:food">
    <!-- redundant namespace declaration will be canonicalized -->
    <food:fruit xmlns:food="urn:food">Apple</food:fruit>
    <food:fruit>Orange</food:fruit>
    <food:fruit>Pear</food:fruit>
    <!-- vegetables here -->
    <food:vegetable>Lettuce</food:vegetable>
</root>
XML);

echo $dom->C14N(true, false, [
    "query" => ".//f:fruit|.//f:fruit/text()",
    "namespaces" => ["f" => "urn:food"],
]);
?>
```

The above example will output:

```
<food:fruit>Apple</food:fruit><food:fruit>Orange</food:fruit><food:fruit>Pear</food:fruit>
```

### See Also

- DOMNode::C14NFile() - Canonicalize nodes to a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.c14n.php
