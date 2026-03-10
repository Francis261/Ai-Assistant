# openal_stream

Source: https://devdocs.io/php/function.openal-stream

(PECL openal >= 0.1.0)

openal_stream — Begin streaming on a source

### Description

```
openal_stream(resource $source, int $format, int $rate): resource|false
```

### Parameters

An Open AL(Source) resource (previously created by openal_source_create()).

Format of data, one of: AL_FORMAT_MONO8, AL_FORMAT_MONO16, AL_FORMAT_STEREO8 and AL_FORMAT_STEREO16

Frequency of data to stream given in Hz.

### Return Values

Returns a stream resource on success or false on failure.

### See Also

- openal_source_create() - Generate a source resource
- fwrite() - Binary-safe file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openal-stream.php
