# enchant_broker_describe

Source: https://devdocs.io/php/function.enchant-broker-describe

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0)

enchant_broker_describe — Enumerates the Enchant providers

### Description

```
enchant_broker_describe(EnchantBroker $broker): array
```

Enumerates the Enchant providers and tells you some rudimentary information about them. The same info is provided through phpinfo().

### Parameters

An Enchant broker returned by enchant_broker_init().

### Return Values

Returns an array of available Enchant providers with their details.

### Changelog

### Examples

Example #1 List the backends provided by the given broker

```
<?php
$r = enchant_broker_init();
$bprovides = enchant_broker_describe($r);
echo "Current broker provides the following backend(s):\n";
print_r($bprovides);

?>
```

The above example will output something similar to:

```
Current broker provides the following backend(s):
Array
(
    [0] => Array
        (
            [name] => aspell
            [desc] => Aspell Provider
            [file] => /usr/lib/enchant/libenchant_aspell.so
        )

    [1] => Array
        (
            [name] => hspell
            [desc] => Hspell Provider
            [file] => /usr/lib/enchant/libenchant_hspell.so
        )

    [2] => Array
        (
            [name] => ispell
            [desc] => Ispell Provider
            [file] => /usr/lib/enchant/libenchant_ispell.so
        )

    [3] => Array
        (
            [name] => myspell
            [desc] => Myspell Provider
            [file] => /usr/lib/enchant/libenchant_myspell.so
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-describe.php
