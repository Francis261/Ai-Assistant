# Resources

Source: https://devdocs.io/php/language.types.resource

## Resources

A resource is a special variable, holding a reference to an external resource. Resources are created and used by special functions. See the appendix for a listing of all these functions and the corresponding resource types.

See also the get_resource_type() function.

### Converting to resource

As resource variables hold special handles to opened files, database connections, image canvas areas and the like, converting to a resource makes no sense.

### Freeing resources

Thanks to the reference-counting system being part of Zend Engine, a resource with no more references to it is detected automatically, and it is freed by the garbage collector. For this reason, it is rarely necessary to free the memory manually.

Note: Persistent database links are an exception to this rule. They are not destroyed by the garbage collector. See the persistent connections section for more information.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.types.resource.php
