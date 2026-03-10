# The Parle\RParser class

Source: https://devdocs.io/php/class.parle-rparser

## Introduction

(PECL parle >= 0.7.0)

Parser class. Rules can be defined on the fly. Once finalized, a Parle\RLexer instance is required to deliver the token stream.

## Class synopsis

```
public advance(): void
```

```
public build(): void
```

```
public consume(string $data, Parle\RLexer $rlexer): void
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
public sigil(int $idx = ?): string
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
public validate(string $data, Parle\RLexer $lexer): bool
```

## Predefined Constants

## Properties

Current parser action that matches one of the action class constants, readonly.

Grammar rule id just processed in the reduce action. The value corresponds either to a token or to a production id. Readonly.

## Table of Contents

- Parle\RParser::advance — Process next parser rule
- Parle\RParser::build — Finalize the grammar rules
- Parle\RParser::consume — Consume the data for processing
- Parle\RParser::dump — Dump the grammar
- Parle\RParser::errorInfo — Retrieve the error information
- Parle\RParser::left — Declare a token with left-associativity
- Parle\RParser::nonassoc — Declare a token with no associativity
- Parle\RParser::precedence — Declare a precedence rule
- Parle\RParser::push — Add a grammar rule
- Parle\RParser::reset — Reset parser state
- Parle\RParser::right — Declare a token with right-associativity
- Parle\RParser::sigil — Retrieve a matching part of a rule
- Parle\RParser::sigilCount — Number of elements in matched rule
- Parle\RParser::sigilName — Retrieve a rule or token name
- Parle\RParser::token — Declare a token
- Parle\RParser::tokenId — Get token id
- Parle\RParser::trace — Trace the parser operation
- Parle\RParser::validate — Validate input

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.parle-rparser.php
