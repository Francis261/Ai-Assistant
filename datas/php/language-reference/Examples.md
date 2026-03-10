# Examples

Source: https://devdocs.io/php/language.enumerations.examples

## Examples

Example #1 Basic limited values

```
<?php

enum SortOrder
{
    case Asc;
    case Desc;
}

function query($fields, $filter, SortOrder $order = SortOrder::Asc)
{
     /* ... */
}
?>
```

The query() function can now proceed safe in the knowledge that $order is guaranteed to be either SortOrder::Asc or SortOrder::Desc. Any other value would have resulted in a TypeError, so no further error checking or testing is needed.

Example #2 Advanced exclusive values

```
<?php

enum UserStatus: string
{
    case Pending = 'P';
    case Active = 'A';
    case Suspended = 'S';
    case CanceledByUser = 'C';

    public function label(): string
    {
        return match($this) {
            self::Pending => 'Pending',
            self::Active => 'Active',
            self::Suspended => 'Suspended',
            self::CanceledByUser => 'Canceled by user',
        };
    }
}
?>
```

In this example, a user's status may be one of, and exclusively, UserStatus::Pending, UserStatus::Active, UserStatus::Suspended, or UserStatus::CanceledByUser. A function can type a parameter against UserStatus and then only accept those four values, period.

All four values have a label() method, which returns a human-readable string. That string is independent of the "machine name" scalar equivalent string, which can be used in, for example, a database field or an HTML select box.

```
<?php

foreach (UserStatus::cases() as $case) {
    printf('<option value="%s">%s</option>\n', $case->value, $case->label());
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.examples.php
