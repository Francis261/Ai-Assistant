# The ImagickPixel class

Source: https://devdocs.io/php/class.imagickpixel

## Class synopsis

(PECL imagick 2, PECL imagick 3)

```
public clear(): bool
```

```
public __construct(string $color = ?)
```

```
public destroy(): bool
```

```
public getColor(int $normalized = 0): array
```

```
public getColorAsString(): string
```

```
public getColorCount(): int
```

```
public getColorQuantum(): array
```

```
public getColorValue(int $color): float
```

```
public getColorValueQuantum(int $color): int|float
```

```
public getHSL(): array
```

```
public getIndex(): int
```

```
public isPixelSimilar(ImagickPixel $color, float $fuzz): bool
```

```
public isPixelSimilarQuantum(string $color, string $fuzz = ?): bool
```

```
public isSimilar(ImagickPixel $color, float $fuzz): bool
```

```
public setColor(string $color): bool
```

```
public setcolorcount(int $colorCount): bool
```

```
public setColorValue(int $color, float $value): bool
```

```
public setColorValueQuantum(int $color, int|float $value): bool
```

```
public setHSL(float $hue, float $saturation, float $luminosity): bool
```

```
public setIndex(int $index): bool
```

## Table of Contents

- ImagickPixel::clear — Clears resources associated with this object
- ImagickPixel::__construct — The ImagickPixel constructor
- ImagickPixel::destroy — Deallocates resources associated with this object
- ImagickPixel::getColor — Returns the color
- ImagickPixel::getColorAsString — Returns the color as a string
- ImagickPixel::getColorCount — Returns the color count associated with this color
- ImagickPixel::getColorQuantum — Returns the color of the pixel in an array as Quantum values
- ImagickPixel::getColorValue — Gets the normalized value of the provided color channel
- ImagickPixel::getColorValueQuantum — Gets the quantum value of a color in the ImagickPixel
- ImagickPixel::getHSL — Returns the normalized HSL color of the ImagickPixel object
- ImagickPixel::getIndex — Gets the colormap index of the pixel wand
- ImagickPixel::isPixelSimilar — Check the distance between this color and another
- ImagickPixel::isPixelSimilarQuantum — Returns whether two colors differ by less than the specified distance
- ImagickPixel::isSimilar — Check the distance between this color and another
- ImagickPixel::setColor — Sets the color
- ImagickPixel::setColorCount — Sets the color count associated with this color
- ImagickPixel::setColorValue — Sets the normalized value of one of the channels
- ImagickPixel::setColorValueQuantum — Sets the quantum value of a color element of the ImagickPixel
- ImagickPixel::setHSL — Sets the normalized HSL color
- ImagickPixel::setIndex — Sets the colormap index of the pixel wand

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.imagickpixel.php
