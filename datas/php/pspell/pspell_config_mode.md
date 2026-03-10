# pspell_config_mode

Source: https://devdocs.io/php/function.pspell-config-mode

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_config_mode — Change the mode number of suggestions returned

### Description

```
pspell_config_mode(PSpell\Config $config, int $mode): bool
```

pspell_config_mode() should be used on a config before calling pspell_new_config(). This function determines how many suggestions will be returned by pspell_suggest().

### Parameters

An PSpell\Config instance.

The mode parameter is the mode in which spellchecker will work. There are several modes available:

- PSPELL_FAST - Fast mode (least number of suggestions)
- PSPELL_NORMAL - Normal mode (more suggestions)
- PSPELL_BAD_SPELLERS - Slow mode (a lot of suggestions)

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_config_mode() Example

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_mode($pspell_config, PSPELL_FAST);
$pspell = pspell_new_config($pspell_config);
pspell_check($pspell, "thecat");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-config-mode.php
