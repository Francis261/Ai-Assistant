# Enumerations overview

Source: https://devdocs.io/php/language.enumerations.overview

## Enumerations overview

(PHP 8 >= 8.1.0)

Enumerations, or "Enums", allow a developer to define a custom type that is limited to one of a discrete number of possible values. That can be especially helpful when defining a domain model, as it enables "making invalid states unrepresentable."

Enums appear in many languages with a variety of different features. In PHP, Enums are a special kind of object. The Enum itself is a class, and its possible cases are all single-instance objects of that class. That means Enum cases are valid objects and may be used anywhere an object may be used, including type checks.

The most popular example of enumerations is the built-in boolean type, which is an enumerated type with legal values true and false. Enums allows developers to define their own arbitrarily robust enumerations.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.overview.php
