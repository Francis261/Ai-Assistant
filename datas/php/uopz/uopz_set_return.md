# uopz_set_return

Source: https://devdocs.io/php/function.uopz-set-return

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_set_return — Provide a return value for an existing function

### Description

```
uopz_set_return(string $function, mixed $value, bool $execute = false): bool
```

```
uopz_set_return(
 string $class,
 string $function,
 mixed $value,
 bool $execute = false
): bool
```

Sets the return value of the function to value. If value is a Closure and execute is set, the Closure will be executed in place of the original function. It is possible to call the original function from the Closure.

Note:

This function replaces uopz_rename().

### Parameters

The name of the class containing the function

The name of an existing function

The value the function should return. If a Closure is provided and the execute flag is set, the Closure will be executed in place of the original function.

If true, and a Closure was provided as the value, the Closure will be executed in place of the original function.

### Return Values

True if succeeded, false otherwise.

### Examples

Example #1 uopz_set_return() example

```
<?php
uopz_set_return("strlen", 42);
echo strlen("Banana");
?>
```

The above example will output:

```
42
```

Example #2 uopz_set_return() example

```
<?php
uopz_set_return("strlen", function($str) { return strlen($str) * 2; }, true );
echo strlen("Banana");
?>
```

The above example will output:

```
12
```

Example #3 uopz_set_return() class example

```
<?php
class My {
    public static function strlen($arg) {
        return strlen($arg);
    }
}
uopz_set_return(My::class, "strlen", function($str) { return strlen($str) * 2; }, true );
echo My::strlen("Banana");
?>
```

The above example will output:

```
12
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-set-return.php
