# enchant_broker_request_dict

Source: https://devdocs.io/php/function.enchant-broker-request-dict

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_broker_request_dict — Create a new dictionary using a tag

### Description

```
enchant_broker_request_dict(EnchantBroker $broker, string $tag): EnchantDictionary|false
```

create a new dictionary using tag, the non-empty language tag you wish to request a dictionary for ("en_US", "de_DE", ...)

### Parameters

An Enchant broker returned by enchant_broker_init().

A tag describing the locale, for example en_US, de_DE

### Return Values

Returns a dictionary resource on success or false on failure.

### Changelog

### Examples

Example #1 A enchant_broker_request_dict() example

Check if a dictionary exists using enchant_broker_dict_exists() and request it.

```
<?php
$tag = 'en_US';
$broker = enchant_broker_init();
if (enchant_broker_dict_exists($broker,$tag)) {
    $dict = enchant_broker_request_dict($broker, $tag);
    var_dump($dict);
}
?>
```

### See Also

- enchant_dict_describe() - Describes an individual dictionary
- enchant_broker_dict_exists() - Whether a dictionary exists or not. Using non-empty tag
- enchant_broker_free_dict() - Free a dictionary resource

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-request-dict.php
