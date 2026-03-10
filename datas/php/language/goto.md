# goto

Source: https://devdocs.io/php/control-structures.goto

## goto

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Image courtesy of » xkcd

The goto operator can be used to jump to another section in the program. The target point is specified by a case-sensitive label followed by a colon, and the instruction is given as goto followed by the desired target label. This is not a full unrestricted goto. The target label must be within the same file and context, meaning that you cannot jump out of a function or method, nor can you jump into one. You also cannot jump into any sort of loop or switch structure. You may jump out of these, and a common use is to use a goto in place of a multi-level break.

Example #1 goto example

```
<?php

goto a;
echo 'Foo';

a:
echo 'Bar';

?>
```

The above example will output:

```
Bar
```

Example #2 goto loop example

```
<?php

for ($i = 0, $j = 50; $i < 100; $i++) {
    while ($j--) {
        if ($j == 17) {
            goto end;
        }
    }
}
echo "i = $i";
end:
echo 'j hit 17';

?>
```

The above example will output:

```
j hit 17
```

Example #3 This will not work

```
<?php

goto loop;
for ($i = 0, $j = 50; $i < 100; $i++) {
    while ($j--) {
        loop:
    }
}
echo "$i = $i";

?>
```

The above example will output:

```
Fatal error: 'goto' into loop or switch statement is disallowed in
script on line 2
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/control-structures.goto.php
