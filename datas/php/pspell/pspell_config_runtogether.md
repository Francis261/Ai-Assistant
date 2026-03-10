# pspell_config_runtogether

Source: https://devdocs.io/php/function.pspell-config-runtogether

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_runtogether — Consider run-together words as valid compounds

### Description

```
pspell_config_runtogether(PSpell\Config $config, bool $allow): bool
```

This function determines whether run-together words will be treated as legal compounds. That is, "thecat" will be a legal compound, although there should be a space between the two words. Changing this setting only affects the results returned by pspell_check(); pspell_suggest() will still return suggestions.

pspell_config_runtogether() should be used on a config before calling pspell_new_config().

### Parameters

An PSpell\Config instance.

true if run-together words should be treated as legal compounds, false otherwise.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_config_runtogether()

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_runtogether($pspell_config, true);
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "thecat");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-config-runtogether.php
