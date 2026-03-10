# pspell_add_to_personal

Source: https://devdocs.io/php/function.pspell-add-to-personal

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_add_to_personal — Add the word to a personal wordlist

### Description

```
pspell_add_to_personal(PSpell\Dictionary $dictionary, string $word): bool
```

pspell_add_to_personal() adds a word to the personal wordlist. If you used pspell_new_config() with pspell_config_personal() to open the dictionary, you can save the wordlist later with pspell_save_wordlist().

### Parameters

An PSpell\Dictionary instance.

The added word.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_add_to_personal()

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
$pspell = pspell_new_config($pspell_config);

pspell_add_to_personal($pspell, "Vlad");
pspell_save_wordlist($pspell);
?>
```

### Notes

Note:

This function will not work unless you have pspell .11.2 and aspell .32.5 or later.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-add-to-personal.php
