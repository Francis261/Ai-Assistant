# Dom\HTMLDocument::createFromString

Source: https://devdocs.io/php/dom-htmldocument.createfromstring

(PHP 8 >= 8.4.0)

Dom\HTMLDocument::createFromString — Parses an HTML document from a string

### Description

```
public static Dom\HTMLDocument::createFromString(string $source, int $options = 0, ?string $overrideEncoding = null): Dom\HTMLDocument
```

Parses an HTML document from a string, according to the living standard.

### Parameters

Bitwise OR of the libxml option constants.

### Return Values

The parsed document as an Dom\HTMLDocument instance.

### Errors/Exceptions

- Throws a ValueError if options contains an invalid option.
- Throws a ValueError if overrideEncoding is an unknown encoding.

### Examples

Example #1 Dom\HTMLDocument::createFromString() example

Parses a sample document.

```
<?php
$dom = Dom\HTMLDocument::createFromString(<<<'HTML'
<!DOCTYPE html>
<html>
<body>
   <p>Hello, world!</p>
</body>
</html>
HTML);
echo $dom->saveHtml();
?>
```

The above example will output:

```
<!DOCTYPE html><html><head></head><body>
    <p>Hello, world!</p>

</body></html>
```

### Notes

Note: Whitespace in the html and head tags is not considered significant and may lose formatting.

### See Also

- Dom\HTMLDocument::createEmpty() - Creates an empty HTML document
- Dom\HTMLDocument::createFromFile() - Parses an HTML document from a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-htmldocument.createfromstring.php
