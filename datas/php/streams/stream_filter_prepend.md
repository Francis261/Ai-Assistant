# stream_filter_prepend

Source: https://devdocs.io/php/function.stream-filter-prepend

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

stream_filter_prepend — Attach a filter to a stream

### Description

```
stream_filter_prepend(
 resource $stream,
 string $filtername,
 int $read_write = ?,
 mixed $params = ?
): resource
```

Adds filtername to the list of filters attached to stream.

### Parameters

The target stream.

The filter name.

By default, stream_filter_prepend() will attach the filter to the read filter chain if the file was opened for reading (i.e. File Mode: r, and/or +). The filter will also be attached to the write filter chain if the file was opened for writing (i.e. File Mode: w, a, and/or +). STREAM_FILTER_READ, STREAM_FILTER_WRITE, and/or STREAM_FILTER_ALL can also be passed to the read_write parameter to override this behavior. See stream_filter_append() for an example of using this parameter.

This filter will be added with the specified params to the beginning of the list and will therefore be called first during stream operations. To add a filter to the end of the list, use stream_filter_append().

### Return Values

Returns a resource on success or false on failure. The resource can be used to refer to this filter instance during a call to stream_filter_remove().

false is returned if stream is not a resource or if filtername cannot be located.

### Notes

Note: When using custom (user) filters stream_filter_register() must be called first in order to register the desired user filter to filtername.

Note: Stream data is read from resources (both local and remote) in chunks, with any unconsumed data kept in internal buffers. When a new filter is prepended to a stream, data in the internal buffers, which has already been processed through other filters will not be reprocessed through the new filter at that time. This differs from the behavior of stream_filter_append().

Note: When a filter is added for read and write, two instances of the filter are created. stream_filter_prepend() must be called twice with STREAM_FILTER_READ and STREAM_FILTER_WRITE to get both filter resources.

### See Also

- stream_filter_register() - Register a user defined stream filter
- stream_filter_append() - Attach a filter to a stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-filter-prepend.php
