# assert_options

Source: https://devdocs.io/php/function.assert-options

(PHP 4, PHP 5, PHP 7, PHP 8)

assert_options — Set/get the various assert flags

This function has been DEPRECATED as of PHP 8.3.0. Relying on this function is highly discouraged.

### Description

```
assert_options(int $option, mixed $value = ?): mixed
```

Set the various assert() control options or just query their current settings.

Note: The use of assert_options() is discouraged in favor of setting and getting the php.ini directives zend.assertions and assert.exception with ini_set() and ini_get(), respectively.

### Parameters

An optional new value for the option.

The callback function set via ASSERT_CALLBACK or assert.callback should have the following signature:

```
assert_callback(
 string $file,
 int $line,
 ?string $assertion,
 string $description = ?
): void
```

### Return Values

Returns the original setting of any option.

### Errors/Exceptions

If option is not a valid option a ValueError is thrown.

### Changelog

### Examples

Example #1 assert_options() example

```
<?php
// This is our function to handle 
// assert failures
function assert_failure($file, $line, $assertion, $message)
{
    echo "The assertion $assertion in $file on line $line has failed: $message";
}

// This is our test function
function test_assert($parameter)
{
    assert(is_bool($parameter));
}

// Set our assert options
assert_options(ASSERT_ACTIVE,   true);
assert_options(ASSERT_BAIL,     true);
assert_options(ASSERT_WARNING,  false);
assert_options(ASSERT_CALLBACK, 'assert_failure');

// Make an assert that would fail
test_assert(1);

// This is never reached due to ASSERT_BAIL 
// being true
echo 'Never reached';
?>
```

### See Also

- assert() - Checks an assertion

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.assert-options.php
