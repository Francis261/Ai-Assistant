# $_POST

Source: https://devdocs.io/php/reserved.variables.post

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

$_POST — Form data from HTTP POST requests

### Description

An associative array of variables passed to the current script via the HTTP POST method when using application/x-www-form-urlencoded or multipart/form-data as the HTTP Content-Type in the request.

### Examples

Example #1 $_POST example

```
<?php
echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!';
?>
```

Assuming the user sent a POST request with name=Hannes in the body.

The above example will output something similar to:

```
Hello Hannes!
```

### Notes

Note:

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

Note: To read POST data sent with other content types (e.g. application/json or application/xml) php://input must be used. Unlike $_POST, which only works with application/x-www-form-urlencoded and multipart/form-data, php://input provides direct access to the raw data from the body of the request.

### See Also

- Handling external variables
- The filter extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.post.php
