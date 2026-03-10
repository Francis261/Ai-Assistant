# eio_realpath

Source: https://devdocs.io/php/function.eio-realpath

(PECL eio >= 0.0.1dev)

eio_realpath — Get the canonicalized absolute pathname

### Description

```
eio_realpath(
 string $path,
 int $pri,
 callable $callback,
 string $data = NULL
): resource
```

eio_realpath() returns the canonicalized absolute pathname in result argument of callback function.

### Parameters

Short pathname

### Return Values

### Examples

Example #1 eio_realpath() example

```
<?php
var_dump(getcwd());

function my_realpath_allback($data, $result) {
    var_dump($result);
}

eio_realpath("../", EIO_PRI_DEFAULT, "my_realpath_allback");
eio_event_loop();
?>
```

The above example will output something similar to:

```
string(12) "/home/ruslan"
string(5) "/home"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-realpath.php
