# Random\Randomizer::nextFloat

Source: https://devdocs.io/php/random-randomizer.nextfloat

(PHP 8 >= 8.3.0)

Random\Randomizer::nextFloat — Get a float from the right-open interval [0.0, 1.0)

### Description

```
public Random\Randomizer::nextFloat(): float
```

Returns a uniformly selected, equidistributed float from the right-open interval from 0.0 until, but not including, 1.0.

The chance for returned float to be within a given right-open sub-interval is proportional to the size of the sub-interval. This means that the chance for a float to be less than 0.5 is 50 %, which is equal to the chance for a float to be at least 0.5. Likewise the chance for a float to be within the right-open interval from 0.2 until, but not including, 0.25 is exactly 5 %.

This property makes it easy to leverage Random\Randomizer::nextFloat() to generate a random boolean with a given chance by checking if the returned float is less than a given chance.

Note:

The domain of the returnable floats of Random\Randomizer::nextFloat() is identical to that of Randomizer::getFloat(0.0, 1.0, IntervalBoundary::ClosedOpen).

The internal implementation of Random\Randomizer::nextFloat() is more efficient.

Scaling the return value to a different interval using multiplication or addition (a so-called affine transformation) might result in a bias in the resulting value as floats are not equally dense across the number line. As not all values can be exactly represented by a float, the result of the affine transformation might also result in values outside of the requested interval due to implicit rounding. An in-depth explanation of the problems with the affine transformation is given in the documentation for Random\Randomizer::getFloat().

Use Random\Randomizer::getFloat() to generate a random float within an arbitrary interval. Use Random\Randomizer::getInt() to generate a random integer within an arbitrary interval.

### Parameters

This function has no parameters.

### Return Values

A uniformly selected, equidistributed float from the right-open (IntervalBoundary::ClosedOpen) interval [0.0, 1.0). 0.0 is a possible return value, 1.0 is not.

### Errors/Exceptions

- Any Throwables thrown by the Random\Engine::generate() method of the underlying Random\Randomizer::$engine.

### Examples

Example #1 Random\Randomizer::nextFloat() example

```
<?php
$r = new \Random\Randomizer();

// The resulting bool will be true with the given chance.
$chance = 0.5;

$bool = $r->nextFloat() < $chance;

echo ($bool ? "You won" : "You lost"), "\n";
?>
```

The above example will output something similar to:

```
You won
```

Example #2 Incorrect scaling using an affine transformation

```
<?php
final class MaxEngine implements Random\Engine {
    public function generate(): string {
        return "\xff";
    }
}

$randomizer = new \Random\Randomizer(new MaxEngine);

$min = 3.5;
$max = 4.5;

// DO NOT DO THIS:
//
// This will output 4.5, despite nextFloat() sampling from
// a right-open interval, which will never return 1.
printf("Wrong scaling: %.17g", $randomizer->nextFloat() * ($max - $min) + $min);

// Correct:
// $randomizer->getFloat($min, $max, \Random\IntervalBoundary::ClosedOpen);
?>
```

The above example will output:

```
Wrong scaling: 4.5
```

### See Also

- Random\Randomizer::getFloat() - Get a uniformly selected float

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.nextfloat.php
