# PhpToken::tokenize

Source: https://devdocs.io/php/phptoken.tokenize

(PHP 8)

PhpToken::tokenize — Splits given source into PHP tokens, represented by PhpToken objects.

### Description

```
public static PhpToken::tokenize(string $code, int $flags = 0): array
```

Returns an array of PhpToken objects representing given code.

### Parameters

The PHP source to parse.

Valid flags:

- TOKEN_PARSE - Recognises the ability to use reserved words in specific contexts.

### Return Values

An array of PHP tokens represented by instances of PhpToken or its descendants. This method returns static[] so that PhpToken can be seamlessly extended.

### Examples

Example #1 PhpToken::tokenize() example

```
<?php
$tokens = PhpToken::tokenize('<?php echo; ?>');

foreach ($tokens as $token) {
    echo "Line {$token->line}: {$token->getTokenName()} ('{$token->text}')", PHP_EOL;
}
```

The above examples will output:

```
Line 1: T_OPEN_TAG ('<?php ')
Line 1: T_ECHO ('echo')
Line 1: ; (';')
Line 1: T_WHITESPACE (' ')
Line 1: T_CLOSE_TAG ('?>')
```

Example #2 Extending PhpToken

```
<?php

class MyPhpToken extends PhpToken {
    public function getUpperText() {
        return strtoupper($this->text);
    }
}

$tokens = MyPhpToken::tokenize('<?php echo; ?>');
echo "'{$tokens[0]->getUpperText()}'";
```

The above examples will output:

```
'<?PHP '
```

### See Also

- token_get_all() - Split given source into PHP tokens

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phptoken.tokenize.php
