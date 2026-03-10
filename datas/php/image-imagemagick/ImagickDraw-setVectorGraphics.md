# ImagickDraw::setVectorGraphics

Source: https://devdocs.io/php/imagickdraw.setvectorgraphics

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setVectorGraphics — Sets the vector graphics

### Description

```
public ImagickDraw::setVectorGraphics(string $xml): bool
```

This function is currently not documented; only its argument list is available.

Sets the vector graphics associated with the specified ImagickDraw object. Use this method with ImagickDraw::getVectorGraphics() as a method to persist the vector graphics state.

### Parameters

xml containing the vector graphics

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 ImagickDraw::setVectorGraphics() example

```
<?php
function setVectorGraphics() {
    //Setup a draw object with some drawing in it.
    $draw = new \ImagickDraw();
    $draw->setFillColor("red");
    $draw->circle(20, 20, 50, 50);
    $draw->setFillColor("blue");
    $draw->circle(50, 70, 50, 50);
    $draw->rectangle(50, 120, 80, 150);

    //Get the drawing as a string
    $SVG = $draw->getVectorGraphics();
    
    //$svg is a string, and could be saved anywhere a string can be saved

    //Use the saved drawing to generate a new draw object
    $draw2 = new \ImagickDraw();
    //Apparently the SVG text is missing the root element. 
    $draw2->setVectorGraphics("<root>".$SVG."</root>");

    $imagick = new \Imagick();
    $imagick->newImage(200, 200, 'white');
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw2);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setvectorgraphics.php
