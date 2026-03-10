# flush

Source: https://devdocs.io/php/function.flush

(PHP 4, PHP 5, PHP 7, PHP 8)

flush — Flush system output buffer

### Description

```
flush(): void
```

Flushes the system write buffers of PHP and the backend used by PHP (e.g.: CGI, a web server). In a command line environment flush() will attempt to flush the contents of the buffers only whereas in a web context headers and the contents of the buffers are flushed.

Note: flush() may not be able to override the buffering scheme of the web server and it has no effect on any client-side buffering in the browser.

Note: This function does not have any effect on user level output handlers such as those started by ob_start() or output_add_rewrite_var().

flush() can interfere with output handlers that set and send headers in a web context (e.g. ob_gzhandler()) by sending headers before these handlers can do so.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Changelog

### See Also

- ob_flush() - Flush (send) the return value of the active output handler
- ob_clean() - Clean (erase) the contents of the active output buffer
- ob_end_flush() - Flush (send) the return value of the active output handler and turn the active output buffer off
- ob_end_clean() - Clean (erase) the contents of the active output buffer and turn it off

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.flush.php
