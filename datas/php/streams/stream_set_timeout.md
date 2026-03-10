# stream_set_timeout

Source: https://devdocs.io/php/function.stream-set-timeout

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

stream_set_timeout — Set timeout period on a stream

### Description

```
stream_set_timeout(resource $stream, int $seconds, int $microseconds = 0): bool
```

Sets the timeout value on stream, expressed in the sum of seconds and microseconds.

When the stream times out, the 'timed_out' key of the array returned by stream_get_meta_data() is set to true, although no error/warning is generated.

### Parameters

The target stream.

The seconds part of the timeout to be set.

The microseconds part of the timeout to be set.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 stream_set_timeout() example

```
<?php
$fp = fsockopen("www.example.com", 80);
if (!$fp) {
    echo "Unable to open\n";
} else {

    fwrite($fp, "GET / HTTP/1.0\r\n\r\n");
    stream_set_timeout($fp, 2);
    $res = fread($fp, 2000);

    $info = stream_get_meta_data($fp);
    fclose($fp);

    if ($info['timed_out']) {
        echo 'Connection timed out!';
    } else {
        echo $res;
    }

}
?>
```

### Notes

Note:

This function doesn't work with advanced operations like stream_socket_recvfrom(), use stream_select() with timeout parameter instead.

This function was previously called as set_socket_timeout() and later socket_set_timeout() but this usage is deprecated.

### See Also

- fsockopen() - Open Internet or Unix domain socket connection
- fopen() - Opens file or URL

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-set-timeout.php
