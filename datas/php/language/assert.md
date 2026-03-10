# assert

Source: https://devdocs.io/php/function.assert

(PHP 4, PHP 5, PHP 7, PHP 8)

assert — Checks an assertion

### Description

```
assert(mixed $assertion, Throwable|string|null $description = null): bool
```

assert() allows for the definition of expectations: assertions that take effect in development and testing environments, but are optimised away to have zero cost in production.

Assertions can be used to aid debugging. One use case for them is to act as sanity-checks for preconditions that should always be true and that if they aren't upheld this indicates some programming errors. Another use case is to ensure the presence of certain features like extension functions or certain system limits and features.

As assertions can be configured to be eliminated, they should not be used for normal runtime operations like input parameter checks. As a rule of thumb code should behave as expected even if assertion checking is deactivated.

assert() will check that the expectation given in assertion holds. If not, and thus the result is false, it will take the appropriate action depending on how assert() was configured.

The behaviour of assert() is dictated by the following INI settings:

- 1: generate and execute code (development mode)
- 0: generate code but jump around it at runtime
- -1: do not generate code (production mode)

A user defined function to call when an assertion fails. Its signature should be:

```
assert_callback(
 string $file,
 int $line,
 null $assertion,
 string $description = ?
): void
```

Prior to PHP 8.0.0, the signature of the callback should be:

```
assert_callback(
 string $file,
 int $line,
 string $assertion,
 string $description = ?
): void
```

### Parameters

This is any expression that returns a value, which will be executed and the result is used to indicate whether the assertion succeeded or failed.

Prior to PHP 8.0.0, if assertion was a string it was interpreted as PHP code and executed via eval(). This string would be passed to the callback as the third argument. This behaviour was DEPRECATED in PHP 7.2.0, and REMOVED in PHP 8.0.0.

If description is an instance of Throwable, it will be thrown only if the assertion is executed and fails.

Note:

As of PHP 8.0.0, this is done prior to calling the potentially defined assertion callback.

Note:

As of PHP 8.0.0, the object will be thrown regardless of the configuration of assert.exception.

Note:

As of PHP 8.0.0, the assert.bail setting has no effect in this case.

If description is a string this message will be used if an exception or a warning is emitted. An optional description that will be included in the failure message if the assertion fails.

If description is omitted. A default description equal to the source code for the invocation of assert() is created at compile time.

### Return Values

assert() will always return true if at least one of the following is true:

- zend.assertions=0
- zend.assertions=-1
- assert.active=0
- assert.exception=1
- assert.bail=1
- A custom exception object is passed to description.

If none of the conditions are true assert() will return true if assertion is truthy and false otherwise.

### Changelog

### Examples

Example #1 assert() example

```
<?php
assert(1 > 2);
echo 'Hi!';
```

If assertions are enabled (zend.assertions=1) the above example will output:

```
Fatal error: Uncaught AssertionError: assert(1 > 2) in example.php:2
Stack trace:
#0 example.php(2): assert(false, 'assert(1 > 2)')
#1 {main}
  thrown in example.php on line 2
```

If assertions are disabled (zend.assertions=0 or zend.assertions=-1) the above example will output:

```
Hi!
```

Example #2 Using a custom message

```
<?php
assert(1 > 2, "Expected one to be greater than two");
echo 'Hi!';
```

If assertions are enabled the above example will output:

```
Fatal error: Uncaught AssertionError: Expected one to be greater than two in example.php:2
Stack trace:
#0 example.php(2): assert(false, 'Expected one to...')
#1 {main}
  thrown in example.php on line 2
```

If assertions are disabled the above example will output:

```
Hi!
```

Example #3 Using a custom exception class

```
<?php
class ArithmeticAssertionError extends AssertionError {}

assert(1 > 2, new ArithmeticAssertionError("Expected one to be greater than two"));
echo 'Hi!';
```

If assertions are enabled the above example will output:

```
Fatal error: Uncaught ArithmeticAssertionError: Expected one to be greater than two in example.php:4
Stack trace:
#0 {main}
  thrown in example.php on line 4
```

If assertions are disabled the above example will output:

```
Hi!
```

### See Also

- assert_options() - Set/get the various assert flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.assert.php
