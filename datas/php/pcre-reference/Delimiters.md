# Delimiters

Source: https://devdocs.io/php/regexp.reference.delimiters

## Delimiters

When using the PCRE functions, it is required that the pattern is enclosed by delimiters. A delimiter can be any non-alphanumeric, non-backslash, non-whitespace character. Leading whitespace before a valid delimiter is silently ignored.

Often used delimiters are forward slashes (/), hash signs (#) and tildes (~). The following are all examples of valid delimited patterns.

```
/foo bar/
#^[^0-9]$#
+php+
%[a-zA-Z0-9_-]%
```

It is also possible to use bracket style delimiters where the opening and closing brackets are the starting and ending delimiter, respectively. (), {}, [] and <> are all valid bracket style delimiter pairs.

```
(this [is] a (pattern))
{this [is] a (pattern)}
[this [is] a (pattern)]
<this [is] a (pattern)>
```

If the delimiter needs to be matched inside the pattern it must be escaped using a backslash. If the delimiter appears often inside the pattern, it is a good idea to choose another delimiter in order to increase readability.

```
/http:\/\//
#http://#
```

You may add pattern modifiers after the ending delimiter. The following is an example of case-insensitive matching:

```
#[a-z]#i
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexp.reference.delimiters.php
