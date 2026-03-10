# Operator Precedence

Source: https://devdocs.io/php/language.operators.precedence

## Operator Precedence

The precedence of an operator specifies how "tightly" it binds two expressions together. For example, in the expression 1 +
 5 * 3, the answer is 16 and not 18 because the multiplication ("*") operator has a higher precedence than the addition ("+") operator. Parentheses may be used to force precedence, if necessary. For instance: (1 + 5) * 3 evaluates to 18.

When operators have equal precedence their associativity decides how the operators are grouped. For example "-" is left-associative, so 1 - 2 - 3 is grouped as (1 - 2) - 3 and evaluates to -4. "=" on the other hand is right-associative, so $a = $b = $c is grouped as $a = ($b = $c).

Operators of equal precedence that are non-associative cannot be used next to each other, for example 1 < 2 > 1 is illegal in PHP. The expression 1 <= 1 == 1 on the other hand is legal, because the == operator has a lower precedence than the <= operator.

Associativity is only meaningful for binary (and ternary) operators. Unary operators are either prefix or postfix so this notion is not applicable. For example !!$a can only be grouped as !(!$a).

Use of parentheses, even when not strictly necessary, can often increase readability of the code by making grouping explicit rather than relying on the implicit operator precedence and associativity.

The following table lists the operators in order of precedence, with the highest-precedence ones at the top. Operators on the same line have equal precedence, in which case associativity decides grouping.

Example #1 Associativity

```
<?php
$a = 3 * 3 % 5; // (3 * 3) % 5 = 4
var_dump($a);

$a = 1;
$b = 2;
$a = $b += 3; // $a = ($b += 3) -> $a = 5, $b = 5
var_dump($a, $b);
?>
```

The ternary operator specifically requires the use of parenthesis to disambiguate precedence.

Example #2 Explicit Precedence

```
<?php
$a = true ? 0 : (true ? 1 : 2);
var_dump($a);

// this is not allowed since PHP 8
// $a = true ? 0 : true ? 1 : 2;
?>
```

Operator precedence and associativity only determine how expressions are grouped, they do not specify an order of evaluation. PHP does not (in the general case) specify in which order an expression is evaluated and code that assumes a specific order of evaluation should be avoided, because the behavior can change between versions of PHP or depending on the surrounding code.

Example #3 Undefined order of evaluation

```
<?php
$a = 1;
echo $a + $a++; // may print either 2 or 3

$i = 1;
$array[$i] = $i++; // may set either index 1 or 2
?>
```

Example #4 +, - and . precedence

```
<?php
$x = 4;
// this line might result in unexpected output:
echo "x minus one equals " . $x-1 . ", or so I hope\n";

// the desired precedence can be enforced by using parentheses:
echo "x minus one equals " . ($x-1) . ", or so I hope\n";

// this is not allowed, and throws a TypeError:
echo (("x minus one equals " . $x) - 1) . ", or so I hope\n";
?>
```

The above example will output:

```
-1, or so I hope
-1, or so I hope
Fatal error: Uncaught TypeError: Unsupported operand types: string - int
```

Example #5 Prior to PHP 8, +, - and . had the same precedence

```
<?php
$x = 4;
// this line might result in unexpected output:
echo "x minus one equals " . $x-1 . ", or so I hope\n";

// because it is evaluated like this line (prior to PHP 8.0.0):
echo (("x minus one equals " . $x) - 1) . ", or so I hope\n";

// the desired precedence can be enforced by using parentheses:
echo "x minus one equals " . ($x-1) . ", or so I hope\n";
?>
```

The above example will output:

```
-1, or so I hope
-1, or so I hope
x minus one equals 3, or so I hope
```

Note:

Although = has a lower precedence than most other operators, PHP will still allow expressions similar to the following: if (!$a = foo()), in which case the return value of foo() is put into $a.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.operators.precedence.php
