# bindtextdomain

Source: https://devdocs.io/php/function.bindtextdomain

(PHP 4, PHP 5, PHP 7, PHP 8)

bindtextdomain — Sets or gets the path for a domain

### Description

```
bindtextdomain(string $domain, ?string $directory = null): string|false
```

The bindtextdomain() function sets or gets the path for a domain.

### Parameters

The domain.

The directory path. An empty string means the current directory. If null, the currently set directory is returned.

### Return Values

The full pathname for the domain currently being set, or false on failure.

### Changelog

### Examples

Example #1 bindtextdomain() example

```
<?php

$domain = 'myapp';
echo bindtextdomain($domain, '/usr/share/myapp/locale');

?>
```

The above example will output:

```
/usr/share/myapp/locale
```

### Notes

Note:

The bindtextdomain() information is maintained per process, not per thread.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bindtextdomain.php
