# php_strip_whitespace

Source: https://devdocs.io/php/function.php-strip-whitespace

(PHP 5, PHP 7, PHP 8)

php_strip_whitespace — Return source with stripped comments and whitespace

### Description

```
php_strip_whitespace(string $filename): string
```

Returns the PHP source code in filename with PHP comments and whitespace removed. This may be useful for determining the amount of actual code in your scripts compared with the amount of comments. This is similar to using php -w from the commandline.

### Parameters

Path to the PHP file.

### Return Values

The stripped source code will be returned on success, or an empty string on failure.

Note:

This function respects the value of the short_open_tag ini directive.

### Examples

Example #1 php_strip_whitespace() example

```
<?php
// PHP comment here

/*
 * Another PHP comment
 */

echo        php_strip_whitespace(__FILE__);
// Newlines are considered whitespace, and are removed too:
do_nothing();
?>
```

The above example will output:

```
<?php
 echo php_strip_whitespace(__FILE__); do_nothing(); ?>
```

Notice the PHP comments are gone, as are the whitespace and newline after the first echo statement.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.php-strip-whitespace.php
