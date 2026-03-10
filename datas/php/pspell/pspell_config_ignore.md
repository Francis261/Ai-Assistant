# pspell_config_ignore

Source: https://devdocs.io/php/function.pspell-config-ignore

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_ignore — Ignore words less than N characters long

### Description

```
pspell_config_ignore(PSpell\Config $config, int $min_length): bool
```

pspell_config_ignore() should be used on a config before calling pspell_new_config(). This function allows short words to be skipped by the spell checker.

### Parameters

An PSpell\Config instance.

Words less than min_length characters will be skipped.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_config_ignore()

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_ignore($pspell_config, 5);
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "abcd");    //will not result in an error
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-config-ignore.php
