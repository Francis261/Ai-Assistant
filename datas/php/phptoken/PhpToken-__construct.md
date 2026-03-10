# PhpToken::__construct

Source: https://devdocs.io/php/phptoken.construct

(PHP 8)

PhpToken::__construct — Returns a new PhpToken object

### Description

Returns a new PhpToken object

### Parameters

One of the T_* constants (see List of Parser Tokens), or an ASCII codepoint representing a single-char token.

The textual content of the token.

The starting line number (1-based) of the token.

The starting position (0-based) in the tokenized string (the number of bytes).

### See Also

- PhpToken::tokenize() - Splits given source into PHP tokens, represented by PhpToken objects.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phptoken.construct.php
