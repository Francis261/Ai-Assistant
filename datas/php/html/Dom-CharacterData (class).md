# The Dom\CharacterData class

Source: https://devdocs.io/php/class.dom-characterdata

## Introduction

(PHP 8 >= 8.4.0)

Represents nodes with character data. No nodes directly correspond to this class, but other nodes do inherit from it.

This is the modern, spec-compliant equivalent of DOMCharacterData.

## Class synopsis

```
public after(Dom\Node|string ...$nodes): void
```

```
public appendData(string $data): void
```

```
public before(Dom\Node|string ...$nodes): void
```

```
public deleteData(int $offset, int $count): void
```

```
public insertData(int $offset, string $data): void
```

```
public remove(): void
```

```
public replaceData(int $offset, int $count, string $data): void
```

```
public replaceWith(Dom\Node|string ...$nodes): void
```

```
public substringData(int $offset, int $count): string
```

## Properties

The previous sibling element or null.

The next sibling element or null.

The contents of the node.

The length of the contents.

## See Also

- » WHATWG specification of CharacterData

## Table of Contents

- Dom\CharacterData::after — Adds nodes after the character data
- Dom\CharacterData::appendData — Append the string to the end of the character data of the node
- Dom\CharacterData::before — Adds nodes before the character data
- Dom\CharacterData::deleteData — Remove a range of characters from the character data
- Dom\CharacterData::insertData — Insert a string at the specified UTF-8 codepoint offset
- Dom\CharacterData::remove — Removes the character data node
- Dom\CharacterData::replaceData — Replace a substring within the character data
- Dom\CharacterData::replaceWith — Replaces the character data with new nodes
- Dom\CharacterData::substringData — Extracts a range of data from the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-characterdata.php
