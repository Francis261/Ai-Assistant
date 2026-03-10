# uopz_rename

Source: https://devdocs.io/php/function.uopz-rename

(PECL uopz 1, PECL uopz 2)

uopz_rename — Rename a function at runtime

This function has been REMOVED in PECL uopz 5.0.0.

### Description

```
uopz_rename(string $function, string $rename): void
```

```
uopz_rename(string $class, string $function, string $rename): void
```

Renames function to rename

Note:

If both functions exist, this effectively swaps their names

### Parameters

The name of the class containing the function

The name of an existing function

The new name for the function

### Return Values

### Examples

Example #1 uopz_rename() example

```
<?php
uopz_rename("strlen", "original_strlen");

echo original_strlen("Hello World");
?>
```

The above example will output:

```
11
```

Example #2 uopz_rename() class example

```
<?php
class My {
    public function strlen($arg) {
        return strlen($arg);
    }
}

uopz_rename(My::class, "strlen", "original_strlen");

echo My::original_strlen("Hello World");
?>
```

The above example will output:

```
11
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-rename.php
