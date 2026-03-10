# The tidy class

Source: https://devdocs.io/php/class.tidy

## Introduction

(PHP 5, PHP 7, PHP 8, PECL tidy >= 0.5.2)

An HTML node in an HTML file, as detected by tidy.

## Class synopsis

```
public body(): ?tidyNode
```

```
public cleanRepair(): bool
```

```
public diagnose(): bool
```

```
public getConfig(): array
```

```
public getHtmlVer(): int
```

```
public getOpt(string $option): string|int|bool
```

```
public getOptDoc(string $option): string|false
```

```
public getRelease(): string
```

```
public getStatus(): int
```

```
public head(): ?tidyNode
```

```
public html(): ?tidyNode
```

```
public isXhtml(): bool
```

```
public isXml(): bool
```

```
public parseFile(
 string $filename,
 array|string|null $config = null,
 ?string $encoding = null,
 bool $useIncludePath = false
): bool
```

```
public parseString(string $string, array|string|null $config = null, ?string $encoding = null): bool
```

```
public static repairFile(
 string $filename,
 array|string|null $config = null,
 ?string $encoding = null,
 bool $useIncludePath = false
): string|false
```

```
public static repairString(string $string, array|string|null $config = null, ?string $encoding = null): string|false
```

```
public root(): ?tidyNode
```

## Properties

The HTML representation of the node, including the surrounding tags.

## Table of Contents

- tidy::body — Returns a tidyNode object starting from the <body> tag of the tidy parse tree
- tidy::cleanRepair — Execute configured cleanup and repair operations on parsed markup
- tidy::__construct — Constructs a new tidy object
- tidy::diagnose — Run configured diagnostics on parsed and repaired markup
- tidy::$errorBuffer — Return warnings and errors which occurred parsing the specified document
- tidy::getConfig — Get current Tidy configuration
- tidy::getHtmlVer — Get the Detected HTML version for the specified document
- tidy::getOpt — Returns the value of the specified configuration option for the tidy document
- tidy::getOptDoc — Returns the documentation for the given option name
- tidy::getRelease — Get release date (version) for Tidy library
- tidy::getStatus — Get status of specified document
- tidy::head — Returns a tidyNode object starting from the <head> tag of the tidy parse tree
- tidy::html — Returns a tidyNode object starting from the <html> tag of the tidy parse tree
- tidy::isXhtml — Indicates if the document is a XHTML document
- tidy::isXml — Indicates if the document is a generic (non HTML/XHTML) XML document
- tidy::parseFile — Parse markup in file or URI
- tidy::parseString — Parse a document stored in a string
- tidy::repairFile — Repair a file and return it as a string
- tidy::repairString — Repair a string using an optionally provided configuration file
- tidy::root — Returns a tidyNode object representing the root of the tidy parse tree

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.tidy.php
