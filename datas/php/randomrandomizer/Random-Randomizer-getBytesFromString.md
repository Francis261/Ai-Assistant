# Random\Randomizer::getBytesFromString

Source: https://devdocs.io/php/random-randomizer.getbytesfromstring

(PHP 8 >= 8.3.0)

Random\Randomizer::getBytesFromString — Get random bytes from a source string

### Description

```
public Random\Randomizer::getBytesFromString(string $string, int $length): string
```

Generates a string containing uniformly selected random bytes from the input string with the requested length.

The chance for a byte to be selected is proportional to its share of the input string. If each byte occurs the same amount of times, each byte is equally likely to be selected.

### Parameters

The string from which the returned bytes are selected.

The length of the random string that should be returned in bytes; must be 1 or greater.

### Return Values

A string containing the requested number of random bytes taken from the input string.

### Errors/Exceptions

- If string is empty, a ValueError will be thrown.
- If the value of length is less than 1, a ValueError will be thrown.
- Any Throwables thrown by the Random\Engine::generate() method of the underlying Random\Randomizer::$engine.

### Examples

Example #1 Random\Randomizer::getBytesFromString() example

```
<?php
$randomizer = new \Random\Randomizer();

printf(
    "%s.example.com",
    $randomizer->getBytesFromString('abcdefghijklmnopqrstuvwxyz0123456789', 16)
);
?>
```

The above example will output something similar to:

```
3zsw04eiubcf82jd.example.com
```

Example #2 Generate a random code for multi-factor authentication

```
<?php
// The Secure engine is the default, but we make it explicit, because
// multi-factor codes are security sensitive.
$randomizer = new \Random\Randomizer(new \Random\Engine\Secure());

echo implode('-', str_split($randomizer->getBytesFromString('0123456789', 20), 5));
?>
```

The above example will output something similar to:

```
11551-80418-27047-42075
```

Example #3 Select from a string with a non-uniform distribution

```
<?php
$randomizer = new \Random\Randomizer();

echo $randomizer->getBytesFromString('aaaaabcdef', 20);
?>
```

The above example will output something similar to:

```
fddacbeaaeaaacaaaaca
```

### See Also

- Random\Randomizer::getBytes() - Get random bytes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.getbytesfromstring.php
