# DOMNode::getLineNo

Source: https://devdocs.io/php/domnode.getlineno

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DOMNode::getLineNo — Get line number for a node

### Description

```
public DOMNode::getLineNo(): int
```

Gets line number for where the node was defined at parse time.

### Parameters

This function has no parameters.

### Return Values

Returns the line number where the node was defined at parse time. If the node was created manually, the return value will be 0.

### Examples

Example #1 DOMNode::getLineNo() example

```
<?php
// XML dump for below example
$xml = <<<XML
<?xml version="1.0" encoding="utf-8"?>
<root>
    <node />
</root>
XML;

// Create a new DOMDocument instance
$dom = new DOMDocument;

// Load the XML
$dom->loadXML($xml);

// Print where the line where the 'node' element was defined in
printf('The <node> tag is defined on line %d', $dom->getElementsByTagName('node')->item(0)->getLineNo());
?>
```

The above example will output:

```
The <node> tag is defined in line 3
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.getlineno.php
