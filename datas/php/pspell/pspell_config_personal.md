# pspell_config_personal

Source: https://devdocs.io/php/function.pspell-config-personal

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_personal — Set a file that contains personal wordlist

### Description

```
pspell_config_personal(PSpell\Config $config, string $filename): bool
```

Set a file that contains personal wordlist. The personal wordlist will be loaded and used in addition to the standard one after you call pspell_new_config(). The file is also the file where pspell_save_wordlist() will save personal wordlist to.

pspell_config_personal() should be used on a config before calling pspell_new_config().

### Parameters

An PSpell\Config instance.

The personal wordlist. If the file does not exist, it will be created. The file should be writable by whoever PHP runs as (e.g. nobody).

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_config_personal()

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "thecat");
?>
```

### Notes

Note:

This function will not work unless you have pspell .11.2 and aspell .32.5 or later.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-config-personal.php
