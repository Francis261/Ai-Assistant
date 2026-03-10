# What References Are Not

Source: https://devdocs.io/php/language.references.arent

## What References Are Not

As said before, references are not pointers. That means, the following construct won't do what you expect:

```
<?php

function foo(&$var)
{
    $var =& $GLOBALS["baz"];
}

foo($bar);

?>
```

What happens is that $var in foo will be bound with $bar in the caller, but then re-bound with $GLOBALS["baz"]. There's no way to bind $bar in the calling scope to something else using the reference mechanism, since $bar is not available in the function foo (it is represented by $var, but $var has only variable contents and not name-to-value binding in the calling symbol table). You can use returning references to reference variables selected by the function.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.references.arent.php
