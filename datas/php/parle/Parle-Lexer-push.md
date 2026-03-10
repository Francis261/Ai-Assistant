# Parle\Lexer::push

Source: https://devdocs.io/php/parle-lexer.push

(PECL parle >= 0.5.1)

Parle\Lexer::push — Add a lexer rule

### Description

```
public Parle\Lexer::push(string $regex, int $id): void
```

Push a pattern for lexeme recognition.

### Parameters

Regular expression used for token matching.

Token id. If the lexer instance is meant to be used standalone, this can be an arbitrary number. If the lexer instance is going to be passed to the parser, it has to be an id returned by Parle\Parser::tokenid().

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle-lexer.push.php
