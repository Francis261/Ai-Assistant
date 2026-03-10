# exec

Source: https://devdocs.io/php/function.exec

(PHP 4, PHP 5, PHP 7, PHP 8)

exec — Execute an external program

### Description

```
exec(string $command, array &$output = null, int &$result_code = null): string|false
```

exec() executes the given command.

### Parameters

The command that will be executed.

If the output argument is present, then the specified array will be filled with every line of output from the command. Trailing whitespace, such as \n, is not included in this array. Note that if the array already contains some elements, exec() will append to the end of the array. If you do not want the function to append elements, call unset() on the array before passing it to exec().

If the result_code argument is present along with the output argument, then the return status of the executed command will be written to this variable.

### Return Values

The last line from the result of the command. If you need to execute a command and have all the data from the command passed directly back without any interference, use the passthru() function.

Returns false on failure.

To get the output of the executed command, be sure to set and use the output parameter.

### Errors/Exceptions

Emits an E_WARNING if exec() is unable to execute the command.

Throws a ValueError if command is empty or contains null bytes.

### Changelog

### Examples

Example #1 An exec() example

```
<?php
// outputs the username that owns the running php/httpd process
// (on a system with the "whoami" executable in the path)
$output=null;
$retval=null;
exec('whoami', $output, $retval);
echo "Returned with status $retval and output:\n";
print_r($output);
?>
```

The above example will output something similar to:

```
Returned with status 0 and output:
Array
(
    [0] => cmb
)
```

### Notes

When allowing user-supplied data to be passed to this function, use escapeshellarg() or escapeshellcmd() to ensure that users cannot trick the system into executing arbitrary commands.

Note:

If a program is started with this function, in order for it to continue running in the background, the output of the program must be redirected to a file or another output stream. Failing to do so will cause PHP to hang until the execution of the program ends.

Note:

On Windows exec() will first start cmd.exe to launch the command. If you want to start an external program without starting cmd.exe use proc_open() with the bypass_shell option set.

### See Also

- system() - Execute an external program and display the output
- passthru() - Execute an external program and display raw output
- escapeshellcmd() - Escape shell metacharacters
- pcntl_exec() - Executes specified program in current process space
- backtick operator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.exec.php
