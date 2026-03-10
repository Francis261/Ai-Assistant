# ibase_close

Source: https://devdocs.io/php/function.ibase-close

(PHP 5, PHP 7 < 7.4.0)

ibase_close — Close a connection to an InterBase database

### Description

```
ibase_close(resource $connection_id = null): bool
```

Closes the link to an InterBase database that's associated with a connection id returned from ibase_connect(). Default transaction on link is committed, other transactions are rolled back.

### Parameters

An InterBase link identifier returned from ibase_connect(). If omitted, the last opened link is assumed.

### Return Values

Returns true on success or false on failure.

### See Also

- ibase_connect() - Open a connection to a database
- ibase_pconnect() - Open a persistent connection to an InterBase database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-close.php
