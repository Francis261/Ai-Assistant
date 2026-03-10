# ImagickKernel::fromBuiltIn

Source: https://devdocs.io/php/imagickkernel.frombuiltin

(PECL imagick >= 3.3.0)

ImagickKernel::fromBuiltIn — Create a kernel from a builtin in kernel

### Description

```
public static ImagickKernel::fromBuiltin(int $kernelType, string $kernelString): ImagickKernel
```

Create a kernel from a builtin in kernel. See http://www.imagemagick.org/Usage/morphology/#kernel for examples. Currently the 'rotation' symbols are not supported. Example: $diamondKernel = ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DIAMOND, "2");

### Parameters

The type of kernel to build e.g. \Imagick::KERNEL_DIAMOND

A string that describes the parameters e.g. "4,2.5"

### Return Values

### Examples

Example #1 ImagickKernel::fromBuiltin()

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

function createFromBuiltin($kernelType, $kernelFirstTerm, $kernelSecondTerm, $kernelThirdTerm) {
    $string = '';

    if ($kernelFirstTerm != false && strlen(trim($kernelFirstTerm)) != 0) {
        $string .= $kernelFirstTerm;

        if ($kernelSecondTerm != false && strlen(trim($kernelSecondTerm)) != 0) {
            $string .= ','.$kernelSecondTerm;
            if ($kernelThirdTerm != false && strlen(trim($kernelThirdTerm)) != 0) {
                $string .= ','.$kernelThirdTerm;
            }
        }
    }

    $kernel = ImagickKernel::fromBuiltIn(
        $kernelType,
        $string
    );

    return $kernel;
}
    
function fromBuiltin($kernelType, $kernelFirstTerm, $kernelSecondTerm, $kernelThirdTerm) {
    $diamondKernel = createFromBuiltin($kernelType, $kernelFirstTerm, $kernelSecondTerm, $kernelThirdTerm);
    $imagick = renderKernel($diamondKernel);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

fromBuiltin(\Imagick::KERNEL_DIAMOND, 2, false, false);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickkernel.frombuiltin.php
