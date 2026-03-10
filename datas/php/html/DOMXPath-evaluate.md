# DOMXPath::evaluate

Source: https://devdocs.io/php/domxpath.evaluate

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

DOMXPath::evaluate — Evaluates the given XPath expression and returns a typed result if possible

### Description

```
public DOMXPath::evaluate(string $expression, ?DOMNode $contextNode = null, bool $registerNodeNS = true): mixed
```

Executes the given XPath expression and returns a typed result if possible.

### Parameters

The XPath expression to execute.

The optional contextNode can be specified for doing relative XPath queries. By default, the queries are relative to the root element.

Whether to automatically register the in-scope namespace prefixes of the context node to the DOMXPath object. This can be used to avoid needing to call DOMXPath::registerNamespace() manually for each in-scope namespaces. When a namespace prefix conflict exists, only the nearest descendant namespace prefix is registered.

### Errors/Exceptions

The following errors are possible when using an expression that invokes PHP callbacks.

- Throws an Error if a PHP callback is invoked but there were no callbacks registered, or if the named callback was not registered.
- Throws a TypeError if the php:function syntax is used and the handler name is not a string.
- Throws an Error if a non-DOM object was returned from a callback.

### Return Values

Returns a typed result if possible or a DOMNodeList containing all nodes matching the given XPath expression.

If the expression is malformed or the contextNode is invalid, DOMXPath::evaluate() returns false.

### Examples

Example #1 Getting the count of all the english books

```
<?php

$doc = new DOMDocument;

$doc->load('examples/book-dcobook.xml');

$xpath = new DOMXPath($doc);

$tbody = $doc->getElementsByTagName('tbody')->item(0);

// our query is relative to the tbody node
$query = 'count(row/entry[. = "en"])';

$entries = $xpath->evaluate($query, $tbody);
echo "There are $entries english books\n";

?>
```

The above example will output:

```
There are 2 english books
```

### See Also

- DOMXPath::query() - Evaluates the given XPath expression

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domxpath.evaluate.php
