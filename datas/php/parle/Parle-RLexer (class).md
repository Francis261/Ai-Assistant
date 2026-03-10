# The Parle\RLexer class

Source: https://devdocs.io/php/class.parle-rlexer

## Introduction

(PECL parle >= 0.5.1)

Multistate lexer class. Lexemes can be defined on the fly. If the particular lexer instance is meant to be used with Parle\RParser, the token IDs need to be taken from there. Otherwise, arbitrary token IDs can be supplied. Note, that Parle\Parser is not compatible with this lexer.

## Class synopsis

```
public advance(): void
```

```
public build(): void
```

```
public callout(int $id, callable $callback): void
```

```
public consume(string $data): void
```

```
public dump(): void
```

```
public getToken(): Parle\Token
```

```
public insertMacro(string $name, string $regex): void
```

```
public push(string $regex, int $id): void
```

```
public push(
 string $state,
 string $regex,
 int $id,
 string $newState
): void
```

```
public push(string $state, string $regex, string $newState): void
```

```
public pushState(string $state): int
```

```
public reset(int $pos): void
```

## Predefined Constants

## Properties

Start of input flag.

Lexer flags.

Current lexer state, readonly.

Position of the latest token match, readonly.

Current input offset, readonly.

## Table of Contents

- Parle\RLexer::advance — Process next lexer rule
- Parle\RLexer::build — Finalize the lexer rule set
- Parle\RLexer::callout — Define token callback
- Parle\RLexer::consume — Pass the data for processing
- Parle\RLexer::dump — Dump the state machine
- Parle\RLexer::getToken — Retrieve the current token
- Parle\RLexer::insertMacro — Insert regex macro
- Parle\RLexer::push — Add a lexer rule
- Parle\RLexer::pushState — Push a new start state
- Parle\RLexer::reset — Reset lexer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.parle-rlexer.php
