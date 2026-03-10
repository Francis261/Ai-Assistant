# curl_exec

Source: https://devdocs.io/php/function.curl-exec

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

curl_exec — Perform a cURL session

### Description

```
curl_exec(CurlHandle $handle): string|bool
```

Execute the given cURL session.

This function should be called after initializing a cURL session and all the options for the session are set.

### Parameters

A cURL handle returned by curl_init().

### Return Values

On success, this function flushes the result directly to the stdout and returns true, or false on failure. However, if the CURLOPT_RETURNTRANSFER option is set, it will return the result on success, false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

Note:

Note that response status codes which indicate errors (such as 404
 Not found) are not regarded as failure. curl_getinfo() can be used to check for these.

### Changelog

### Examples

Example #1 Fetching a web page

```
<?php
// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);

// grab URL and pass it to the browser
curl_exec($ch);
?>
```

### See Also

- curl_multi_exec() - Run the sub-connections of the current cURL handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-exec.php
