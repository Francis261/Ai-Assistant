# Imagick::setImageArtifact

Source: https://devdocs.io/php/imagick.setimageartifact

(PECL imagick 3)

Imagick::setImageArtifact — Set image artifact

### Description

```
public Imagick::setImageArtifact(string $artifact, string $value): bool
```

Associates an artifact with the image. The difference between image properties and image artifacts is that properties are public and artifacts are private. This method is available if Imagick has been compiled against ImageMagick version 6.5.7 or newer.

### Parameters

The name of the artifact

The value of the artifact

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::setImageArtifact()

```
<?php
function setImageArtifact() {

    $src1 = new \Imagick(realpath("./images/artifact/source1.png"));
    $src2 = new \Imagick(realpath("./images/artifact/source2.png"));

    $src2->setImageVirtualPixelMethod(\Imagick::VIRTUALPIXELMETHOD_TRANSPARENT);
    $src2->setImageArtifact('compose:args', "1,0,-0.5,0.5");
    $src1->compositeImage($src2, Imagick::COMPOSITE_MATHEMATICS, 0, 0);
    
    $src1->setImageFormat('png');
    header("Content-Type: image/png");
    echo $src1->getImagesBlob();
}

?>
```

### See Also

- Imagick::getImageArtifact() - Get image artifact
- Imagick::deleteImageArtifact() - Delete image artifact

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageartifact.php
