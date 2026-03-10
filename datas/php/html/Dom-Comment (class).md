# The Dom\Comment class

Source: https://devdocs.io/php/class.dom-comment

## Introduction

(PHP 8 >= 8.4.0)

Represents comment nodes, characters delimited by <!-- and -->.

This is the modern, spec-compliant equivalent of DOMComment.

## Class synopsis

```
public Dom\CharacterData::after(Dom\Node|string ...$nodes): void
```

```
public Dom\CharacterData::appendData(string $data): void
```

```
public Dom\CharacterData::before(Dom\Node|string ...$nodes): void
```

```
public Dom\CharacterData::deleteData(int $offset, int $count): void
```

```
public Dom\CharacterData::insertData(int $offset, string $data): void
```

```
public Dom\CharacterData::remove(): void
```

```
public Dom\CharacterData::replaceData(int $offset, int $count, string $data): void
```

```
public Dom\CharacterData::replaceWith(Dom\Node|string ...$nodes): void
```

```
public Dom\CharacterData::substringData(int $offset, int $count): string
```

## See Also

- » WHATWG specification of Comment

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-comment.php
