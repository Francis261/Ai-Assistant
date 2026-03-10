# enchant_broker_dict_exists

Source: https://devdocs.io/php/function.enchant-broker-dict-exists

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_broker_dict_exists — Whether a dictionary exists or not. Using non-empty tag

### Description

```
enchant_broker_dict_exists(EnchantBroker $broker, string $tag): bool
```

Tells if a dictionary exists or not, using a non-empty tags

### Parameters

An Enchant broker returned by enchant_broker_init().

non-empty tag in the LOCALE format, ex: us_US, ch_DE, etc.

### Return Values

Returns true when the tag exist or false when not.

### Changelog

### Examples

Example #1 A enchant_broker_dict_exists() example

```
<?php
$tag = 'en_US';
$r = enchant_broker_init();
if (enchant_broker_dict_exists($r,$tag)) {
    echo $tag . " dictionary found.\n";
}
?>
```

### See Also

- enchant_broker_describe() - Enumerates the Enchant providers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-dict-exists.php
