# ImagickKernel::separate

Source: https://devdocs.io/php/imagickkernel.separate

(PECL imagick >= 3.3.0)

ImagickKernel::separate — Separates a linked set of kernels and returns an array of ImagickKernels

### Description

```
public ImagickKernel::separate(): array
```

Separates a linked set of kernels and returns an array of ImagickKernels.

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 ImagickKernel::separate()

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
    $kernel->scale(4, \Imagick::NORMALIZE_KERNEL_VALUE);
    $diamondKernel = \ImagickKernel::fromBuiltIn(
        \Imagick::KERNEL_DIAMOND,
        "2"
    );

    $kernel->addKernel($diamondKernel);
    
    $kernelList = $kernel->separate();
    
    $output = '';
    $count = 0;
    foreach ($kernelList as $kernel) {
        $output .= "<br/>Kernel $count<br/>";
        $output .= renderKernelTable($kernel->getMatrix());
        $count++;
    }

    return $output;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickkernel.separate.php
