# preg_quote

Source: https://devdocs.io/php/function.preg-quote

(PHP 4, PHP 5, PHP 7, PHP 8)

preg_quote — Quote regular expression characters

### Description

```
preg_quote(string $str, ?string $delimiter = null): string
```

preg_quote() takes str and puts a backslash in front of every character that is part of the regular expression syntax. This is useful if you have a run-time string that you need to match in some text and the string may contain special regex characters.

The special regular expression characters are: . \ + * ? [ ^ ] $ ( ) { } = ! < > | : - #

Note that / is not a special regular expression character.

Note:

Note that preg_quote() is not meant to be applied to the $replacement string(s) of preg_replace() etc.

### Parameters

The input string.

If the optional delimiter is specified, it will also be escaped. This is useful for escaping the delimiter that is required by the PCRE functions. The / is the most commonly used delimiter.

### Return Values

Returns the quoted (escaped) string.

### Changelog

### Examples

Example #1 preg_quote() example

```
<?php
$keywords = '$40 for a g3/400';
$keywords = preg_quote($keywords, '/');
echo $keywords; // returns \$40 for a g3\/400
?>
```

Example #2 Italicizing a word within some text

```
<?php
// In this example, preg_quote($word) is used to keep the
// asterisks from having special meaning to the regular
// expression.

$textbody = "This book is *very* difficult to find.";
$word = "*very*";
$textbody = preg_replace ("/" . preg_quote($word, '/') . "/",
                          "<i>" . $word . "</i>",
                          $textbody);
?>
```

### Notes

Note: This function is binary-safe.

### See Also

- PCRE Patterns
- escapeshellcmd() - Escape shell metacharacters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.preg-quote.php
