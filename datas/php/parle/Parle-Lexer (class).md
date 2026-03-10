# The Parle\Lexer class

Source: https://devdocs.io/php/class.parle-lexer

## Introduction

(PECL parle >= 0.5.1)

Single state lexer class. Lexemes can be defined on the fly. If the particular lexer instance is meant to be used with Parle\Parser, the token IDs need to be taken from there. Otherwise, arbitrary token IDs can be supplied. This lexer can give a certain performance advantage over Parle\RLexer, if no multiple states are required. Note, that Parle\RParser is not compatible with this lexer.

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

- Parle\Lexer::advance — Process next lexer rule
- Parle\Lexer::build — Finalize the lexer rule set
- Parle\Lexer::callout — Define token callback
- Parle\Lexer::consume — Pass the data for processing
- Parle\Lexer::dump — Dump the state machine
- Parle\Lexer::getToken — Retrieve the current token
- Parle\Lexer::insertMacro — Insert regex macro
- Parle\Lexer::push — Add a lexer rule
- Parle\Lexer::reset — Reset lexer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.parle-lexer.php
