# openal_source_get

Source: https://devdocs.io/php/function.openal-source-get

(PECL openal >= 0.1.0)

openal_source_get — Retrieve an OpenAL source property

### Description

```
openal_source_get(resource $source, int $property): mixed
```

### Parameters

An Open AL(Source) resource (previously created by openal_source_create()).

Property to get, one of: AL_SOURCE_RELATIVE (int), AL_SOURCE_STATE (int), AL_PITCH (float), AL_GAIN (float), AL_MIN_GAIN (float), AL_MAX_GAIN (float), AL_MAX_DISTANCE (float), AL_ROLLOFF_FACTOR (float), AL_CONE_OUTER_GAIN (float), AL_CONE_INNER_ANGLE (float), AL_CONE_OUTER_ANGLE (float), AL_REFERENCE_DISTANCE (float), AL_POSITION (array(float,float,float)), AL_VELOCITY (array(float,float,float)), AL_DIRECTION (array(float,float,float)).

### Return Values

Returns the type associated with the property being retrieved or false on failure.

### See Also

- openal_source_create() - Generate a source resource
- openal_source_set() - Set source property
- openal_source_play() - Start playing the source

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openal-source-get.php
