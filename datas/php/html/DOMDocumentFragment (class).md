# The DOMDocumentFragment class

Source: https://devdocs.io/php/class.domdocumentfragment

## Class synopsis

(PHP 5, PHP 7, PHP 8)

```
public append(DOMNode|string ...$nodes): void
```

```
public appendXML(string $data): bool
```

```
public prepend(DOMNode|string ...$nodes): void
```

```
public replaceChildren(DOMNode|string ...$nodes): void
```

```
public DOMNode::appendChild(DOMNode $node): DOMNode|false
```

```
public DOMNode::C14N(
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): string|false
```

```
public DOMNode::C14NFile(
 string $uri,
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): int|false
```

```
public DOMNode::cloneNode(bool $deep = false): DOMNode|false
```

```
public DOMNode::compareDocumentPosition(DOMNode $other): int
```

```
public DOMNode::contains(DOMNode|DOMNameSpaceNode|null $other): bool
```

```
public DOMNode::getLineNo(): int
```

```
public DOMNode::getNodePath(): ?string
```

```
public DOMNode::getRootNode(?array $options = null): DOMNode
```

```
public DOMNode::hasAttributes(): bool
```

```
public DOMNode::hasChildNodes(): bool
```

```
public DOMNode::insertBefore(DOMNode $node, ?DOMNode $child = null): DOMNode|false
```

```
public DOMNode::isDefaultNamespace(string $namespace): bool
```

```
public DOMNode::isEqualNode(?DOMNode $otherNode): bool
```

```
public DOMNode::isSameNode(DOMNode $otherNode): bool
```

```
public DOMNode::isSupported(string $feature, string $version): bool
```

```
public DOMNode::lookupNamespaceURI(?string $prefix): ?string
```

```
public DOMNode::lookupPrefix(string $namespace): ?string
```

```
public DOMNode::normalize(): void
```

```
public DOMNode::removeChild(DOMNode $child): DOMNode|false
```

```
public DOMNode::replaceChild(DOMNode $node, DOMNode $child): DOMNode|false
```

```
public DOMNode::__sleep(): array
```

```
public DOMNode::__wakeup(): void
```

## Properties

The number of child elements.

First child element or null.

Last child element or null.

## Changelog

## Table of Contents

- DOMDocumentFragment::append — Appends nodes after the last child node
- DOMDocumentFragment::appendXML — Append raw XML data
- DOMDocumentFragment::__construct — Constructs a DOMDocumentFragment object
- DOMDocumentFragment::prepend — Prepends nodes before the first child node
- DOMDocumentFragment::replaceChildren — Replace children in fragment

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domdocumentfragment.php
