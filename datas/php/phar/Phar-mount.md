# Phar::mount

Source: https://devdocs.io/php/phar.mount

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::mount — Mount an external path or file to a virtual location within the phar archive

### Description

```
final public static Phar::mount(string $pharPath, string $externalPath): void
```

Much like the unix file system concept of mounting external devices to paths within the directory tree, Phar::mount() allows referring to external files and directories as if they were inside of an archive. This allows powerful abstraction such as referring to external configuration files as if they were inside the archive.

### Parameters

The internal path within the phar archive to use as the mounted path location. This must be a relative path within the phar archive, and must not already exist.

A path or URL to an external file or directory to mount within the phar archive

### Return Values

No return. PharException is thrown on failure.

### Errors/Exceptions

Throws PharException if any problems occur mounting the path.

### Examples

Example #1 A Phar::mount() example

The following example shows accessing an external configuration file as if it were a path within a phar archive.

First, the code inside of a phar archive:

```
<?php
$configuration = simplexml_load_string(file_get_contents(
    Phar::running(false) . '/config.xml'));
?>
```

Next the external code used to mount the configuration file:

```
<?php
// first set up the association between the abstract config.xml
// and the actual one on disk
Phar::mount('phar://config.xml', '/home/example/config.xml');
// now run the application
include '/path/to/archive.phar';
?>
```

Another method is to put the mounting code inside the stub of the phar archive. Here is an example of setting up a default configuration file if no user configuration is specified:

```
<?php
// first set up the association between the abstract config.xml
// and the actual one on disk
if (defined('EXTERNAL_CONFIG')) {
    Phar::mount('config.xml', EXTERNAL_CONFIG);
    if (file_exists(__DIR__ . '/extra_config.xml')) {
        Phar::mount('extra.xml', __DIR__ . '/extra_config.xml');
    }
} else {
    Phar::mount('config.xml', 'phar://' . __FILE__ . '/default_config.xml');
    Phar::mount('extra.xml', 'phar://' . __FILE__ . '/default_extra.xml');
}
// now run the application
include 'phar://' . __FILE__ . '/index.php';
__HALT_COMPILER();
?>
```

...and the code externally to load this phar archive:

```
<?php
define('EXTERNAL_CONFIG', '/home/example/config.xml');
// now run the application
include '/path/to/archive.phar';
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.mount.php
