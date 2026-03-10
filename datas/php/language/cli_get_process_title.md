# cli_get_process_title

Source: https://devdocs.io/php/function.cli-get-process-title

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

cli_get_process_title — Returns the current process title

### Description

```
cli_get_process_title(): ?string
```

Returns the current process title, as set by cli_set_process_title(). Note that this may not exactly match what is shown in ps or top, depending on your operating system.

This function is available only in CLI mode.

### Parameters

This function has no parameters.

### Return Values

Return a string with the current process title or null on error.

### Errors/Exceptions

An E_WARNING will be generated if the operating system is unsupported.

### Examples

Example #1 cli_get_process_title() example

```
<?php
echo "Process title: " . cli_get_process_title() . "\n";
?>
```

### See Also

- cli_set_process_title() - Sets the process title

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.cli-get-process-title.php
