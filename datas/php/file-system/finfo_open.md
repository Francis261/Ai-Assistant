# finfo_open

Source: https://devdocs.io/php/function.finfo-open

# finfo::__construct

(PHP >= 5.3.0, PHP 7, PHP 8, PECL fileinfo >= 0.1.0)

finfo_open -- finfo::__construct — Create a new finfo instance

### Description

Procedural style

```
finfo_open(int $flags = FILEINFO_NONE, ?string $magic_database = null): finfo|false
```

Object-oriented style (constructor):

This function opens a magic database and returns its instance.

### Parameters

One or disjunction of more Fileinfo constants.

Name of a magic database file, usually something like /path/to/magic.mime. If not specified, the MAGIC environment variable is used. If the environment variable isn't set, then PHP's bundled magic database will be used.

Passing null or an empty string will be equivalent to the default value.

### Return Values

(Procedural style only) Returns an finfo instance on success, or false on failure.

### Changelog

### Examples

Example #1 Object-oriented style

```
<?php
$finfo = new finfo(FILEINFO_MIME, "/usr/share/misc/magic"); // return mime type ala mimetype extension

/* get mime-type for a specific file */
$filename = "/usr/local/something.txt";
echo $finfo->file($filename);

?>
```

Example #2 Procedural style

```
<?php
$finfo = finfo_open(FILEINFO_MIME, "/usr/share/misc/magic"); // return mime type ala mimetype extension

if (!$finfo) {
    echo "Opening fileinfo database failed";
    exit();
}

/* get mime-type for a specific file */
$filename = "/usr/local/something.txt";
echo finfo_file($finfo, $filename);

/* close connection */
finfo_close($finfo);
?>
```

The above example will output:

```
text/plain; charset=us-ascii
```

### Notes

Note:

Generally, using the bundled magic database (by leaving magic_database and the MAGIC environment variables unset) is the best course of action unless you specifically need a custom magic database.

### See Also

- finfo_close() - Close finfo instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.finfo-open.php
