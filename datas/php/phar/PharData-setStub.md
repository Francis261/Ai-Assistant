# PharData::setStub

Source: https://devdocs.io/php/phardata.setstub

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::setStub — Dummy function (Phar::setStub is not valid for PharData)

### Description

```
public PharData::setStub(string $stub, int $len = -1): bool
```

Non-executable tar/zip archives cannot have a stub, so this method simply throws an exception.

### Parameters

A string or an open stream handle to use as the executable stub for this phar archive. This parameter is ignored.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws PharException on all method calls

### See Also

- Phar::setStub() - Used to set the PHP loader or bootstrap stub of a Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.setstub.php
