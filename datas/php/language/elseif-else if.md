# elseif/else if

Source: https://devdocs.io/php/control-structures.elseif

## elseif/else if

(PHP 4, PHP 5, PHP 7, PHP 8)

elseif, as its name suggests, is a combination of if and else. Like else, it extends an if statement to execute a different statement in case the original if expression evaluates to false. However, unlike else, it will execute that alternative expression only if the elseif conditional expression evaluates to true. For example, the following code would display a is bigger than b, a equal to b or a is smaller than b:

```
<?php
if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}
?>
```

There may be several elseifs within the same if statement. The first elseif expression (if any) that evaluates to true would be executed. In PHP, it's possible to write else if (in two words) and the behavior would be identical to the one of elseif (in a single word). The syntactic meaning is slightly different (the same behavior as C) but the bottom line is that both would result in exactly the same behavior.

The elseif statement is only executed if the preceding if expression and any preceding elseif expressions evaluated to false, and the current elseif expression evaluated to true.

Note: Note that elseif and else if will only be considered exactly the same when using curly brackets as in the above example. When using a colon to define if/elseif conditions, the use of elseif in a single word becomes necessary. PHP will fail with a parse error if else if is split into two words.

```
<?php

/* Incorrect Method: */
if ($a > $b):
    echo $a." is greater than ".$b;
else if ($a == $b): // Will not compile.
    echo "The above line causes a parse error.";
endif;
```

```
<?php
/* Correct Method: */
if ($a > $b):
    echo $a." is greater than ".$b;
elseif ($a == $b): // Note the combination of the words.
    echo $a." equals ".$b;
else:
    echo $a." is neither greater than or equal to ".$b;
endif;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/control-structures.elseif.php
