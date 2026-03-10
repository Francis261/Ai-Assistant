# ibase_prepare

Source: https://devdocs.io/php/function.ibase-prepare

(PHP 5, PHP 7 < 7.4.0)

ibase_prepare — Prepare a query for later binding of parameter placeholders and execution

### Description

```
ibase_prepare(string $query): resource
```

```
ibase_prepare(resource $link_identifier, string $query): resource
```

```
ibase_prepare(resource $link_identifier, string $trans, string $query): resource
```

Prepare a query for later binding of parameter placeholders and execution (via ibase_execute()).

### Parameters

An InterBase query.

An InterBase link identifier returned from ibase_connect(). If omitted, the last opened link is assumed.

An InterBase transaction handle the query should be associated with. If omitted, the default transaction of the connection is assumed.

### Return Values

Returns a prepared query handle, or false on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-prepare.php
