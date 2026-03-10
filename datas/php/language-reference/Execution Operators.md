# Execution Operators

Source: https://devdocs.io/php/language.operators.execution

## Execution Operators

PHP supports one execution operator: backticks (``). Note that these are not single-quotes! PHP will attempt to execute the contents of the backticks as a shell command; the output will be returned (i.e., it won't simply be dumped to output; it can be assigned to a variable). Use of the backtick operator is identical to shell_exec().

Example #1 Backtick Operator

```
<?php
$output = `ls -al`;
echo "<pre>$output</pre>";
?>
```

Note:

The backtick operator is disabled when shell_exec() is disabled.

Note:

Unlike some other languages, backticks have no special meaning within double-quoted strings.

### Changelog

### See Also

- Program Execution functions
- popen()
- proc_open()
- Using PHP from the commandline

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.operators.execution.php
