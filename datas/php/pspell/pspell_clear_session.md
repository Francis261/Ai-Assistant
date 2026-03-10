# pspell_clear_session

Source: https://devdocs.io/php/function.pspell-clear-session

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_clear_session — Clear the current session

### Description

```
pspell_clear_session(PSpell\Dictionary $dictionary): bool
```

pspell_clear_session() clears the current session. The current wordlist becomes blank, and, for example, if you try to save it with pspell_save_wordlist(), nothing happens.

### Parameters

An PSpell\Dictionary instance.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pspell_add_to_personal() Example

```
<?php
$pspell_config = pspell_config_create("en");
pspell_config_personal($pspell_config, "/var/dictionaries/custom.pws");
$pspell = pspell_new_config($pspell_config);

pspell_add_to_personal($pspell, "Vlad");
pspell_clear_session($pspell);
pspell_save_wordlist($pspell);    //"Vlad" will not be saved
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-clear-session.php
