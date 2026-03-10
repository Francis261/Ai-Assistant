# ob_implicit_flush

Source: https://devdocs.io/php/function.ob-implicit-flush

(PHP 4, PHP 5, PHP 7, PHP 8)

ob_implicit_flush — Turn implicit flush on/off

### Description

```
ob_implicit_flush(bool $enable = true): void
```

ob_implicit_flush() will turn implicit flushing on or off. Implicit flushing will result in a flush operation after every block of code resulting in output, so that explicit calls to flush() will no longer be needed.

Note: Printing empty strings or sending headers is not considered output and will not result in a flush operation.

Note: This function does not have any effect on user level output handlers such as those started by ob_start() or output_add_rewrite_var().

### Parameters

true to turn implicit flushing on, false otherwise.

### Return Values

No value is returned.

### Changelog

### See Also

- flush() - Flush system output buffer
- ob_start() - Turn on output buffering
- ob_end_flush() - Flush (send) the return value of the active output handler and turn the active output buffer off

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ob-implicit-flush.php
