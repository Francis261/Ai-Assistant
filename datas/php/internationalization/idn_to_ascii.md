# idn_to_ascii

Source: https://devdocs.io/php/function.idn-to-ascii

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.2, PECL idn >= 0.1)

idn_to_ascii — Convert domain name to IDNA ASCII form

### Description

Procedural style

```
idn_to_ascii(
 string $domain,
 int $flags = IDNA_DEFAULT,
 int $variant = INTL_IDNA_VARIANT_UTS46,
 array &$idna_info = null
): string|false
```

This function converts a Unicode domain name to an IDNA ASCII-compatible format in lowercase.

### Parameters

The domain to convert, which must be UTF-8 encoded.

Conversion options - combination of IDNA_* constants (except IDNA_ERROR_* constants).

Either INTL_IDNA_VARIANT_2003 (deprecated as of PHP 7.2.0) for IDNA 2003 or INTL_IDNA_VARIANT_UTS46 (only available as of ICU 4.6) for UTS #46.

This parameter can be used only if INTL_IDNA_VARIANT_UTS46 was used for variant. In that case, it will be filled with an array with the keys 'result', the possibly illegal result of the transformation, 'isTransitionalDifferent', a boolean indicating whether the usage of the transitional mechanisms of UTS #46 either has or would have changed the result and 'errors', which is an int representing a bitset of the error constants IDNA_ERROR_*.

### Return Values

The domain name encoded in ASCII-compatible form, or false on failure

### Changelog

### Examples

Example #1 idn_to_ascii() example

```
<?php

echo idn_to_ascii('täst.de'); 

?>
```

The above example will output:

```
xn--tst-qla.de
```

Example #2 All-ASCII domain names are just converted to lowercase

```
<?php

var_dump(idn_to_ascii('Example.com'));

?>
```

The above example will output:

```
string(11) "example.com"
```

### See Also

- idn_to_utf8() - Convert domain name from IDNA ASCII to Unicode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.idn-to-ascii.php
