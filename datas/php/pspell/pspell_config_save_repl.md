# pspell_config_save_repl

Source: https://devdocs.io/php/function.pspell-config-save-repl

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_save_repl — Determine whether to save a replacement pairs list along with the wordlist

### Description

```
pspell_config_save_repl(PSpell\Config $config, bool $save): bool
```

pspell_config_save_repl() determines whether pspell_save_wordlist() will save the replacement pairs along with the wordlist. Usually there is no need to use this function because if pspell_config_repl() is used, the replacement pairs will be saved by pspell_save_wordlist() anyway, and if it is not, the replacement pairs will not be saved.

pspell_config_save_repl() should be used on a config before calling pspell_new_config().

### Parameters

An PSpell\Config instance.

true if replacement pairs should be saved, false otherwise.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

This function will not work unless you have pspell .11.2 and aspell .32.5 or later.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-config-save-repl.php
