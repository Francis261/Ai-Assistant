# The CURLFile class

Source: https://devdocs.io/php/class.curlfile

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

This class or CURLStringFile should be used to upload a file with CURLOPT_POSTFIELDS.

Unserialization of CURLFile instances is not allowed. As of PHP 7.4.0, serialization is forbidden in the first place.

## Class synopsis

```
public getFilename(): string
```

```
public getMimeType(): string
```

```
public getPostFilename(): string
```

```
public setMimeType(string $mime_type): void
```

```
public setPostFilename(string $posted_filename): void
```

## Properties

Name of the file to be uploaded.

MIME type of the file (default is application/octet-stream).

The name of the file in the upload data (defaults to the name property).

## See Also

- curl_setopt()
- CURLStringFile

## Table of Contents

- CURLFile::__construct — Create a CURLFile object
- CURLFile::getFilename — Get file name
- CURLFile::getMimeType — Get MIME type
- CURLFile::getPostFilename — Get file name for POST
- CURLFile::setMimeType — Set MIME type
- CURLFile::setPostFilename — Set file name for POST

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.curlfile.php
