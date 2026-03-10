# curl_upkeep

Source: https://devdocs.io/php/function.curl_upkeep

(PHP 8 >= 8.2.0)

curl_upkeep — Performs any connection upkeep checks

### Description

```
curl_upkeep(CurlHandle $handle): bool
```

Available if built against libcurl >= 7.62.0.

Some protocols have "connection upkeep" mechanisms. These mechanisms usually send some traffic on existing connections in order to keep them alive; this can prevent connections from being closed due to overzealous firewalls, for example.

Connection upkeep is currently available only for HTTP/2 connections. A small amount of traffic is usually sent to keep a connection alive. HTTP/2 maintains its connection by sending a HTTP/2 PING frame.

### Parameters

A cURL handle returned by curl_init().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 curl_upkeep() example

```
<?php
$url = "https://example.com";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTP_VERSION,CURL_HTTP_VERSION_2_0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_UPKEEP_INTERVAL_MS, 200);
if (curl_exec($ch)) {
    usleep(300);
    var_dump(curl_upkeep($ch));
}
?>
```

### See Also

- curl_init() - Initialize a cURL session

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl_upkeep.php
