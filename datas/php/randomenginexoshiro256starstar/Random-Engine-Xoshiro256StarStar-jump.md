# Random\Engine\Xoshiro256StarStar::jump

Source: https://devdocs.io/php/random-engine-xoshiro256starstar.jump

(PHP 8 >= 8.2.0)

Random\Engine\Xoshiro256StarStar::jump — Efficiently move the engine ahead by 2^128 steps

### Description

```
public Random\Engine\Xoshiro256StarStar::jump(): void
```

Moves the algorithm’s state ahead by 2128 steps, as if Random\Engine\Xoshiro256StarStar::generate() was called 2128 times.

The purpose of a jump is to facilitate the creation of a new Random\Engine\Xoshiro256StarStar engine from an existing seeded Random\Engine\Xoshiro256StarStar engine. The seeded engine acts as a blueprint, which can be cloned and repeatedly jumped to create 2128 non-overlapping sequences with 2128 values each.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Random\Engine\Xoshiro256StarStar::jump() example

```
<?php
use Random\Engine\Xoshiro256StarStar;
use Random\Randomizer;

$blueprintRng = new Xoshiro256StarStar(0);

$fibers = [];
for ($i = 0; $i < 8; $i++) {
    $fiberRng = clone $blueprintRng;
    $blueprintRng->jump();

    $fiber = new Fiber(static function () use ($fiberRng, $i): void {
        $randomizer = new Randomizer($fiberRng);

        while (true) {
            Fiber::suspend();

            echo "{$i}: ", $randomizer->getInt(0, 100), "\n";
        }
    });
    $fiber->start();

    $fibers[] = $fiber;
}

// Even though the fibers execute in a random order, they will print the same value
// each time, because each has its own unique instance of the RNG.
$randomizer = new Randomizer();

$fibers = $randomizer->shuffleArray($fibers);
foreach ($fibers as $fiber) {
    $fiber->resume();
}

$fibers = $randomizer->shuffleArray($fibers);
foreach ($fibers as $fiber) {
    $fiber->resume();
}
?>
```

The above example will output something similar to:

```
4: 89
3: 10
2: 63
1: 75
6: 41
5: 56
0: 16
7: 60
7: 34
6: 58
1: 74
4: 63
3: 3
5: 42
2: 45
0: 86
```

### See Also

- Random\Engine\Xoshiro256StarStar::jumpLong() - Efficiently move the engine ahead by 2^192 steps

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-engine-xoshiro256starstar.jump.php
