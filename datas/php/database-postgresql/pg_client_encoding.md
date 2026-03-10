# pg_client_encoding

Source: https://devdocs.io/php/function.pg-client-encoding

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

pg_client_encoding — Gets the client encoding

### Description

```
pg_client_encoding(?PgSql\Connection $connection = null): string
```

PostgreSQL supports automatic character set conversion between server and client for certain character sets. pg_client_encoding() returns the client encoding as a string. The returned string will be one of the standard PostgreSQL encoding identifiers.

Note:

This function requires PostgreSQL 7.0 or higher. If libpq is compiled without multibyte encoding support, pg_client_encoding() always returns SQL_ASCII. Supported encoding depends on PostgreSQL version. Refer to the PostgreSQL Documentation supported encodings.

The function used to be called pg_clientencoding().

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

The client encoding.

### Changelog

### Examples

Example #1 pg_client_encoding() example

```
<?php
// Assume $conn is a connection to a ISO-8859-1 database
$encoding = pg_client_encoding($conn);

echo "Client encoding is: ", $encoding, "\n";
?>
```

The above example will output:

```
Client encoding is: ISO-8859-1
```

### See Also

- pg_set_client_encoding() - Set the client encoding

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-client-encoding.php
