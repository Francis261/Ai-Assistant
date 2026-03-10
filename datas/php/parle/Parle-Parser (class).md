# The Parle\Parser class

Source: https://devdocs.io/php/class.parle-parser

## Introduction

(PECL parle >= 0.5.1)

Parser class. Rules can be defined on the fly. Once finalized, a Parle\Lexer instance is required to deliver the token stream.

## Class synopsis

```
public advance(): void
```

```
public build(): void
```

```
public consume(string $data, Parle\Lexer $lexer): void
```

```
public dump(): void
```

```
public errorInfo(): Parle\ErrorInfo
```

```
public left(string $tok): void
```

```
public nonassoc(string $tok): void
```

```
public precedence(string $tok): void
```

```
public push(string $name, string $rule): int
```

```
public reset(int $tokenId = ?): void
```

```
public right(string $tok): void
```

```
public sigil(int $idx): string
```

```
public sigilCount(): int
```

```
public sigilName(int $idx): string
```

```
public token(string $tok): void
```

```
public tokenId(string $tok): int
```

```
public trace(): string
```

```
public validate(string $data, Parle\Lexer $lexer): bool
```

## Predefined Constants

## Properties

Current parser action that matches one of the action class constants, readonly.

Grammar rule id just processed in the reduce action. The value corresponds either to a token or to a production id. Readonly.

## Table of Contents

- Parle\Parser::advance — Process next parser rule
- Parle\Parser::build — Finalize the grammar rules
- Parle\Parser::consume — Consume the data for processing
- Parle\Parser::dump — Dump the grammar
- Parle\Parser::errorInfo — Retrieve the error information
- Parle\Parser::left — Declare a token with left-associativity
- Parle\Parser::nonassoc — Declare a token with no associativity
- Parle\Parser::precedence — Declare a precedence rule
- Parle\Parser::push — Add a grammar rule
- Parle\Parser::reset — Reset parser state
- Parle\Parser::right — Declare a token with right-associativity
- Parle\Parser::sigil — Retrieve a matching part of a rule
- Parle\Parser::sigilCount — Number of elements in matched rule
- Parle\Parser::sigilName — Retrieve a rule or token name
- Parle\Parser::token — Declare a token
- Parle\Parser::tokenId — Get token id
- Parle\Parser::trace — Trace the parser operation
- Parle\Parser::validate — Validate input

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.parle-parser.php
