# The DOMXPath class

Source: https://devdocs.io/php/class.domxpath

## Introduction

(PHP 5, PHP 7, PHP 8)

Allows to use XPath 1.0 queries on HTML or XML documents.

## Class synopsis

```
public evaluate(string $expression, ?DOMNode $contextNode = null, bool $registerNodeNS = true): mixed
```

```
public query(string $expression, ?DOMNode $contextNode = null, bool $registerNodeNS = true): mixed
```

```
public static quote(string $str): string
```

```
public registerNamespace(string $prefix, string $namespace): bool
```

```
public registerPhpFunctionNS(string $namespaceURI, string $name, callable $callable): void
```

```
public registerPhpFunctions(string|array|null $restrict = null): void
```

## Properties

## Changelog

## Table of Contents

- DOMXPath::__construct — Creates a new DOMXPath object
- DOMXPath::evaluate — Evaluates the given XPath expression and returns a typed result if possible
- DOMXPath::query — Evaluates the given XPath expression
- DOMXPath::quote — Quotes a string for use in an XPath expression
- DOMXPath::registerNamespace — Registers the namespace with the DOMXPath object
- DOMXPath::registerPhpFunctionNS — Register a PHP functions as namespaced XPath function
- DOMXPath::registerPhpFunctions — Register PHP functions as XPath functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domxpath.php
