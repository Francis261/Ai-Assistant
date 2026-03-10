# zend_thread_id

Source: https://devdocs.io/php/function.zend-thread-id

(PHP 5, PHP 7, PHP 8)

zend_thread_id — Returns a unique identifier for the current thread

### Description

```
zend_thread_id(): int
```

This function returns a unique identifier for the current thread.

### Parameters

This function has no parameters.

### Return Values

Returns the thread id as an integer.

### Examples

Example #1 zend_thread_id() example

```
<?php
$thread_id = zend_thread_id();

echo 'Current thread id is: ' . $thread_id;
?>
```

The above example will output something similar to:

```
Current thread id is: 7864
```

### Notes

Note:

This function is only available if PHP has been built with ZTS (Zend Thread Safety) support and debug mode (--enable-debug).

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zend-thread-id.php
