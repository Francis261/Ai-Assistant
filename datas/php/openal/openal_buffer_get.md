# openal_buffer_get

Source: https://devdocs.io/php/function.openal-buffer-get

(PECL openal >= 0.1.0)

openal_buffer_get — Retrieve an OpenAL buffer property

### Description

```
openal_buffer_get(resource $buffer, int $property): int|false
```

### Parameters

An Open AL(Buffer) resource (previously created by openal_buffer_create()).

Specific property, one of: AL_FREQUENCY, AL_BITS, AL_CHANNELS and AL_SIZE.

### Return Values

Returns an integer value appropriate to the property requested or false on failure.

### See Also

- openal_buffer_create() - Generate OpenAL buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openal-buffer-get.php
