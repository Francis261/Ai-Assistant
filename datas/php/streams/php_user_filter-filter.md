# php_user_filter::filter

Source: https://devdocs.io/php/php-user-filter.filter

(PHP 5, PHP 7, PHP 8)

php_user_filter::filter — Called when applying the filter

### Description

```
public php_user_filter::filter(
 resource $in,
 resource $out,
 int &$consumed,
 bool $closing
): int
```

This method is called whenever data is read from or written to the attached stream (such as with fread() or fwrite()).

### Parameters

in is a resource pointing to a bucket brigade which contains one or more bucket objects containing data to be filtered.

out is a resource pointing to a second bucket brigade into which your modified buckets should be placed.

consumed, which must always be declared by reference, should be incremented by the length of the data which your filter reads in and alters. In most cases this means you will increment consumed by $bucket->datalen for each $bucket.

If the stream is in the process of closing (and therefore this is the last pass through the filterchain), the closing parameter will be set to true.

### Return Values

The filter() method must return one of three values upon completion.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/php-user-filter.filter.php
