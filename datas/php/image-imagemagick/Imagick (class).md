# The Imagick class

Source: https://devdocs.io/php/class.imagick

## Class synopsis

(PECL imagick 2, PECL imagick 3)

```
public adaptiveBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public adaptiveResizeImage(
 int $columns,
 int $rows,
 bool $bestfit = false,
 bool $legacy = false
): bool
```

```
public adaptiveSharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public adaptiveThresholdImage(int $width, int $height, int $offset): bool
```

```
public addImage(Imagick $source): bool
```

```
public addNoiseImage(int $noise_type, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public affineTransformImage(ImagickDraw $matrix): bool
```

```
public animateImages(string $x_server): bool
```

```
public annotateImage(
 ImagickDraw $draw_settings,
 float $x,
 float $y,
 float $angle,
 string $text
): bool
```

```
public appendImages(bool $stack): Imagick
```

```
public autoLevelImage(int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public averageImages(): Imagick
```

```
public blackThresholdImage(mixed $threshold): bool
```

```
public blueShiftImage(float $factor = 1.5): bool
```

```
public blurImage(float $radius, float $sigma, int $channel = ?): bool
```

```
public borderImage(mixed $bordercolor, int $width, int $height): bool
```

```
public brightnessContrastImage(float $brightness, float $contrast, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public charcoalImage(float $radius, float $sigma): bool
```

