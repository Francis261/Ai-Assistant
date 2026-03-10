# The DOMText class

Source: https://devdocs.io/php/class.domtext

## Introduction

(PHP 5, PHP 7, PHP 8)

The DOMText class inherits from DOMCharacterData and represents the textual content of a DOMElement or DOMAttr.

## Class synopsis

```
public isElementContentWhitespace(): bool
```

```
public isWhitespaceInElementContent(): bool
```

```
public splitText(int $offset): DOMText|false
```

```
public DOMCharacterData::after(DOMNode|string ...$nodes): void
```

```
public DOMCharacterData::appendData(string $data): true
```

```
public DOMCharacterData::before(DOMNode|string ...$nodes): void
```

```
public DOMCharacterData::deleteData(int $offset, int $count): bool
```

```
public DOMCharacterData::insertData(int $offset, string $data): bool
```

```
public DOMCharacterData::remove(): void
```

```
public DOMCharacterData::replaceData(int $offset, int $count, string $data): bool
```

```
public DOMCharacterData::replaceWith(DOMNode|string ...$nodes): void
```

```
public DOMCharacterData::substringData(int $offset, int $count): string|false
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

Holds all the text of logically-adjacent (not separated by Element, Comment or Processing Instruction) Text nodes.

## Changelog

## Table of Contents

- DOMText::__construct — Creates a new DOMText object
- DOMText::isElementContentWhitespace — Returns whether this text node contains whitespace in element content
- DOMText::isWhitespaceInElementContent — Indicates whether this text node contains whitespace
- DOMText::splitText — Breaks this node into two nodes at the specified offset

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domtext.php
