# $_SERVER

Source: https://devdocs.io/php/reserved.variables.server

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

$_SERVER — Server and execution environment information

### Description

$_SERVER is an array containing information such as headers, paths, and script locations. The entries in this array are created by the web server, therefore there is no guarantee that every web server will provide any of these; servers may omit some, or provide others not listed here. However, most of these variables are accounted for in the » CGI/1.1 specification, and are likely to be defined.

Note: When running PHP on the command line most of these entries will not be available or have any meaning.

In addition to the elements listed below, PHP will create additional elements with values from request headers. These entries will be named HTTP_ followed by the header name, capitalized and with underscores instead of hyphens. For example, the Accept-Language header would be available as $_SERVER['HTTP_ACCEPT_LANGUAGE'].

### Indices

Note: Under Apache 2, UseCanonicalName = On and ServerName must be set. Otherwise, this value reflects the hostname supplied by the client, which can be spoofed. It is not safe to rely on this value in security-dependent contexts.

Note:

PHP script is terminated after sending headers (it means after producing any output without output buffering) if the request method was HEAD.

Note: The web server must be configured to create this variable. For example in Apache HostnameLookups On must be set inside httpd.conf for it to exist. See also gethostbyaddr().

The absolute pathname of the currently executing script.

Note:

If a script is executed with the CLI, as a relative path, such as file.php or ../file.php, $_SERVER['SCRIPT_FILENAME'] will contain the relative path specified by the user.

Note: Under Apache 2, UseCanonicalName = On, as well as UseCanonicalPhysicalPort = On must be set in order to get the physical (real) port, otherwise, this value can be spoofed, and it may or may not return the physical port value. It is not safe to rely on this value in security-dependent contexts.

Note: Apache 2 users may use AcceptPathInfo = On inside httpd.conf to define PATH_INFO.

### Examples

Example #1 $_SERVER example

```
<?php
echo $_SERVER['SERVER_NAME'];
?>
```

The above example will output something similar to:

```
www.example.com
```

### Notes

Note:

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

### See Also

- The filter extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.server.php
