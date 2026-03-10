# ImagickKernel::getMatrix

Source: https://devdocs.io/php/imagickkernel.getmatrix

(PECL imagick >= 3.3.0)

ImagickKernel::getMatrix — Get the 2d matrix of values used in this kernel

### Description

```
public ImagickKernel::getMatrix(): array
```

Get the 2d matrix of values used in this kernel. The elements are either float for elements that are used or 'false' if the element should be skipped.

### Parameters

This function has no parameters.

### Return Values

A matrix (2d array) of the values that represent the kernel.

### Examples

Example #1 ImagickKernel::getMatrix()

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

    $output = "The built-in kernel name 'ring' with parameters of '2,3.5':<br/>";
    $kernel = \ImagickKernel::fromBuiltIn(
        \Imagick::KERNEL_RING,
        "2,3.5"
    );
    $matrix = $kernel->getMatrix();
    $output .= renderKernelTable($matrix);

    echo $output;

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickkernel.getmatrix.php
