# Comments

Source: https://devdocs.io/php/regexp.reference.comments

## Comments

The sequence (?# marks the start of a comment which continues up to the next closing parenthesis. Nested parentheses are not permitted. The characters that make up a comment play no part in the pattern matching at all.

If the PCRE_EXTENDED option is set, an unescaped # character outside a character class introduces a comment that continues up to the next newline character in the pattern.

Example #1 Usage of comments in PCRE pattern

```
<?php

$subject = 'test';

/* (?# can be used to add comments without enabling PCRE_EXTENDED */
$match = preg_match('/te(?# this is a comment)st/', $subject);
var_dump($match);

/* Whitespace and # is treated as part of the pattern unless PCRE_EXTENDED is enabled */
$match = preg_match('/te   #~~~~
st/', $subject);
var_dump($match);

/* When PCRE_EXTENDED is enabled, all whitespace data characters and anything
   that follows an unescaped # on the same line is ignored */
$match = preg_match('/te    #~~~~
st/x', $subject);
var_dump($match);
```

The above example will output:

```
int(1)
int(0)
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexp.reference.comments.php
