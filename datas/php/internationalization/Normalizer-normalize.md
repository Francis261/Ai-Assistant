# Normalizer::normalize

Source: https://devdocs.io/php/normalizer.normalize

# normalizer_normalize

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Normalizer::normalize -- normalizer_normalize — Normalizes the input provided and returns the normalized string

### Description

Object-oriented style

```
public static Normalizer::normalize(string $string, int $form = Normalizer::FORM_C): string|false
```

Procedural style

```
normalizer_normalize(string $string, int $form = Normalizer::FORM_C): string|false
```

Normalizes the input provided and returns the normalized string

### Parameters

The input string to normalize

One of the normalization forms.

### Return Values

The normalized string or false if an error occurred.

### Examples

Example #1 normalizer_normalize() example

```
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_1 = normalizer_normalize( $char_A_ring, Normalizer::FORM_C );
$char_2 = normalizer_normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo urlencode($char_1);
echo ' ';
echo urlencode($char_2);
?>
```

Example #2 OO example

```
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_1 = Normalizer::normalize( $char_A_ring, Normalizer::FORM_C );
$char_2 = Normalizer::normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo urlencode($char_1);
echo ' ';
echo urlencode($char_2);
?>
```

The above example will output:

```
%C3%85 %C3%85
```

### See Also

- normalizer_is_normalized() - Checks if the provided string is already in the specified normalization form

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/normalizer.normalize.php
