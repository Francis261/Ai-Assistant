# streamWrapper::stream_metadata

Source: https://devdocs.io/php/streamwrapper.stream-metadata

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

streamWrapper::stream_metadata — Change stream metadata

### Description

```
public streamWrapper::stream_metadata(string $path, int $option, mixed $value): bool
```

This method is called to set metadata on the stream. It is called when one of the following functions is called on a stream URL:

- touch()
- chmod()
- chown()
- chgrp()

### Parameters

The file path or URL to set metadata. Note that in the case of a URL, it must be a :// delimited URL. Other URL forms are not supported.

One of:

- STREAM_META_TOUCH (The method was called in response to touch())
- STREAM_META_OWNER_NAME (The method was called in response to chown() with string parameter)
- STREAM_META_OWNER (The method was called in response to chown())
- STREAM_META_GROUP_NAME (The method was called in response to chgrp())
- STREAM_META_GROUP (The method was called in response to chgrp())
- STREAM_META_ACCESS (The method was called in response to chmod())

If option is

- STREAM_META_TOUCH: Array consisting of two arguments of the touch() function.
- STREAM_META_OWNER_NAME or STREAM_META_GROUP_NAME: The name of the owner user/group as string.
- STREAM_META_OWNER or STREAM_META_GROUP: The value owner user/group argument as int.
- STREAM_META_ACCESS: The argument of the chmod() as int.

### Return Values

Returns true on success or false on failure. If option is not implemented, false should be returned.

### See Also

- touch() - Sets access and modification time of file
- chmod() - Changes file mode
- chown() - Changes file owner
- chgrp() - Changes file group

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-metadata.php
