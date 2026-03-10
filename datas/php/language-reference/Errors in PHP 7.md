# Errors in PHP 7

Source: https://devdocs.io/php/language.errors.php7

## Errors in PHP 7

PHP 7 changes how most errors are reported by PHP. Instead of reporting errors through the traditional error reporting mechanism used by PHP 5, most errors are now reported by throwing Error exceptions.

As with normal exceptions, these Error exceptions will bubble up until they reach the first matching catch block. If there are no matching blocks, then any default exception handler installed with set_exception_handler() will be called, and if there is no default exception handler, then the exception will be converted to a fatal error and will be handled like a traditional error.

As the Error hierarchy does not inherit from Exception, code that uses catch (Exception $e) { ... } blocks to handle uncaught exceptions in PHP 5 will find that these Errors are not caught by these blocks. Either a catch (Error $e) { ... } block or a set_exception_handler() handler is required.

### Error hierarchy

- Throwable
  - Error
    - ArithmeticError
      - DivisionByZeroError
    - AssertionError
    - CompileError
      - ParseError
    - TypeError
      - ArgumentCountError
    - ValueError
    - UnhandledMatchError
    - FiberError
    - RequestParseBodyException
  - Exception
    - ...

- Error
  - ArithmeticError
    - DivisionByZeroError
  - AssertionError
  - CompileError
    - ParseError
  - TypeError
    - ArgumentCountError
  - ValueError
  - UnhandledMatchError
  - FiberError
  - RequestParseBodyException
- Exception
  - ...

- ArithmeticError
  - DivisionByZeroError
- AssertionError
- CompileError
  - ParseError
- TypeError
  - ArgumentCountError
- ValueError
- UnhandledMatchError
- FiberError
- RequestParseBodyException

- DivisionByZeroError

- ParseError

- ArgumentCountError

- ...

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.errors.php7.php
