# PharData::setDefaultStub

Source: https://devdocs.io/php/phardata.setdefaultstub

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::setDefaultStub — Dummy function (Phar::setDefaultStub is not valid for PharData)

### Description

```
public PharData::setDefaultStub(?string $index = null, ?string $webIndex = null): bool
```

Non-executable tar/zip archives cannot have a stub, so this method simply throws an exception.

### Parameters

Relative path within the phar archive to run if accessed on the command-line

Relative path within the phar archive to run if accessed through a web browser

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws PharException on all method calls

### Changelog

### See Also

- Phar::setDefaultStub() - Used to set the PHP loader or bootstrap stub of a Phar archive to the default loader

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.setdefaultstub.php
