# ImagickKernel::addKernel

Source: https://devdocs.io/php/imagickkernel.addkernel

(PECL imagick >= 3.3.0)

ImagickKernel::addKernel — Attach another kernel to a kernel list

### Description

```
public ImagickKernel::addKernel(ImagickKernel $ImagickKernel): void
```

Attach another kernel to this kernel to allow them to both be applied in a single morphology or filter function. Returns the new combined kernel.

### Parameters

### Return Values

### Examples

Example #1 ImagickKernel::addKernel()

```
<?php
function addKernel($imagePath) {
    $matrix1 = [
        [-1, -1, -1],
        [ 0,  0,  0],
        [ 1,  1,  1],
    ];

    $matrix2 = [
        [-1,  0,  1],
        [-1,  0,  1],
        [-1,  0,  1],
    ];

    $kernel1 = ImagickKernel::fromMatrix($matrix1);
    $kernel2 = ImagickKernel::fromMatrix($matrix2);
    $kernel1->addKernel($kernel2);

    $imagick = new \Imagick(realpath($imagePath));
    $imagick->filter($kernel1);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();

}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickkernel.addkernel.php
