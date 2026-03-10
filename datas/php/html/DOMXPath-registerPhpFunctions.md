# DOMXPath::registerPhpFunctions

Source: https://devdocs.io/php/domxpath.registerphpfunctions

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DOMXPath::registerPhpFunctions — Register PHP functions as XPath functions

### Description

```
public DOMXPath::registerPhpFunctions(string|array|null $restrict = null): void
```

This method enables the ability to use PHP functions within XPath expressions.

### Parameters

Use this parameter to only allow certain functions to be called from XPath.

This parameter can be one of the following: a string (a function name), an indexed array of function names, or an associative array with keys being the function name and the associated value being the callable.

### Return Values

No value is returned.

### Errors/Exceptions

- Throws a ValueError if a callback name is not valid.
- Throws a ValueError if options contains an invalid option.
- Throws a ValueError if overrideEncoding is an unknown encoding.
- Throws a TypeError if a given callback is not callable.

### Changelog

### Examples

The following examples use book.xml which contains the following:

Example #1 book.xml

```
<?xml version="1.0" encoding="UTF-8"?>
<books>
 <book>
  <title>PHP Basics</title>
  <author>Jim Smith</author>
  <author>Jane Smith</author>
 </book>
 <book>
  <title>PHP Secrets</title>
  <author>Jenny Smythe</author>
 </book>
 <book>
  <title>XML basics</title>
  <author>Joe Black</author>
 </book>
</books>
```

Example #2 DOMXPath::registerPhpFunctions() with php:functionString

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book-simple.xml');

$xpath = new DOMXPath($doc);

// Register the php: namespace (required)
$xpath->registerNamespace("php", "http://php.net/xpath");

// Register PHP functions (no restrictions)
$xpath->registerPhpFunctions();

// Call substr function on the book title
$nodes = $xpath->query('//book[php:functionString("substr", title, 0, 3) = "PHP"]');

echo "Found {$nodes->length} books starting with 'PHP':\n";
foreach ($nodes as $node) {
    $title  = $node->getElementsByTagName("title")->item(0)->nodeValue;
    $author = $node->getElementsByTagName("author")->item(0)->nodeValue;
    echo "$title by $author\n";
}

?>
```

The above example will output something similar to:

```
Found 2 books starting with 'PHP':
PHP Basics by Jim Smith
PHP Secrets by Jenny Smythe
```

Example #3 DOMXPath::registerPhpFunctions() with php:function

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book-simple.xml');

$xpath = new DOMXPath($doc);

// Register the php: namespace (required)
$xpath->registerNamespace("php", "http://php.net/xpath");

// Register PHP functions (has_multiple only)
$xpath->registerPhpFunctions("has_multiple");
 
function has_multiple($nodes) {
    // Return true if more than one author
    return count($nodes) > 1;
}
// Filter books with multiple authors
$books = $xpath->query('//book[php:function("has_multiple", author)]');

echo "Books with multiple authors:\n";
foreach ($books as $book) {
    echo $book->getElementsByTagName("title")->item(0)->nodeValue . "\n";
}

?>
```

The above example will output something similar to:

```
Books with multiple authors:
PHP Basics
```

Example #4 DOMXPath::registerPhpFunctions() with a callable

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book-simple.xml');

$xpath = new DOMXPath($doc);

// Register the php: namespace (required)
$xpath->registerNamespace("php", "http://php.net/xpath");

// Register PHP functions (has_multiple only)
$xpath->registerPhpFunctions(["has_multiple" => fn ($nodes) => count($nodes) > 1]);

// Filter books with multiple authors
$books = $xpath->query('//book[php:function("has_multiple", author)]');

echo "Books with multiple authors:\n";
foreach ($books as $book) {
    echo $book->getElementsByTagName("title")->item(0)->nodeValue . "\n";
}

?>
```

The above example will output something similar to:

```
Books with multiple authors:
PHP Basics
```

### See Also

- DOMXPath::registerNamespace() - Registers the namespace with the DOMXPath object
- DOMXPath::query() - Evaluates the given XPath expression
- DOMXPath::evaluate() - Evaluates the given XPath expression and returns a typed result if possible
- XSLTProcessor::registerPHPFunctions() - Enables the ability to use PHP functions as XSLT functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domxpath.registerphpfunctions.php
