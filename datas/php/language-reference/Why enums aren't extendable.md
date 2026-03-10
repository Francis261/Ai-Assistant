# Why enums aren't extendable

Source: https://devdocs.io/php/language.enumerations.object-differences.inheritance

## Why enums aren't extendable

Classes have contracts on their methods:

```
<?php

class A {}
class B extends A {}

function foo(A $a) {}

function bar(B $b) {
    foo($b);
}
?>
```

This code is type-safe, as B follows the contract of A, and through the magic of co/contra-variance, any expectation one may have of the methods will be preserved, exceptions excepted.

Enums have contracts on their cases, not methods:

```
<?php

enum ErrorCode {
    case SOMETHING_BROKE;
}

function quux(ErrorCode $errorCode)
{
    // When written, this code appears to cover all cases
    match ($errorCode) {
        ErrorCode::SOMETHING_BROKE => true,
    };
}

?>
```

The match statement in the function quux can be static analyzed to cover all of the cases in ErrorCode.

But imagine it was allowed to extend enums:

```
<?php

// Thought experiment code where enums are not final.
// Note, this won't actually work in PHP.
enum MoreErrorCode extends ErrorCode {
    case PEBKAC;
}

function fot(MoreErrorCode $errorCode) {
    quux($errorCode);
}

fot(MoreErrorCode::PEBKAC);

?>
```

Under normal inheritance rules, a class that extends another will pass the type check.

The problem would be that the match statement in quux() no longer covers all the cases. Because it doesn't know about MoreErrorCode::PEBKAC the match will throw an exception.

Because of this enums are final and can't be extended.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.object-differences.inheritance.php
