# token_get_all

Source: https://devdocs.io/php/function.token-get-all

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

token_get_all — Split given source into PHP tokens

### Description

```
token_get_all(string $code, int $flags = 0): array
```

token_get_all() parses the given code string into PHP language tokens using the Zend engine's lexical scanner.

For a list of parser tokens, see List of Parser Tokens, or use token_name() to translate a token value into its string representation.

### Parameters

The PHP source to parse.

Valid flags:

- TOKEN_PARSE - Recognises the ability to use reserved words in specific contexts.

### Return Values

An array of token identifiers. Each individual token identifier is either a single character (i.e.: ;, ., >, !, etc...), or a three element array containing the token index in element 0, the string content of the original token in element 1 and the line number in element 2.

### Examples

Example #1 token_get_all() example

```
<?php
$tokens = token_get_all('<?php echo; ?>');

foreach ($tokens as $token) {
    if (is_array($token)) {
        echo "Line {$token[2]}: ", token_name($token[0]), " ('{$token[1]}')", PHP_EOL;
    }
}
?>
```

The above example will output something similar to:

```
Line 1: T_OPEN_TAG ('<?php ')
Line 1: T_ECHO ('echo')
Line 1: T_WHITESPACE (' ')
Line 1: T_CLOSE_TAG ('?>')
```

Example #2 token_get_all() incorrect usage example

```
<?php
$tokens = token_get_all('/* comment */');

foreach ($tokens as $token) {
    if (is_array($token)) {
        echo "Line {$token[2]}: ", token_name($token[0]), " ('{$token[1]}')", PHP_EOL;
    }
}
?>
```

The above example will output something similar to:

```
Line 1: T_INLINE_HTML ('/* comment */')
```

Example #3 token_get_all() on a class using a reserved word example

```
<?php

$source = <<<'code'
<?php

class A
{
    const PUBLIC = 1;
}
code;

$tokens = token_get_all($source, TOKEN_PARSE);

foreach ($tokens as $token) {
    if (is_array($token)) {
        echo token_name($token[0]) , PHP_EOL;
    }
}
?>
```

The above example will output something similar to:

```
T_OPEN_TAG
T_WHITESPACE
T_CLASS
T_WHITESPACE
T_STRING
T_CONST
T_WHITESPACE
T_STRING
T_LNUMBER
```

### See Also

- PhpToken::tokenize() - Splits given source into PHP tokens, represented by PhpToken objects.
- token_name() - Get the symbolic name of a given PHP token

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.token-get-all.php
