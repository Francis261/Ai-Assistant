# SQLite3::loadExtension

Source: https://devdocs.io/php/sqlite3.loadextension

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::loadExtension — Attempts to load an SQLite extension library

### Description

```
public SQLite3::loadExtension(string $name): bool
```

Attempts to load an SQLite extension library.

### Parameters

The name of the library to load. The library must be located in the directory specified in the configure option sqlite3.extension_dir.

### Return Values

Returns true if the extension is successfully loaded, false on failure.

### Examples

Example #1 SQLite3::loadExtension() example

```
<?php
$db = new SQLite3('mysqlitedb.db');
$db->loadExtension('libagg.so');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.loadextension.php
