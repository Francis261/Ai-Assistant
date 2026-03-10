# imagegammacorrect

Source: https://devdocs.io/php/function.imagegammacorrect

(PHP 4, PHP 5, PHP 7, PHP 8)

imagegammacorrect — Apply a gamma correction to a GD image

### Description

```
imagegammacorrect(GdImage $image, float $input_gamma, float $output_gamma): bool
```

Applies gamma correction to the given gd image given an input and an output gamma.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The input gamma.

The output gamma.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagegammacorrect() usage

```
<?php
// Create image instance
$im = imagecreatefromgif('php.gif');

// Correct gamma, out = 1.537
imagegammacorrect($im, 1.0, 1.537);

// Save
imagegif($im, './php_gamma_corrected.gif');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagegammacorrect.php
