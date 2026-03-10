# readline_info

Source: https://devdocs.io/php/function.readline-info

(PHP 4, PHP 5, PHP 7, PHP 8)

readline_info — Gets/sets various internal readline variables

### Description

```
readline_info(?string $var_name = null, int|string|bool|null $value = null): mixed
```

Gets or sets various internal readline variables.

### Parameters

A variable name.

If provided, this will be the new value of the setting.

### Return Values

If called with no parameters, this function returns an array of values for all the settings readline uses. The elements will be indexed by the following values: done, end, erase_empty_line, library_version, line_buffer, mark, pending_input, point, prompt, readline_name, and terminal_name. The array will only contain those elements which are supported by the library used to built the readline extension.

If called with one or two parameters, the old value is returned.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readline-info.php
