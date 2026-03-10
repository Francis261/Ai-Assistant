# hash_update_stream

Source: https://devdocs.io/php/function.hash-update-stream

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL hash >= 1.1)

hash_update_stream — Pump data into an active hashing context from an open stream

### Description

```
hash_update_stream(HashContext $context, resource $stream, int $length = -1): int
```

### Parameters

Hashing context returned by hash_init().

Open file handle as returned by any stream creation function.

Maximum number of characters to copy from stream into the hashing context.

### Return Values

Actual number of bytes added to the hashing context from stream.

### Changelog

### Examples

Example #1 hash_update_stream() example

```
<?php
$fp = tmpfile();
fwrite($fp, 'jumped over the lazy dog.');
rewind($fp);

$ctx = hash_init('sha256');
hash_update($ctx, 'The quick brown fox ');
hash_update_stream($ctx, $fp);
echo hash_final($ctx);
?>
```

The above example will output:

```
68b1282b91de2c054c36629cb8dd447f12f096d3e3c587978dc2248444633483
```

### See Also

- hash_init() - Initialize an incremental hashing context
- hash_update() - Pump data into an active hashing context
- hash_final() - Finalize an incremental hash and return resulting digest

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hash-update-stream.php
