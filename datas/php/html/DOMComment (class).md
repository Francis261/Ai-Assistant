# The DOMComment class

Source: https://devdocs.io/php/class.domcomment

## Introduction

(PHP 5, PHP 7, PHP 8)

Represents comment nodes, characters delimited by <!-- and -->.

## Class synopsis

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

## See Also

- » W3C specification of Comment

## Table of Contents

- DOMComment::__construct — Creates a new DOMComment object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domcomment.php
