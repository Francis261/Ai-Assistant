# uopz_backup

Source: https://devdocs.io/php/function.uopz-backup

(PECL uopz 1 >= 1.0.3, PECL uopz 2)

uopz_backup — Backup a function

This function has been REMOVED in PECL uopz 5.0.0.

### Description

```
uopz_backup(string $function): void
```

```
uopz_backup(string $class, string $function): void
```

Backup a function at runtime, to be restored on shutdown

### Parameters

The name of the class containing the function to backup

The name of the function

### Return Values

### Examples

Example #1 uopz_backup() example

```
<?php
uopz_backup("fgets");
uopz_function("fgets", function(){
    return true;
});
var_dump(fgets());
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-backup.php
