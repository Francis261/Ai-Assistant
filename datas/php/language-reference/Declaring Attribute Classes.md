# Declaring Attribute Classes

Source: https://devdocs.io/php/language.attributes.classes

## Declaring Attribute Classes

It is recommended to define a separate class for each attribute. In the simplest case, an empty class with the #[Attribute] declaration is sufficient. The attribute can be imported from the global namespace using a use statement.

Example #1 Simple Attribute Class

```
<?php

namespace Example;

use Attribute;

#[Attribute]
class MyAttribute
{
}
```

To restrict the types of declarations an attribute can be applied to, pass a bitmask as the first argument to the #[Attribute] declaration.

Example #2 Using target specification to restrict where attributes can be used

```
<?php

namespace Example;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION)]
class MyAttribute
{
}
```

Declaring MyAttribute on another type will now throw an exception during the call to ReflectionAttribute::newInstance()

The following targets can be specified:

- Attribute::TARGET_CLASS
- Attribute::TARGET_FUNCTION
- Attribute::TARGET_METHOD
- Attribute::TARGET_PROPERTY
- Attribute::TARGET_CLASS_CONSTANT
- Attribute::TARGET_PARAMETER
- Attribute::TARGET_ALL

By default, an attribute can only be used once per declaration. To allow an attribute to be repeatable, specify it in the bitmask of the #[Attribute] declaration using the Attribute::IS_REPEATABLE flag.

Example #3 Using IS_REPEATABLE to allow attribute on a declaration multiple times

```
<?php

namespace Example;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION | Attribute::IS_REPEATABLE)]
class MyAttribute
{
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.attributes.classes.php
