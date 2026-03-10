# Imagick::queryFonts

Source: https://devdocs.io/php/imagick.queryfonts

(PECL imagick 2, PECL imagick 3)

Imagick::queryFonts — Returns the configured fonts

### Description

```
public static Imagick::queryFonts(string $pattern = "*"): array
```

Returns the configured fonts.

### Parameters

The query pattern

### Return Values

Returns an array containing the configured fonts.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::queryFonts()

```
<?php
        $output = '';
        $output .= "Fonts that match 'Helvetica*' are:<br/>";

        $fontList = \Imagick::queryFonts("Helvetica*");
 
        foreach ($fontList as $fontName) {
            $output .= '<li>'. $fontName."</li>";
        }

        return $output;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.queryfonts.php
