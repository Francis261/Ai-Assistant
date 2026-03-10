# ibase_connect

Source: https://devdocs.io/php/function.ibase-connect

(PHP 5, PHP 7 < 7.4.0)

ibase_connect — Open a connection to a database

### Description

```
ibase_connect(
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

Establishes a connection to an Firebird/InterBase server.

In case a second call is made to ibase_connect() with the same arguments, no new link will be established, but instead, the link identifier of the already opened link will be returned. The link to the server will be closed as soon as the execution of the script ends, unless it's closed earlier by explicitly calling ibase_close().

### Parameters

The database argument has to be a valid path to database file on the server it resides on. If the server is not local, it must be prefixed with either 'hostname:' (TCP/IP), 'hostname/port:' (TCP/IP with interbase server on custom TCP port), '//hostname/' (NetBEUI), depending on the connection protocol used.

The user name. Can be set with the ibase.default_user php.ini directive.

The password for username. Can be set with the ibase.default_password php.ini directive.

charset is the default character set for a database.

buffers is the number of database buffers to allocate for the server-side cache. If 0 or omitted, server chooses its own default.

dialect selects the default SQL dialect for any statement executed within a connection, and it defaults to the highest one supported by client libraries.

Functional only with InterBase 5 and up.

### Return Values

Returns an Firebird/InterBase link identifier on success, or false on error.

### Errors/Exceptions

If you get some error like "arithmetic exception, numeric overflow, or string truncation. Cannot transliterate character between character sets" (this occurs when you try use some character with accents) when using this and after ibase_query() you must set the character set (i.e. ISO8859_1 or your current character set).

### Examples

Example #1 ibase_connect() example

```
<?php
$host = 'localhost:/path/to/your.gdb';

$dbh = ibase_connect($host, $username, $password);
$stmt = 'SELECT * FROM tblname';
$sth = ibase_query($dbh, $stmt);
while ($row = ibase_fetch_object($sth)) {
    echo $row->email, "\n";
}
ibase_free_result($sth);
ibase_close($dbh);
?>
```

### See Also

- ibase_pconnect() - Open a persistent connection to an InterBase database
- ibase_close() - Close a connection to an InterBase database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-connect.php
