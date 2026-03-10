# Locale::acceptFromHttp

Source: https://devdocs.io/php/locale.acceptfromhttp

# locale_accept_from_http

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::acceptFromHttp -- locale_accept_from_http — Tries to find out best available locale based on HTTP "Accept-Language" header

### Description

Object-oriented style

```
public static Locale::acceptFromHttp(string $header): string|false
```

Procedural style

```
locale_accept_from_http(string $header): string|false
```

Tries to find locale that can satisfy the language list that is requested by the HTTP "Accept-Language" header.

### Parameters

The string containing the "Accept-Language" header according to format in RFC 2616.

### Return Values

The corresponding locale identifier.

Returns false when the length of header exceeds INTL_MAX_LOCALE_LEN.

### Examples

Example #1 locale_accept_from_http() example

```
<?php
$locale = locale_accept_from_http($_SERVER['HTTP_ACCEPT_LANGUAGE']);
echo $locale;
?>
```

Example #2 OO example

```
<?php
$locale = Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);
echo $locale;
?>
```

The above example will output:

```
en_US
```

### See Also

- locale_lookup() - Searches the language tag list for the best match to the language

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.acceptfromhttp.php
