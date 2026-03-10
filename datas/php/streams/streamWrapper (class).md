# The streamWrapper class

Source: https://devdocs.io/php/class.streamwrapper

## Introduction

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

Allows you to implement your own protocol handlers and streams for use with all the other filesystem functions (such as fopen(), fread() etc.).

Note:

This is NOT a real class, only a prototype of how a class defining its own protocol should be.

Note:

Implementing the methods in other ways than described here can lead to undefined behaviour.

An instance of this class is initialized as soon as a stream function tries to access the protocol it is associated with.

## Class synopsis

```
public dir_closedir(): bool
```

```
public dir_opendir(string $path, int $options): bool
```

```
public dir_readdir(): string|bool
```

```
public dir_rewinddir(): bool
```

```
public mkdir(string $path, int $mode, int $options): bool
```

```
public rename(string $path_from, string $path_to): bool
```

```
public rmdir(string $path, int $options): bool
```

```
public stream_cast(int $cast_as): resource|false
```

```
public stream_close(): void
```

```
public stream_eof(): bool
```

```
public stream_flush(): bool
```

```
public stream_lock(int $operation): bool
```

```
public stream_metadata(string $path, int $option, mixed $value): bool
```

```
public stream_open(
 string $path,
 string $mode,
 int $options,
 ?string &$opened_path
): bool
```

```
public stream_read(int $count): string|false
```

```
public stream_seek(int $offset, int $whence): bool
```

```
public stream_set_option(int $option, int $arg1, int $arg2): bool
```

```
public stream_stat(): array|false
```

```
public stream_tell(): int
```

```
public stream_truncate(int $new_size): bool
```

```
public stream_write(string $data): int
```

```
public unlink(string $path): bool
```

```
public url_stat(string $path, int $flags): array|false
```

## Properties

The current context, or null if no context was passed to the caller function.

Use the stream_context_get_options() to parse the context.

Note:

This property must be public so PHP can populate it with the actual context resource.

## See Also

- Example class registered as stream wrapper
- stream_wrapper_register()
- stream_wrapper_unregister()
- stream_wrapper_restore()

## Table of Contents

- streamWrapper::__construct — Constructs a new stream wrapper
- streamWrapper::__destruct — Destructs an existing stream wrapper
- streamWrapper::dir_closedir — Close directory handle
- streamWrapper::dir_opendir — Open directory handle
- streamWrapper::dir_readdir — Read entry from directory handle
- streamWrapper::dir_rewinddir — Rewind directory handle
- streamWrapper::mkdir — Create a directory
- streamWrapper::rename — Renames a file or directory
- streamWrapper::rmdir — Removes a directory
- streamWrapper::stream_cast — Retrieve the underlying resource
- streamWrapper::stream_close — Close a resource
- streamWrapper::stream_eof — Tests for end-of-file on a file pointer
- streamWrapper::stream_flush — Flushes the output
- streamWrapper::stream_lock — Advisory file locking
- streamWrapper::stream_metadata — Change stream metadata
- streamWrapper::stream_open — Opens file or URL
- streamWrapper::stream_read — Read from stream
- streamWrapper::stream_seek — Seeks to specific location in a stream
- streamWrapper::stream_set_option — Change stream options
- streamWrapper::stream_stat — Retrieve information about a file resource
- streamWrapper::stream_tell — Retrieve the current position of a stream
- streamWrapper::stream_truncate — Truncate stream
- streamWrapper::stream_write — Write to stream
- streamWrapper::unlink — Delete a file
- streamWrapper::url_stat — Retrieve information about a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.streamwrapper.php
