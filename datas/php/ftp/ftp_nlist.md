# ftp_nlist

Source: https://devdocs.io/php/function.ftp-nlist

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_nlist — Returns a list of files in the given directory

### Description

```
ftp_nlist(FTP\Connection $ftp, string $directory): array|false
```

### Parameters

An FTP\Connection instance.

The directory to be listed. This parameter can also include arguments, eg. ftp_nlist($ftp, "-la /your/dir");. Note that this parameter isn't escaped so there may be some issues with filenames containing spaces and other characters.

### Return Values

Returns an array of filenames from the specified directory on success or false on error.

### Changelog

### Examples

Example #1 ftp_nlist() example

```
<?php

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// get contents of the current directory
$contents = ftp_nlist($ftp, ".");

// output $contents
var_dump($contents);

?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  string(11) "public_html"
  [1]=>
  string(10) "public_ftp"
  [2]=>
  string(3) "www"
```

### See Also

- ftp_rawlist() - Returns a detailed list of files in the given directory
- ftp_mlsd() - Returns a list of files in the given directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-nlist.php
