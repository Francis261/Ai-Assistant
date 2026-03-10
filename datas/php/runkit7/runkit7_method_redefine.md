# runkit7_method_redefine

Source: https://devdocs.io/php/function.runkit7-method-redefine

(PECL runkit7 >= Unknown)

runkit7_method_redefine — Dynamically changes the code of the given method

### Description

```
runkit7_method_redefine(
 string $class_name,
 string $method_name,
 string $argument_list,
 string $code,
 int $flags = RUNKIT7_ACC_PUBLIC,
 string $doc_comment = null,
 string $return_type = ?,
 bool $is_strict = ?
): bool
```

```
runkit7_method_redefine(
 string $class_name,
 string $method_name,
 Closure $closure,
 int $flags = RUNKIT7_ACC_PUBLIC,
 string $doc_comment = null,
 string $return_type = ?,
 bool $is_strict = ?
): bool
```

### Parameters

The class in which to redefine the method

The name of the method to redefine

Comma-delimited list of arguments for the redefined method

The new code to be evaluated when method_name is called

A closure that defines the method.

The redefined method can be RUNKIT7_ACC_PUBLIC, RUNKIT7_ACC_PROTECTED or RUNKIT7_ACC_PRIVATE optionally combined via bitwise OR with RUNKIT7_ACC_STATIC

The doc comment of the method.

The return type of the method.

Whether the method behaves as if it was declared in a file with strict_types=1.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 runkit7_method_redefine() example

```
<?php
class Example {
    function foo() {
        return "foo!\n";
    }
}

// create an Example object
$e = new Example();

// output Example::foo() (before redefine)
echo "Before: " . $e->foo();

// Redefine the 'foo' method
runkit7_method_redefine(
    'Example',
    'foo',
    '',
    'return "bar!\n";',
    RUNKIT7_ACC_PUBLIC
);

// output Example::foo() (after redefine)
echo "After: " . $e->foo();
?>
```

The above example will output:

```
Before: foo!
After: bar!
```

### See Also

- runkit7_method_add() - Dynamically adds a new method to a given class
- runkit7_method_copy() - Copies a method from class to another
- runkit7_method_remove() - Dynamically removes the given method
- runkit7_method_rename() - Dynamically changes the name of the given method
- runkit7_function_redefine() - Replace a function definition with a new implementation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-method-redefine.php
