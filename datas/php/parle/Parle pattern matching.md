# Parle pattern matching

Source: https://devdocs.io/php/parle.pattern.matching

Parle supports regex matching similar to flex. Also supported are the following POSIX character sets: [:alnum:], [:alpha:], [:blank:], [:cntrl:], [:digit:], [:graph:], [:lower:], [:print:], [:punct:], [:space:], [:upper:], [:xdigit:].

The Unicode character classes are currently not enabled by default, pass --enable-parle-utf32 to make them available. A particular encoding can be mapped with a correctly constructed regex. For example, to match the EURO symbol encoded in UTF-8, the regular expression [\xe2][\x82][\xac] can be used. The pattern for an UTF-8 encoded string could be [ -\x7f]{+}[\x80-\xbf]{+}[\xc2-\xdf]{+}[\xe0-\xef]{+}[\xf0-\xff]+.

## Character representations

## Character classes

## Unicode character classes

These character classes are only available, if the option --enable-parle-utf32 was passed at the compilation time.

## Alternation and repetition

## Anchors

## Grouping

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/parle.pattern.matching.php
