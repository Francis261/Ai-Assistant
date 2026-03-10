# ibase_blob_info

Source: https://devdocs.io/php/function.ibase-blob-info

(PHP 5, PHP 7 < 7.4.0)

ibase_blob_info — Return blob length and other useful info

### Description

```
ibase_blob_info(resource $link_identifier, string $blob_id): array
```

```
ibase_blob_info(string $blob_id): array
```

Returns the BLOB length and other useful information.

### Parameters

An InterBase link identifier. If omitted, the last opened link is assumed.

A BLOB id.

### Return Values

Returns an array containing information about a BLOB. The information returned consists of the length of the BLOB, the number of segments it contains, the size of the largest segment, and whether it is a stream BLOB or a segmented BLOB.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-blob-info.php
