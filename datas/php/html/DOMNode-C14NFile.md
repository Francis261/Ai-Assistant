# DOMNode::C14NFile

Source: https://devdocs.io/php/domnode.c14nfile

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DOMNode::C14NFile — Canonicalize nodes to a file

### Description

```
public DOMNode::C14NFile(
 string $uri,
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): int|false
```

Canonicalize nodes to a file.

### Parameters

Path to write the output to.

Enable exclusive parsing of only the nodes matched by the provided xpath or namespace prefixes.

Retain comments in output.

An array of XPaths to filter the nodes by. Each entry in this array is an associative array with:

- A required query key containing the XPath expression as a string.
- An optional namespaces key containing an array that maps namespace prefixes (keys) to namespace URIs (values).

An array of namespace prefixes to filter the nodes by.

### Return Values

Number of bytes written or false on failure

### See Also

- DOMNode::C14N() - Canonicalize nodes to a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.c14nfile.php
