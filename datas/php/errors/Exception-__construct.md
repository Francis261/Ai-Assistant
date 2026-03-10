# Exception::__construct

Source: https://devdocs.io/php/exception.construct

(PHP 5, PHP 7, PHP 8)

Exception::__construct — Construct the exception

### Description

Constructs the Exception.

### Parameters

The Exception message to throw.

The Exception code.

The previous exception used for the exception chaining.

Note: Calling the constructor of class Exception from a subclass ignores the default arguments, if the properties $code and $message are already set.

### Notes

Note:

The message is NOT binary safe.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.construct.php
