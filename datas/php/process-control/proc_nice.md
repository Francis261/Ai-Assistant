# proc_nice

Source: https://devdocs.io/php/function.proc-nice

(PHP 5, PHP 7, PHP 8)

proc_nice — Change the priority of the current process

### Description

```
proc_nice(int $priority): bool
```

proc_nice() changes the priority of the current process by the amount specified in priority. A positive priority will lower the priority of the current process, whereas a negative priority will raise the priority.

proc_nice() is not related to proc_open() and its associated functions in any way.

### Parameters

The new priority value, the value of this may differ on platforms.

On Unix, a low value, such as -20 means high priority whereas positive values have a lower priority.

For Windows the priority parameter has the following meaning:

### Return Values

Returns true on success or false on failure. If an error occurs, like the user lacks permission to change the priority, an error of level E_WARNING is also generated.

### Changelog

### Examples

Example #1 Using proc_nice() to set the process priority to high

```
<?php
// Highest priority
proc_nice(-20);
?>
```

### Notes

Note: Availability

proc_nice() will only exist if your system has 'nice' capabilities. 'nice' conforms to: SVr4, SVID EXT, AT&T, X/OPEN, BSD 4.3.

Note: Windows only

proc_nice() will change the current process priority, even if PHP was compiled using thread safety.

### See Also

- pcntl_setpriority() - Change the priority of any process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.proc-nice.php
