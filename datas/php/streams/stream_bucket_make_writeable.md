# stream_bucket_make_writeable

Source: https://devdocs.io/php/function.stream-bucket-make-writeable

(PHP 5, PHP 7, PHP 8)

stream_bucket_make_writeable — Returns a bucket object from the brigade to operate on

### Description

```
stream_bucket_make_writeable(resource $brigade): ?StreamBucket
```

This function is called whenever there is the need to access and operate on the content contains in a brigade. It is typically called from php_user_filter::filter().

### Parameters

The brigade to return a bucket object from.

### Return Values

Returns a bucket object or null.

### Changelog

### See Also

- stream_bucket_append() - Append bucket to brigade
- stream_bucket_prepend() - Prepend bucket to brigade

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-bucket-make-writeable.php
