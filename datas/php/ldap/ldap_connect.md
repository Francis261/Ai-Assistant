# ldap_connect

Source: https://devdocs.io/php/function.ldap-connect

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_connect — Connect to an LDAP server

### Description

```
ldap_connect(?string $uri = null): LDAP\Connection|false
```

As of PHP 8.3.0, the following signature is deprecated.

```
ldap_connect(?string $host = null, int $port = 389): LDAP\Connection|false
```

Creates an LDAP\Connection connection and checks whether the given uri is plausible.

Note: This function does not open a connection. It checks whether the given parameters are plausible and can be used to open a connection as soon as one is needed.

### Parameters

A full LDAP URI of the form ldap://hostname:port or ldaps://hostname:port for SSL encryption.

You can also provide multiple LDAP-URIs separated by a space as one string

Note that hostname:port is not a supported LDAP URI as the schema is missing.

The hostname to connect to.

The port to connect to.

### Return Values

Returns an LDAP\Connection instance when the provided LDAP URI seems plausible. It's a syntactic check of the provided parameter but the server(s) will not be contacted! If the syntactic check fails it returns false. ldap_connect() will otherwise return a LDAP\Connection instance as it does not actually connect but just initializes the connecting parameters. The actual connect happens with the next calls to ldap_* functions, usually with ldap_bind().

If no argument is specified then the LDAP\Connection instance of the already opened connection will be returned.

### Changelog

### Examples

Example #1 Example of connecting to LDAP server.

```
<?php

// LDAP variables
$ldapuri = "ldap://ldap.example.com:389";  // your ldap-uri

// Connecting to LDAP
$ldapconn = ldap_connect($ldapuri)
          or die("That LDAP-URI was not parseable");

?>
```

Example #2 Example of connecting securely to LDAP server.

```
<?php

// make sure your host is the correct one
// that you issued your secure certificate to
$ldaphost = "ldaps://ldap.example.com/";

// Connecting to LDAP
$ldapconn = ldap_connect($ldaphost)
          or die("That LDAP-URI was not parseable");

?>
```

### See Also

- ldap_bind() - Bind to LDAP directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-connect.php
