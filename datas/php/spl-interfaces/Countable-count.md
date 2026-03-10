# Countable::count

Source: https://devdocs.io/php/countable.count

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Countable::count — Count elements of an object

### Description

```
public Countable::count(): int
```

This method is executed when the value for count() is an object implementing Countable.

### Parameters

This function has no parameters.

### Return Values

The custom count as an int.

### Examples

Example #1 Countable::count() example

```
<?php

class Counter implements Countable
{
    private $count = 0;

    public function count(): int
    {
        return ++$this->count;
    }
}

$counter = new Counter;

for ($i = 0; $i < 10; ++$i) {
    echo "I have been count()ed " . count($counter) . " times\n";
}

?>
```

The above example will output something similar to:

```
I have been count()ed 1 times
I have been count()ed 2 times
I have been count()ed 3 times
I have been count()ed 4 times
I have been count()ed 5 times
I have been count()ed 6 times
I have been count()ed 7 times
I have been count()ed 8 times
I have been count()ed 9 times
I have been count()ed 10 times
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/countable.count.php
