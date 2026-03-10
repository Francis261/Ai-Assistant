# eio_init

Source: https://devdocs.io/php/function.eio-init

(PECL eio = 1.0.0)

eio_init — (Re-)initialize Eio

### Description

```
eio_init(): void
```

eio_init() (re-)initializes Eio. It allocates memory for internal structures of libeio and Eio itself. You may call eio_init() before using Eio functions. Otherwise it will be called internally first time you invoke an Eio function in a process.

Note:

This function was removed in version 3.0.0RC1 of the eio extension for PHP version 8 and higher.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-init.php
