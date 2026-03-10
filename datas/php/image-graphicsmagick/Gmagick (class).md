# The Gmagick class

Source: https://devdocs.io/php/class.gmagick

## Introduction

(PECL gmagick >= Unknown)

## Class synopsis

```
public addimage(Gmagick $source): Gmagick
```

```
public addnoiseimage(int $noise_type): Gmagick
```

```
public annotateimage(
 GmagickDraw $GmagickDraw,
 float $x,
 float $y,
 float $angle,
 string $text
): Gmagick
```

```
public blurimage(float $radius, float $sigma, int $channel = ?): Gmagick
```

```
public borderimage(GmagickPixel $color, int $width, int $height): Gmagick
```

```
public charcoalimage(float $radius, float $sigma): Gmagick
```

```
public chopimage(
 int $width,
 int $height,
 int $x,
 int $y
): Gmagick
```

```
public clear(): Gmagick
```

```
public commentimage(string $comment): Gmagick
```

```
public compositeimage(
 Gmagick $source,
 int $COMPOSE,
 int $x,
 int $y
): Gmagick
```

```
public cropimage(
  int $width ,
  int $height ,
 int $x,
 int $y
): Gmagick
```

```
public cropthumbnailimage(int $width, int $height): Gmagick
```

```
public current(): Gmagick
```

```
public cyclecolormapimage(int $displace): Gmagick
```

```
public deconstructimages(): Gmagick
```

```
public despeckleimage(): Gmagick
```

```
public destroy(): bool
```

```
public drawimage(GmagickDraw $GmagickDraw): Gmagick
```

```
public edgeimage(float $radius): Gmagick
```

```
public embossimage(float $radius, float $sigma): Gmagick
```

```
public enhanceimage(): Gmagick
```

```
public equalizeimage(): Gmagick
```

```
public flipimage(): Gmagick
```

```
public flopimage(): Gmagick
```

```
public frameimage(
 GmagickPixel $color,
 int $width,
 int $height,
 int $inner_bevel,
 int $outer_bevel
): Gmagick
```

```
public gammaimage(float $gamma): Gmagick
```

```
public getcopyright(): string
```

```
public getfilename(): string
```

```
public getimagebackgroundcolor(): GmagickPixel
```

```
public getimageblueprimary(): array
```

```
public getimagebordercolor(): GmagickPixel
```

```
public getimagechanneldepth(int $channel_type): int
```

```
public getimagecolors(): int
```

```
public getimagecolorspace(): int
```

```
public getimagecompose(): int
```

```
public getimagedelay(): int
```

```
public getimagedepth(): int
```

```
public getimagedispose(): int
```

```
public getimageextrema(): array
```

```
public getimagefilename(): string
```

```
public getimageformat(): string
```

```
public getimagegamma(): float
```

```
public getimagegreenprimary(): array
```

```
public getimageheight(): int
```

```
public getimagehistogram(): array
```

```
public getimageindex(): int
```

```
public getimageinterlacescheme(): int
```

```
public getimageiterations(): int
```

```
public getimagematte(): int
```

```
public getimagemattecolor(): GmagickPixel
```

```
public getimageprofile(string $name): string
```

```
public getimageredprimary(): array
```

```
public getimagerenderingintent(): int
```

```
public getimageresolution(): array
```

```
public getimagescene(): int
```

```
public getimagesignature(): string
```

```
public getimagetype(): int
```

```
public getimageunits(): int
```

```
public getimagewhitepoint(): array
```

```
public getimagewidth(): int
```

```
public getpackagename(): string
```

```
public getquantumdepth(): array
```

```
public getreleasedate(): string
```

```
public getsamplingfactors(): array
```

```
public getsize(): array
```

```
public getversion(): array
```

```
public hasnextimage(): mixed
```

```
public haspreviousimage(): mixed
```

```
public implodeimage(float $radius): mixed
```

```
public labelimage(string $label): mixed
```

```
public levelimage(
 float $blackPoint,
 float $gamma,
 float $whitePoint,
 int $channel = Gmagick::CHANNEL_DEFAULT
): mixed
```

```
public magnifyimage(): mixed
```

```
public mapimage(gmagick $gmagick, bool $dither): Gmagick
```

```
public medianfilterimage(float $radius): void
```

```
public minifyimage(): Gmagick
```

```
public modulateimage(float $brightness, float $saturation, float $hue): Gmagick
```

```
public motionblurimage(float $radius, float $sigma, float $angle): Gmagick
```

