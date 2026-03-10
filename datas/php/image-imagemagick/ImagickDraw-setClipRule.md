# ImagickDraw::setClipRule

Source: https://devdocs.io/php/imagickdraw.setcliprule

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setClipRule — Set the polygon fill rule to be used by the clipping path

### Description

```
public ImagickDraw::setClipRule(int $fillrule): bool
```

This function is currently not documented; only its argument list is available.

Set the polygon fill rule to be used by the clipping path.

### Parameters

One of the FILLRULE constant (imagick::FILLRULE_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setClipRule() example

```
<?php
function setClipRule($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);
    //\Imagick::FILLRULE_EVENODD
    //\Imagick::FILLRULE_NONZERO

    $clipPathName = 'testClipPath';
    $draw->pushClipPath($clipPathName);
    $draw->setClipRule(\Imagick::FILLRULE_EVENODD);
    $draw->rectangle(0, 0, 300, 500);
    $draw->rectangle(200, 0, 500, 500);
    $draw->popClipPath();
    $draw->setClipPath($clipPathName);
    $draw->rectangle(200, 200, 300, 300);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setcliprule.php
