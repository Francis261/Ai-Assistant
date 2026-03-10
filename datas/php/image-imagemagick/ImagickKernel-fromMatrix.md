# ImagickKernel::fromMatrix

Source: https://devdocs.io/php/imagickkernel.frommatrix

(PECL imagick >= 3.3.0)

ImagickKernel::fromMatrix — Create a kernel from a 2d matrix of values

### Description

```
public static ImagickKernel::fromMatrix(array $matrix, array $origin = ?): ImagickKernel
```

Create a kernel from an 2d matrix of values. Each value should either be a float (if the element should be used) or 'false' if the element should be skipped. For matrices that are odd sizes in both dimensions the origin pixel will default to the centre of the kernel. For all other kernel sizes the origin pixel must be specified.

### Parameters

A matrix (i.e. 2d array) of values that define the kernel. Each element should be either a float value, or FALSE if that element shouldn't be used by the kernel.

Which element of the kernel should be used as the origin pixel. e.g. For a 3x3 matrix specifying the origin as [2, 2] would specify that the bottom right element should be the origin pixel.

### Return Values

The generated ImagickKernel.

### Examples

Example #1 ImagickKernel::fromMatrix()

```
<?php

function renderKernel(ImagickKernel $imagickKernel) {
    $matrix = $imagickKernel->getMatrix();
    
    $imageMargin = 20;
    
    $tileSize = 20;
    $tileSpace = 4;
    $shadowSigma = 4;
    $shadowDropX = 20;
    $shadowDropY = 0;

    $radius = ($tileSize / 2) * 0.9;
    
    $rows = count($matrix);
    $columns = count($matrix[0]);
 
    $imagickDraw = new \ImagickDraw();

    $imagickDraw->setFillColor('#afafaf');
    $imagickDraw->setStrokeColor('none');
    
    $imagickDraw->translate($imageMargin, $imageMargin);
    $imagickDraw->push();

    ksort($matrix);
    
    foreach ($matrix as $row) {
        ksort($row);
        $imagickDraw->push();
        foreach ($row as $cell) {
            if ($cell !== false) {
                $color = intval(255 * $cell);
                $colorString = sprintf("rgb(%f, %f, %f)", $color, $color, $color);
                $imagickDraw->setFillColor($colorString);
                $imagickDraw->rectangle(0, 0, $tileSize, $tileSize);
            }
            $imagickDraw->translate(($tileSize + $tileSpace), 0);
        }
        $imagickDraw->pop();
        $imagickDraw->translate(0, ($tileSize + $tileSpace));
    }

    $imagickDraw->pop();

    $width = ($columns * $tileSize) + (($columns - 1) * $tileSpace);
    $height = ($rows * $tileSize) + (($rows - 1) * $tileSpace);

    $imagickDraw->push();
    $imagickDraw->translate($width/2 , $height/2);
    $imagickDraw->setFillColor('rgba(0, 0, 0, 0)');
    $imagickDraw->setStrokeColor('white');
    $imagickDraw->circle(0, 0, $radius - 1, 0);
    $imagickDraw->setStrokeColor('black');
    $imagickDraw->circle(0, 0, $radius, 0);
    $imagickDraw->pop();

    $canvasWidth = $width + (2 * $imageMargin); 
    $canvasHeight = $height + (2 * $imageMargin);

    $kernel = new \Imagick();
    $kernel->newPseudoImage(
        $canvasWidth,
        $canvasHeight,
        'canvas:none'
    );

    $kernel->setImageFormat('png');
    $kernel->drawImage($imagickDraw);
 
    /* create drop shadow on it's own layer */
    $canvas = $kernel->clone();
    $canvas->setImageBackgroundColor(new \ImagickPixel('rgb(0, 0, 0)'));
    $canvas->shadowImage(100, $shadowSigma, $shadowDropX, $shadowDropY);

    $canvas->setImagePage($canvasWidth, $canvasHeight, -5, -5);
    $canvas->cropImage($canvasWidth, $canvasHeight, 0, 0);
    
    /* composite original text_layer onto shadow_layer */
    $canvas->compositeImage($kernel, \Imagick::COMPOSITE_OVER, 0, 0);
    $canvas->setImageFormat('png');

    return $canvas;
}

function createFromMatrix() {
    $matrix = [
        [0.5, 0, 0.2],
        [0, 1, 0],
        [0.9, 0, false],
    ];

    $kernel = \ImagickKernel::fromMatrix($matrix);

    return $kernel;
}
    
function fromMatrix() {
    $kernel = createFromMatrix();
    $imagick = renderKernel($kernel);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickkernel.frommatrix.php
