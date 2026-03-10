# session_name

Source: https://devdocs.io/php/function.session-name

(PHP 4, PHP 5, PHP 7, PHP 8)

session_name — Get and/or set the current session name

### Description

```
session_name(?string $name = null): string|false
```

session_name() returns the name of the current session. If name is given, session_name() will update the session name and return the old session name.

If a new session name is supplied, session_name() modifies the HTTP cookie (and outputs the content when session.use_trans_sid is enabled). Once the HTTP cookie has been sent, calling session_name() raises an E_WARNING. session_name() must be called before session_start() for the session to work properly.

The session name is reset to the default value stored in session.name at request startup time. Thus, you need to call session_name() for every request (and before session_start() is called).

### Parameters

The session name references the name of the session, which is used in cookies and URLs (e.g. PHPSESSID). It should contain only alphanumeric characters; it should be short and descriptive (i.e. for users with enabled cookie warnings). If name is specified and not null, the name of the current session is changed to its value.

The session name can't consist of digits only, at least one letter must be present. Otherwise a new session id is generated every time.

### Return Values

Returns the name of the current session. If name is given and function updates the session name, name of the old session is returned, or false on failure.

### Changelog

### Examples

Example #1 session_name() example

```
<?php

/* set the session name to WebsiteID */

$previous_name = session_name("WebsiteID");

echo "The previous session name was $previous_name<br />";
?>
```

### See Also

- The session.name configuration directive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-name.php
