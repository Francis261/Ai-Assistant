# The SimpleXMLIterator class

Source: https://devdocs.io/php/class.simplexmliterator

## Introduction

(No version information available, might only be in Git)

The SimpleXMLIterator provides recursive iteration over all nodes of a SimpleXMLElement object.

## Class synopsis

```
public SimpleXMLElement::addAttribute(string $qualifiedName, string $value, ?string $namespace = null): void
```

```
public SimpleXMLElement::addChild(string $qualifiedName, ?string $value = null, ?string $namespace = null): ?SimpleXMLElement
```

```
public SimpleXMLElement::asXML(?string $filename = null): string|bool
```

```
public SimpleXMLElement::attributes(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement
```

```
public SimpleXMLElement::children(?string $namespaceOrPrefix = null, bool $isPrefix = false): ?SimpleXMLElement
```

```
public SimpleXMLElement::count(): int
```

```
public SimpleXMLElement::current(): SimpleXMLElement
```

```
public SimpleXMLElement::getDocNamespaces(bool $recursive = false, bool $fromRoot = true): array|false
```

```
public SimpleXMLElement::getName(): string
```

```
public SimpleXMLElement::getNamespaces(bool $recursive = false): array
```

```
public SimpleXMLElement::getChildren(): ?SimpleXMLElement
```

```
public SimpleXMLElement::hasChildren(): bool
```

```
public SimpleXMLElement::key(): string
```

```
public SimpleXMLElement::next(): void
```

```
public SimpleXMLElement::registerXPathNamespace(string $prefix, string $namespace): bool
```

```
public SimpleXMLElement::rewind(): void
```

```
public SimpleXMLElement::__toString(): string
```

```
public SimpleXMLElement::valid(): bool
```

```
public SimpleXMLElement::xpath(string $expression): array|null|false
```

## Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.simplexmliterator.php
