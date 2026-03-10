# eio_readdir

Source: https://devdocs.io/php/function.eio-readdir

(PECL eio >= 0.0.1dev)

eio_readdir — Reads through a whole directory

### Description

```
eio_readdir(
 string $path,
 int $flags,
 int $pri,
 callable $callback,
 string $data = NULL
): resource
```

Reads through a whole directory(via the opendir, readdir and closedir system calls) and returns either the names or an array in result argument of callback function, depending on the flags argument.

### Parameters

Directory path.

Combination of EIO_READDIR_* constants.

The request priority: EIO_PRI_DEFAULT, EIO_PRI_MIN, EIO_PRI_MAX, or null. If null passed, pri internally is set to EIO_PRI_DEFAULT.

callback function is called when the request is done. It should match the following prototype:

```
void callback(mixed $data, int $result[, resource $req]);
```

is custom data passed to the request.

request-specific result value; basically, the value returned by corresponding system call.

is optional request resource which can be used with functions like eio_get_last_error().

Arbitrary variable passed to callback.

### Return Values

eio_readdir() returns request resource on success, or false on failure. Sets result argument of callback function according to flags:

Node types:

### Examples

Example #1 eio_readdir() example

```
<?php
/* Is called when eio_readdir() finishes */
function my_readdir_callback($data, $result) {
    echo __FUNCTION__, " called\n";
    echo "data: "; var_dump($data);
    echo "result: "; var_dump($result);
    echo "\n";
}

eio_readdir("/var/spool/news", EIO_READDIR_STAT_ORDER | EIO_READDIR_DIRS_FIRST,
  EIO_PRI_DEFAULT, "my_readdir_callback");
eio_event_loop();
?>
```

The above example will output something similar to:

```
my_readdir_callback called
data: NULL
result: array(2) {
 ["names"]=>
  array(7) {
   [0]=>
    string(7) "archive"
    [1]=>
    string(8) "articles"
    [2]=>
    string(8) "incoming"
    [3]=>
    string(7) "innfeed"
    [4]=>
    string(8) "outgoing"
    [5]=>
    string(8) "overview"
    [6]=>
    string(3) "tmp"
  }
 ["dents"]=>
  array(7) {
   [0]=>
    array(3)
    {
     ["name"]=>
      string(7)
      "archive"
      ["type"]=>
      int(4)
      ["inode"]=>
      int(393265)
    }
   [1]=>
    array(3)
    {
     ["name"]=>
      string(8)
      "articles"
      ["type"]=>
      int(4)
      ["inode"]=>
      int(393266)
    }
   [2]=>
    array(3)
    {
     ["name"]=>
      string(8)
      "incoming"
      ["type"]=>
      int(4)
      ["inode"]=>
      int(393267)
    }
   [3]=>
    array(3)
    {
     ["name"]=>
      string(7)
      "innfeed"
      ["type"]=>
      int(4)
      ["inode"]=>
      int(393269)
    }
   [4]=>
    array(3)
    {
     ["name"]=>
      string(8)
      "outgoing"
      ["type"]=>
      int(4)
      ["inode"]=>
      int(393270)
    }
   [5]=>
    array(3)
    {
     ["name"]=>
      string(8)
      "overview"
      ["type"]=>
      int(4)
      ["inode"]=>
      int(393271)
    }
   [6]=>
    array(3)
    {
     ["name"]=>
      string(3)
      "tmp"
      ["type"]=>
      int(4)
      ["inode"]=>
      int(393272)
    }
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-readdir.php
