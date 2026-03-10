# nl_langinfo

Source: https://devdocs.io/php/function.nl-langinfo

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

nl_langinfo — Query language and locale information

### Description

```
nl_langinfo(int $item): string|false
```

nl_langinfo() is used to access individual elements of the locale categories. Unlike localeconv(), which returns all of the elements, nl_langinfo() allows you to select any specific element.

### Parameters

item may be an integer value of the element or the constant name of the element. The following is a list of constant names for item that may be used and their description. Some of these constants may not be defined or hold no value for certain locales.

- Returns 0 if parentheses surround the quantity and CURRENCY_SYMBOL.
- Returns 1 if the sign string precedes the quantity and CURRENCY_SYMBOL.
- Returns 2 if the sign string follows the quantity and CURRENCY_SYMBOL.
- Returns 3 if the sign string immediately precedes the CURRENCY_SYMBOL.
- Returns 4 if the sign string immediately follows the CURRENCY_SYMBOL.

### Return Values

Returns the element as a string, or false if item is not valid.

### Examples

Example #1 nl_langinfo() example

```
<?php

var_dump(nl_langinfo(CODESET));
var_dump(nl_langinfo(YESEXPR));
?>
```

The above example will output something similar to:

```
string(14) "ANSI_X3.4-1968"
string(5) "^[yY]"
```

### Notes

Note: This function is not implemented on Windows platforms.

### See Also

- setlocale() - Set locale information
- localeconv() - Get numeric formatting information

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.nl-langinfo.php
