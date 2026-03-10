# uopz_unset_mock

Source: https://devdocs.io/php/function.uopz-unset-mock

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_unset_mock — Unset previously set mock

### Description

```
uopz_unset_mock(string $class): void
```

Unsets the previously set mock for class.

### Parameters

The name of the mocked class.

### Return Values

No value is returned.

### Errors/Exceptions

A RuntimeException is thrown, if no mock was previously set for class.

### Examples

Example #1 uopz_unset_mock() example

```
<?php
class A {
    public static function who() {
        echo "A";
    }
}

class mockA {
    public static function who() {
        echo "mockA";
    }
}

uopz_set_mock(A::class, mockA::class);
uopz_unset_mock(A::class);
A::who();
?>
```

The above example will output:

```
A
```

### See Also

- uopz_set_mock() - Use mock instead of class for new objects
- uopz_get_mock() - Get the current mock for a class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-unset-mock.php
