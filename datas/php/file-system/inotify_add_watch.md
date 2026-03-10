# inotify_add_watch

Source: https://devdocs.io/php/function.inotify-add-watch

(PECL inotify >= 0.1.2)

inotify_add_watch — Add a watch to an initialized inotify instance

### Description

```
inotify_add_watch(resource $inotify_instance, string $pathname, int $mask): int|false
```

inotify_add_watch() adds a new watch or modify an existing watch for the file or directory specified in pathname.

Using inotify_add_watch() on a watched object replaces the existing watch. Using the IN_MASK_ADD constant adds (OR) events to the existing watch.

### Parameters

Resource returned by inotify_init()

File or directory to watch

Events to watch for. See Predefined Constants.

### Return Values

The return value is a unique (inotify instance wide) watch descriptor, or false on failure.

### See Also

- inotify_init() - Initialize an inotify instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.inotify-add-watch.php
