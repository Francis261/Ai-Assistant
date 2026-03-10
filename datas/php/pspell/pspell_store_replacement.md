# pspell_store_replacement

Source: https://devdocs.io/php/function.pspell-store-replacement

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_store_replacement — Store a replacement pair for a word

### Description

```
pspell_store_replacement(PSpell\Dictionary $dictionary, string $misspelled, string $correct): bool
```

pspell_store_replacement() stores a replacement pair for a word, so that replacement can be returned by pspell_suggest() later. In order to be able to take advantage of this function, you have to use pspell_new_personal() to open the dictionary. In order to permanently save the replacement pair, you have to use pspell_config_personal() and pspell_config_repl() to set the path where to save your custom wordlists, and then use pspell_save_wordlist() for the changes to be written to disk.

### Parameters

An PSpell\Dictionary instance.

The misspelled word.

The fixed spelling for the misspelled word.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_store_replacement()

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
pspell_config_repl($pspell_config, "/var/dictionaries/custom.repl");
$pspell = pspell_new_config($pspell_config);

pspell_store_replacement($pspell, $misspelled, $correct);
pspell_save_wordlist($pspell);
?>
```

### Notes

Note:

This function will not work unless you have pspell .11.2 and aspell .32.5 or later.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-store-replacement.php
