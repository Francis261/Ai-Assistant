# The DOMImplementation class

Source: https://devdocs.io/php/class.domimplementation

## Introduction

(PHP 5, PHP 7, PHP 8)

This class provides a number of methods for performing operations that are independent of any particular instance of the document object model.

## Class synopsis

```
public createDocument(?string $namespace = null, string $qualifiedName = "", ?DOMDocumentType $doctype = null): DOMDocument
```

```
public createDocumentType(string $qualifiedName, string $publicId = "", string $systemId = ""): DOMDocumentType|false
```

```
public hasFeature(string $feature, string $version): bool
```

## Table of Contents

- DOMImplementation::__construct — Creates a new DOMImplementation object
- DOMImplementation::createDocument — Creates a DOMDocument object of the specified type with its document element
- DOMImplementation::createDocumentType — Creates an empty DOMDocumentType object
- DOMImplementation::hasFeature — Test if the DOM implementation implements a specific feature

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domimplementation.php
