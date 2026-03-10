# dio_tcsetattr

Source: https://devdocs.io/php/function.dio-tcsetattr

(PHP 4 >= 4.3.0, PHP 5 < 5.1.0)

dio_tcsetattr — Sets terminal attributes and baud rate for a serial port

### Description

```
dio_tcsetattr(resource $fd, array $options): bool
```

dio_tcsetattr() sets the terminal attributes and baud rate of the open fd.

### Parameters

The file descriptor returned by dio_open().

The currently available options are:

- 'baud' - baud rate of the port - can be 38400,19200,9600,4800,2400,1800, 1200,600,300,200,150,134,110,75 or 50, default value is 9600.
- 'bits' - data bits - can be 8,7,6 or 5. Default value is 8.
- 'stop' - stop bits - can be 1 or 2. Default value is 1.
- 'parity' - can be 0,1 or 2. Default value is 0.

'baud' - baud rate of the port - can be 38400,19200,9600,4800,2400,1800, 1200,600,300,200,150,134,110,75 or 50, default value is 9600.

'bits' - data bits - can be 8,7,6 or 5. Default value is 8.

'stop' - stop bits - can be 1 or 2. Default value is 1.

'parity' - can be 0,1 or 2. Default value is 0.

### Return Values

No value is returned.

### Examples

Example #1 Setting the baud rate on a serial port

```
<?php

$fd = dio_open('/dev/ttyS0', O_RDWR | O_NOCTTY | O_NONBLOCK);

dio_fcntl($fd, F_SETFL, O_SYNC);

dio_tcsetattr($fd, array(
    'baud' => 9600,
    'bits' => 8,
    'stop'  => 1,
    'parity' => 0
)); 

while (true) {
    $data = dio_read($fd, 256);
    if ($data !== null && $date !== '') {
        echo $data;
    }
} 

?>
```

### Notes

Note: This function is not implemented on Windows platforms.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dio-tcsetattr.php
