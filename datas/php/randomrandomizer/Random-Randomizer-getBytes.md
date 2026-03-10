# Random\Randomizer::getBytes

Source: https://devdocs.io/php/random-randomizer.getbytes

(PHP 8 >= 8.2.0)

Random\Randomizer::getBytes — Get random bytes

### Description

```
public Random\Randomizer::getBytes(int $length): string
```

Generates a string containing uniformly selected random bytes with the requested length.

As the returned bytes are selected completely randomly, the resulting string is likely to contain unprintable characters or invalid UTF-8 sequences. It may be necessary to encode it before transmission or display.

### Parameters

The length of the random string that should be returned in bytes; must be 1 or greater.

### Return Values

A string containing the requested number of random bytes.

### Errors/Exceptions

- If the value of length is less than 1, a ValueError will be thrown.
- Any Throwables thrown by the Random\Engine::generate() method of the underlying Random\Randomizer::$engine.

### Examples

Example #1 Random\Randomizer::getBytes() example

```
<?php
$r = new \Random\Randomizer();

echo bin2hex($r->getBytes(8)), "\n";
?>
```

The above example will output something similar to:

```
ebdbe93cd56682c2
```

### See Also

- random_bytes() - Get cryptographically secure random bytes
- bin2hex() - Convert binary data into hexadecimal representation
- base64_encode() - Encodes data with MIME base64
- Random\Randomizer::getBytesFromString() - Get random bytes from a source string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.getbytes.php
