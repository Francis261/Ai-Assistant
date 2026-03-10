# do-while

Source: https://devdocs.io/php/control-structures.do.while

## do-while

(PHP 4, PHP 5, PHP 7, PHP 8)

do-while loops are very similar to while loops, except the truth expression is checked at the end of each iteration instead of in the beginning. The main difference from regular while loops is that the first iteration of a do-while loop is guaranteed to run (the truth expression is only checked at the end of the iteration), whereas it may not necessarily run with a regular while loop (the truth expression is checked at the beginning of each iteration, if it evaluates to false right from the beginning, the loop execution would end immediately).

There is just one syntax for do-while loops:

```
<?php
$i = 0;
do {
    echo $i;
} while ($i > 0);
?>
```

The above loop would run one time exactly, since after the first iteration, when truth expression is checked, it evaluates to false ($i is not bigger than 0) and the loop execution ends.

Advanced C users may be familiar with a different usage of the do-while loop, to allow stopping execution in the middle of code blocks, by encapsulating them with do-while (0), and using the break statement. The following code fragment demonstrates this:

```
<?php
do {
    if ($i < 5) {
        echo "i is not big enough";
        break;
    }
    $i *= $factor;
    if ($i < $minimum_limit) {
        break;
    }
   echo "i is ok";

    /* process i */

} while (0);
?>
```

It is possible to use the goto operator instead of this hack.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/control-structures.do.while.php
