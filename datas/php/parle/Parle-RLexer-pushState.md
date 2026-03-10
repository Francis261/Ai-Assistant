# Parle\RLexer::pushState

Source: https://devdocs.io/php/parle-rlexer.pushstate

(PECL parle >= 0.5.1)

Parle\RLexer::pushState — Push a new start state

### Description

```
public Parle\RLexer::pushState(string $state): int
```

This lexer type can have more than one state machine. This allows you to lex different tokens depending on context, thus allowing simple parsing to take place. Once a state pushed, it can be used with a suitable Parle\RLexer::push() signature variant.

### Parameters

Name of the state.

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle-rlexer.pushstate.php
