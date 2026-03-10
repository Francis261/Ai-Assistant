# substr

Source: https://devdocs.io/php/function.substr

(PHP 4, PHP 5, PHP 7, PHP 8)

substr — Return part of a string

### Description

```
substr(string $string, int $offset, ?int $length = null): string
```

Returns the portion of string specified by the offset and length parameters.

### Parameters

The input string.

If offset is non-negative, the returned string will start at the offset'th position in string, counting from zero. For instance, in the string 'abcdef', the character at position 0 is 'a', the character at position 2 is 'c', and so forth.

If offset is negative, the returned string will start at the offset'th character from the end of string.

If string is less than offset characters long, an empty string will be returned.

Example #1 Using a negative offset

```
<?php
echo substr("abcdef", -1), PHP_EOL;    // returns "f"
echo substr("abcdef", -2), PHP_EOL;    // returns "ef"
echo substr("abcdef", -3, 1), PHP_EOL; // returns "d"
?>
```

If length is given and is positive, the string returned will contain at most length characters beginning from offset (depending on the length of string).

If length is given and is negative, then that many characters will be omitted from the end of string. If offset denotes the position of this truncation or beyond, an empty string will be returned.

If length is given and is 0, an empty string will be returned.

If length is omitted or null, the substring starting from offset until the end of the string will be returned.

Example #2 Using a negative length

```
<?php
echo substr("abcdef", 0, -1), PHP_EOL;  // returns "abcde"
echo substr("abcdef", 2, -1), PHP_EOL;  // returns "cde"
echo substr("abcdef", 4, -4), PHP_EOL;  // returns ""; prior to PHP 8.0.0, false was returned
echo substr("abcdef", -3, -1), PHP_EOL; // returns "de"
?>
```

### Return Values

Returns the extracted part of string, or an empty string.

### Changelog

### Examples

Example #3 Basic substr() usage

```
<?php
echo substr('abcdef', 1), PHP_EOL;     // bcdef
echo substr("abcdef", 1, null), PHP_EOL; // bcdef; prior to PHP 8.0.0, empty string was returned
echo substr('abcdef', 1, 3), PHP_EOL;  // bcd
echo substr('abcdef', 0, 4), PHP_EOL;  // abcd
echo substr('abcdef', 0, 8), PHP_EOL;  // abcdef
echo substr('abcdef', -1, 1), PHP_EOL; // f

// Accessing single characters in a string
// can also be achieved using "square brackets"
$string = 'abcdef';
echo $string[0], PHP_EOL;                 // a
echo $string[3], PHP_EOL;                 // d
echo $string[strlen($string)-1], PHP_EOL; // f

?>
```

Example #4 substr() casting behaviour

```
<?php
class apple {
    public function __toString() {
        return "green";
    }
}

echo "1) ", var_export(substr("pear", 0, 2), true), PHP_EOL;
echo "2) ", var_export(substr(54321, 0, 2), true), PHP_EOL;
echo "3) ", var_export(substr(new apple(), 0, 2), true), PHP_EOL;
echo "4) ", var_export(substr(true, 0, 1), true), PHP_EOL;
echo "5) ", var_export(substr(false, 0, 1), true), PHP_EOL;
echo "6) ", var_export(substr("", 0, 1), true), PHP_EOL;
echo "7) ", var_export(substr(1.2e3, 0, 4), true), PHP_EOL;
?>
```

The above example will output:

```
1) 'pe'
2) '54'
3) 'gr'
4) '1'
5) ''
6) ''
7) '1200'
```

Example #5 Invalid Character Range

If an invalid character range is requested, substr() returns an empty string as of PHP 8.0.0; previously, false was returned instead.

```
<?php
var_dump(substr('a', 2));
?>
```

Output of the above example in PHP 8:

```
string(0) ""
```

Output of the above example in PHP 7:

```
bool(false)
```

### See Also

- strrchr() - Find the last occurrence of a character in a string
- substr_replace() - Replace text within a portion of a string
- preg_match() - Perform a regular expression match
- trim() - Strip whitespace (or other characters) from the beginning and end of a string
- mb_substr() - Get part of string
- wordwrap() - Wraps a string to a given number of characters
- String access and modification by character

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.substr.php
