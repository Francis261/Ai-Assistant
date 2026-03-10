# continue

Source: https://devdocs.io/php/control-structures.continue

## continue

(PHP 4, PHP 5, PHP 7, PHP 8)

continue is used within looping structures to skip the rest of the current loop iteration and continue execution at the condition evaluation and then the beginning of the next iteration.

Note: In PHP the switch statement is considered a looping structure for the purposes of continue. continue behaves like break (when no arguments are passed) but will raise a warning as this is likely to be a mistake. If a switch is inside a loop, continue 2 will continue with the next iteration of the outer loop.

continue accepts an optional numeric argument which tells it how many levels of enclosing loops it should skip to the end of. The default value is 1, thus skipping to the end of the current loop.

```
<?php
$arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
foreach ($arr as $key => $value) {
    if (0 === ($key % 2)) { // skip members with even key
        continue;
    }
    echo $value . "\n";
}
?>
```

The above examples will output:

```
one
three
five
```

```
<?php
$i = 0;
while ($i++ < 5) {
    echo "Outer\n";
    while (1) {
        echo "Middle\n";
        while (1) {
            echo "Inner\n";
            continue 3;
        }
        echo "This never gets output.\n";
    }
    echo "Neither does this.\n";
}
?>
```

The above examples will output:

```
Outer
Middle
Inner
Outer
Middle
Inner
Outer
Middle
Inner
Outer
Middle
Inner
Outer
Middle
Inner
```

Omitting the semicolon after continue can lead to confusion. Here's an example of what you shouldn't do.

```
<?php
for ($i = 0; $i < 5; ++$i) {
    if ($i == 2)
        continue
    print "$i\n";
}
?>
```

One can expect the result to be:

```
0
1
3
4
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/control-structures.continue.php
