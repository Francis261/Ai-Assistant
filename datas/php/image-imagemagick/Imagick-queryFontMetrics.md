# Imagick::queryFontMetrics

Source: https://devdocs.io/php/imagick.queryfontmetrics

(PECL imagick 2, PECL imagick 3)

Imagick::queryFontMetrics — Returns an array representing the font metrics

### Description

```
public Imagick::queryFontMetrics(ImagickDraw $properties, string $text, bool $multiline = ?): array
```

Returns a multi-dimensional array representing the font metrics.

### Parameters

ImagickDraw object containing font properties

The text

Multiline parameter. If left empty it is autodetected

### Return Values

Returns a multi-dimensional array representing the font metrics.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::queryFontMetrics():

Query the metrics for the text and dump the results on the screen.

```
<?php
/* Create a new Imagick object */
$im = new Imagick();

/* Create an ImagickDraw object */
$draw = new ImagickDraw();

/* Set the font */
$draw->setFont('/path/to/font.ttf');

/* Dump the font metrics, autodetect multiline */
var_dump($im->queryFontMetrics($draw, "Hello World!"));
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.queryfontmetrics.php
