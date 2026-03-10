# DOMImplementation::createDocument

Source: https://devdocs.io/php/domimplementation.createdocument

(PHP 5, PHP 7, PHP 8)

DOMImplementation::createDocument — Creates a DOMDocument object of the specified type with its document element

### Description

```
public DOMImplementation::createDocument(?string $namespace = null, string $qualifiedName = "", ?DOMDocumentType $doctype = null): DOMDocument
```

Creates a DOMDocument object of the specified type with its document element.

### Parameters

The namespace URI of the document element to create.

The qualified name of the document element to create.

The type of document to create or null.

### Return Values

A new DOMDocument object. If namespace, qualifiedName, and doctype are null, the returned DOMDocument is empty with no document element.

### Errors/Exceptions

Raised if doctype has already been used with a different document or was created from a different implementation.

Raised if there is an error with the namespace, as determined by namespace and qualifiedName.

### Changelog

### See Also

- DOMDocument::__construct() - Creates a new DOMDocument object
- DOMImplementation::createDocumentType() - Creates an empty DOMDocumentType object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domimplementation.createdocument.php
