# inotify_rm_watch

Source: https://devdocs.io/php/function.inotify-rm-watch

(PECL inotify >= 0.1.2)

inotify_rm_watch — Remove an existing watch from an inotify instance

### Description

```
inotify_rm_watch(resource $inotify_instance, int $watch_descriptor): bool
```

inotify_rm_watch() removes the watch watch_descriptor from the inotify instance inotify_instance.

### Parameters

Resource returned by inotify_init()

Watch to remove from the instance

### Return Values

Returns true on success or false on failure.

### See Also

- inotify_init() - Initialize an inotify instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.inotify-rm-watch.php
