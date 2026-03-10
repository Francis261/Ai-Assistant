# Imagick::getImageArtifact

Source: https://devdocs.io/php/imagick.getimageartifact

(PECL imagick 3)

Imagick::getImageArtifact — Get image artifact

### Description

```
public Imagick::getImageArtifact(string $artifact): string
```

Gets an artifact associated with the image. The difference between image properties and image artifacts is that properties are public and artifacts are private. This method is available if Imagick has been compiled against ImageMagick version 6.5.7 or newer.

### Parameters

The name of the artifact

### Return Values

Returns the artifact value on success.

### Errors/Exceptions

Throws ImagickException on error.

### See Also

- Imagick::setImageArtifact() - Set image artifact
- Imagick::deleteImageArtifact() - Delete image artifact

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimageartifact.php
