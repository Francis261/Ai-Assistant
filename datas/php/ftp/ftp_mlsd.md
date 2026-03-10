# ftp_mlsd

Source: https://devdocs.io/php/function.ftp-mlsd

(PHP 7 >= 7.2.0, PHP 8)

ftp_mlsd — Returns a list of files in the given directory

### Description

```
ftp_mlsd(FTP\Connection $ftp, string $directory): array|false
```

### Parameters

An FTP\Connection instance.

The directory to be listed.

### Return Values

Returns an array of arrays with file infos from the specified directory on success or false on error.

### Changelog

### Examples

Example #1 ftp_mlsd() example

```
<?php

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// get contents of the current directory
$contents = ftp_mlsd($ftp, ".");

// output $contents
var_dump($contents);

?>
```

The above example will output something similar to:

```
array(5) {
  [0]=>
  array(8) {
    ["name"]=>
    string(1) "."
    ["modify"]=>
    string(14) "20171212154511"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(4) "cdir"
    ["unique"]=>
    string(11) "811U5740002"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [1]=>
  array(8) {
    ["name"]=>
    string(2) ".."
    ["modify"]=>
    string(14) "20171212154511"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(4) "pdir"
    ["unique"]=>
    string(11) "811U5740002"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [2]=>
  array(8) {
    ["name"]=>
    string(11) "public_html"
    ["modify"]=>
    string(14) "20171211171525"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(3) "dir"
    ["unique"]=>
    string(11) "811U5740525"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [3]=>
  array(8) {
    ["name"]=>
    string(10) "public_ftp"
    ["modify"]=>
    string(14) "20171211174536"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(3) "dir"
    ["unique"]=>
    string(11) "811U57405EE"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
  [4]=>
  array(8) {
    ["name"]=>
    string(3) "www"
    ["modify"]=>
    string(14) "www"
    ["perm"]=>
    string(7) "flcdmpe"
    ["type"]=>
    string(3) "dir"
    ["unique"]=>
    string(11) "811U5740780"
    ["UNIX.group"]=>
    string(2) "33"
    ["UNIX.mode"]=>
    string(4) "0755"
    ["UNIX.owner"]=>
    string(2) "33"
  }
}
```

### See Also

- ftp_rawlist() - Returns a detailed list of files in the given directory
- ftp_nlist() - Returns a list of files in the given directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-mlsd.php
