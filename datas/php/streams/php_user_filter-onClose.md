# php_user_filter::onClose

Source: https://devdocs.io/php/php-user-filter.onclose

(PHP 5, PHP 7, PHP 8)

php_user_filter::onClose — Called when closing the filter

### Description

```
public php_user_filter::onClose(): void
```

This method is called upon filter shutdown (typically, this is also during stream shutdown), and is executed after the flush method is called. If any resources were allocated or initialized during onCreate() this would be the time to destroy or dispose of them.

### Parameters

This function has no parameters.

### Return Values

Return value is ignored.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/php-user-filter.onclose.php
