# SplFileObject::fscanf

Source: https://devdocs.io/php/splfileobject.fscanf

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fscanf — Parses input from file according to a format

### Description

```
public SplFileObject::fscanf(string $format, mixed &...$vars): array|int|null
```

Reads a line from the file and interprets it according to the specified format.

Any whitespace in the format string matches any whitespace in the line from the file. This means that even a tab (\t) in the format string can match a single space character in the input stream.

### Parameters

The interpreted format for string, which is described in the documentation for sprintf() with following differences:

- Function is not locale-aware.
- F, g, G and b are not supported.
- D stands for decimal number.
- i stands for integer with base detection.
- n stands for number of characters processed so far.
- s stops reading at any whitespace character.
- * instead of argnum$ suppresses the assignment of this conversion specification.

The optional assigned values.

### Return Values

If only one parameter is passed to this method, the values parsed will be returned as an array. Otherwise, if optional parameters are passed, the function will return the number of assigned values. The optional parameters must be passed by reference.

### Examples

Example #1 SplFileObject::fscanf() example

```
<?php
$file = new SplFileObject("misc.txt");
while ($userinfo = $file->fscanf("%s %s %s")) {
    list ($name, $profession, $countrycode) = $userinfo;
    // Do something with $name $profession $countrycode
}
?>
```

Contents of users.txt

```
javier   argonaut    pe
hiroshi  sculptor    jp
robert   slacker     us
luigi    florist     it
```

### See Also

- fscanf() - Parses input from a file according to a format
- sscanf() - Parses input from a string according to a format
- printf() - Output a formatted string
- sprintf() - Return a formatted string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fscanf.php
