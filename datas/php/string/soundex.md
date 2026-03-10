# soundex

Source: https://devdocs.io/php/function.soundex

(PHP 4, PHP 5, PHP 7, PHP 8)

soundex — Calculate the soundex key of a string

### Description

```
soundex(string $string): string
```

Calculates the soundex key of string.

Soundex keys have the property that words pronounced similarly produce the same soundex key, and can thus be used to simplify searches in databases where you know the pronunciation but not the spelling.

This particular soundex function is one described by Donald Knuth in "The Art Of Computer Programming, vol. 3: Sorting And Searching", Addison-Wesley (1973), pp. 391-392.

### Parameters

The input string.

### Return Values

Returns the soundex key as a string with four characters. If at least one letter is contained in string, the returned string starts with a letter. Otherwise "0000" is returned.

### Changelog

### Examples

Example #1 Soundex Examples

```
<?php
echo soundex("Euler"), PHP_EOL, soundex("Ellery"), PHP_EOL;

soundex("Euler")       == soundex("Ellery");    // E460
soundex("Gauss")       == soundex("Ghosh");     // G200
soundex("Hilbert")     == soundex("Heilbronn"); // H416
soundex("Knuth")       == soundex("Kant");      // K530
soundex("Lloyd")       == soundex("Ladd");      // L300
soundex("Lukasiewicz") == soundex("Lissajous"); // L222
?>
```

### See Also

- levenshtein() - Calculate Levenshtein distance between two strings
- metaphone() - Calculate the metaphone key of a string
- similar_text() - Calculate the similarity between two strings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.soundex.php
