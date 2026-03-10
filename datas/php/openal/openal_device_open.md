# openal_device_open

Source: https://devdocs.io/php/function.openal-device-open

(PECL openal >= 0.1.0)

openal_device_open — Initialize the OpenAL audio layer

### Description

```
openal_device_open(string $device_desc = ?): resource
```

### Parameters

Open an audio device optionally specified by device_desc. If device_desc is not specified the first available audio device will be used.

### Return Values

Returns an Open AL(Device) resource on success or false on failure.

### See Also

- openal_device_close() - Close an OpenAL device
- openal_context_create() - Create an audio processing context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openal-device-open.php
