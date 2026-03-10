# MODULE

Source: https://devdocs.io/redis/module-unload/index

```
MODULE UNLOAD
```

```
MODULE UNLOAD name
```

Unloads a module.

This command unloads the module specified by name. Note that the module's name is reported by the MODULE LIST command, and may differ from the dynamic library's filename.

Known limitations:

- Modules that register custom data types can not be unloaded.

## Return

Simple string reply: OK if module was unloaded.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/module-unload/
