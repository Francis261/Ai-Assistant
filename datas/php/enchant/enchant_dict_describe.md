# enchant_dict_describe

Source: https://devdocs.io/php/function.enchant-dict-describe

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_dict_describe — Describes an individual dictionary

### Description

```
enchant_dict_describe(EnchantDictionary $dictionary): array
```

Returns the details of the dictionary.

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 A enchant_dict_describe() example

Check if a dictionary exists using enchant_broker_dict_exists() and show the detail of it.

```
<?php
$tag = 'en_US';
$broker = enchant_broker_init();
if (enchant_broker_dict_exists($broker, $tag)) {
    $dict = enchant_broker_request_dict($broker, $tag);
    $dict_details = enchant_dict_describe($dict);
    print_r($dict_details);
}
?>
```

The above example will output something similar to:

```
Array
(
    [lang] => en_US
    [name] => aspell
    [desc] => Aspell Provider
    [file] => /usr/lib/enchant/libenchant_aspell.so
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-describe.php
