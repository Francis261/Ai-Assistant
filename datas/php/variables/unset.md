# unset

Source: https://devdocs.io/php/function.unset

(PHP 4, PHP 5, PHP 7, PHP 8)

unset — unset() a given variable

### Description

```
unset(mixed $var, mixed ...$vars): void
```

unset() destroys the specified variables.

The behavior of unset() inside of a function can vary depending on what type of variable you are attempting to destroy.

If a globalized variable is unset() inside of a function, only the local variable is destroyed. The variable in the calling environment will retain the same value as before unset() was called.

Example #1 Using unset()

```
<?php
function destroy_foo() 
{
    global $foo;
    unset($foo);
}

$foo = 'bar';
destroy_foo();
echo $foo;
?>
```

To unset() a global variable inside of a function, then use the $GLOBALS array to do so:

Example #2 unset() a Global Variable

```
<?php
function foo() 
{
    unset($GLOBALS['bar']);
}

$bar = "something";
foo();
?>
```

If a variable that is PASSED BY REFERENCE is unset() inside of a function, only the local variable is destroyed. The variable in the calling environment will retain the same value as before unset() was called.

Example #3 unset() with Reference

```
<?php
function foo(&$bar) 
{
    unset($bar);
    $bar = "blah";
}

$bar = 'something';
echo "$bar\n";

foo($bar);
echo "$bar\n";
?>
```

If a static variable is unset() inside of a function, unset() destroys the variable only in the context of the rest of a function. Following calls will restore the previous value of a variable.

Example #4 unset() with Static Variable

```
<?php
function foo()
{
    static $bar;
    $bar++;
    echo "Before unset: $bar, ";
    unset($bar);
    $bar = 23;
    echo "after unset: $bar\n";
}

foo();
foo();
foo();
?>
```

### Parameters

The variable to be unset.

Further variables.

### Return Values

No value is returned.

### Examples

Example #5 unset() example

```
<?php
// destroy a single variable
unset($foo);

// destroy a single element of an array
unset($bar['quux']);

// destroy more than one variable
unset($foo1, $foo2, $foo3);
?>
```

### Notes

Note: Because this is a language construct and not a function, it cannot be called using variable functions, or named arguments.

Note:

It is possible to unset object properties visible in the current context.

If declared, __get() is called when accessing an unset property, and __set() is called when setting an unset property.

Note:

It is not possible to unset $this inside an object method.

Note:

When using unset() on inaccessible object properties, the __unset() overloading method will be called, if declared.

### See Also

- isset() - Determine if a variable is declared and is different than null
- empty() - Determine whether a variable is empty
- __unset()
- array_splice() - Remove a portion of the array and replace it with something else
- (unset) casting

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.unset.php
