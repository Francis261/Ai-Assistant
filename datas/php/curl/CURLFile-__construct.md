# CURLFile::__construct

Source: https://devdocs.io/php/curlfile.construct

# curl_file_create

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

CURLFile::__construct -- curl_file_create — Create a CURLFile object

### Description

Object-oriented style

Procedural style

```
curl_file_create(string $filename, ?string $mime_type = null, ?string $posted_filename = null): CURLFile
```

Creates a CURLFile object, used to upload a file with CURLOPT_POSTFIELDS.

### Parameters

Path to the file which will be uploaded.

Mimetype of the file.

Name of the file to be used in the upload data.

### Return Values

Returns a CURLFile object.

### Changelog

### Examples

Example #1 CURLFile::__construct() example

Object-oriented style

```
<?php
/* http://example.com/upload.php:
<?php var_dump($_FILES); ?>
*/

// Create a cURL handle
$ch = curl_init('http://example.com/upload.php');

// Create a CURLFile object
$cfile = new CURLFile('cats.jpg','image/jpeg','test_name');

// Assign POST data
$data = array('test_file' => $cfile);
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// Execute the handle
curl_exec($ch);
?>
```

Procedural style

```
<?php
/* http://example.com/upload.php:
<?php var_dump($_FILES); ?>
*/

// Create a cURL handle
$ch = curl_init('http://example.com/upload.php');

// Create a CURLFile object
$cfile = curl_file_create('cats.jpg','image/jpeg','test_name');

// Assign POST data
$data = array('test_file' => $cfile);
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// Execute the handle
curl_exec($ch);
?>
```

The above example will output:

```
array(1) {
  ["test_file"]=>
  array(5) {
    ["name"]=>
    string(9) "test_name"
    ["type"]=>
    string(10) "image/jpeg"
    ["tmp_name"]=>
    string(14) "/tmp/phpPC9Kbx"
    ["error"]=>
    int(0)
    ["size"]=>
    int(46334)
  }
}
```

Example #2 CURLFile::__construct() uploading multiple files example

Object-oriented style

```
<?php
$request = curl_init('http://www.example.com/upload.php');
curl_setopt($request, CURLOPT_POST, true);
curl_setopt($request, CURLOPT_SAFE_UPLOAD, true);
curl_setopt($request, CURLOPT_POSTFIELDS, [
    'blob[0]' => new CURLFile(realpath('first-file.jpg'), 'image/jpeg'),
    'blob[1]' => new CURLFile(realpath('second-file.txt'), 'text/plain'),
    'blob[2]' => new CURLFile(realpath('third-file.exe'), 'application/octet-stream'),
]);
curl_setopt($request, CURLOPT_RETURNTRANSFER, true);

echo curl_exec($request);

var_dump(curl_getinfo($request));
```

Procedural style

```
<?php
// procedural
$request = curl_init('http://www.example.com/upload.php');
curl_setopt($request, CURLOPT_POST, true); 
curl_setopt($request, CURLOPT_SAFE_UPLOAD, true);
curl_setopt($request, CURLOPT_POSTFIELDS, [
    'blob[0]' => curl_file_create(realpath('first-file.jpg'), 'image/jpeg'),
    'blob[1]' => curl_file_create(realpath('second-file.txt'), 'text/plain'),
    'blob[2]' => curl_file_create(realpath('third-file.exe'), 'application/octet-stream'),
]);
curl_setopt($request, CURLOPT_RETURNTRANSFER, true);

echo curl_exec($request);

var_dump(curl_getinfo($request));
```

The above example will output:

```
array(26) {
  ["url"]=>
  string(31) "http://www.example.com/upload.php"
  ["content_type"]=>
  string(24) "text/html; charset=UTF-8"
  ["http_code"]=>
  int(200)
  ["header_size"]=>
  int(198)
  ["request_size"]=>
  int(196)
  ["filetime"]=>
  int(-1)
  ["ssl_verify_result"]=>
  int(0)
  ["redirect_count"]=>
  int(0)
  ["total_time"]=>
  float(0.060062)
  ["namelookup_time"]=>
  float(0.028575)
  ["connect_time"]=>
  float(0.029011)
  ["pretransfer_time"]=>
  float(0.029121)
  ["size_upload"]=>
  float(3230730)
  ["size_download"]=>
  float(811)
  ["speed_download"]=>
  float(13516)
  ["speed_upload"]=>
  float(53845500)
  ["download_content_length"]=>
  float(811)
  ["upload_content_length"]=>
  float(3230730)
  ["starttransfer_time"]=>
  float(0.030355)
  ["redirect_time"]=>
  float(0)
  ["redirect_url"]=>
  string(0) ""
  ["primary_ip"]=>
  string(13) "0.0.0.0"
  ["certinfo"]=>
  array(0) {
  }
  ["primary_port"]=>
  int(80)
  ["local_ip"]=>
  string(12) "0.0.0.0"
  ["local_port"]=>
  int(34856)
}
```

### See Also

- curl_setopt() - Set an option for a cURL transfer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/curlfile.construct.php
