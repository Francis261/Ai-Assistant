# enchant_dict_get_error

Source: https://devdocs.io/php/function.enchant-dict-get-error

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_dict_get_error — Returns the last error of the current spelling-session

### Description

```
enchant_dict_get_error(EnchantDictionary $dictionary): string|false
```

Returns the last error of the current spelling-session

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

### Return Values

Returns the error message as string or false if no error occurred.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-get-error.php
