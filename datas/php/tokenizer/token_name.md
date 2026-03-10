# token_name

Source: https://devdocs.io/php/function.token-name

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

token_name — Get the symbolic name of a given PHP token

### Description

```
token_name(int $id): string
```

token_name() gets the symbolic name for a PHP id value.

### Parameters

The token value.

### Return Values

The symbolic name of the given id.

### Examples

Example #1 token_name() example

```
<?php
// 260 is the token value for the T_EVAL token
echo token_name(260);        // -> "T_EVAL"

// a token constant maps to its own name
echo token_name(T_FUNCTION); // -> "T_FUNCTION"
?>
```

### See Also

- List of Parser Tokens
- PhpToken::getTokenName() - Returns the name of the token.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.token-name.php
