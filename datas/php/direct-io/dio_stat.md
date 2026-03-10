# dio_stat

Source: https://devdocs.io/php/function.dio-stat

(PHP 4 >= 4.2.0, PHP 5 < 5.1.0)

dio_stat — Gets stat information about the file descriptor fd

### Description

```
dio_stat(resource $fd): array
```

dio_stat() returns information about the given file descriptor.

### Parameters

The file descriptor returned by dio_open().

### Return Values

Returns an associative array with the following keys:

- "device" - device
- "inode" - inode
- "mode" - mode
- "nlink" - number of hard links
- "uid" - user id
- "gid" - group id
- "device_type" - device type (if inode device)
- "size" - total size in bytes
- "blocksize" - blocksize
- "blocks" - number of blocks allocated
- "atime" - time of last access
- "mtime" - time of last modification
- "ctime" - time of last change

"device" - device

"inode" - inode

"mode" - mode

"nlink" - number of hard links

"uid" - user id

"gid" - group id

"device_type" - device type (if inode device)

"size" - total size in bytes

"blocksize" - blocksize

"blocks" - number of blocks allocated

"atime" - time of last access

"mtime" - time of last modification

"ctime" - time of last change

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dio-stat.php
