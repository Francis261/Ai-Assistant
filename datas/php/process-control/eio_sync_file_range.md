# eio_sync_file_range

Source: https://devdocs.io/php/function.eio-sync-file-range

(PECL eio >= 0.0.1dev)

eio_sync_file_range — Sync a file segment with disk

### Description

```
eio_sync_file_range(
 mixed $fd,
 int $offset,
 int $nbytes,
 int $flags,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_sync_file_range() permits fine control when synchronizing the open file referred to by the file descriptor fd with disk.

### Parameters

File descriptor

The starting byte of the file range to be synchronized

Specifies the length of the range to be synchronized, in bytes. If nbytes is zero, then all bytes from offset through to the end of file are synchronized.

A bit-mask. Can include any of the following values: EIO_SYNC_FILE_RANGE_WAIT_BEFORE, EIO_SYNC_FILE_RANGE_WRITE, EIO_SYNC_FILE_RANGE_WAIT_AFTER. These flags have the same meaning as their SYNC_FILE_RANGE_* counterparts(see SYNC_FILE_RANGE(2) man page).

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

eio_sync_file_range() returns request resource on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-sync-file-range.php
