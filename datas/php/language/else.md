# else

Source: https://devdocs.io/php/control-structures.else

## else

(PHP 4, PHP 5, PHP 7, PHP 8)

Often you'd want to execute a statement if a certain condition is met, and a different statement if the condition is not met. This is what else is for. else extends an if statement to execute a statement in case the expression in the if statement evaluates to false. For example, the following code would display a is greater than b if $a is greater than $b, and a is NOT greater than b otherwise:

```
<?php
if ($a > $b) {
  echo "a is greater than b";
} else {
  echo "a is NOT greater than b";
}
?>
```

Note: Dangling else

In case of nested if-else statements, an else is always associated with the nearest if.

```
<?php
$a = false;
$b = true;
if ($a)
    if ($b)
        echo "b";
else
    echo "c";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/control-structures.else.php
