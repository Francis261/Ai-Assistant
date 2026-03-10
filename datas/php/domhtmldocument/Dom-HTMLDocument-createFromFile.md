# Dom\HTMLDocument::createFromFile

Source: https://devdocs.io/php/dom-htmldocument.createfromfile

(PHP 8 >= 8.4.0)

Dom\HTMLDocument::createFromFile — Parses an HTML document from a file

### Description

```
public static Dom\HTMLDocument::createFromFile(string $path, int $options = 0, ?string $overrideEncoding = null): Dom\HTMLDocument
```

Parses an HTML document from a file, according to the living standard.

### Parameters

Bitwise OR of the libxml option constants.

### Return Values

The parsed document as an Dom\HTMLDocument instance.

### Errors/Exceptions

- Throws a ValueError if path contains null bytes or contains "%00".
- Throws a ValueError if options contains an invalid option.
- Throws a ValueError if overrideEncoding is an unknown encoding.
- Throws an Exception if the file could not be opened.

### Notes

Note: Whitespace in the html and head tags is not considered significant and may lose formatting.

### See Also

- Dom\HTMLDocument::createEmpty() - Creates an empty HTML document
- Dom\HTMLDocument::createFromString() - Parses an HTML document from a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-htmldocument.createfromfile.php
