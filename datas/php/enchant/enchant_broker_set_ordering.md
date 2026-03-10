# enchant_broker_set_ordering

Source: https://devdocs.io/php/function.enchant-broker-set-ordering

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_broker_set_ordering — Declares a preference of dictionaries to use for the language

### Description

```
enchant_broker_set_ordering(EnchantBroker $broker, string $tag, string $ordering): bool
```

Declares a preference of dictionaries to use for the language described/referred to by 'tag'. The ordering is a comma delimited list of provider names. As a special exception, the "*" tag can be used as a language tag to declare a default ordering for any language that does not explicitly declare an ordering.

### Parameters

An Enchant broker returned by enchant_broker_init().

Language tag. The special "*" tag can be used as a language tag to declare a default ordering for any language that does not explicitly declare an ordering.

Comma delimited list of provider names

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-set-ordering.php
