# pspell_save_wordlist

Source: https://devdocs.io/php/function.pspell-save-wordlist

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_save_wordlist — Save the personal wordlist to a file

### Description

```
pspell_save_wordlist(PSpell\Dictionary $dictionary): bool
```

pspell_save_wordlist() saves the personal wordlist from the current session. The location of files to be saved specified with pspell_config_personal() and (optionally) pspell_config_repl().

### Parameters

An PSpell\Dictionary instance.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_add_to_personal()

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/tmp/dicts/newdict");
$pspell = pspell_new_config($pspell_config);

pspell_add_to_personal($pspell, "Vlad");
pspell_save_wordlist($pspell);
?>
```

### Notes

Note:

This function will not work unless you have pspell .11.2 and aspell .32.5 or later.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-save-wordlist.php
