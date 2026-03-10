# phpcredits

Source: https://devdocs.io/php/function.phpcredits

(PHP 4, PHP 5, PHP 7, PHP 8)

phpcredits — Prints out the credits for PHP

### Description

```
phpcredits(int $flags = CREDITS_ALL): true
```

This function prints out the credits listing the PHP developers, modules, etc. It generates the appropriate HTML codes to insert the information in a page.

### Parameters

To generate a custom credits page, you may want to use the flags parameter.

### Return Values

Always returns true.

### Examples

Example #1 Prints the general credits

```
<?php
phpcredits(CREDITS_GENERAL);
?>
```

Example #2 Prints the core developers and the documentation group

```
<?php
phpcredits(CREDITS_GROUP | CREDITS_DOCS | CREDITS_FULLPAGE);
?>
```

Example #3 Printing all the credits

```
<html>
 <head>
  <title>My credits page</title>
 </head>
 <body>
<?php
// some code of your own
phpcredits(CREDITS_ALL - CREDITS_FULLPAGE);
// some more code
?>
 </body>
</html>
```

### Notes

Note:

phpcredits() outputs plain text instead of HTML when using the CLI mode.

### See Also

- phpversion() - Gets the current PHP version
- phpinfo() - Outputs information about PHP's configuration

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.phpcredits.php
