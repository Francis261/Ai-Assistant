# imagecreatefromstring

Source: https://devdocs.io/php/function.imagecreatefromstring

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

imagecreatefromstring — Create a new image from the image stream in the string

### Description

```
imagecreatefromstring(string $data): GdImage|false
```

imagecreatefromstring() returns an image identifier representing the image obtained from the given data. These types will be automatically detected if your build of PHP supports them: JPEG, PNG, GIF, BMP, WBMP, GD2, WEBP and AVIF.

### Parameters

A string containing the image data.

### Return Values

An image object will be returned on success. false is returned if the image type is unsupported, the data is not in a recognised format, or the image is corrupt and cannot be loaded.

### Errors/Exceptions

imagecreatefromstring() raises an E_WARNING level error, if the data is not in a recognized format.

### Changelog

### Examples

Example #1 imagecreatefromstring() example

```
<?php
$data = 'iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAMAAAB/2U7WAAAABl'
       . 'BMVEUAAAD///+l2Z/dAAAASUlEQVR4XqWQUQoAIAxC2/0vXZDr'
       . 'EX4IJTRkb7lobNUStXsB0jIXIAMSsQnWlsV+wULF4Avk9fLq2r'
       . '8a5HSE35Q3eO2XP1A1wQkZSgETvDtKdQAAAABJRU5ErkJggg==';
$data = base64_decode($data);

$im = imagecreatefromstring($data);
if ($im !== false) {
    header('Content-Type: image/png');
    imagepng($im);
}
else {
    echo 'An error occurred.';
}
?>
```

The above example will output something similar to:

### See Also

- imagecreatefromjpeg() - Create a new image from file or URL
- imagecreatefrompng() - Create a new image from file or URL
- imagecreatefromgif() - Create a new image from file or URL
- imagecreatetruecolor() - Create a new true color image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromstring.php
