# ibase_add_user

Source: https://devdocs.io/php/function.ibase-add-user

(PHP 5, PHP 7 < 7.4.0)

ibase_add_user — Add a user to a security database

### Description

```
ibase_add_user(
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

The login name of the new database user.

The password of the new user.

The first name of the new database user.

The middle name of the new database user.

The last name of the new database user.

### Return Values

Returns true on success or false on failure.

### See Also

- ibase_modify_user() - Modify a user to a security database
- ibase_delete_user() - Delete a user from a security database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-add-user.php
