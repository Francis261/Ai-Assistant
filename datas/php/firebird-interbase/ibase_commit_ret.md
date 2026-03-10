# ibase_commit_ret

Source: https://devdocs.io/php/function.ibase-commit-ret

(PHP 5, PHP 7 < 7.4.0)

ibase_commit_ret — Commit a transaction without closing it

### Description

```
ibase_commit_ret(resource $link_or_trans_identifier = null): bool
```

Commits a transaction without closing it.

### Parameters

If called without an argument, this function commits the default transaction of the default link. If the argument is a connection identifier, the default transaction of the corresponding connection will be committed. If the argument is a transaction identifier, the corresponding transaction will be committed. The transaction context will be retained, so statements executed from within this transaction will not be invalidated.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-commit-ret.php
