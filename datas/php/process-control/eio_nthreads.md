# eio_nthreads

Source: https://devdocs.io/php/function.eio-nthreads

(PECL eio >= 0.0.1dev)

eio_nthreads — Returns number of threads currently in use

### Description

```
eio_nthreads(): int
```

### Parameters

This function has no parameters.

### Return Values

eio_nthreads() returns number of threads currently in use.

### See Also

- eio_npending() - Returns number of finished, but unhandled requests
- eio_nready() - Returns number of not-yet handled requests
- eio_nreqs() - Returns number of requests to be processed
- eio_set_max_idle() - Set maximum number of idle threads
- eio_set_max_parallel() - Set maximum parallel threads
- eio_set_min_parallel() - Set minimum parallel thread number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-nthreads.php
