# shell_exec

Source: https://devdocs.io/php/function.shell-exec

(PHP 4, PHP 5, PHP 7, PHP 8)

shell_exec — Execute command via shell and return the complete output as a string

### Description

```
shell_exec(string $command): string|false|null
```

This function is identical to the backtick operator.

Note:

On Windows, the underlying pipe is opened in text mode which can cause the function to fail for binary output. Consider to use popen() instead for such cases.

### Parameters

The command that will be executed.

### Return Values

A string containing the output from the executed command, false if the pipe cannot be established or null if an error occurs or the command produces no output.

Note:

This function can return null both when an error occurs or the program produces no output. It is not possible to detect execution failures using this function. exec() should be used when access to the program exit code is required.

### Errors/Exceptions

An E_WARNING level error is generated when the pipe cannot be established.

### Examples

Example #1 A shell_exec() example

```
<?php
$output = shell_exec('ls -lart');
echo "<pre>$output</pre>";
?>
```

### See Also

- exec() - Execute an external program
- escapeshellcmd() - Escape shell metacharacters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shell-exec.php
