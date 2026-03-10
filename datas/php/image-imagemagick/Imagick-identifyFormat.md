# Imagick::identifyFormat

Source: https://devdocs.io/php/imagick.identifyformat

(PECL imagick 3 >= 3.3.0)

Imagick::identifyFormat — Formats a string with image details

### Description

```
public Imagick::identifyFormat(string $embedText): string|false
```

Replaces any embedded formatting characters with the appropriate image property and returns the interpreted text. See http://www.imagemagick.org/script/escape.php for escape sequences.

### Parameters

A string containing formatting sequences e.g. "Trim box: %@ number of unique colors: %k".

### Return Values

Returns format or false on failure.

### Examples

Example #1 Imagick::identifyFormat()

```
<?php
        $output = "Output of 'Trim box: %@ number of unique colors: %k' is: <br/>";
        $imagick = new \Imagick(realpath("./images/artifact/mask.png"));
        $output .= $imagick->identifyFormat("Trim box: %@ number of unique colors: %k");

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.identifyformat.php
