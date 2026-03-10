# ReflectionProperty::isPublic

Source: https://devdocs.io/php/reflectionproperty.ispublic

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::isPublic — Checks if property is public

### Description

```
public ReflectionProperty::isPublic(): bool
```

Checks whether the property is public.

### Parameters

This function has no parameters.

### Return Values

true if the property is marked public, false otherwise.

Note: Note this refers only to the main visibility, and not to a set-visibility, if specified.

### Notes

Note: Be aware that a property being public does not always imply is it publicly writeable. A property could be virtual with no set hook, or it could be readonly and already have been written to, or it could have a set visibility defined that is non-public. In all of those cases, this method will return true but the property will not be writeable.

### See Also

- ReflectionProperty::isProtected() - Checks if property is protected
- ReflectionProperty::isProtectedSet() - Checks whether the property is protected for writing
- ReflectionProperty::isPrivate() - Checks if property is private
- ReflectionProperty::isPrivateSet() - Checks if property is private for writing
- ReflectionProperty::isReadOnly() - Checks if property is readonly
- ReflectionProperty::isStatic() - Checks if property is static

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.ispublic.php
