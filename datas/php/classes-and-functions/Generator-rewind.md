# Generator::rewind

Source: https://devdocs.io/php/generator.rewind

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Generator::rewind — Rewind the generator to the first yield

### Description

```
public Generator::rewind(): void
```

The method rewinds the generator back to the point before the first yield. If the generator is not at a first yield expression when this method is called, it will first be let to advance to the first yield expression before rewinding. If the generator has already at the point of beginning of the second yield, this will throw an Exception.

Note:

This is the first method called when starting a foreach loop. It will not be executed after foreach loops.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Generator::rewind() example

```
<?php

function generator(): Generator
{
    echo "I'm a generator!\n";

    for ($i = 1; $i <= 3; $i++) {
        yield $i;
    }
}

// Initialize the generator
$generator = generator();

// Rewind the generator to the beginning of the first yield expression,
// if it's not already there
$generator->rewind(); // I'm a generator!

// Nothing happens here; the generator is already rewound
$generator->rewind(); // No output (NULL)

// This rewinds the generator to the first yield expression,
// if it's not already there, and iterates over the generator
foreach ($generator as $value) {
    // After yielding the first value, the generator remains at
    // the first yield expression until it resumes execution and advances to the next yield
    echo $value, PHP_EOL; // 1

    break;
}

// Resume and rewind again. No error occurs because the generator has not advanced beyond the first yield
$generator->rewind();

echo $generator->current(), PHP_EOL; // 1

// No error occurs, the generator is still at the first yield
$generator->rewind();

// This advances the generator to the second yield expression
$generator->next();

try {
    // This will throw an Exception,
    // because the generator has already advanced to the second yield
    $generator->rewind(); // Fatal error: Uncaught Exception: Cannot rewind a generator that was already run
} catch (Exception $e) {
    echo $e->getMessage();
}

?>
```

The above example will output:

```
I'm a generator!
1
1
Cannot rewind a generator that was already run
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/generator.rewind.php
