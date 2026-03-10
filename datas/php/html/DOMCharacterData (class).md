# The DOMCharacterData class

Source: https://devdocs.io/php/class.domcharacterdata

## Introduction

(PHP 5, PHP 7, PHP 8)

Represents nodes with character data. No nodes directly correspond to this class, but other nodes do inherit from it.

## Class synopsis

```
public after(DOMNode|string ...$nodes): void
```

```
public appendData(string $data): true
```

```
public before(DOMNode|string ...$nodes): void
```

```
public deleteData(int $offset, int $count): bool
```

```
public insertData(int $offset, string $data): bool
```

```
public remove(): void
```

```
public replaceData(int $offset, int $count, string $data): bool
```

```
public replaceWith(DOMNode|string ...$nodes): void
```

```
public substringData(int $offset, int $count): string|false
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

The contents of the node.

The length of the contents.

The next sibling element or null.

The previous sibling element or null.

## Changelog

## See Also

- » W3C specification of CharacterData

## Table of Contents

- DOMCharacterData::after — Adds nodes after the character data
- DOMCharacterData::appendData — Append the string to the end of the character data of the node
- DOMCharacterData::before — Adds nodes before the character data
- DOMCharacterData::deleteData — Remove a range of characters from the character data
- DOMCharacterData::insertData — Insert a string at the specified UTF-8 codepoint offset
- DOMCharacterData::remove — Removes the character data node
- DOMCharacterData::replaceData — Replace a substring within the character data
- DOMCharacterData::replaceWith — Replaces the character data with new nodes
- DOMCharacterData::substringData — Extracts a range of data from the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domcharacterdata.php
