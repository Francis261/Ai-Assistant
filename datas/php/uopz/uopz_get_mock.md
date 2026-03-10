# uopz_get_mock

Source: https://devdocs.io/php/function.uopz-get-mock

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_mock — Get the current mock for a class

### Description

```
uopz_get_mock(string $class): mixed
```

Returns the current mock for class.

### Parameters

The name of the mocked class.

### Return Values

Either a string containing the name of the mock, or an object, or null if no mock has been set.

### Examples

Example #1 uopz_get_mock() example

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
echo uopz_get_mock(A::class);
?>
```

The above example will output:

```
mockA
```

### See Also

- uopz_set_mock() - Use mock instead of class for new objects
- uopz_unset_mock() - Unset previously set mock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-get-mock.php
