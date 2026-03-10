# enchant_broker_get_dict_path

Source: https://devdocs.io/php/function.enchant-broker-get-dict-path

(PHP 5 >= 5.3.1, PHP 7, PHP 8, PECL enchant >= 1.0.1)

enchant_broker_get_dict_path — Get the directory path for a given backend

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 enchant_broker_get_dict_path(EnchantBroker $broker, int $type): string|false
```

Get the directory path for a given backend.

### Parameters

An Enchant broker returned by enchant_broker_init().

The type of the dictionaries, i.e. ENCHANT_MYSPELL or ENCHANT_ISPELL.

### Return Values

Returns the path of the dictionary directory on success or false on failure.

### Changelog

### Notes

Note:

This function is only available if the extension has been compiled with Enchant v1.

### See Also

- enchant_broker_set_dict_path() - Set the directory path for a given backend

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-get-dict-path.php
