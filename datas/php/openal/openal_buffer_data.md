# openal_buffer_data

Source: https://devdocs.io/php/function.openal-buffer-data

(PECL openal >= 0.1.0)

openal_buffer_data — Load a buffer with data

### Description

```
openal_buffer_data(
 resource $buffer,
 int $format,
 string $data,
 int $freq
): bool
```

### Parameters

An Open AL(Buffer) resource (previously created by openal_buffer_create()).

Format of data, one of: AL_FORMAT_MONO8, AL_FORMAT_MONO16, AL_FORMAT_STEREO8 and AL_FORMAT_STEREO16

Block of binary audio data in the format and freq specified.

Frequency of data given in Hz.

### Return Values

Returns true on success or false on failure.

### See Also

- openal_buffer_loadwav() - Load a .wav file into a buffer
- openal_stream() - Begin streaming on a source

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openal-buffer-data.php
