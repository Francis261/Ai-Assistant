# dba_handlers

Source: https://devdocs.io/php/function.dba-handlers

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

dba_handlers — List all the handlers available

### Description

```
dba_handlers(bool $full_info = false): array
```

dba_handlers() list all the handlers supported by this extension.

### Parameters

Turns on/off full information display in the result.

### Return Values

Returns an array of database handlers. If full_info is set to true, the array will be associative with the handlers names as keys, and their version information as value. Otherwise, the result will be an indexed array of handlers names.

Note:

When the internal cdb library is used you will see cdb and cdb_make.

### Examples

Example #1 dba_handlers() Example

```
<?php

echo "Available DBA handlers:\n";
foreach (dba_handlers(true) as $handler_name => $handler_version) {
  // clean the versions
  $handler_version = str_replace('$', '', $handler_version);
  echo " - $handler_name: $handler_version\n";
}

?>
```

The above example will output something similar to:

```
Available DBA handlers:
 - cdb: 0.75, Revision: 1.3.2.3 
 - cdb_make: 0.75, Revision: 1.2.2.4 
 - db2: Sleepycat Software: Berkeley DB 2.7.7: (08/20/99)
 - inifile: 1.0, Revision: 1.6.2.3 
 - flatfile: 1.0, Revision: 1.5.2.4
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-handlers.php
