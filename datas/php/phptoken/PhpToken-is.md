# PhpToken::is

Source: https://devdocs.io/php/phptoken.is

(PHP 8)

PhpToken::is — Tells whether the token is of given kind.

### Description

```
public PhpToken::is(int|string|array $kind): bool
```

Tells whether the token is of given kind.

### Parameters

Either a single value to match the token's id or textual content, or an array thereof.

### Return Values

A boolean value whether the token is of given kind.

### Examples

Example #1 PhpToken::is() example

```
<?php
$token = new PhpToken(T_ECHO, 'echo');
var_dump($token->is(T_ECHO));        // -> bool(true)
var_dump($token->is('echo'));        // -> bool(true)
var_dump($token->is(T_FOREACH));     // -> bool(false)
var_dump($token->is('foreach'));     // -> bool(false)
```

Example #2 Usage with array

```
<?php
function isClassType(PhpToken $token): bool {
    return $token->is([T_CLASS, T_INTERFACE, T_TRAIT]);
}

$interface = new PhpToken(T_INTERFACE, 'interface');
var_dump(isClassType($interface));   // -> bool(true)

$function = new PhpToken(T_FUNCTION, 'function');
var_dump(isClassType($function));    // -> bool(false)
```

### See Also

- token_name() - Get the symbolic name of a given PHP token

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phptoken.is.php
