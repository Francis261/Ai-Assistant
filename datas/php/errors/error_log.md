# error_log

Source: https://devdocs.io/php/function.error-log

(PHP 4, PHP 5, PHP 7, PHP 8)

error_log — Send an error message to the defined error handling routines

### Description

```
error_log(
 string $message,
 int $message_type = 0,
 ?string $destination = null,
 ?string $additional_headers = null
): bool
```

Sends an error message to the web server's error log or to a file.

### Parameters

The error message that should be logged.

Says where the error should go. The possible message types are as follows:

The destination. Its meaning depends on the message_type parameter as described above.

The extra headers. It's used when the message_type parameter is set to 1. This message type uses the same internal function as mail() does.

### Return Values

Returns true on success or false on failure. If message_type is zero, this function always returns true, regardless of whether the error could be logged or not.

### Changelog

### Examples

Example #1 error_log() examples

```
<?php
// Send notification through the server log if we can not
// connect to the database.
if (!Ora_Logon($username, $password)) {
    error_log("Oracle database not available!", 0);
}

// Notify administrator by email if we run out of FOO
if (!($foo = allocate_new_foo())) {
    error_log("Big trouble, we're all out of FOOs!", 1,
               "operator@example.com");
}

// another way to call error_log():
error_log("You messed up!", 3, "/var/tmp/my-errors.log");
?>
```

### Notes

error_log() is not binary safe. message will be truncated by null character.

message should not contain null character. Note that message may be sent to file, mail, syslog, etc. Use appropriate conversion/escape function, base64_encode(), rawurlencode() or addslashes() before calling error_log().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.error-log.php
