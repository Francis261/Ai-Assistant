# FUNCTION

Source: https://devdocs.io/redis/function-delete/index

```
FUNCTION DELETE
```

```
FUNCTION DELETE library-name
```

Delete a library and all its functions.

This command deletes the library called library-name and all functions in it. If the library doesn't exist, the server returns an error.

For more information please refer to Introduction to Redis Functions.

## Return

Simple string reply

## Examples

```
redis> FUNCTION LOAD Lua mylib "redis.register_function('myfunc', function(keys, args) return 'hello' end)"
OK
redis> FCALL myfunc 0
"hello"
redis> FUNCTION DELETE mylib
OK
redis> FCALL myfunc 0
(error) ERR Function not found
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/function-delete/
