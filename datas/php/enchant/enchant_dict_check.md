# enchant_dict_check

Source: https://devdocs.io/php/function.enchant-dict-check

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_dict_check — Check whether a word is correctly spelled or not

### Description

```
enchant_dict_check(EnchantDictionary $dictionary, string $word): bool
```

If the word is correctly spelled return true, otherwise return false

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

The word to check

### Return Values

Returns true if the word is spelled correctly, false if not.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-check.php
