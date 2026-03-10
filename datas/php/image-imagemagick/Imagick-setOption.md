# Imagick::setOption

Source: https://devdocs.io/php/imagick.setoption

(PECL imagick 2, PECL imagick 3)

Imagick::setOption — Set an option

### Description

```
public Imagick::setOption(string $key, string $value): bool
```

Associates one or more options with the wand.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Attempt to reach '$extent' sizeImagick::setOption()

```
<?php
    function renderJPG($extent) {
        $imagePath = $this->control->getImagePath();
        $imagick = new \Imagick(realpath($imagePath));
        $imagick->setImageFormat('jpg');
        $imagick->setOption('jpeg:extent', $extent);
        header("Content-Type: image/jpg");
        echo $imagick->getImageBlob();
    }

?>
```

Example #2 Imagick::setOption()

```
<?php
    function renderPNG($imagePath, $format) {

        $imagick = new \Imagick(realpath($imagePath));
        $imagick->setImageFormat('png');
        $imagick->setOption('png:format', $format);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();
    }
    
    //Save as 64bit PNG.
    renderPNG($imagePath, 'png64');

?>
```

Example #3 Imagick::setOption()

```
<?php
    function renderCustomBitDepthPNG() {
        $imagePath = $this->control->getImagePath();
        $imagick = new \Imagick(realpath($imagePath));
        $imagick->setImageFormat('png');
        
        $imagick->setOption('png:bit-depth', '16');
        $imagick->setOption('png:color-type', 6);
        header("Content-Type: image/png");
        $crash = true;
        if ($crash) {
            echo $imagick->getImageBlob();
        }
        else {
            $tempFilename = tempnam('./', 'imagick');
            $imagick->writeimage(realpath($tempFilename));
            echo file_get_contents($tempFilename);
        }
    }

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setoption.php
