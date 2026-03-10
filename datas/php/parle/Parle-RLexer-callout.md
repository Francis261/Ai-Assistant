# Parle\RLexer::callout

Source: https://devdocs.io/php/parle-rlexer.callout

(PECL parle >= 0.7.2)

Parle\RLexer::callout — Define token callback

### Description

```
public Parle\RLexer::callout(int $id, callable $callback): void
```

Define a callback to be invoked once lexer encounters a particular token.

### Parameters

Token id.

Callable to be invoked. The callable doesn't receive any arguments and its return value is ignored.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle-rlexer.callout.php
