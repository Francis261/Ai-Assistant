# CURLStringFile::__construct

Source: https://devdocs.io/php/curlstringfile.construct

(PHP 8 >= 8.1.0)

CURLStringFile::__construct — Create a CURLStringFile object

### Description

Creates a CURLStringFile object, used to upload a file with CURLOPT_POSTFIELDS.

### Parameters

The contents to be uploaded.

The name of the file to be used in the upload data.

MIME type of the file (default is application/octet-stream).

### Examples

Example #1 CURLStringFile::__construct() example

```
<?php
/* http://example.com/upload.php:
<?php
var_dump($_FILES);
var_dump(file_get_contents($_FILES['test_string']['tmp_name']));
?>
*/

// Create a cURL handle
$ch = curl_init('http://example.com/upload.php');

// Create a CURLStringFile object
$cstringfile = new CURLStringFile('test upload contents','test.txt','text/plain');

// Assign POST data
$data = array('test_string' => $cstringfile);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// Execute the handle
curl_exec($ch);
?>
```

The above example will output:

```
array(1) {
  ["test_string"]=>
  array(5) {
    ["name"]=>
    string(8) "test.txt"
    ["type"]=>
    string(10) "text/plain"
    ["tmp_name"]=>
    string(14) "/tmp/phpTtaoCz"
    ["error"]=>
    int(0)
    ["size"]=>
    int(20)
  }
}
string(20) "test upload contents"
```

### See Also

- curl_setopt() - Set an option for a cURL transfer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/curlstringfile.construct.php
