# session_gc

Source: https://devdocs.io/php/function.session-gc

(PHP 7 >= 7.1.0, PHP 8)

session_gc — Perform session data garbage collection

### Description

```
session_gc(): int|false
```

By default, PHP uses session.gc_probability to run the session garbage collector probabilistically on each request. There are some limitations with this approach:

- Low traffic sites may not have their session data deleted within the preferred duration.
- High traffic sites may have the garbage collector run too frequently, performing unnecessary extra work.
- Garbage collection is performed on the user's request, and the user may experience a delay.

For production systems, it is recommended to disable the probability-based garbage collection by setting session.gc_probability to 0 and explicitly trigger the garbage collector periodically, for example by using "cron" on UNIX-like systems to run a script that calls session_gc().

Note: When calling session_gc() from a command-line php script, the session.save_path must be set to the same value as web requests, and the script must have access and delete permissions for the session files. This may be affected by the user the script runs as, and container or sandboxing features such as systemd's PrivateTmp= option.

### Parameters

This function has no parameters.

### Return Values

session_gc() returns the number of deleted session entries on success, or false on failure.

Note: Old session save handlers do not return the number of deleted session entries, but rather only a success/failure flag. If this is the case, 1 is returned regardless of how many session entries are actually deleted.

### Examples

Example #1 session_gc() example for task managers like cron

```
<?php
// Note: This script should be executed by the same user of web server process.

// Need active session to initialize session data storage access.
session_start();

// Executes GC immediately
session_gc();

// Clean up session ID created by session_start()
session_destroy();
?>
```

Example #2 session_gc() example for user accessible script

```
<?php
// Note: session_gc() is recommended to be used by a task manager script, but
// it may be used as follows.

// Used for last GC time check
$gc_time = '/tmp/php_session_last_gc';
$gc_period = 1800;

session_start();
// Execute GC only when GC period elapsed. 
// i.e. Calling session_gc() every request is waste of resources. 
if (file_exists($gc_time)) {
    if (filemtime($gc_time) < time() - $gc_period) {
        session_gc();
        touch($gc_time);
    }
} else {
    touch($gc_time);
}
?>
```

### See Also

- session_start() - Start new or resume existing session
- session_destroy() - Destroys all data registered to a session
- session.gc_probability

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-gc.php
