# uopz_delete

Source: https://devdocs.io/php/function.uopz-delete

(PECL uopz 1, PECL uopz 2)

uopz_delete — Delete a function

This function has been REMOVED in PECL uopz 5.0.0.

### Description

```
uopz_delete(string $function): void
```

```
uopz_delete(string $class, string $function): void
```

Deletes a function or method

### Parameters

### Return Values

### Examples

Example #1 uopz_delete() example

```
<?php
uopz_delete("strlen");

echo strlen("Hello World");
?>
```

The above example will output something similar to:

```
PHP Fatal error: Call to undefined function strlen() in /path/to/script.php on line 4
```

Example #2 uopz_delete() class example

```
<?php
class My {
    public static function strlen($arg) {
        return strlen($arg);
    }
}

uopz_delete(My::class, "strlen");

echo My::strlen("Hello World");
?>
```

The above example will output something similar to:

```
PHP Fatal error: Call to undefined method My::strlen() in /path/to/script.php on line 10
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-delete.php
