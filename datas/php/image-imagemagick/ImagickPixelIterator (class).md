# The ImagickPixelIterator class

Source: https://devdocs.io/php/class.imagickpixeliterator

## Class synopsis

(PECL imagick 2, PECL imagick 3)

```
public clear(): bool
```

```
public __construct(Imagick $wand)
```

```
public destroy(): bool
```

```
public getCurrentIteratorRow(): array
```

```
public getIteratorRow(): int
```

```
public getNextIteratorRow(): array
```

```
public getPreviousIteratorRow(): array
```

```
public newPixelIterator(Imagick $wand): bool
```

```
public newPixelRegionIterator(
 Imagick $wand,
 int $x,
 int $y,
 int $columns,
 int $rows
): bool
```

```
public resetIterator(): bool
```

```
public setIteratorFirstRow(): bool
```

```
public setIteratorLastRow(): bool
```

```
public setIteratorRow(int $row): bool
```

```
public syncIterator(): bool
```

## Table of Contents

- ImagickPixelIterator::clear — Clear resources associated with a PixelIterator
- ImagickPixelIterator::__construct — The ImagickPixelIterator constructor
- ImagickPixelIterator::destroy — Deallocates resources associated with a PixelIterator
- ImagickPixelIterator::getCurrentIteratorRow — Returns the current row of ImagickPixel objects
- ImagickPixelIterator::getIteratorRow — Returns the current pixel iterator row
- ImagickPixelIterator::getNextIteratorRow — Returns the next row of the pixel iterator
- ImagickPixelIterator::getPreviousIteratorRow — Returns the previous row
- ImagickPixelIterator::newPixelIterator — Returns a new pixel iterator
- ImagickPixelIterator::newPixelRegionIterator — Returns a new pixel iterator
- ImagickPixelIterator::resetIterator — Resets the pixel iterator
- ImagickPixelIterator::setIteratorFirstRow — Sets the pixel iterator to the first pixel row
- ImagickPixelIterator::setIteratorLastRow — Sets the pixel iterator to the last pixel row
- ImagickPixelIterator::setIteratorRow — Set the pixel iterator row
- ImagickPixelIterator::syncIterator — Syncs the pixel iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.imagickpixeliterator.php
