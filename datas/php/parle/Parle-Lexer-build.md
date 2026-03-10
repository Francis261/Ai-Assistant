# Parle\Lexer::build

Source: https://devdocs.io/php/parle-lexer.build

(PECL parle >= 0.5.1)

Parle\Lexer::build — Finalize the lexer rule set

### Description

```
public Parle\Lexer::build(): void
```

Rules, previously added with Parle\Lexer::push() are finalized. This method call has to be done after all the necessary rules was pushed. The rule set becomes read only. The lexing can begin.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle-lexer.build.php
