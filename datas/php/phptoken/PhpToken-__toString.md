# PhpToken::__toString

Source: https://devdocs.io/php/phptoken.tostring

(PHP 8)

PhpToken::__toString — Returns the textual content of the token.

### Description

```
public PhpToken::__toString(): string
```

Returns the textual content of the token.

### Parameters

This function has no parameters.

### Return Values

A textual content of the token.

### Examples

Example #1 PhpToken::__toString() example

```
<?php
$token = new PhpToken(T_ECHO, 'echo');
echo $token;
```

The above examples will output:

```
echo
```

### See Also

- token_name() - Get the symbolic name of a given PHP token

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phptoken.tostring.php
