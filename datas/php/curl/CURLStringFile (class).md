# The CURLStringFile class

Source: https://devdocs.io/php/class.curlstringfile

## Introduction

(PHP 8 >= 8.1.0)

CURLStringFile makes it possible to upload a file directly from a variable. This is similar to CURLFile, but works with the contents of the file, not filename. This class or CURLFile should be used to upload the contents of the file with CURLOPT_POSTFIELDS.

## Class synopsis

## Properties

The contents to be uploaded.

The name of the file to be used in the upload data.

MIME type of the file (default is application/octet-stream).

## See Also

- curl_setopt()
- CURLFile

## Table of Contents

- CURLStringFile::__construct — Create a CURLStringFile object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.curlstringfile.php
