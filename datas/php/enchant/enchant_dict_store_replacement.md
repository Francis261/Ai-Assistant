# enchant_dict_store_replacement

Source: https://devdocs.io/php/function.enchant-dict-store-replacement

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_dict_store_replacement — Add a correction for a word

### Description

```
enchant_dict_store_replacement(EnchantDictionary $dictionary, string $misspelled, string $correct): void
```

Add a correction for 'mis' using 'cor'. Notes that you replaced @mis with @cor, so it's possibly more likely that future occurrences of @mis will be replaced with @cor. So it might bump @cor up in the suggestion list.

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

The work to fix

The correct word

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-store-replacement.php
