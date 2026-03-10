# Normalizer::isNormalized

Source: https://devdocs.io/php/normalizer.isnormalized

# normalizer_is_normalized

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Normalizer::isNormalized -- normalizer_is_normalized — Checks if the provided string is already in the specified normalization form

### Description

Object-oriented style

```
public static Normalizer::isNormalized(string $string, int $form = Normalizer::FORM_C): bool
```

Procedural style

```
normalizer_is_normalized(string $string, int $form = Normalizer::FORM_C): bool
```

Checks if the provided string is already in the specified normalization form.

### Parameters

The input string to normalize

One of the normalization forms.

### Return Values

true if normalized, false otherwise or if there an error

### Examples

Example #1 normalizer_is_normalized() example

```
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_orig = 'A' . $char_combining_ring_above;
$char_norm = normalizer_normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo ( normalizer_is_normalized($char_orig, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
echo '; ';
echo ( normalizer_is_normalized($char_norm, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
?>
```

Example #2 OO example

```
<?php
$char_A_ring = "\xC3\x85"; // 'LATIN CAPITAL LETTER A WITH RING ABOVE' (U+00C5)
$char_combining_ring_above = "\xCC\x8A";  // 'COMBINING RING ABOVE' (U+030A)
 
$char_orig = 'A' . $char_combining_ring_above;
$char_norm = Normalizer::normalize( 'A' . $char_combining_ring_above, Normalizer::FORM_C );
 
echo ( Normalizer::isNormalized($char_orig, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
echo '; ';
echo ( Normalizer::isNormalized($char_norm, Normalizer::FORM_C) ) ? "normalized" : "not normalized";
?>
```

The above example will output:

```
not normalized; normalized
```

### See Also

- normalizer_normalize() - Normalizes the input provided and returns the normalized string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/normalizer.isnormalized.php
