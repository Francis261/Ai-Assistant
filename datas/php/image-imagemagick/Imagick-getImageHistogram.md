# Imagick::getImageHistogram

Source: https://devdocs.io/php/imagick.getimagehistogram

(PECL imagick 2, PECL imagick 3)

Imagick::getImageHistogram — Gets the image histogram

### Description

```
public Imagick::getImageHistogram(): array
```

Returns the image histogram as an array of ImagickPixel objects.

### Parameters

This function has no parameters.

### Return Values

Returns the image histogram as an array of ImagickPixel objects.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Generates Imagick::getImageHistogram()

```
<?php
function getColorStatistics($histogramElements, $colorChannel) {
    $colorStatistics = [];

    foreach ($histogramElements as $histogramElement) {
        $color = $histogramElement->getColorValue($colorChannel);
        $color = intval($color * 255);
        $count = $histogramElement->getColorCount();

        if (array_key_exists($color, $colorStatistics)) {
            $colorStatistics[$color] += $count;
        }
        else {
            $colorStatistics[$color] = $count;
        }
    }

    ksort($colorStatistics);
    
    return $colorStatistics;
}
    

function getImageHistogram($imagePath) {

    $backgroundColor = 'black';

    $draw = new \ImagickDraw();
    $draw->setStrokeWidth(0); //make the lines be as thin as possible

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    $histogramWidth = 256;
    $histogramHeight = 100; // the height for each RGB segment

    $imagick = new \Imagick(realpath($imagePath));
    //Resize the image to be small, otherwise PHP tends to run out of memory
    //This might lead to bad results for images that are pathologically 'pixelly'
    $imagick->adaptiveResizeImage(200, 200, true);
    $histogramElements = $imagick->getImageHistogram();

    $histogram = new \Imagick();
    $histogram->newpseudoimage($histogramWidth, $histogramHeight * 3, 'xc:black');
    $histogram->setImageFormat('png');

    $getMax = function ($carry, $item)  {
        if ($item > $carry) {
            return $item;
        }
        return $carry;
    };

    $colorValues = [
        'red' => getColorStatistics($histogramElements, \Imagick::COLOR_RED),
        'lime' => getColorStatistics($histogramElements, \Imagick::COLOR_GREEN),
        'blue' => getColorStatistics($histogramElements, \Imagick::COLOR_BLUE),
    ];

    $max = array_reduce($colorValues['red'] , $getMax, 0);
    $max = array_reduce($colorValues['lime'] , $getMax, $max);
    $max = array_reduce($colorValues['blue'] , $getMax, $max);

    $scale =  $histogramHeight / $max;

    $count = 0;
    foreach ($colorValues as $color => $values) {
        $draw->setstrokecolor($color);

        $offset = ($count + 1) * $histogramHeight;

        foreach ($values as $index => $value) {
            $draw->line($index, $offset, $index, $offset - ($value * $scale));
        }
        $count++;
    }

    $histogram->drawImage($draw);
    
    header( "Content-Type: image/png" );
    echo $histogram;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagehistogram.php
