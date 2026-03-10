# ibase_modify_user

Source: https://devdocs.io/php/function.ibase-modify-user

(PHP 5, PHP 7 < 7.4.0)

ibase_modify_user — Modify a user to a security database

### Description

```
ibase_modify_user(
 resource $service_handle,
 string $user_name,
 string $password,
 string $first_name = ?,
 string $middle_name = ?,
 string $last_name = ?
): bool
```

### Parameters

The handle on the database server service.

The login name of the database user to modify.

The user's new password.

The user's new first name.

The user's new middle name.

The user's new last name.

### Return Values

Returns true on success or false on failure.

### See Also

- ibase_add_user() - Add a user to a security database
- ibase_delete_user() - Delete a user from a security database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-modify-user.php
