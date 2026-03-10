# and

Source: https://devdocs.io/php/language.operators.logical

## Logical Operators

The reason for the two different variations of "and" and "or" operators is that they operate at different precedences. (See Operator Precedence.)

Example #1 Logical operators illustrated

```
<?php

// --------------------
// foo() will never get called as those operators are short-circuit

$a = (false && foo());
$b = (true  || foo());
$c = (false and foo());
$d = (true  or  foo());

// --------------------
// "||" has a greater precedence than "or"

// The result of the expression (false || true) is assigned to $e
// Acts like: ($e = (false || true))
$e = false || true;

// The constant false is assigned to $f before the "or" operation occurs
// Acts like: (($f = false) or true)
$f = false or true;

var_dump($e, $f);

// --------------------
// "&&" has a greater precedence than "and"

// The result of the expression (true && false) is assigned to $g
// Acts like: ($g = (true && false))
$g = true && false;

// The constant true is assigned to $h before the "and" operation occurs
// Acts like: (($h = true) and false)
$h = true and false;

var_dump($g, $h);
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.operators.logical.php
