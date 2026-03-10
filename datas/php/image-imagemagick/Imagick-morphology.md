# Imagick::morphology

Source: https://devdocs.io/php/imagick.morphology

(PECL imagick 3 >= 3.3.0)

Imagick::morphology — Applies a user supplied kernel to the image according to the given morphology method.

### Description

```
public Imagick::morphology(
 int $morphologyMethod,
 int $iterations,
 ImagickKernel $ImagickKernel,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Applies a user supplied kernel to the image according to the given morphology method.

### Parameters

Which morphology method to use one of the \Imagick::MORPHOLOGY_* constants.

The number of iteration to apply the morphology function. A value of -1 means loop until no change found. How this is applied may depend on the morphology method. Typically this is a value of 1.

### Return Values

Returns true on success.

### Examples

Example #1 Convolve Imagick::morphology()

```
<?php
        $imagick = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_GAUSSIAN, "5,1");
        $imagick->morphology(\Imagick::MORPHOLOGY_CONVOLVE, 2, $kernel);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();

?>
```

Example #2 Correlate Imagick::morphology()

```
<?php

        // Top-left pixel must be black
        // Bottom right pixel must be white
        // We don't care about the rest.
        

        $imagick = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromMatrix(self::$correlateMatrix, [2, 2]);
        $imagick->morphology(\Imagick::MORPHOLOGY_CORRELATE, 1, $kernel);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();

?>
```

Example #3 Erode Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_ERODE, 2, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #4 Erode Intensity Imagick::morphology()

```
<?php
        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "1");
        $canvas->morphology(\Imagick::MORPHOLOGY_ERODE_INTENSITY, 2, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #5 Dilate Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_DILATE, 4, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #6 Dilate intensity Imagick::morphology()

```
<?php
        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "1");
        $canvas->morphology(\Imagick::MORPHOLOGY_DILATE_INTENSITY, 4, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #7 Distance with Chebyshev kernel Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_CHEBYSHEV, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #8 Distance with Manhattan kernel Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_MANHATTAN, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #9 Distance with ocatagonal kernel Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGONAL, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #10 Distance with Euclidean kernel Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_EUCLIDEAN, "4");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #11 Edge Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_EDGE, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #12 Open Imagick::morphology()

```
<?php
        // As a result you will see that 'Open' smoothed the outline, by rounding off any sharp points, and remove any parts that is smaller than the shape used. It will also disconnect or 'open' any thin bridges.
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_OPEN, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #13 Open intensity Imagick::morphology()

```
<?php
        // As a result you will see that 'Open' smoothed the outline, by rounding off any sharp points, and remove any parts that is smaller than the shape used. It will also disconnect or 'open' any thin bridges.

        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_OPEN_INTENSITY, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #14 Close Imagick::morphology()

```
<?php
        //The basic use of the 'Close' method is to reduce or remove any 'holes' or 'gaps' about the size of the kernel 'Structure Element'. That is 'close' parts of the background that are about that size.
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #15 Close Intensity Imagick::morphology()

```
<?php
        //The basic use of the 'Close' method is to reduce or remove any 'holes' or 'gaps' about the size of the kernel 'Structure Element'. That is 'close' parts of the background that are about that size.
        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE_INTENSITY, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #16 Smooth Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_SMOOTH, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #17 Edge in Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_EDGE_IN, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #18 Edge out Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_EDGE_OUT, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #19 The 'TopHat' method, or more specifically 'White Top Hat', returns the pixels that were removed by a Opening of the shape, that is the pixels that were removed to round off the points, and the connecting bridged between shapes. Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_TOP_HAT, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #20 The 'BottomHat' method, also known as 'Black TopHat' is the pixels that a Closing of the shape adds to the image. That is the pixels that were used to fill in the 'holes', 'gaps', and 'bridges'. Imagick::morphology()

```
<?php

        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_BOTTOM_HAT, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #21 Hit and Miss Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        //This finds all the pixels with 3 pixels of the right edge
        $matrix = [[1, false, false, 0]];
        $kernel = \ImagickKernel::fromMatrix(
            $matrix,
            [0, 0]
        );
        $canvas->morphology(\Imagick::MORPHOLOGY_HIT_AND_MISS, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #22 Thinning Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $leftEdgeKernel = \ImagickKernel::fromMatrix([[0, 1]], [1, 0]);
        $rightEdgeKernel = \ImagickKernel::fromMatrix([[1, 0]], [0, 0]);
        $leftEdgeKernel->addKernel($rightEdgeKernel);
        
        $canvas->morphology(\Imagick::MORPHOLOGY_THINNING, 3, $leftEdgeKernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #23 Thicken Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $leftEdgeKernel = \ImagickKernel::fromMatrix([[0, 1]], [1, 0]);
        $rightEdgeKernel = \ImagickKernel::fromMatrix([[1, 0]], [0, 0]);
        $leftEdgeKernel->addKernel($rightEdgeKernel);

        $canvas->morphology(\Imagick::MORPHOLOGY_THICKEN, 3, $leftEdgeKernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #24 Thick to generate a convex hull Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $diamondKernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DIAMOND, "1");
        $convexKernel =  \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_CONVEX_HULL, "");

        // The thicken morphology doesn't handle small gaps. We close them
        // with the close morphology.
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $diamondKernel);
        $canvas->morphology(\Imagick::MORPHOLOGY_THICKEN, -1, $convexKernel);
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $diamondKernel);

        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #25 Iterative morphology Imagick::morphology()

```
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "2");        
        $canvas->morphology(\Imagick::MORPHOLOGY_ITERATIVE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>
```

Example #26 Helper function to get an image silhouette Imagick::morphology()

```
<?php
function getCharacterOutline() {
    $imagick = new \Imagick(realpath("./images/character.png"));
    $character = new \Imagick();
    $character->newPseudoImage(
        $imagick->getImageWidth(),
        $imagick->getImageHeight(),
        "canvas:white"
    );
    $canvas = new \Imagick();
    $canvas->newPseudoImage(
        $imagick->getImageWidth(),
        $imagick->getImageHeight(),
        "canvas:black"
    );

    $character->compositeimage(
        $imagick,
        \Imagick::COMPOSITE_COPYOPACITY,
        0, 0
    );
    $canvas->compositeimage(
        $character,
        \Imagick::COMPOSITE_ATOP,
        0, 0
    );
    $canvas->setFormat('png');

    return $canvas;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.morphology.php
