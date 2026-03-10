# PhpToken::getTokenName

Source: https://devdocs.io/php/phptoken.gettokenname

(PHP 8)

PhpToken::getTokenName — Returns the name of the token.

### Description

```
public PhpToken::getTokenName(): ?string
```

Returns the name of the token.

### Parameters

This function has no parameters.

### Return Values

An ASCII character for single-char tokens, or one of T_* constant names for known tokens (see List of Parser Tokens), or null for unknown tokens.

### Examples

Example #1 PhpToken::getTokenName() example

```
<?php
// known token
$token = new PhpToken(T_ECHO, 'echo');
var_dump($token->getTokenName());   // -> string(6) "T_ECHO"

// single-char token
$token = new PhpToken(ord(';'), ';');
var_dump($token->getTokenName());   // -> string(1) ";"

// unknown token
$token = new PhpToken(10000 , "\0");
var_dump($token->getTokenName());   // -> NULL
```

### See Also

- PhpToken::tokenize() - Splits given source into PHP tokens, represented by PhpToken objects.
- token_name() - Get the symbolic name of a given PHP token

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phptoken.gettokenname.php
