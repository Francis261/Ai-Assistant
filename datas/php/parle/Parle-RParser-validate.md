# Parle\RParser::validate

Source: https://devdocs.io/php/parle-rparser.validate

(PECL parle >= 0.7.0)

Parle\RParser::validate — Validate input

### Description

```
public Parle\RParser::validate(string $data, Parle\RLexer $lexer): bool
```

Validate an input string. The string is parsed internally, thus this method is useful for the quick input validation.

### Parameters

String to be validated.

A lexer object containing the lexing rules prepared for the particular grammar.

### Return Values

Returns bool whitnessing whether the input chimes or not with the defined rules.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle-rparser.validate.php
