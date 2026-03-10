# mysqli::debug

Source: https://devdocs.io/php/mysqli.debug

# mysqli_debug

(PHP 5, PHP 7, PHP 8)

mysqli::debug -- mysqli_debug — Performs debugging operations

### Description

Object-oriented style

```
public mysqli::debug(string $options): true
```

Procedural style

```
mysqli_debug(string $options): true
```

Performs debugging operations using the Fred Fish debugging library.

### Parameters

A string representing the debugging operation to perform

The debug control string is a sequence of colon separated fields as follows:

```
<field_1>:<field_2>:<field_N>
```

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 Generating a Trace File

```
<?php

/* Create a trace file in '/tmp/client.trace' on the local (client) machine: */
mysqli_debug("d:t:o,/tmp/client.trace");

?>
```

### Notes

Note:

To use the mysqli_debug() function you must compile the MySQL client library to support debugging.

### See Also

- mysqli_dump_debug_info() - Dump debugging information into the log
- mysqli_report() - Alias of mysqli_driver->report_mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.debug.php
