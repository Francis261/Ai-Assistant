# IntlChar::getUnicodeVersion

Source: https://devdocs.io/php/intlchar.getunicodeversion

(PHP 7, PHP 8)

IntlChar::getUnicodeVersion — Get the Unicode version

### Description

```
public static IntlChar::getUnicodeVersion(): array
```

Gets the Unicode version information.

The version array is filled in with the version information for the Unicode standard that is currently used by ICU. For example, Unicode version 3.1.1 is represented as an array with the values [3, 1, 1, 0].

### Parameters

This function has no parameters.

### Return Values

An array containing the Unicode version number.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getUnicodeVersion());
?>
```

The above example will output:

```
array(4) {
  [0]=>
  int(7)
  [1]=>
  int(0)
  [2]=>
  int(0)
  [3]=>
  int(0)
}
```

### See Also

- IntlChar::charAge() - Get the "age" of the code point

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getunicodeversion.php
