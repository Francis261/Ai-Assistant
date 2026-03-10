# stream_socket_enable_crypto

Source: https://devdocs.io/php/function.stream-socket-enable-crypto

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

stream_socket_enable_crypto — Turns encryption on/off on an already connected socket

### Description

```
stream_socket_enable_crypto(
 resource $stream,
 bool $enable,
 ?int $crypto_method = null,
 ?resource $session_stream = null
): int|bool
```

Enable or disable encryption on the stream.

Once the crypto settings are established, cryptography can be turned on and off dynamically by passing true or false in the enable parameter.

### Parameters

The stream resource.

Enable/disable cryptography on the stream.

Setup encryption on the stream. Valid methods are

- STREAM_CRYPTO_METHOD_SSLv2_CLIENT
- STREAM_CRYPTO_METHOD_SSLv3_CLIENT
- STREAM_CRYPTO_METHOD_SSLv23_CLIENT
- STREAM_CRYPTO_METHOD_ANY_CLIENT
- STREAM_CRYPTO_METHOD_TLS_CLIENT
- STREAM_CRYPTO_METHOD_TLSv1_0_CLIENT
- STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT
- STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT
- STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT (as of PHP 7.4.0)
- STREAM_CRYPTO_METHOD_SSLv2_SERVER
- STREAM_CRYPTO_METHOD_SSLv3_SERVER
- STREAM_CRYPTO_METHOD_SSLv23_SERVER
- STREAM_CRYPTO_METHOD_ANY_SERVER
- STREAM_CRYPTO_METHOD_TLS_SERVER
- STREAM_CRYPTO_METHOD_TLSv1_0_SERVER
- STREAM_CRYPTO_METHOD_TLSv1_1_SERVER
- STREAM_CRYPTO_METHOD_TLSv1_2_SERVER
- STREAM_CRYPTO_METHOD_TLSv1_3_SERVER (as of PHP 7.4.0)

If omitted, the crypto_method context option on the stream's SSL context will be used instead.

Seed the stream with settings from session_stream.

### Return Values

Returns true on success, false if negotiation has failed or 0 if there isn't enough data and you should try again (only for non-blocking sockets).

### Changelog

### Examples

Example #1 stream_socket_enable_crypto() example

```
<?php
$fp = stream_socket_client("tcp://myproto.example.com:31337", $errno, $errstr, 30);
if (!$fp) {
    die("Unable to connect: $errstr ($errno)");
}

/* Turn on encryption for login phase */
stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_SSLv23_CLIENT);
fwrite($fp, "USER god\r\n");
fwrite($fp, "PASS secret\r\n");

/* Turn off encryption for the rest */
stream_socket_enable_crypto($fp, false);

while ($motd = fgets($fp)) {
    echo $motd;
}

fclose($fp);
?>
```

The above example will output something similar to:

### See Also

- OpenSSL Functions
- List of Supported Socket Transports

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-socket-enable-crypto.php
