# The Dom\CDATASection class

Source: https://devdocs.io/php/class.dom-cdatasection

## Introduction

(PHP 8 >= 8.4.0)

The Dom\CDATASection class inherits from Dom\Text for textual representation of CData constructs.

This is the modern, spec-compliant equivalent of DOMCdataSection.

## Class synopsis

```
public Dom\Text::splitText(int $offset): Dom\Text
```

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

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-cdatasection.php
