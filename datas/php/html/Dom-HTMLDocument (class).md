# The Dom\HTMLDocument class

Source: https://devdocs.io/php/class.dom-htmldocument

## Introduction

(PHP 8 >= 8.4.0)

Represents an HTML document.

## Class synopsis

```
public static createEmpty(string $encoding = "UTF-8"): Dom\HTMLDocument
```

```
public static createFromFile(string $path, int $options = 0, ?string $overrideEncoding = null): Dom\HTMLDocument
```

```
public static createFromString(string $source, int $options = 0, ?string $overrideEncoding = null): Dom\HTMLDocument
```

```
public saveHtml(?Dom\Node $node = null): string
```

```
public saveHtmlFile(string $filename): int|false
```

```
public saveXml(?Dom\Node $node = null, int $options = 0): string|false
```

```
public saveXmlFile(string $filename, int $options = 0): int|false
```

## Notes

Note: The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.

## Table of Contents

- Dom\HTMLDocument::createEmpty — Creates an empty HTML document
- Dom\HTMLDocument::createFromFile — Parses an HTML document from a file
- Dom\HTMLDocument::createFromString — Parses an HTML document from a string
- Dom\HTMLDocument::saveHtml — Serializes the document as an HTML string
- Dom\HTMLDocument::saveHtmlFile — Serializes the document as an HTML file
- Dom\HTMLDocument::saveXml — Serializes the document as an XML string
- Dom\HTMLDocument::saveXmlFile — Serializes the document as an XML file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-htmldocument.php
