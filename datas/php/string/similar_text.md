# similar_text

Source: https://devdocs.io/php/function.similar-text

(PHP 4, PHP 5, PHP 7, PHP 8)

similar_text — Calculate the similarity between two strings

### Description

```
similar_text(string $string1, string $string2, float &$percent = null): int
```

This calculates the similarity between two strings as described in Programming Classics: Implementing the World's Best Algorithms by Oliver (ISBN 0-131-00413-1). Note that this implementation does not use a stack as in Oliver's pseudo code, but recursive calls which may or may not speed up the whole process. Note also that the complexity of this algorithm is O(N**3) where N is the length of the longest string.

### Parameters

The first string.

The second string.

Note:

Swapping the string1 and string2 may yield a different result; see the example below.

By passing a reference as third argument, similar_text() will calculate the similarity in percent, by dividing the result of similar_text() by the average of the lengths of the given strings times 100.

### Return Values

Returns the number of matching chars in both strings.

The number of matching characters is calculated by finding the longest first common substring, and then doing this for the prefixes and the suffixes, recursively. The lengths of all found common substrings are added.

### Examples

Example #1 similar_text() argument swapping example

This example shows that swapping the string1 and string2 argument may yield different results.

```
<?php
$sim = similar_text('bafoobar', 'barfoo', $perc);
echo "similarity: $sim ($perc %)\n";
$sim = similar_text('barfoo', 'bafoobar', $perc);
echo "similarity: $sim ($perc %)\n";
```

The above example will output something similar to:

```
similarity: 5 (71.428571428571 %)
similarity: 3 (42.857142857143 %)
```

### See Also

- levenshtein() - Calculate Levenshtein distance between two strings
- metaphone() - Calculate the metaphone key of a string
- soundex() - Calculate the soundex key of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.similar-text.php
