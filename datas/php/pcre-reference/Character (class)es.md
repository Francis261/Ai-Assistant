# Character (class)es

Source: https://devdocs.io/php/regexp.reference.character-classes

## Character classes

An opening square bracket introduces a character class, terminated by a closing square bracket. A closing square bracket on its own is not special. If a closing square bracket is required as a member of the class, it should be the first data character in the class (after an initial circumflex, if present) or escaped with a backslash.

A character class matches a single character in the subject; the character must be in the set of characters defined by the class, unless the first character in the class is a circumflex, in which case the subject character must not be in the set defined by the class. If a circumflex is actually required as a member of the class, ensure it is not the first character, or escape it with a backslash.

For example, the character class [aeiou] matches any lower case vowel, while [^aeiou] matches any character that is not a lower case vowel. Note that a circumflex is just a convenient notation for specifying the characters which are in the class by enumerating those that are not. It is not an assertion: it still consumes a character from the subject string, and fails if the current pointer is at the end of the string.

When case-insensitive (caseless) matching is set, any letters in a class represent both their upper case and lower case versions, so for example, an insensitive [aeiou] matches "A" as well as "a", and an insensitive [^aeiou] does not match "A", whereas a sensitive (caseful) version would.

The newline character is never treated in any special way in character classes, whatever the setting of the PCRE_DOTALL or PCRE_MULTILINE options is. A class such as [^a] will always match a newline.

The minus (hyphen) character can be used to specify a range of characters in a character class. For example, [d-m] matches any letter between d and m, inclusive. If a minus character is required in a class, it must be escaped with a backslash or appear in a position where it cannot be interpreted as indicating a range, typically as the first or last character in the class.

It is not possible to have the literal character "]" as the end character of a range. A pattern such as [W-]46] is interpreted as a class of two characters ("W" and "-") followed by a literal string "46]", so it would match "W46]" or "-46]". However, if the "]" is escaped with a backslash it is interpreted as the end of range, so [W-\]46] is interpreted as a single class containing a range followed by two separate characters. The octal or hexadecimal representation of "]" can also be used to end a range.

Ranges operate in ASCII collating sequence. They can also be used for characters specified numerically, for example [\000-\037]. If a range that includes letters is used when case-insensitive (caseless) matching is set, it matches the letters in either case. For example, [W-c] is equivalent to [][\^_`wxyzabc], matched case-insensitively, and if character tables for the "fr" locale are in use, [\xc8-\xcb] matches accented E characters in both cases.

The character types \d, \D, \s, \S, \w, and \W may also appear in a character class, and add the characters that they match to the class. For example, [\dABCDEF] matches any hexadecimal digit. A circumflex can conveniently be used with the upper case character types to specify a more restricted set of characters than the matching lower case type. For example, the class [^\W_] matches any letter or digit, but not underscore.

All non-alphanumeric characters other than \, -, ^ (at the start) and the terminating ] are non-special in character classes, but it does no harm if they are escaped. The pattern terminator is always special and must be escaped when used within an expression.

Perl supports the POSIX notation for character classes. This uses names enclosed by [: and :] within the enclosing square brackets. PCRE also supports this notation. For example, [01[:alpha:]%] matches "0", "1", any alphabetic character, or "%". The supported class names are:

The name word is a Perl extension, and blank is a GNU extension from Perl 5.8. Another Perl extension is negation, which is indicated by a ^ character after the colon. For example, [12[:^digit:]] matches "1", "2", or any non-digit.

In UTF-8 mode, characters with values greater than 128 do not match any of the POSIX character classes. As of libpcre 8.10 some character classes are changed to use Unicode character properties, in which case the mentioned restriction does not apply. Refer to the » PCRE(3) manual for details.

Unicode character properties can appear inside a character class. They can not be part of a range. The minus (hyphen) character after a Unicode character class will match literally. Trying to end a range with a Unicode character property will result in a warning.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexp.reference.character-classes.php
