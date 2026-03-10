# The SimpleXMLElement class

Source: https://devdocs.io/php/class.simplexmlelement

## Introduction

(PHP 8)

Represents an element in an XML document.

## Class synopsis

```
public addAttribute(string $qualifiedName, string $value, ?string $namespace = null): void
```

```
public addChild(string $qualifiedName, ?string $value = null, ?string $namespace = null): ?SimpleXMLElement
```

```
public asXML(?string $filename = null): string|bool
```

```
public attributes(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement
```

```
public children(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement
```

```
public count(): int
```

```
public current(): SimpleXMLElement
```

```
public getDocNamespaces(bool $recursive = false, bool $fromRoot = true): array|false
```

```
public getName(): string
```

```
public getNamespaces(bool $recursive = false): array
```

```
public getChildren(): ?SimpleXMLElement
```

```
public hasChildren(): bool
```

```
public key(): string
```

```
public next(): void
```

```
public registerXPathNamespace(string $prefix, string $namespace): bool
```

```
public rewind(): void
```

```
public __toString(): string
```

```
public valid(): bool
```

```
public xpath(string $expression): array|null|false
```

## Changelog

## Table of Contents

- SimpleXMLElement::addAttribute — Adds an attribute to the SimpleXML element
- SimpleXMLElement::addChild — Adds a child element to the XML node
- SimpleXMLElement::asXML — Return a well-formed XML string based on SimpleXML element
- SimpleXMLElement::attributes — Identifies an element's attributes
- SimpleXMLElement::children — Finds children of given node
- SimpleXMLElement::__construct — Creates a new SimpleXMLElement object
- SimpleXMLElement::count — Counts the children of an element
- SimpleXMLElement::current — Returns the current element
- SimpleXMLElement::getDocNamespaces — Returns namespaces declared in document
- SimpleXMLElement::getName — Gets the name of the XML element
- SimpleXMLElement::getNamespaces — Returns namespaces used in document
- SimpleXMLElement::getChildren — Returns the sub-elements of the current element
- SimpleXMLElement::hasChildren — Checks whether the current element has sub elements
- SimpleXMLElement::key — Return current key
- SimpleXMLElement::next — Move to next element
- SimpleXMLElement::registerXPathNamespace — Creates a prefix/ns context for the next XPath query
- SimpleXMLElement::rewind — Rewind to the first element
- SimpleXMLElement::saveXML — Alias of SimpleXMLElement::asXML
- SimpleXMLElement::__toString — Returns the string content
- SimpleXMLElement::valid — Check whether the current element is valid
- SimpleXMLElement::xpath — Runs XPath query on XML data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.simplexmlelement.php
