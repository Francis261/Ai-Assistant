# Parle\RLexer::push

Source: https://devdocs.io/php/parle-rlexer.push

(PECL parle >= 0.5.1)

Parle\RLexer::push — Add a lexer rule

### Description

```
public Parle\RLexer::push(string $regex, int $id): void
```

```
public Parle\RLexer::push(
 string $state,
 string $regex,
 int $id,
 string $newState
): void
```

```
public Parle\RLexer::push(string $state, string $regex, string $newState): void
```

Push a pattern for lexeme recognition.

A 'start state' and 'exit state' can be specified by using a suitable signature.

### Parameters

Regular expression used for token matching.

Token id. If the lexer instance is meant to be used standalone, this can be an arbitrary number. If the lexer instance is going to be passed to the parser, it has to be an id returned by Parle\RParser::tokenid().

State name. If '*' is used as start state, then the rule is applied to all lexer states.

New state name, after the rule was applied.

If '.' is specified as the exit state, then the lexer state is unchanged when that rule matches. An exit state with '>' before the name means push. Use the signature without id for either continuation or to start matching, when a continuation or recursion is required.

If '<' is specified as exit state, it means pop. In that case, the signature containing the id can be used to identify the match. Note that even in the case an id is specified, the rule will finish first when all the previous pushes popped.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle-rlexer.push.php
