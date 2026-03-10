# apache_child_terminate

Source: https://devdocs.io/php/function.apache-child-terminate

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

apache_child_terminate — Terminate apache process after this request

### Description

```
apache_child_terminate(): void
```

apache_child_terminate() will register the Apache process executing the current PHP request for termination once execution of PHP code is completed. It may be used to terminate a process after a script with high memory consumption has been run as memory will usually only be freed internally but not given back to the operating system.

Works in the Apache, and FastCGI webservers.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Notes

Note: This function is not implemented on Windows platforms.

### See Also

- exit() - Terminate the current script with a status code or message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-child-terminate.php