```
public newimage(
 int $width,
 int $height,
 string $background,
 string $format = ?
): Gmagick
```

```
public nextimage(): bool
```

```
public normalizeimage(int $channel = ?): Gmagick
```

```
public oilpaintimage( float $radius ): Gmagick
```

```
public previousimage(): bool
```

```
public profileimage(string $name, string $profile): Gmagick
```

```
public quantizeimage(
 int $numColors,
 int $colorspace,
 int $treeDepth,
 bool $dither,
 bool $measureError
): Gmagick
```

```
public quantizeimages(
 int $numColors,
 int $colorspace,
 int $treeDepth,
 bool $dither,
 bool $measureError
): Gmagick
```

```
public queryfontmetrics(GmagickDraw $draw, string $text): array
```

```
public queryfonts(string $pattern = "*"): array
```

```
public queryformats(string $pattern = "*"): array
```

```
public radialblurimage(float $angle, int $channel = Gmagick::CHANNEL_DEFAULT): Gmagick
```

```
public raiseimage(
 int $width,
 int $height,
 int $x,
 int $y,
 bool $raise
): Gmagick
```

```
public read(string $filename): Gmagick
```

```
public readimage(string $filename): Gmagick
```

```
public readimageblob(string $imageContents, string $filename = ?): Gmagick
```

```
public readimagefile(resource $fp, string $filename = ?): Gmagick
```

```
public reducenoiseimage(float $radius): Gmagick
```

```
public removeimage(): Gmagick
```

```
public removeimageprofile(string $name): string
```

```
public resampleimage(
 float $xResolution,
 float $yResolution,
 int $filter,
 float $blur
): Gmagick
```

```
public resizeimage(
 int $width,
 int $height,
 int $filter,
 float $blur,
 bool $fit = false
): Gmagick
```

```
public rollimage(int $x, int $y): Gmagick
```

```
public rotateimage(mixed $color, float $degrees): Gmagick
```

```
public scaleimage(int $width, int $height, bool $fit = false): Gmagick
```

```
public separateimagechannel(int $channel): Gmagick
```

```
setCompressionQuality( int $quality ): Gmagick
```

```
public setfilename(string $filename): Gmagick
```

```
public setimagebackgroundcolor(GmagickPixel $color): Gmagick
```

```
public setimageblueprimary(float $x, float $y): Gmagick
```

```
public setimagebordercolor(GmagickPixel $color): Gmagick
```

```
public setimagechanneldepth(int $channel, int $depth): Gmagick
```

```
public setimagecolorspace(int $colorspace): Gmagick
```

```
public setimagecompose(int $composite): Gmagick
```

```
public setimagedelay(int $delay): Gmagick
```

```
public setimagedepth(int $depth): Gmagick
```

```
public setimagedispose(int $disposeType): Gmagick
```

```
public setimagefilename(string $filename): Gmagick
```

```
public setimageformat(string $imageFormat): Gmagick
```

```
public setimagegamma(float $gamma): Gmagick
```

```
public setimagegreenprimary(float $x, float $y): Gmagick
```

```
public setimageindex(int $index): Gmagick
```

```
public setimageinterlacescheme(int $interlace): Gmagick
```

```
public setimageiterations(int $iterations): Gmagick
```

```
public setimageprofile(string $name, string $profile): Gmagick
```

```
public setimageredprimary(float $x, float $y): Gmagick
```

```
public setimagerenderingintent(int $rendering_intent): Gmagick
```

```
public setimageresolution(float $xResolution, float $yResolution): Gmagick
```

```
public setimagescene(int $scene): Gmagick
```

```
public setimagetype(int $imgType): Gmagick
```

```
public setimageunits(int $resolution): Gmagick
```

```
public setimagewhitepoint(float $x, float $y): Gmagick
```

```
public setsamplingfactors(array $factors): Gmagick
```

```
public setsize(int $columns, int $rows): Gmagick
```

```
public shearimage(mixed $color, float $xShear, float $yShear): Gmagick
```

```
public solarizeimage(int $threshold): Gmagick
```

```
public spreadimage(float $radius): Gmagick
```

```
public stripimage(): Gmagick
```

```
public swirlimage(float $degrees): Gmagick
```

```
public thumbnailimage(int $width, int $height, bool $fit = false): Gmagick
```

```
public trimimage(float $fuzz): Gmagick
```

```
public writeimage(string $filename, bool $all_frames = false): Gmagick
```

## Table of Contents

