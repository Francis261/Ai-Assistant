# streamWrapper::url_stat

Source: https://devdocs.io/php/streamwrapper.url-stat

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::url_stat — Retrieve information about a file

### Description

```
public streamWrapper::url_stat(string $path, int $flags): array|false
```

This method is called in response to all stat() related functions, such as:

- copy()
- fileperms()
- fileinode()
- filesize()
- fileowner()
- filegroup()
- fileatime()
- filemtime()
- filectime()
- filetype()
- is_writable()
- is_readable()
- is_executable()
- is_file()
- is_dir()
- is_link()
- file_exists()
- lstat()
- stat()
- SplFileInfo::getPerms()
- SplFileInfo::getInode()
- SplFileInfo::getSize()
- SplFileInfo::getOwner()
- SplFileInfo::getGroup()
- SplFileInfo::getATime()
- SplFileInfo::getMTime()
- SplFileInfo::getCTime()
- SplFileInfo::getType()
- SplFileInfo::isWritable()
- SplFileInfo::isReadable()
- SplFileInfo::isExecutable()
- SplFileInfo::isFile()
- SplFileInfo::isDir()
- SplFileInfo::isLink()
- RecursiveDirectoryIterator::hasChildren()

### Parameters

The file path or URL to stat. Note that in the case of a URL, it must be a :// delimited URL. Other URL forms are not supported.

Holds additional flags set by the streams API. It can hold one or more of the following values OR'd together.

### Return Values

Should return an array with the same elements as stat() does. Unknown or unavailable values should be set to a rational value (usually 0). Special attention should be payed to mode as documented under stat(). Should return false on failure.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### Notes

Note:

The streamWrapper::$context property is updated if a valid context is passed to the caller function.

### See Also

- stat() - Gives information about a file
- streamwrapper::stream_stat() - Retrieve information about a file resource

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.url-stat.php
