# DOMXPath::registerPhpFunctionNS

Source: https://devdocs.io/php/domxpath.registerphpfunctionns

(PHP >= 8.4.0)

DOMXPath::registerPhpFunctionNS — Register a PHP functions as namespaced XPath function

### Description

```
public DOMXPath::registerPhpFunctionNS(string $namespaceURI, string $name, callable $callable): void
```

This method enables the ability to use a PHP function as a namespaced XPath function inside XPath expressions.

### Parameters

### Errors/Exceptions

- Throws a ValueError if a callback name is not valid.
- Throws a ValueError if options contains an invalid option.
- Throws a ValueError if overrideEncoding is an unknown encoding.
- Throws a TypeError if a given callback is not callable.

### Return Values

No value is returned.

### Examples

Example #1 Register a namespaced XPath function and call it from the XPath expression

```
<?php

$xml = <<<EOB
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
EOB;

$doc = new DOMDocument();
$doc->loadXML($xml);

$xpath = new DOMXPath($doc);

// Register the my: namespace (required)
$xpath->registerNamespace("my", "urn:my.ns");

// Register PHP function
$xpath->registerPHPFunctionNS(
    'urn:my.ns',
    'substring',
    fn (array $arg1, int $start, int $length) => substr($arg1[0]->textContent, $start, $length)
);

// Call substr function on the book title
$nodes = $xpath->query('//book[my:substring(title, 0, 3) = "PHP"]');

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

### See Also

- DOMXPath::registerNamespace() - Registers the namespace with the DOMXPath object
- DOMXPath::query() - Evaluates the given XPath expression
- DOMXPath::evaluate() - Evaluates the given XPath expression and returns a typed result if possible
- XSLTProcessor::registerPHPFunctions() - Enables the ability to use PHP functions as XSLT functions
- XSLTProcessor::registerPHPFunctionNS() - Register a PHP function as namespaced XSLT function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domxpath.registerphpfunctionns.php
