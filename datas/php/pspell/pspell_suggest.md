# pspell_suggest

Source: https://devdocs.io/php/function.pspell-suggest

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_suggest — Suggest spellings of a word

### Description

```
pspell_suggest(PSpell\Dictionary $dictionary, string $word): array|false
```

pspell_suggest() returns an array of possible spellings for the given word.

### Parameters

An PSpell\Dictionary instance.

The tested word.

### Return Values

Returns an array of possible spellings.

### Changelog

### Examples

Example #1 pspell_suggest() example

```
<?php
$pspell = pspell_new("en");

if (!pspell_check($pspell, "testt")) {
    $suggestions = pspell_suggest($pspell, "testt");

    foreach ($suggestions as $suggestion) {
        echo "Possible spelling: $suggestion<br />";
    }
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-suggest.php
