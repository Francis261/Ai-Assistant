# Transliterator::transliterate

Source: https://devdocs.io/php/transliterator.transliterate

# transliterator_transliterate

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Transliterator::transliterate -- transliterator_transliterate — Transliterate a string

### Description

Object-oriented style

```
public Transliterator::transliterate(string $string, int $start = 0, int $end = -1): string|false
```

Procedural style

```
transliterator_transliterate(
 Transliterator|string $transliterator,
 string $string,
 int $start = 0,
 int $end = -1
): string|false
```

Transforms a string or part thereof using an ICU transliterator.

### Parameters

In the procedural version, either a Transliterator or a string from which a Transliterator can be built.

The string to be transformed.

The start index (in UTF-16 code units) from which the string will start to be transformed, inclusive. Indexing starts at 0. The text before will be left as is.

The end index (in UTF-16 code units) until which the string will be transformed, exclusive. Indexing starts at 0. The text after will be left as is.

### Return Values

The transformed string on success, or false on failure.

### Examples

Example #1 Converting escaped UTF-16 code units

```
<?php
$s = "\u304A\u65E9\u3046\u3054\u3056\u3044\u307E\u3059";
echo transliterator_transliterate("Hex-Any/Java", $s), "\n";

//now the reverse operation with a supplementary character
$supplChar = html_entity_decode('&#x1D11E;');
echo mb_strlen($supplChar, "UTF-8"), "\n";
$encSupplChar = transliterator_transliterate("Any-Hex/Java", $supplChar);
//echoes two encoded UTF-16 code units
echo $encSupplChar, "\n";
//and back
echo transliterator_transliterate("Hex-Any/Java", $encSupplChar), "\n";
?>
```

The above example will output something similar to:

```
お早うございます
1
\uD834\uDD1E
𝄞
```

### See Also

- Transliterator::getErrorMessage() - Get last error message
- Transliterator::__construct() - Private constructor to deny instantiation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/transliterator.transliterate.php
