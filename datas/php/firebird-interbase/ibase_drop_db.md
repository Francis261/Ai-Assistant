# ibase_drop_db

Source: https://devdocs.io/php/function.ibase-drop-db

(PHP 5, PHP 7 < 7.4.0)

ibase_drop_db — Drops a database

### Description

```
ibase_drop_db(resource $connection = null): bool
```

This functions drops a database that was opened by either ibase_connect() or ibase_pconnect(). The database is closed and deleted from the server.

### Parameters

An InterBase link identifier. If omitted, the last opened link is assumed.

### Return Values

Returns true on success or false on failure.

### See Also

- ibase_connect() - Open a connection to a database
- ibase_pconnect() - Open a persistent connection to an InterBase database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-drop-db.php
