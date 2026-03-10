# pspell_check

Source: https://devdocs.io/php/function.pspell-check

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_check — Check a word

### Description

```
pspell_check(PSpell\Dictionary $dictionary, string $word): bool
```

pspell_check() checks the spelling of a word.

### Parameters

An PSpell\Dictionary instance.

The tested word.

### Return Values

Returns true if the spelling is correct, false if not.

### Changelog

### Examples

Example #1 pspell_check() Example

```
<?php
$pspell = pspell_new("en");

if (pspell_check($pspell, "testt")) {
    echo "This is a valid spelling";
} else {
    echo "Sorry, wrong spelling";
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-check.php
