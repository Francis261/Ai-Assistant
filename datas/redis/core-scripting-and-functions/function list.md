# FUNCTION

Source: https://devdocs.io/redis/function-list/index

```
FUNCTION LIST
```

```
FUNCTION LIST [LIBRARYNAME library-name-pattern] [WITHCODE]
```

Return information about the functions and libraries.

You can use the optional LIBRARYNAME argument to specify a pattern for matching library names. The optional WITHCODE modifier will cause the server to include the libraries source implementation in the reply.

The following information is provided for each of the libraries in the response:

- library_name: the name of the library.
- engine: the engine of the library.
- functions: the list of functions in the library. Each function has the following fields:
  - name: the name of the function.
  - description: the function's description.
  - flags: an array of function flags.
- library_code: the library's source code (when given the WITHCODE modifier).

- name: the name of the function.
- description: the function's description.
- flags: an array of function flags.

For more information please refer to Introduction to Redis Functions.

## Return

Array reply

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/function-list/
