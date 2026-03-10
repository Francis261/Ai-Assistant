# getprotobyname

Source: https://devdocs.io/php/function.getprotobyname

(PHP 4, PHP 5, PHP 7, PHP 8)

getprotobyname — Get protocol number associated with protocol name

### Description

```
getprotobyname(string $protocol): int|false
```

getprotobyname() returns the protocol number associated with the protocol protocol as per /etc/protocols.

### Parameters

The protocol name.

### Return Values

Returns the protocol number, or false on failure.

### Examples

Example #1 getprotobyname() example

```
<?php
$protocol = 'tcp';
$get_prot = getprotobyname($protocol);
if ($get_prot === FALSE) {
    echo 'Invalid Protocol';
} else {
    echo 'Protocol #' . $get_prot;
}
?>
```

### See Also

- getprotobynumber() - Get protocol name associated with protocol number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getprotobyname.php
