# Dom\HTMLDocument::createEmpty

Source: https://devdocs.io/php/dom-htmldocument.createempty

(PHP 8 >= 8.4.0)

Dom\HTMLDocument::createEmpty — Creates an empty HTML document

### Description

```
public static Dom\HTMLDocument::createEmpty(string $encoding = "UTF-8"): Dom\HTMLDocument
```

Creates an empty HTML document without any elements.

### Parameters

### Return Values

An empty HTML document.

### Examples

Example #1 Dom\HTMLDocument::createEmpty() example

Creates an empty document and serializes it.

```
<?php
$dom = Dom\HTMLDocument::createEmpty();
var_dump($dom->saveHtml());
?>
```

The above example will output:

```
string(0) ""
```

### See Also

- Dom\HTMLDocument::createFromString() - Parses an HTML document from a string
- Dom\HTMLDocument::createFromFile() - Parses an HTML document from a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-htmldocument.createempty.php
