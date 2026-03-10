# The PhpToken class

Source: https://devdocs.io/php/class.phptoken

## Introduction

(PHP 8)

This class provides an alternative to token_get_all(). While the function returns tokens either as a single-character string, or an array with a token ID, token text and line number, PhpToken::tokenize() normalizes all tokens into PhpToken objects, which makes code operating on tokens more memory efficient and readable.

## Class synopsis

```
public getTokenName(): ?string
```

```
public is(int|string|array $kind): bool
```

```
public isIgnorable(): bool
```

```
public __toString(): string
```

```
public static tokenize(string $code, int $flags = 0): array
```

## Properties

One of the T_* constants, or an ASCII codepoint representing a single-char token.

The textual content of the token.

The starting line number (1-based) of the token.

The starting position (0-based) in the tokenized string (the number of bytes).

## Table of Contents

- PhpToken::__construct — Returns a new PhpToken object
- PhpToken::getTokenName — Returns the name of the token.
- PhpToken::is — Tells whether the token is of given kind.
- PhpToken::isIgnorable — Tells whether the token would be ignored by the PHP parser.
- PhpToken::__toString — Returns the textual content of the token.
- PhpToken::tokenize — Splits given source into PHP tokens, represented by PhpToken objects.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.phptoken.php
