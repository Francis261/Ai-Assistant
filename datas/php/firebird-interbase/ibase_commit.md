# ibase_commit

Source: https://devdocs.io/php/function.ibase-commit

(PHP 5, PHP 7 < 7.4.0)

ibase_commit — Commit a transaction

### Description

```
ibase_commit(resource $link_or_trans_identifier = null): bool
```

Commits a transaction.

### Parameters

If called without an argument, this function commits the default transaction of the default link. If the argument is a connection identifier, the default transaction of the corresponding connection will be committed. If the argument is a transaction identifier, the corresponding transaction will be committed.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-commit.php
