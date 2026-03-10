# php_user_filter::onCreate

Source: https://devdocs.io/php/php-user-filter.oncreate

(PHP 5, PHP 7, PHP 8)

php_user_filter::onCreate — Called when creating the filter

### Description

```
public php_user_filter::onCreate(): bool
```

This method is called during instantiation of the filter class object. If your filter allocates or initializes any other resources (such as a buffer), this is the place to do it.

When your filter is first instantiated, and yourfilter->onCreate() is called, a number of properties will be available as shown in the table below.

### Parameters

This function has no parameters.

### Return Values

Your implementation of this method should return false on failure, or true on success.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/php-user-filter.oncreate.php
