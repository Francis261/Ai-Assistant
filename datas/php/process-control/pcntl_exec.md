# pcntl_exec

Source: https://devdocs.io/php/function.pcntl-exec

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pcntl_exec — Executes specified program in current process space

### Description

```
pcntl_exec(string $path, array $args = [], array $env_vars = []): bool
```

Executes the program with the given arguments.

### Parameters

path must be the path to a binary executable or a script with a valid path pointing to an executable in the shebang ( #!/usr/local/bin/perl for example) as the first line. See your system's man execve(2) page for additional information.

args is an array of argument strings passed to the program.

env_vars is an array of strings which are passed as environment to the program. The array is in the format of name => value, the key being the name of the environmental variable and the value being the value of that variable.

### Return Values

Returns false.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-exec.php
