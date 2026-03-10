# Random\Randomizer::shuffleBytes

Source: https://devdocs.io/php/random-randomizer.shufflebytes

(PHP 8 >= 8.2.0)

Random\Randomizer::shuffleBytes — Get a byte-wise permutation of a string

### Description

```
public Random\Randomizer::shuffleBytes(string $bytes): string
```

Returns a uniformly selected permutation of the input bytes.

Each possible permutation of the input bytes is equally likely to be returned.

### Parameters

The string whose bytes are shuffled.

The input string will not be modified.

### Return Values

A permutation of the bytes of bytes.

### Errors/Exceptions

- Any Throwables thrown by the Random\Engine::generate() method of the underlying Random\Randomizer::$engine.

### Examples

Example #1 Random\Randomizer::shuffleBytes() example

```
<?php
$r = new \Random\Randomizer();

// Shuffle bytes in a string:
echo "«", $r->shuffleBytes("PHP is great!"), "»\n";
?>
```

The above example will output something similar to:

```
« ga rHs!PPiet»
```

Example #2 Byte-wise shuffling breaks Unicode characters

```
<?php
$r = new \Random\Randomizer();

$unicode = "🍎, 🥝, 🍌, 🍑, 🍇";
$shuffled = $r->shuffleBytes( $unicode );

// Byte-wise shuffling of non-ASCII characters destroys them,
// resulting in invalid sequences (indicated by the Unicode
// replacement character) or even entirely different characters
// appearing in the output.
echo "Original: ", $unicode, "\n";
echo "Shuffled: «", $shuffled, "»\n";
echo "Shuffled Bytes: ", bin2hex($shuffled), "\n";
?>
```

The above example will output something similar to:

```
Original: 🍎, 🥝, 🍌, 🍑, 🍇
Shuffled: «� ��,�����🍟,� �� �, �,��»
Shuffled Bytes: 87208e912c8d9fa5f0f0f09f8d9f2cf09f208c9d20f02c209f2c8d8d
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.shufflebytes.php
