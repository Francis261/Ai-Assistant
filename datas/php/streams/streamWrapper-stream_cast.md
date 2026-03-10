# streamWrapper::stream_cast

Source: https://devdocs.io/php/streamwrapper.stream-cast

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

streamWrapper::stream_cast — Retrieve the underlying resource

### Description

```
public streamWrapper::stream_cast(int $cast_as): resource|false
```

This method is called in response to stream_select().

### Parameters

Can be STREAM_CAST_FOR_SELECT when stream_select() is calling stream_cast() or STREAM_CAST_AS_STREAM when stream_cast() is called for other uses.

### Return Values

Should return the underlying stream resource used by the wrapper, or false.

### See Also

- stream_select() - Runs the equivalent of the select() system call on the given arrays of streams with a timeout specified by seconds and microseconds

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-cast.php
