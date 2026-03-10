# Imagick::deleteImageArtifact

Source: https://devdocs.io/php/imagick.deleteimageartifact

(PECL imagick 3)

Imagick::deleteImageArtifact — Delete image artifact

### Description

```
public Imagick::deleteImageArtifact(string $artifact): bool
```

Deletes an artifact associated with the image. The difference between image properties and image artifacts is that properties are public and artifacts are private. This method is available if Imagick has been compiled against ImageMagick version 6.5.7 or newer.

### Parameters

The name of the artifact to delete

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### See Also

- Imagick::setImageArtifact() - Set image artifact
- Imagick::getImageArtifact() - Get image artifact

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.deleteimageartifact.php
