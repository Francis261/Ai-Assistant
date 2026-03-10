# cli_set_process_title

Source: https://devdocs.io/php/function.cli-set-process-title

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

cli_set_process_title — Sets the process title

### Description

```
cli_set_process_title(string $title): bool
```

Sets the process title visible in tools such as top and ps. This function is available only in CLI mode.

### Parameters

The new title.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

An E_WARNING will be generated if the operating system is unsupported.

### Examples

Example #1 cli_set_process_title() example

```
<?php
$title = "My Amazing PHP Script";
$pid = getmypid(); // you can use this to see your process title in ps

if (!cli_set_process_title($title)) {
    echo "Unable to set process title for PID $pid...\n";
    exit(1);
} else {
    echo "The process title '$title' for PID $pid has been set for your process!\n";
    sleep(5);
}
?>
```

### See Also

- cli_get_process_title() - Returns the current process title

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.cli-set-process-title.php
