# ImagickPixel::isSimilar

Source: https://devdocs.io/php/imagickpixel.issimilar

(PECL imagick 2, PECL imagick 3)

ImagickPixel::isSimilar — Check the distance between this color and another

### Description

```
public ImagickPixel::isSimilar(ImagickPixel $color, float $fuzz): bool
```

This function is currently not documented; only its argument list is available.

Checks the distance between the color described by this ImagickPixel object and that of the provided object, by plotting their RGB values on the color cube. If the distance between the two points is less than the fuzz value given, the colors are similar. Deprecated in favour of ImagickPixel::isPixelSimilar().

### Parameters

The ImagickPixel object to compare this object against.

The maximum distance within which to consider these colors as similar. The theoretical maximum for this value is the square root of three (1.732).

### Return Values

Returns true on success.

### Examples

Example #1 ImagickPixel::isSimilar()

```
<?php
        // The tests below are written with the maximum distance expressed as 255
        // so we need to scale them by the square root of 3 - the diagonal length
        // of a unit cube.
        $root3 = 1.732050807568877;

        $tests = array(
            ['rgb(245, 0, 0)',      'rgb(255, 0, 0)',   9 / $root3,         false,],
            ['rgb(245, 0, 0)',      'rgb(255, 0, 0)',  10 / $root3,         true,],
            ['rgb(0, 0, 0)',        'rgb(7, 7, 0)',     9 / $root3,         false,],
            ['rgb(0, 0, 0)',        'rgb(7, 7, 0)',    10 / $root3,         true,],
            ['rgba(0, 0, 0, 1)',    'rgba(7, 7, 0, 1)', 9 / $root3,         false,],
            ['rgba(0, 0, 0, 1)',    'rgba(7, 7, 0, 1)',    10 / $root3,     true,],
            ['rgb(128, 128, 128)',  'rgb(128, 128, 120)',   7 / $root3,     false,],
            ['rgb(128, 128, 128)',  'rgb(128, 128, 120)',   8 / $root3,     true,],
            ['rgb(0, 0, 0)',        'rgb(255, 255, 255)',   254.9,          false,],
            ['rgb(0, 0, 0)',        'rgb(255, 255, 255)',   255,            true,],
            ['rgb(255, 0, 0)',      'rgb(0, 255, 255)',     254.9,          false,],
            ['rgb(255, 0, 0)',      'rgb(0, 255, 255)',     255,            true,],
            ['black',               'rgba(0, 0, 0)',        0.0,            true],
            ['black',               'rgba(10, 0, 0, 1.0)',  10.0 / $root3,  true],);

        $output = "<table width='100%' class='infoTable'><thead>
                <tr>
                <th>
                Color 1
                </th>
                <th>
                Color 2
                </th>
                <th>
                    Test distance * 255
                </th>
                <th>
                    Is within distance
                </th>
                </tr>
        </thead>";

        $output .= "<tbody>";

        foreach ($tests as $testInfo) {
            $color1 = $testInfo[0];
            $color2 = $testInfo[1];
            $distance = $testInfo[2];
            $expectation = $testInfo[3];
            $testDistance = ($distance / 255.0);

            $color1Pixel = new \ImagickPixel($color1);
            $color2Pixel = new \ImagickPixel($color2);

            $isSimilar = $color1Pixel->isPixelSimilar($color2Pixel, $testDistance);

            if ($isSimilar !== $expectation) {
                echo "Test distance failed. Color [$color1] compared to color [$color2] is not within distance $testDistance FAILED.".NL;
            }

            $layout = "<tr>
                <td>%s</td>
                <td>%s</td>
                <td>%s</td>
                <td style='text-align: center;'>%s</td>
            </tr>";
            
            $output .= sprintf(
                $layout,
                $color1,
                $color2,
                $distance,
                $isSimilar ? 'yes' : 'no'
            );
        }

        $output .= "</tbody></table>";
        
        return $output;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.issimilar.php