- Gmagick::addimage — Adds new image to Gmagick object image list
- Gmagick::addnoiseimage — Adds random noise to the image
- Gmagick::annotateimage — Annotates an image with text
- Gmagick::blurimage — Adds blur filter to image
- Gmagick::borderimage — Surrounds the image with a border
- Gmagick::charcoalimage — Simulates a charcoal drawing
- Gmagick::chopimage — Removes a region of an image and trims
- Gmagick::clear — Clears all resources associated to Gmagick object
- Gmagick::commentimage — Adds a comment to your image
- Gmagick::compositeimage — Composite one image onto another
- Gmagick::__construct — The Gmagick constructor
- Gmagick::cropimage — Extracts a region of the image
- Gmagick::cropthumbnailimage — Creates a crop thumbnail
- Gmagick::current — The current purpose
- Gmagick::cyclecolormapimage — Displaces an image's colormap
- Gmagick::deconstructimages — Returns certain pixel differences between images
- Gmagick::despeckleimage — The despeckleimage purpose
- Gmagick::destroy — The destroy purpose
- Gmagick::drawimage — Renders the GmagickDraw object on the current image
- Gmagick::edgeimage — Enhance edges within the image
- Gmagick::embossimage — Returns a grayscale image with a three-dimensional effect
- Gmagick::enhanceimage — Improves the quality of a noisy image
- Gmagick::equalizeimage — Equalizes the image histogram
- Gmagick::flipimage — Creates a vertical mirror image
- Gmagick::flopimage — Creates a horizontal mirror image
- Gmagick::frameimage — Adds a simulated three-dimensional border
- Gmagick::gammaimage — Gamma-corrects an image
- Gmagick::getcopyright — Returns the GraphicsMagick API copyright as a string
- Gmagick::getfilename — The filename associated with an image sequence
- Gmagick::getimagebackgroundcolor — Returns the image background color
- Gmagick::getimageblueprimary — Returns the chromaticy blue primary point
- Gmagick::getimagebordercolor — Returns the image border color
- Gmagick::getimagechanneldepth — Gets the depth for a particular image channel
- Gmagick::getimagecolors — Returns the color of the specified colormap index
- Gmagick::getimagecolorspace — Gets the image colorspace
- Gmagick::getimagecompose — Returns the composite operator associated with the image
- Gmagick::getimagedelay — Gets the image delay
- Gmagick::getimagedepth — Gets the depth of the image
- Gmagick::getimagedispose — Gets the image disposal method
- Gmagick::getimageextrema — Gets the extrema for the image
- Gmagick::getimagefilename — Returns the filename of a particular image in a sequence
- Gmagick::getimageformat — Returns the format of a particular image in a sequence
- Gmagick::getimagegamma — Gets the image gamma
- Gmagick::getimagegreenprimary — Returns the chromaticy green primary point
- Gmagick::getimageheight — Returns the image height
- Gmagick::getimagehistogram — Gets the image histogram
- Gmagick::getimageindex — Gets the index of the current active image
- Gmagick::getimageinterlacescheme — Gets the image interlace scheme
- Gmagick::getimageiterations — Gets the image iterations
- Gmagick::getimagematte — Check if the image has a matte channel
- Gmagick::getimagemattecolor — Returns the image matte color
- Gmagick::getimageprofile — Returns the named image profile
- Gmagick::getimageredprimary — Returns the chromaticity red primary point
- Gmagick::getimagerenderingintent — Gets the image rendering intent
- Gmagick::getimageresolution — Gets the image X and Y resolution
- Gmagick::getimagescene — Gets the image scene
- Gmagick::getimagesignature — Generates an SHA-256 message digest
- Gmagick::getimagetype — Gets the potential image type
- Gmagick::getimageunits — Gets the image units of resolution
- Gmagick::getimagewhitepoint — Returns the chromaticity white point
- Gmagick::getimagewidth — Returns the width of the image
- Gmagick::getpackagename — Returns the GraphicsMagick package name
- Gmagick::getquantumdepth — Returns the Gmagick quantum depth as a string
- Gmagick::getreleasedate — Returns the GraphicsMagick release date as a string
- Gmagick::getsamplingfactors — Gets the horizontal and vertical sampling factor
- Gmagick::getsize — Returns the size associated with the Gmagick object
- Gmagick::getversion — Returns the GraphicsMagick API version
- Gmagick::hasnextimage — Checks if the object has more images
- Gmagick::haspreviousimage — Checks if the object has a previous image
- Gmagick::implodeimage — Creates a new image as a copy
- Gmagick::labelimage — Adds a label to an image
- Gmagick::levelimage — Adjusts the levels of an image
- Gmagick::magnifyimage — Scales an image proportionally 2x
- Gmagick::mapimage — Replaces the colors of an image with the closest color from a reference image
- Gmagick::medianfilterimage — Applies a digital filter
- Gmagick::minifyimage — Scales an image proportionally to half its size
- Gmagick::modulateimage — Control the brightness, saturation, and hue
- Gmagick::motionblurimage — Simulates motion blur
- Gmagick::newimage — Creates a new image
- Gmagick::nextimage — Moves to the next image
- Gmagick::normalizeimage — Enhances the contrast of a color image
- Gmagick::oilpaintimage — Simulates an oil painting
- Gmagick::previousimage — Move to the previous image in the object
- Gmagick::profileimage — Adds or removes a profile from an image
- Gmagick::quantizeimage — Analyzes the colors within a reference image
- Gmagick::quantizeimages — The quantizeimages purpose
- Gmagick::queryfontmetrics — Returns an array representing the font metrics
- Gmagick::queryfonts — Returns the configured fonts
- Gmagick::queryformats — Returns formats supported by Gmagick
- Gmagick::radialblurimage — Radial blurs an image
- Gmagick::raiseimage — Creates a simulated 3d button-like effect
- Gmagick::read — Reads image from filename
- Gmagick::readimage — Reads image from filename
- Gmagick::readimageblob — Reads image from a binary string
- Gmagick::readimagefile — The readimagefile purpose
- Gmagick::reducenoiseimage — Smooths the contours of an image
- Gmagick::removeimage — Removes an image from the image list
- Gmagick::removeimageprofile — Removes the named image profile and returns it
- Gmagick::resampleimage — Resample image to desired resolution
- Gmagick::resizeimage — Scales an image
- Gmagick::rollimage — Offsets an image
- Gmagick::rotateimage — Rotates an image
- Gmagick::scaleimage — Scales the size of an image
- Gmagick::separateimagechannel — Separates a channel from the image
- Gmagick::setCompressionQuality — Sets the object's default compression quality
- Gmagick::setfilename — Sets the filename before you read or write the image
- Gmagick::setimagebackgroundcolor — Sets the image background color
- Gmagick::setimageblueprimary — Sets the image chromaticity blue primary point
- Gmagick::setimagebordercolor — Sets the image border color
- Gmagick::setimagechanneldepth — Sets the depth of a particular image channel
- Gmagick::setimagecolorspace — Sets the image colorspace
- Gmagick::setimagecompose — Sets the image composite operator
- Gmagick::setimagedelay — Sets the image delay
- Gmagick::setimagedepth — Sets the image depth
- Gmagick::setimagedispose — Sets the image disposal method
- Gmagick::setimagefilename — Sets the filename of a particular image in a sequence
- Gmagick::setimageformat — Sets the format of a particular image
- Gmagick::setimagegamma — Sets the image gamma
- Gmagick::setimagegreenprimary — Sets the image chromaticity green primary point
- Gmagick::setimageindex — Set the iterator to the position in the image list specified with the index parameter
- Gmagick::setimageinterlacescheme — Sets the interlace scheme of the image
- Gmagick::setimageiterations — Sets the image iterations
- Gmagick::setimageprofile — Adds a named profile to the Gmagick object
- Gmagick::setimageredprimary — Sets the image chromaticity red primary point
- Gmagick::setimagerenderingintent — Sets the image rendering intent
- Gmagick::setimageresolution — Sets the image resolution
- Gmagick::setimagescene — Sets the image scene
- Gmagick::setimagetype — Sets the image type
- Gmagick::setimageunits — Sets the image units of resolution
- Gmagick::setimagewhitepoint — Sets the image chromaticity white point
- Gmagick::setsamplingfactors — Sets the image sampling factors
- Gmagick::setsize — Sets the size of the Gmagick object
- Gmagick::shearimage — Creating a parallelogram
- Gmagick::solarizeimage — Applies a solarizing effect to the image
- Gmagick::spreadimage — Randomly displaces each pixel in a block
- Gmagick::stripimage — Strips an image of all profiles and comments
- Gmagick::swirlimage — Swirls the pixels about the center of the image
- Gmagick::thumbnailimage — Changes the size of an image
- Gmagick::trimimage — Remove edges from the image
- Gmagick::write — Alias of Gmagick::writeimage
- Gmagick::writeimage — Writes an image to the specified filename

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.gmagick.php
