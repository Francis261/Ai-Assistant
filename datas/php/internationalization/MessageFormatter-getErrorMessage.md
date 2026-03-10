# MessageFormatter::getErrorMessage

Source: https://devdocs.io/php/messageformatter.geterrormessage

# msgfmt_get_error_message

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::getErrorMessage -- msgfmt_get_error_message — Get the error text from the last operation

### Description

Object-oriented style

```
public MessageFormatter::getErrorMessage(): string
```

Procedural style

```
msgfmt_get_error_message(MessageFormatter $formatter): string
```

Get the error text from the last operation.

### Parameters

The message formatter

### Return Values

Description of the last error.

### Examples

Example #1 msgfmt_get_error_message() example

```
<?php
$fmt = msgfmt_create("en_US", "{0, number} monkeys on {1, number} trees");
$str = msgfmt_format($fmt, array());
if(!$str) {
    echo "ERROR: ".msgfmt_get_error_message($fmt) . " (" . msgfmt_get_error_code($fmt) . ")\n";
}
?>
```

Example #2 OO example

```
<?php
$fmt = new MessageFormatter("en_US", "{0, number} monkeys on {1, number} trees");
$str = $fmt->format(array());
if(!$str) {
    echo "ERROR: ".$fmt->getErrorMessage() . " (" . $fmt->getErrorCode() . ")\n";
}
?>
```

The above example will output:

```
ERROR: msgfmt_format: not enough parameters: U_ILLEGAL_ARGUMENT_ERROR (1)
```

### See Also

- msgfmt_get_error_code() - Get the error code from last operation
- intl_get_error_code() - Get the last error code
- intl_is_failure() - Check whether the given error code indicates failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.geterrormessage.php
