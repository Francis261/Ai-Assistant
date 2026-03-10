# pspell_new_config

Source: https://devdocs.io/php/function.pspell-new-config

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_new_config — Load a new dictionary with settings based on a given config

### Description

```
pspell_new_config(PSpell\Config $config): PSpell\Dictionary|false
```

pspell_new_config() opens up a new dictionary with settings specified in a config, created with pspell_config_create() and modified with pspell_config_*() functions. This method provides you with the most flexibility and has all the functionality provided by pspell_new() and pspell_new_personal().

### Parameters

The config parameter is the one returned by pspell_config_create() when the config was created.

### Return Values

Returns an PSpell\Dictionary instance on success, or false on failure

### Changelog

### Examples

Example #1 pspell_new_config()

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
pspell_config_repl($pspell_config, "/var/dictionaries/custom.repl");
$pspell = pspell_new_config($pspell_config);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-new-config.php
