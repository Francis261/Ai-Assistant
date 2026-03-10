# ImagickKernel::addUnityKernel

Source: https://devdocs.io/php/imagickkernel.addunitykernel

(PECL imagick >= 3.3.0)

ImagickKernel::addUnityKernel — Adds a Unity Kernel to the kernel list

### Description

```
public ImagickKernel::addUnityKernel(float $scale): void
```

Adds a given amount of the 'Unity' Convolution Kernel to the given pre-scaled and normalized Kernel. This in effect adds that amount of the original image into the resulting convolution kernel. The resulting effect is to convert the defined kernels into blended soft-blurs, unsharp kernels or into sharpening kernels.

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 ImagickKernel::addUnityKernel()

```
<?php

    function renderKernelTable($matrix) {
        $output = "<table class='infoTable'>";
    
        foreach ($matrix as $row) {
            $output .= "<tr>";
            foreach ($row as $cell) {
                $output .= "<td style='text-align:left'>";
                if ($cell === false) {
                    $output .= "false";
                }
                else {
                    $output .= round($cell, 3);
                }
                $output .= "</td>";
            }
            $output .= "</tr>";
        }
    
        $output .= "</table>";
    
        return $output;
    }

    $matrix = [
        [-1, 0, -1],
        [ 0, 4,  0],
        [-1, 0, -1],
    ];

    $kernel = \ImagickKernel::fromMatrix($matrix);
    $kernel->scale(1, \Imagick::NORMALIZE_KERNEL_VALUE);
    $output = "Before adding unity kernel: <br/>";
    $output .= renderKernelTable($kernel->getMatrix());
    $kernel->addUnityKernel(0.5);
    $output .= "After adding unity kernel: <br/>";
    $output .= renderKernelTable($kernel->getMatrix());
    
    
    $kernel->scale(1, \Imagick::NORMALIZE_KERNEL_VALUE);
    $output .= "After renormalizing kernel: <br/>";
    $output .= renderKernelTable($kernel->getMatrix());

    echo $output;

?>
```

Example #2 ImagickKernel::addUnityKernel()

```
<?php
function addUnityKernel($imagePath) {

    $matrix = [
        [-1, 0, -1],
        [ 0, 4,  0],
        [-1, 0, -1],
    ];

    $kernel = ImagickKernel::fromMatrix($matrix);

    $kernel->scale(4, \Imagick::NORMALIZE_KERNEL_VALUE);
    $kernel->addUnityKernel(0.5);

    $imagick = new \Imagick(realpath($imagePath));
    $imagick->filter($kernel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();

}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickkernel.addunitykernel.php
