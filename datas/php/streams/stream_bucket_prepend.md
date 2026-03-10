# stream_bucket_prepend

Source: https://devdocs.io/php/function.stream-bucket-prepend

(PHP 5, PHP 7, PHP 8)

stream_bucket_prepend — Prepend bucket to brigade

### Description

```
stream_bucket_prepend(resource $brigade, StreamBucket $bucket): void
```

This function can be called to prepend a bucket to a bucket brigade. It is typically called from php_user_filter::filter().

### Parameters

brigade is a resource pointing to a bucket brigade which contains one or more bucket objects.

A bucket object.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 stream_bucket_prepend() examples

```
<?php

class foo extends php_user_filter {
  protected $calls = 0;
  public function filter($in, $out, &$consumed, $closing) {
    while ($bucket = stream_bucket_make_writeable($in)) {
      $consumed += $bucket->datalen;
      if ($this->calls++ == 2) {
        // This bucket will appear again before any other bucket.
        stream_bucket_prepend($in, $bucket);
      }
    }
    return PSFS_FEED_ME;
  }
}
stream_filter_register('test', 'foo');
print  file_get_contents('php://filter/read=test/resource=foo');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-bucket-prepend.php
