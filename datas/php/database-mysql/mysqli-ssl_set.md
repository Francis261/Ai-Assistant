# mysqli::ssl_set

Source: https://devdocs.io/php/mysqli.ssl-set

# mysqli_ssl_set

(PHP 5, PHP 7, PHP 8)

mysqli::ssl_set -- mysqli_ssl_set — Used for establishing secure connections using SSL

### Description

Object-oriented style

```
public mysqli::ssl_set(
 ?string $key,
 ?string $certificate,
 ?string $ca_certificate,
 ?string $ca_path,
 ?string $cipher_algos
): true
```

Procedural style

```
mysqli_ssl_set(
 mysqli $mysql,
 ?string $key,
 ?string $certificate,
 ?string $ca_certificate,
 ?string $ca_path,
 ?string $cipher_algos
): true
```

Used for establishing secure connections using SSL. It must be called before mysqli_real_connect(). This function does nothing unless OpenSSL support is enabled.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The path name to the key file.

The path name to the certificate file.

The path name to the certificate authority file.

The pathname to a directory that contains trusted SSL CA certificates in PEM format.

A list of allowable ciphers to use for SSL encryption.

### Return Values

Always returns true. If SSL setup is incorrect mysqli_real_connect() will return an error when you attempt to connect.

### See Also

- mysqli_options() - Set options
- mysqli_real_connect() - Opens a connection to a mysql server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.ssl-set.php
