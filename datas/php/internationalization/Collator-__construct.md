# Collator::__construct

Source: https://devdocs.io/php/collator.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::__construct — Create a collator

### Description

Creates a new instance of Collator.

### Parameters

The locale whose collation rules should be used. Special values for locales can be passed in - if an empty string is passed for the locale, the default locale's collation rules will be used. If "root" is passed, » UCA rules will be used.

The locale attribute is typically the most important attribute for correct sorting and matching, according to the user expectations in different countries and regions. The default » UCA ordering will only sort a few languages such as Dutch and Portuguese correctly ("correctly" meaning according to the normal expectations for users of the languages). Otherwise, you need to supply the locale to UCA in order to properly collate text for a given language. Thus a locale needs to be supplied so as to choose a collator that is correctly tailored for that locale. The choice of a locale will automatically preset the values for all of the attributes to something that is reasonable for that locale. Thus most of the time the other attributes do not need to be explicitly set. In some cases, the choice of locale will make a difference in string comparison performance and/or sort key length.

### Errors/Exceptions

Returns an "empty" object on error. Use intl_get_error_code() and/or intl_get_error_message() to know what happened.

### Examples

Example #1 Collator::__construct() example

```
<?php
$coll = new Collator('en_CA');
?>
```

### See Also

- Collator::create() - Create a collator
- collator_create() - Create a collator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.construct.php