```
public chopImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

```
public clampImage(int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public clear(): bool
```

```
public clipImage(): bool
```

```
public clipImagePath(string $pathname, string $inside): void
```

```
public clipPathImage(string $pathname, bool $inside): bool
```

```
public clone(): Imagick
```

```
public clutImage(Imagick $lookup_table, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public coalesceImages(): Imagick
```

```
public colorFloodfillImage(
 mixed $fill,
 float $fuzz,
 mixed $bordercolor,
 int $x,
 int $y
): bool
```

```
public colorizeImage(mixed $colorize, mixed $opacity, bool $legacy = false): bool
```

```
public colorMatrixImage(array $color_matrix): bool
```

```
public combineImages(int $channelType): Imagick
```

```
public commentImage(string $comment): bool
```

```
public compareImageChannels(Imagick $image, int $channelType, int $metricType): array
```

```
public compareImageLayers(int $method): Imagick
```

```
public compareImages(Imagick $compare, int $metric): array
```

```
public compositeImage(
 Imagick $composite_object,
 int $composite,
 int $x,
 int $y,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public contrastImage(bool $sharpen): bool
```

```
public contrastStretchImage(float $black_point, float $white_point, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public convolveImage(array $kernel, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public count(int $mode = 0): int
```

```
public cropImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

```
public cropThumbnailImage(int $width, int $height, bool $legacy = false): bool
```

```
public current(): Imagick
```

```
public cycleColormapImage(int $displace): bool
```

```
public decipherImage(string $passphrase): bool
```

```
public deconstructImages(): Imagick
```

```
public deleteImageArtifact(string $artifact): bool
```

```
public deleteImageProperty(string $name): bool
```

```
public deskewImage(float $threshold): bool
```

```
public despeckleImage(): bool
```

```
public destroy(): bool
```

```
public displayImage(string $servername): bool
```

```
public displayImages(string $servername): bool
```

```
public distortImage(int $method, array $arguments, bool $bestfit): bool
```

```
public drawImage(ImagickDraw $draw): bool
```

```
public edgeImage(float $radius): bool
```

```
public embossImage(float $radius, float $sigma): bool
```

```
public encipherImage(string $passphrase): bool
```

```
public enhanceImage(): bool
```

```
public equalizeImage(): bool
```

```
public evaluateImage(int $op, float $constant, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public exportImagePixels(
 int $x,
 int $y,
 int $width,
 int $height,
 string $map,
 int $STORAGE
): array
```

```
public extentImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

```
public filter(ImagickKernel $ImagickKernel, int $channel = Imagick::CHANNEL_UNDEFINED): bool
```

```
public flattenImages(): Imagick
```

```
public flipImage(): bool
```

```
public floodFillPaintImage(
 mixed $fill,
 float $fuzz,
 mixed $target,
 int $x,
 int $y,
 bool $invert,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public flopImage(): bool
```

```
public forwardFourierTransformimage(bool $magnitude): bool
```

```
public frameImage(
 mixed $matte_color,
 int $width,
 int $height,
 int $inner_bevel,
 int $outer_bevel
): bool
```

```
public functionImage(int $function, array $arguments, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public fxImage(string $expression, int $channel = Imagick::CHANNEL_DEFAULT): Imagick
```

```
public gammaImage(float $gamma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public gaussianBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public getColorspace(): int
```

```
public getCompression(): int
```

```
public getCompressionQuality(): int
```

```
public static getCopyright(): string
```

```
public getFilename(): string
```

```
public getFont(): string
```

```
public getFormat(): string
```

```
public getGravity(): int
```

```
public static getHomeURL(): string
```

```
public getImage(): Imagick
```

```
public getImageAlphaChannel(): bool
```

```
public getImageArtifact(string $artifact): string
```

```
public getImageAttribute(string $key): string
```

```
public getImageBackgroundColor(): ImagickPixel
```

```
public getImageBlob(): string
```

```
public getImageBluePrimary(): array
```

```
public getImageBorderColor(): ImagickPixel
```

```
public getImageChannelDepth(int $channel): int
```

```
public getImageChannelDistortion(Imagick $reference, int $channel, int $metric): float
```

```
public getImageChannelDistortions(Imagick $reference, int $metric, int $channel = Imagick::CHANNEL_DEFAULT): float
```

```
public getImageChannelExtrema(int $channel): array
```

```
public getImageChannelKurtosis(int $channel = Imagick::CHANNEL_DEFAULT): array
```

```
public getImageChannelMean(int $channel): array
```

```
public getImageChannelRange(int $channel): array
```

```
public getImageChannelStatistics(): array
```

```
public getImageClipMask(): Imagick
```

```
public getImageColormapColor(int $index): ImagickPixel
```

```
public getImageColors(): int
```

```
public getImageColorspace(): int
```

```
public getImageCompose(): int
```

```
public getImageCompression(): int
```

```
public getImageCompressionQuality(): int
```

```
public getImageDelay(): int
```

```
public getImageDepth(): int
```

```
public getImageDispose(): int
```

```
public getImageDistortion(MagickWand $reference, int $metric): float
```

```
public getImageExtrema(): array
```

```
public getImageFilename(): string
```

```
public getImageFormat(): string
```

```
public getImageGamma(): float
```

```
public getImageGeometry(): array
```

```
public getImageGravity(): int
```

```
public getImageGreenPrimary(): array
```

```
public getImageHeight(): int
```

```
public getImageHistogram(): array
```

```
public getImageIndex(): int
```

```
public getImageInterlaceScheme(): int
```

```
public getImageInterpolateMethod(): int
```

```
public getImageIterations(): int
```

```
public getImageLength(): int
```

```
public getImageMatte(): bool
```

```
public getImageMatteColor(): ImagickPixel
```

```
public getImageMimeType(): string
```

```
public getImageOrientation(): int
```

```
public getImagePage(): array
```

```
public getImagePixelColor(int $x, int $y): ImagickPixel
```

```
public getImageProfile(string $name): string
```

```
public getImageProfiles(string $pattern = "*", bool $include_values = true): array
```

```
public getImageProperties(string $pattern = "*", bool $include_values = true): array
```

```
public getImageProperty(string $name): string
```

```
public getImageRedPrimary(): array
```

```
public getImageRegion(
 int $width,
 int $height,
 int $x,
 int $y
): Imagick
```

```
public getImageRenderingIntent(): int
```

```
public getImageResolution(): array
```

```
public getImagesBlob(): string
```

```
public getImageScene(): int
```

```
public getImageSignature(): string
```

```
public getImageSize(): int
```

```
public getImageTicksPerSecond(): int
```

```
public getImageTotalInkDensity(): float
```

```
public getImageType(): int
```

```
public getImageUnits(): int
```

```
public getImageVirtualPixelMethod(): int
```

```
public getImageWhitePoint(): array
```

```
public getImageWidth(): int
```

```
public getInterlaceScheme(): int
```

```
public getIteratorIndex(): int
```

```
public getNumberImages(): int
```

```
public getOption(string $key): string
```

```
public static getPackageName(): string
```

```
public getPage(): array
```

```
public getPixelIterator(): ImagickPixelIterator
```

```
public getPixelRegionIterator(
 int $x,
 int $y,
 int $columns,
 int $rows
): ImagickPixelIterator
```

```
public getPointSize(): float
```

```
public static getQuantum(): int
```

```
public static getQuantumDepth(): array
```

```
public static getQuantumRange(): array
```

```
public static getRegistry(string $key): string
```

```
public static getReleaseDate(): string
```

```
public static getResource(int $type): int
```

```
public static getResourceLimit(int $type): int
```

```
public getSamplingFactors(): array
```

```
public getSize(): array
```

```
public getSizeOffset(): int
```

```
public static getVersion(): array
```

```
public haldClutImage(Imagick $clut, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public hasNextImage(): bool
```

```
public hasPreviousImage(): bool
```

```
public identifyFormat(string $embedText): string|false
```

```
public identifyImage(bool $appendRawOutput = false): array
```

```
public implodeImage(float $radius): bool
```

```
public importImagePixels(
 int $x,
 int $y,
 int $width,
 int $height,
 string $map,
 int $storage,
 array $pixels
): bool
```

```
public inverseFourierTransformImage(Imagick $complement, bool $magnitude): bool
```

```
public labelImage(string $label): bool
```

```
public levelImage(
 float $blackPoint,
 float $gamma,
 float $whitePoint,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public linearStretchImage(float $blackPoint, float $whitePoint): bool
```

```
public liquidRescaleImage(
 int $width,
 int $height,
 float $delta_x,
 float $rigidity
): bool
```

```
public static listRegistry(): array
```

```
public magnifyImage(): bool
```

```
public mapImage(Imagick $map, bool $dither): bool
```

```
public matteFloodfillImage(
 float $alpha,
 float $fuzz,
 mixed $bordercolor,
 int $x,
 int $y
): bool
```

```
public medianFilterImage(float $radius): bool
```

```
public mergeImageLayers(int $layer_method): Imagick
```

```
public minifyImage(): bool
```

```
public modulateImage(float $brightness, float $saturation, float $hue): bool
```

```
public montageImage(
 ImagickDraw $draw,
 string $tile_geometry,
 string $thumbnail_geometry,
 int $mode,
 string $frame
): Imagick
```

```
public morphImages(int $number_frames): Imagick
```

```
public morphology(
 int $morphologyMethod,
 int $iterations,
 ImagickKernel $ImagickKernel,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public mosaicImages(): Imagick
```

```
public motionBlurImage(
 float $radius,
 float $sigma,
 float $angle,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public negateImage(bool $gray, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public newImage(
 int $cols,
 int $rows,
 mixed $background,
 string $format = ?
): bool
```

```
public newPseudoImage(int $columns, int $rows, string $pseudoString): bool
```

```
public nextImage(): bool
```

```
public normalizeImage(int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public oilPaintImage(float $radius): bool
```

```
public opaquePaintImage(
 mixed $target,
 mixed $fill,
 float $fuzz,
 bool $invert,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public optimizeImageLayers(): bool
```

```
public orderedPosterizeImage(string $threshold_map, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public paintFloodfillImage(
 mixed $fill,
 float $fuzz,
 mixed $bordercolor,
 int $x,
 int $y,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public paintOpaqueImage(
 mixed $target,
 mixed $fill,
 float $fuzz,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public paintTransparentImage(mixed $target, float $alpha, float $fuzz): bool
```

```
public pingImage(string $filename): bool
```

```
public pingImageBlob(string $image): bool
```

```
public pingImageFile(resource $filehandle, string $fileName = ?): bool
```

```
public polaroidImage(ImagickDraw $properties, float $angle): bool
```

```
public posterizeImage(int $levels, bool $dither): bool
```

```
public previewImages(int $preview): bool
```

```
public previousImage(): bool
```

```
public profileImage(string $name, string $profile = ?): bool
```

```
public quantizeImage(
 int $numberColors,
 int $colorspace,
 int $treedepth,
 bool $dither,
 bool $measureError
): bool
```

```
public quantizeImages(
 int $numberColors,
 int $colorspace,
 int $treedepth,
 bool $dither,
 bool $measureError
): bool
```

```
public queryFontMetrics(ImagickDraw $properties, string $text, bool $multiline = ?): array
```

```
public static queryFonts(string $pattern = "*"): array
```

```
public static queryFormats(string $pattern = "*"): array
```

```
public radialBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public raiseImage(
 int $width,
 int $height,
 int $x,
 int $y,
 bool $raise
): bool
```

```
public randomThresholdImage(float $low, float $high, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public readImage(string $filename): bool
```

```
public readImageBlob(string $image, string $filename = ?): bool
```

```
public readImageFile(resource $filehandle, string $fileName = null): bool
```

```
public readImages(array $filenames): bool
```

```
public recolorImage(array $matrix): bool
```

```
public reduceNoiseImage(float $radius): bool
```

```
public remapImage(Imagick $replacement, int $DITHER): bool
```

```
public removeImage(): bool
```

```
public removeImageProfile(string $name): string
```

```
public render(): bool
```

```
public resampleImage(
 float $x_resolution,
 float $y_resolution,
 int $filter,
 float $blur
): bool
```

```
public resetImagePage(string $page): bool
```

```
public resizeImage(
 int $columns,
 int $rows,
 int $filter,
 float $blur,
 bool $bestfit = false,
 bool $legacy = false
): bool
```

```
public rollImage(int $x, int $y): bool
```

```
public rotateImage(mixed $background, float $degrees): bool
```

```
public rotationalBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public roundCorners(
 float $x_rounding,
 float $y_rounding,
 float $stroke_width = 10,
 float $displace = 5,
 float $size_correction = -6
): bool
```

```
public sampleImage(int $columns, int $rows): bool
```

```
public scaleImage(
 int $columns,
 int $rows,
 bool $bestfit = false,
 bool $legacy = false
): bool
```

```
public segmentImage(
 int $COLORSPACE,
 float $cluster_threshold,
 float $smooth_threshold,
 bool $verbose = false
): bool
```

```
public selectiveBlurImage(
 float $radius,
 float $sigma,
 float $threshold,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public separateImageChannel(int $channel): bool
```

```
public sepiaToneImage(float $threshold): bool
```

```
public setBackgroundColor(mixed $background): bool
```

```
public setColorspace(int $COLORSPACE): bool
```

```
public setCompression(int $compression): bool
```

```
public setCompressionQuality(int $quality): bool
```

```
public setFilename(string $filename): bool
```

```
public setFirstIterator(): bool
```

```
public setFont(string $font): bool
```

```
public setFormat(string $format): bool
```

```
public setGravity(int $gravity): bool
```

```
public setImage(Imagick $replace): bool
```

```
public setImageAlphaChannel(int $mode): bool
```

```
public setImageArtifact(string $artifact, string $value): bool
```

```
public setImageAttribute(string $key, string $value): bool
```

```
public setImageBackgroundColor(mixed $background): bool
```

```
public setImageBias(float $bias): bool
```

```
public setImageBiasQuantum(float $bias): void
```

```
public setImageBluePrimary(float $x, float $y): bool
```

```
public setImageBorderColor(mixed $border): bool
```

```
public setImageChannelDepth(int $channel, int $depth): bool
```

```
public setImageClipMask(Imagick $clip_mask): bool
```

```
public setImageColormapColor(int $index, ImagickPixel $color): bool
```

```
public setImageColorspace(int $colorspace): bool
```

```
public setImageCompose(int $compose): bool
```

```
public setImageCompression(int $compression): bool
```

```
public setImageCompressionQuality(int $quality): bool
```

```
public setImageDelay(int $delay): bool
```

```
public setImageDepth(int $depth): bool
```

```
public setImageDispose(int $dispose): bool
```

```
public setImageExtent(int $columns, int $rows): bool
```

```
public setImageFilename(string $filename): bool
```

```
public setImageFormat(string $format): bool
```

```
public setImageGamma(float $gamma): bool
```

```
public setImageGravity(int $gravity): bool
```

```
public setImageGreenPrimary(float $x, float $y): bool
```

```
public setImageIndex(int $index): bool
```

```
public setImageInterlaceScheme(int $interlace_scheme): bool
```

```
public setImageInterpolateMethod(int $method): bool
```

```
public setImageIterations(int $iterations): bool
```

```
public setImageMatte(bool $matte): bool
```

```
public setImageMatteColor(mixed $matte): bool
```

```
public setImageOpacity(float $opacity): bool
```

```
public setImageOrientation(int $orientation): bool
```

```
public setImagePage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

```
public setImageProfile(string $name, string $profile): bool
```

```
public setImageProperty(string $name, string $value): bool
```

```
public setImageRedPrimary(float $x, float $y): bool
```

```
public setImageRenderingIntent(int $rendering_intent): bool
```

```
public setImageResolution(float $x_resolution, float $y_resolution): bool
```

```
public setImageScene(int $scene): bool
```

```
public setImageTicksPerSecond(int $ticks_per_second): bool
```

```
public setImageType(int $image_type): bool
```

```
public setImageUnits(int $units): bool
```

```
public setImageVirtualPixelMethod(int $method): bool
```

```
public setImageWhitePoint(float $x, float $y): bool
```

```
public setInterlaceScheme(int $interlace_scheme): bool
```

```
public setIteratorIndex(int $index): bool
```

```
public setLastIterator(): bool
```

```
public setOption(string $key, string $value): bool
```

```
public setPage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

```
public setPointSize(float $point_size): bool
```

```
public setProgressMonitor(callable $callback): bool
```

```
public static setRegistry(string $key, string $value): bool
```

```
public setResolution(float $x_resolution, float $y_resolution): bool
```

```
public static setResourceLimit(int $type, int $limit): bool
```

```
public setSamplingFactors(array $factors): bool
```

```
public setSize(int $columns, int $rows): bool
```

```
public setSizeOffset(int $columns, int $rows, int $offset): bool
```

```
public setType(int $image_type): bool
```

```
public shadeImage(bool $gray, float $azimuth, float $elevation): bool
```

```
public shadowImage(
 float $opacity,
 float $sigma,
 int $x,
 int $y
): bool
```

```
public sharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public shaveImage(int $columns, int $rows): bool
```

```
public shearImage(mixed $background, float $x_shear, float $y_shear): bool
```

```
public sigmoidalContrastImage(
 bool $sharpen,
 float $alpha,
 float $beta,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public sketchImage(float $radius, float $sigma, float $angle): bool
```

```
public smushImages(bool $stack, int $offset): Imagick
```

```
public solarizeImage(int $threshold): bool
```

```
public sparseColorImage(int $SPARSE_METHOD, array $arguments, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public spliceImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

```
public spreadImage(float $radius): bool
```

```
public statisticImage(
 int $type,
 int $width,
 int $height,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public steganoImage(Imagick $watermark_wand, int $offset): Imagick
```

```
public stereoImage(Imagick $offset_wand): bool
```

```
public stripImage(): bool
```

```
public subImageMatch(Imagick $Imagick, array &$offset = ?, float &$similarity = ?): Imagick
```

```
swirlImage(float $degrees): bool
```

```
textureImage(Imagick $texture_wand): Imagick
```

```
public thresholdImage(float $threshold, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

```
public thumbnailImage(
 int $columns,
 int $rows,
 bool $bestfit = false,
 bool $fill = false,
 bool $legacy = false
): bool
```

```
public tintImage(mixed $tint, mixed $opacity, bool $legacy = false): bool
```

```
public __toString(): string
```

```
public transformImage(string $crop, string $geometry): Imagick
```

```
public transformImageColorspace(int $colorspace): bool
```

```
public transparentPaintImage(
 mixed $target,
 float $alpha,
 float $fuzz,
 bool $invert
): bool
```

```
public transposeImage(): bool
```

```
public transverseImage(): bool
```

```
public trimImage(float $fuzz): bool
```

```
public uniqueImageColors(): bool
```

```
public unsharpMaskImage(
 float $radius,
 float $sigma,
 float $amount,
 float $threshold,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

```
public valid(): bool
```

```
public vignetteImage(
 float $blackPoint,
 float $whitePoint,
 int $x,
 int $y
): bool
```

```
public waveImage(float $amplitude, float $length): bool
```

```
public whiteThresholdImage(mixed $threshold): bool
```

```
public writeImage(string $filename = NULL): bool
```

```
public writeImageFile(resource $filehandle, string $format = ?): bool
```

```
public writeImages(string $filename, bool $adjoin): bool
```

```
public writeImagesFile(resource $filehandle, string $format = ?): bool
```

## Image methods and global methods

The Imagick class has the ability to hold and operate on multiple images simultaneously. This is achieved through an internal stack. There is always an internal pointer that points at the current image. Some functions operate on all images in the Imagick class, but most operate only on the current image in the internal stack. As a convention, method names can contain the word Image to denote they affect only the current image in the stack.

## Class Methods

Because there are so many methods, here is a handy list of methods, somewhat reduced to their general purpose:

## Table of Contents

- Imagick::adaptiveBlurImage — Adds adaptive blur filter to image
- Imagick::adaptiveResizeImage — Adaptively resize image with data dependent triangulation
- Imagick::adaptiveSharpenImage — Adaptively sharpen the image
- Imagick::adaptiveThresholdImage — Selects a threshold for each pixel based on a range of intensity
- Imagick::addImage — Adds new image to Imagick object image list
- Imagick::addNoiseImage — Adds random noise to the image
- Imagick::affineTransformImage — Transforms an image
- Imagick::animateImages — Animates an image or images
- Imagick::annotateImage — Annotates an image with text
- Imagick::appendImages — Append a set of images
- Imagick::autoLevelImage — Adjusts the levels of a particular image channel
- Imagick::averageImages — Average a set of images
- Imagick::blackThresholdImage — Forces all pixels below the threshold into black
- Imagick::blueShiftImage — Mutes the colors of the image
- Imagick::blurImage — Adds blur filter to image
- Imagick::borderImage — Surrounds the image with a border
- Imagick::brightnessContrastImage — Change the brightness and/or contrast of an image
- Imagick::charcoalImage — Simulates a charcoal drawing
- Imagick::chopImage — Removes a region of an image and trims
- Imagick::clampImage — Restricts the color range from 0 to the quantum depth.
- Imagick::clear — Clears all resources associated to Imagick object
- Imagick::clipImage — Clips along the first path from the 8BIM profile
- Imagick::clipImagePath — Clips along the named paths from the 8BIM profile, if present
- Imagick::clipPathImage — Clips along the named paths from the 8BIM profile
- Imagick::clone — Makes an exact copy of the Imagick object
- Imagick::clutImage — Replaces colors in the image
- Imagick::coalesceImages — Composites a set of images
- Imagick::colorFloodfillImage — Changes the color value of any pixel that matches target
- Imagick::colorizeImage — Blends the fill color with the image
- Imagick::colorMatrixImage — Apply color transformation to an image
- Imagick::combineImages — Combines one or more images into a single image
- Imagick::commentImage — Adds a comment to your image
- Imagick::compareImageChannels — Returns the difference in one or more images
- Imagick::compareImageLayers — Returns the maximum bounding region between images
- Imagick::compareImages — Compares an image to a reconstructed image
- Imagick::compositeImage — Composite one image onto another
- Imagick::__construct — The Imagick constructor
- Imagick::contrastImage — Change the contrast of the image
- Imagick::contrastStretchImage — Enhances the contrast of a color image
- Imagick::convolveImage — Applies a custom convolution kernel to the image
- Imagick::count — Get the number of images
- Imagick::cropImage — Extracts a region of the image
- Imagick::cropThumbnailImage — Creates a crop thumbnail
- Imagick::current — Returns a reference to the current Imagick object
- Imagick::cycleColormapImage — Displaces an image's colormap
- Imagick::decipherImage — Deciphers an image
- Imagick::deconstructImages — Returns certain pixel differences between images
- Imagick::deleteImageArtifact — Delete image artifact
- Imagick::deleteImageProperty — Deletes an image property
- Imagick::deskewImage — Removes skew from the image
- Imagick::despeckleImage — Reduces the speckle noise in an image
- Imagick::destroy — Destroys the Imagick object
- Imagick::displayImage — Displays an image
- Imagick::displayImages — Displays an image or image sequence
- Imagick::distortImage — Distorts an image using various distortion methods
- Imagick::drawImage — Renders the ImagickDraw object on the current image
- Imagick::edgeImage — Enhance edges within the image
- Imagick::embossImage — Returns a grayscale image with a three-dimensional effect
- Imagick::encipherImage — Enciphers an image
- Imagick::enhanceImage — Improves the quality of a noisy image
- Imagick::equalizeImage — Equalizes the image histogram
- Imagick::evaluateImage — Applies an expression to an image
- Imagick::exportImagePixels — Exports raw image pixels
- Imagick::extentImage — Set image size
- Imagick::filter — Applies a custom convolution kernel to the image
- Imagick::flattenImages — Merges a sequence of images
- Imagick::flipImage — Creates a vertical mirror image
- Imagick::floodFillPaintImage — Changes the color value of any pixel that matches target
- Imagick::flopImage — Creates a horizontal mirror image
- Imagick::forwardFourierTransformImage — Implements the discrete Fourier transform (DFT)
- Imagick::frameImage — Adds a simulated three-dimensional border
- Imagick::functionImage — Applies a function on the image
- Imagick::fxImage — Evaluate expression for each pixel in the image
- Imagick::gammaImage — Gamma-corrects an image
- Imagick::gaussianBlurImage — Blurs an image
- Imagick::getColorspace — Gets the colorspace
- Imagick::getCompression — Gets the object compression type
- Imagick::getCompressionQuality — Gets the object compression quality
- Imagick::getCopyright — Returns the ImageMagick API copyright as a string
- Imagick::getFilename — The filename associated with an image sequence
- Imagick::getFont — Gets font
- Imagick::getFormat — Returns the format of the Imagick object
- Imagick::getGravity — Gets the gravity
- Imagick::getHomeURL — Returns the ImageMagick home URL
- Imagick::getImage — Returns a new Imagick object
- Imagick::getImageAlphaChannel — Checks if the image has an alpha channel
- Imagick::getImageArtifact — Get image artifact
- Imagick::getImageAttribute — Returns a named attribute
- Imagick::getImageBackgroundColor — Returns the image background color
- Imagick::getImageBlob — Returns the image sequence as a blob
- Imagick::getImageBluePrimary — Returns the chromaticy blue primary point
- Imagick::getImageBorderColor — Returns the image border color
- Imagick::getImageChannelDepth — Gets the depth for a particular image channel
- Imagick::getImageChannelDistortion — Compares image channels of an image to a reconstructed image
- Imagick::getImageChannelDistortions — Gets channel distortions
- Imagick::getImageChannelExtrema — Gets the extrema for one or more image channels
- Imagick::getImageChannelKurtosis — The getImageChannelKurtosis purpose
- Imagick::getImageChannelMean — Gets the mean and standard deviation
- Imagick::getImageChannelRange — Gets channel range
- Imagick::getImageChannelStatistics — Returns statistics for each channel in the image
- Imagick::getImageClipMask — Gets image clip mask
- Imagick::getImageColormapColor — Returns the color of the specified colormap index
- Imagick::getImageColors — Gets the number of unique colors in the image
- Imagick::getImageColorspace — Gets the image colorspace
- Imagick::getImageCompose — Returns the composite operator associated with the image
- Imagick::getImageCompression — Gets the current image's compression type
- Imagick::getImageCompressionQuality — Gets the current image's compression quality
- Imagick::getImageDelay — Gets the image delay
- Imagick::getImageDepth — Gets the image depth
- Imagick::getImageDispose — Gets the image disposal method
- Imagick::getImageDistortion — Compares an image to a reconstructed image
- Imagick::getImageExtrema — Gets the extrema for the image
- Imagick::getImageFilename — Returns the filename of a particular image in a sequence
- Imagick::getImageFormat — Returns the format of a particular image in a sequence
- Imagick::getImageGamma — Gets the image gamma
- Imagick::getImageGeometry — Gets the width and height as an associative array
- Imagick::getImageGravity — Gets the image gravity
- Imagick::getImageGreenPrimary — Returns the chromaticy green primary point
- Imagick::getImageHeight — Returns the image height
- Imagick::getImageHistogram — Gets the image histogram
- Imagick::getImageIndex — Gets the index of the current active image
- Imagick::getImageInterlaceScheme — Gets the image interlace scheme
- Imagick::getImageInterpolateMethod — Returns the interpolation method
- Imagick::getImageIterations — Gets the image iterations
- Imagick::getImageLength — Returns the image length in bytes
- Imagick::getImageMatte — Return if the image has a matte channel
- Imagick::getImageMatteColor — Returns the image matte color
- Imagick::getImageMimeType — Returns the image mime-type
- Imagick::getImageOrientation — Gets the image orientation
- Imagick::getImagePage — Returns the page geometry
- Imagick::getImagePixelColor — Returns the color of the specified pixel
- Imagick::getImageProfile — Returns the named image profile
- Imagick::getImageProfiles — Returns the image profiles
- Imagick::getImageProperties — Returns the image properties
- Imagick::getImageProperty — Returns the named image property
- Imagick::getImageRedPrimary — Returns the chromaticity red primary point
- Imagick::getImageRegion — Extracts a region of the image
- Imagick::getImageRenderingIntent — Gets the image rendering intent
- Imagick::getImageResolution — Gets the image X and Y resolution
- Imagick::getImagesBlob — Returns all image sequences as a blob
- Imagick::getImageScene — Gets the image scene
- Imagick::getImageSignature — Generates an SHA-256 message digest
- Imagick::getImageSize — Returns the image length in bytes
- Imagick::getImageTicksPerSecond — Gets the image ticks-per-second
- Imagick::getImageTotalInkDensity — Gets the image total ink density
- Imagick::getImageType — Gets the potential image type
- Imagick::getImageUnits — Gets the image units of resolution
- Imagick::getImageVirtualPixelMethod — Returns the virtual pixel method
- Imagick::getImageWhitePoint — Returns the chromaticity white point
- Imagick::getImageWidth — Returns the image width
- Imagick::getInterlaceScheme — Gets the object interlace scheme
- Imagick::getIteratorIndex — Gets the index of the current active image
- Imagick::getNumberImages — Returns the number of images in the object
- Imagick::getOption — Returns a value associated with the specified key
- Imagick::getPackageName — Returns the ImageMagick package name
- Imagick::getPage — Returns the page geometry
- Imagick::getPixelIterator — Returns a MagickPixelIterator
- Imagick::getPixelRegionIterator — Get an ImagickPixelIterator for an image section
- Imagick::getPointSize — Gets point size
- Imagick::getQuantum — Returns the ImageMagick quantum range
- Imagick::getQuantumDepth — Gets the quantum depth
- Imagick::getQuantumRange — Returns the Imagick quantum range
- Imagick::getRegistry — Get a StringRegistry entry
- Imagick::getReleaseDate — Returns the ImageMagick release date
- Imagick::getResource — Returns the specified resource's memory usage
- Imagick::getResourceLimit — Returns the specified resource limit
- Imagick::getSamplingFactors — Gets the horizontal and vertical sampling factor
- Imagick::getSize — Returns the size associated with the Imagick object
- Imagick::getSizeOffset — Returns the size offset
- Imagick::getVersion — Returns the ImageMagick API version
- Imagick::haldClutImage — Replaces colors in the image
- Imagick::hasNextImage — Checks if the object has more images
- Imagick::hasPreviousImage — Checks if the object has a previous image
- Imagick::identifyFormat — Formats a string with image details
- Imagick::identifyImage — Identifies an image and fetches attributes
- Imagick::implodeImage — Creates a new image as a copy
- Imagick::importImagePixels — Imports image pixels
- Imagick::inverseFourierTransformImage — Implements the inverse discrete Fourier transform (DFT)
- Imagick::labelImage — Adds a label to an image
- Imagick::levelImage — Adjusts the levels of an image
- Imagick::linearStretchImage — Stretches with saturation the image intensity
- Imagick::liquidRescaleImage — Animates an image or images
- Imagick::listRegistry — List all the registry settings
- Imagick::magnifyImage — Scales an image proportionally 2x
- Imagick::mapImage — Replaces the colors of an image with the closest color from a reference image
- Imagick::matteFloodfillImage — Changes the transparency value of a color
- Imagick::medianFilterImage — Applies a digital filter
- Imagick::mergeImageLayers — Merges image layers
- Imagick::minifyImage — Scales an image proportionally to half its size
- Imagick::modulateImage — Control the brightness, saturation, and hue
- Imagick::montageImage — Creates a composite image
- Imagick::morphImages — Method morphs a set of images
- Imagick::morphology — Applies a user supplied kernel to the image according to the given morphology method.
- Imagick::mosaicImages — Forms a mosaic from images
- Imagick::motionBlurImage — Simulates motion blur
- Imagick::negateImage — Negates the colors in the reference image
- Imagick::newImage — Creates a new image
- Imagick::newPseudoImage — Creates a new image
- Imagick::nextImage — Moves to the next image
- Imagick::normalizeImage — Enhances the contrast of a color image
- Imagick::oilPaintImage — Simulates an oil painting
- Imagick::opaquePaintImage — Changes the color value of any pixel that matches target
- Imagick::optimizeImageLayers — Removes repeated portions of images to optimize
- Imagick::orderedPosterizeImage — Performs an ordered dither
- Imagick::paintFloodfillImage — Changes the color value of any pixel that matches target
- Imagick::paintOpaqueImage — Change any pixel that matches color
- Imagick::paintTransparentImage — Changes any pixel that matches color with the color defined by fill
- Imagick::pingImage — Fetch basic attributes about the image
- Imagick::pingImageBlob — Quickly fetch attributes
- Imagick::pingImageFile — Get basic image attributes in a lightweight manner
- Imagick::polaroidImage — Simulates a Polaroid picture
- Imagick::posterizeImage — Reduces the image to a limited number of color level
- Imagick::previewImages — Quickly pin-point appropriate parameters for image processing
- Imagick::previousImage — Move to the previous image in the object
- Imagick::profileImage — Adds or removes a profile from an image
- Imagick::quantizeImage — Analyzes the colors within a reference image
- Imagick::quantizeImages — Analyzes the colors within a sequence of images
- Imagick::queryFontMetrics — Returns an array representing the font metrics
- Imagick::queryFonts — Returns the configured fonts
- Imagick::queryFormats — Returns formats supported by Imagick
- Imagick::radialBlurImage — Radial blurs an image
- Imagick::raiseImage — Creates a simulated 3d button-like effect
- Imagick::randomThresholdImage — Creates a high-contrast, two-color image
- Imagick::readImage — Reads image from filename
- Imagick::readImageBlob — Reads image from a binary string
- Imagick::readImageFile — Reads image from open filehandle
- Imagick::readimages — Reads image from an array of filenames
- Imagick::recolorImage — Recolors image
- Imagick::reduceNoiseImage — Smooths the contours of an image
- Imagick::remapImage — Remaps image colors
- Imagick::removeImage — Removes an image from the image list
- Imagick::removeImageProfile — Removes the named image profile and returns it
- Imagick::render — Renders all preceding drawing commands
- Imagick::resampleImage — Resample image to desired resolution
- Imagick::resetImagePage — Reset image page
- Imagick::resizeImage — Scales an image
- Imagick::rollImage — Offsets an image
- Imagick::rotateImage — Rotates an image
- Imagick::rotationalBlurImage — Rotational blurs an image
- Imagick::roundCorners — Rounds image corners
- Imagick::sampleImage — Scales an image with pixel sampling
- Imagick::scaleImage — Scales the size of an image
- Imagick::segmentImage — Segments an image
- Imagick::selectiveBlurImage — Selectively blur an image within a contrast threshold
- Imagick::separateImageChannel — Separates a channel from the image
- Imagick::sepiaToneImage — Sepia tones an image
- Imagick::setBackgroundColor — Sets the object's default background color
- Imagick::setColorspace — Set colorspace
- Imagick::setCompression — Sets the object's default compression type
- Imagick::setCompressionQuality — Sets the object's default compression quality
- Imagick::setFilename — Sets the filename before you read or write the image
- Imagick::setFirstIterator — Sets the Imagick iterator to the first image
- Imagick::setFont — Sets font
- Imagick::setFormat — Sets the format of the Imagick object
- Imagick::setGravity — Sets the gravity
- Imagick::setImage — Replaces image in the object
- Imagick::setImageAlphaChannel — Sets image alpha channel
- Imagick::setImageArtifact — Set image artifact
- Imagick::setImageAttribute — Sets an image attribute
- Imagick::setImageBackgroundColor — Sets the image background color
- Imagick::setImageBias — Sets the image bias for any method that convolves an image
- Imagick::setImageBiasQuantum — Sets the image bias
- Imagick::setImageBluePrimary — Sets the image chromaticity blue primary point
- Imagick::setImageBorderColor — Sets the image border color
- Imagick::setImageChannelDepth — Sets the depth of a particular image channel
- Imagick::setImageClipMask — Sets image clip mask
- Imagick::setImageColormapColor — Sets the color of the specified colormap index
- Imagick::setImageColorspace — Sets the image colorspace
- Imagick::setImageCompose — Sets the image composite operator
- Imagick::setImageCompression — Sets the image compression
- Imagick::setImageCompressionQuality — Sets the image compression quality
- Imagick::setImageDelay — Sets the image delay
- Imagick::setImageDepth — Sets the image depth
- Imagick::setImageDispose — Sets the image disposal method
- Imagick::setImageExtent — Sets the image size
- Imagick::setImageFilename — Sets the filename of a particular image
- Imagick::setImageFormat — Sets the format of a particular image
- Imagick::setImageGamma — Sets the image gamma
- Imagick::setImageGravity — Sets the image gravity
- Imagick::setImageGreenPrimary — Sets the image chromaticity green primary point
- Imagick::setImageIndex — Set the iterator position
- Imagick::setImageInterlaceScheme — Sets the image compression
- Imagick::setImageInterpolateMethod — Sets the image interpolate pixel method
- Imagick::setImageIterations — Sets the image iterations
- Imagick::setImageMatte — Sets the image matte channel
- Imagick::setImageMatteColor — Sets the image matte color
- Imagick::setImageOpacity — Sets the image opacity level
- Imagick::setImageOrientation — Sets the image orientation
- Imagick::setImagePage — Sets the page geometry of the image
- Imagick::setImageProfile — Adds a named profile to the Imagick object
- Imagick::setImageProperty — Sets an image property
- Imagick::setImageRedPrimary — Sets the image chromaticity red primary point
- Imagick::setImageRenderingIntent — Sets the image rendering intent
- Imagick::setImageResolution — Sets the image resolution
- Imagick::setImageScene — Sets the image scene
- Imagick::setImageTicksPerSecond — Sets the image ticks-per-second
- Imagick::setImageType — Sets the image type
- Imagick::setImageUnits — Sets the image units of resolution
- Imagick::setImageVirtualPixelMethod — Sets the image virtual pixel method
- Imagick::setImageWhitePoint — Sets the image chromaticity white point
- Imagick::setInterlaceScheme — Sets the image compression
- Imagick::setIteratorIndex — Set the iterator position
- Imagick::setLastIterator — Sets the Imagick iterator to the last image
- Imagick::setOption — Set an option
- Imagick::setPage — Sets the page geometry of the Imagick object
- Imagick::setPointSize — Sets point size
- Imagick::setProgressMonitor — Set a callback to be called during processing
- Imagick::setRegistry — Sets the ImageMagick registry entry named key to value
- Imagick::setResolution — Sets the image resolution
- Imagick::setResourceLimit — Sets the limit for a particular resource
- Imagick::setSamplingFactors — Sets the image sampling factors
- Imagick::setSize — Sets the size of the Imagick object
- Imagick::setSizeOffset — Sets the size and offset of the Imagick object
- Imagick::setType — Sets the image type attribute
- Imagick::shadeImage — Creates a 3D effect
- Imagick::shadowImage — Simulates an image shadow
- Imagick::sharpenImage — Sharpens an image
- Imagick::shaveImage — Shaves pixels from the image edges
- Imagick::shearImage — Creating a parallelogram
- Imagick::sigmoidalContrastImage — Adjusts the contrast of an image
- Imagick::sketchImage — Simulates a pencil sketch
- Imagick::smushImages — Takes all images from the current image pointer to the end of the image list and smushs them
- Imagick::solarizeImage — Applies a solarizing effect to the image
- Imagick::sparseColorImage — Interpolates colors
- Imagick::spliceImage — Splices a solid color into the image
- Imagick::spreadImage — Randomly displaces each pixel in a block
- Imagick::statisticImage — Modifies image using a statistics function
- Imagick::steganoImage — Hides a digital watermark within the image
- Imagick::stereoImage — Composites two images
- Imagick::stripImage — Strips an image of all profiles and comments
- Imagick::subImageMatch — Searches for a subimage in the current image and returns a similarity image
- Imagick::swirlImage — Swirls the pixels about the center of the image
- Imagick::textureImage — Repeatedly tiles the texture image
- Imagick::thresholdImage — Changes the value of individual pixels based on a threshold
- Imagick::thumbnailImage — Changes the size of an image
- Imagick::tintImage — Applies a color vector to each pixel in the image
- Imagick::__toString — Returns the image as a string
- Imagick::transformImage — Convenience method for setting crop size and the image geometry
- Imagick::transformImageColorspace — Transforms an image to a new colorspace
- Imagick::transparentPaintImage — Paints pixels transparent
- Imagick::transposeImage — Creates a vertical mirror image
- Imagick::transverseImage — Creates a horizontal mirror image
- Imagick::trimImage — Remove edges from the image
- Imagick::uniqueImageColors — Discards all but one of any pixel color
- Imagick::unsharpMaskImage — Sharpens an image
- Imagick::valid — Checks if the current item is valid
- Imagick::vignetteImage — Adds vignette filter to the image
- Imagick::waveImage — Applies wave filter to the image
- Imagick::whiteThresholdImage — Force all pixels above the threshold into white
- Imagick::writeImage — Writes an image to the specified filename
- Imagick::writeImageFile — Writes an image to a filehandle
- Imagick::writeImages — Writes an image or image sequence
- Imagick::writeImagesFile — Writes frames to a filehandle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.imagick.php
