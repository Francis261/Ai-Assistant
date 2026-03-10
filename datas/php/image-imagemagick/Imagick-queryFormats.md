# Imagick::queryFormats

Source: https://devdocs.io/php/imagick.queryformats

(PECL imagick 2, PECL imagick 3)

Imagick::queryFormats — Returns formats supported by Imagick

### Description

```
public static Imagick::queryFormats(string $pattern = "*"): array
```

Returns formats supported by Imagick.

### Parameters

### Return Values

Returns an array containing the formats supported by Imagick.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::queryFormats()

```
<?php
    function render() {
        $output = "";
        $input = \Imagick::queryformats();
        $columns = 6;

        $output .= "<table border='2'>";

        for ($i=0; $i < count($input); $i += $columns) {
            $output .= "<tr>";
            for ($c=0; $c<$columns; $c++) {
                $output .= "<td>";
                if (($i + $c) <  count($input)) {
                    $output .= $input[$i + $c];
                }
                $output .= "</td>";
            }
            $output .= "</tr>";
        }

        $output .= "</table>";

        return $output;
    }

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.queryformats.php
