# ibase_pconnect

Source: https://devdocs.io/php/function.ibase-pconnect

(PHP 5, PHP 7 < 7.4.0)

ibase_pconnect — Open a persistent connection to an InterBase database

### Description

```
ibase_pconnect(
 string $database = ?,
 string $username = ?,
 string $password = ?,
 string $charset = ?,
 int $buffers = ?,
 int $dialect = ?,
 string $role = ?,
 int $sync = ?
): resource
```

Opens a persistent connection to an InterBase database.

ibase_pconnect() acts very much like ibase_connect() with two major differences.

First, when connecting, the function will first try to find a (persistent) link that's already opened with the same parameters. If one is found, an identifier for it will be returned instead of opening a new connection.

Second, the connection to the InterBase server will not be closed when the execution of the script ends. Instead, the link will remain open for future use (ibase_close() will not close links established by ibase_pconnect()). This type of link is therefore called 'persistent'.

### Parameters

The database argument has to be a valid path to database file on the server it resides on. If the server is not local, it must be prefixed with either 'hostname:' (TCP/IP), '//hostname/' (NetBEUI) or 'hostname@' (IPX/SPX), depending on the connection protocol used.

The user name. Can be set with the ibase.default_user php.ini directive.

The password for username. Can be set with the ibase.default_password php.ini directive.

charset is the default character set for a database.

buffers is the number of database buffers to allocate for the server-side cache. If 0 or omitted, server chooses its own default.

dialect selects the default SQL dialect for any statement executed within a connection, and it defaults to the highest one supported by client libraries. Functional only with InterBase 6 and up.

Functional only with InterBase 5 and up.

### Return Values

Returns an InterBase link identifier on success, or false on error.

### See Also

- ibase_close() - Close a connection to an InterBase database
- ibase_connect() - Open a connection to a database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-pconnect.php
