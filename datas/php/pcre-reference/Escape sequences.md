# Escape sequences

Source: https://devdocs.io/php/regexp.reference.escape

## Escape sequences

The backslash character has several uses. Firstly, if it is followed by a non-alphanumeric character, it takes away any special meaning that character may have. This use of backslash as an escape character applies both inside and outside character classes.

For example, if you want to match a "*" character, you write "\*" in the pattern. This applies whether or not the following character would otherwise be interpreted as a meta-character, so it is always safe to precede a non-alphanumeric with "\" to specify that it stands for itself. In particular, if you want to match a backslash, you write "\\".

Note:

Single and double quoted PHP strings have special meaning of backslash. Thus if \ has to be matched with a regular expression \\, then "\\\\" or '\\\\' must be used in PHP code.

If a pattern is compiled with the PCRE_EXTENDED option, whitespace in the pattern (other than in a character class) and characters between a "#" outside a character class and the next newline character are ignored. An escaping backslash can be used to include a whitespace or "#" character as part of the pattern.

A second use of backslash provides a way of encoding non-printing characters in patterns in a visible manner. There is no restriction on the appearance of non-printing characters, apart from the binary zero that terminates a pattern, but when a pattern is being prepared by text editing, it is usually easier to use one of the following escape sequences than the binary character it represents:

The precise effect of "\cx" is as follows: if "x" is a lower case letter, it is converted to upper case. Then bit 6 of the character (hex 40) is inverted. Thus "\cz" becomes hex 1A, but "\c{" becomes hex 3B, while "\c;" becomes hex 7B.

After "\x", up to two hexadecimal digits are read (letters can be in upper or lower case). In UTF-8 mode, "\x{...}" is allowed, where the contents of the braces is a string of hexadecimal digits. It is interpreted as a UTF-8 character whose code number is the given hexadecimal number. The original hexadecimal escape sequence, \xhh, matches a two-byte UTF-8 character if the value is greater than 127.

After "\0" up to two further octal digits are read. In both cases, if there are fewer than two digits, just those that are present are used. Thus the sequence "\0\x\07" specifies two binary zeros followed by a BEL character. Make sure you supply two digits after the initial zero if the character that follows is itself an octal digit.

The handling of a backslash followed by a digit other than 0 is complicated. Outside a character class, PCRE reads it and any following digits as a decimal number. If the number is less than 10, or if there have been at least that many previous capturing left parentheses in the expression, the entire sequence is taken as a back reference. A description of how this works is given later, following the discussion of parenthesized subpatterns.

Inside a character class, or if the decimal number is greater than 9 and there have not been that many capturing subpatterns, PCRE re-reads up to three octal digits following the backslash, and generates a single byte from the least significant 8 bits of the value. Any subsequent digits stand for themselves. For example:

Note that octal values of 100 or greater must not be introduced by a leading zero, because no more than three octal digits are ever read.

All the sequences that define a single byte value can be used both inside and outside character classes. In addition, inside a character class, the sequence "\b" is interpreted as the backspace character (hex 08). Outside a character class it has a different meaning (see below).

The third use of backslash is for specifying generic character types:

Each pair of escape sequences partitions the complete set of characters into two disjoint sets. Any given character matches one, and only one, of each pair.

The "whitespace" characters are HT (9), LF (10), FF (12), CR (13), and space (32). However, if locale-specific matching is happening, characters with code points in the range 128-255 may also be considered as whitespace characters, for instance, NBSP (A0).

A "word" character is any letter or digit or the underscore character, that is, any character which can be part of a Perl "word". The definition of letters and digits is controlled by PCRE's character tables, and may vary if locale-specific matching is taking place. For example, in the "fr" (French) locale, some character codes greater than 128 are used for accented letters, and these are matched by \w.

These character type sequences can appear both inside and outside character classes. They each match one character of the appropriate type. If the current matching point is at the end of the subject string, all of them fail, since there is no character to match.

The fourth use of backslash is for certain simple assertions. An assertion specifies a condition that has to be met at a particular point in a match, without consuming any characters from the subject string. The use of subpatterns for more complicated assertions is described below. The backslashed assertions are

These assertions may not appear in character classes (but note that "\b" has a different meaning, namely the backspace character, inside a character class).

A word boundary is a position in the subject string where the current character and the previous character do not both match \w or \W (i.e. one matches \w and the other matches \W), or the start or end of the string if the first or last character matches \w, respectively.

The \A, \Z, and \z assertions differ from the traditional circumflex and dollar (described in anchors ) in that they only ever match at the very start and end of the subject string, whatever options are set. They are not affected by the PCRE_MULTILINE or PCRE_DOLLAR_ENDONLY options. The difference between \Z and \z is that \Z matches before a newline that is the last character of the string as well as at the end of the string, whereas \z matches only at the end.

The \G assertion is true only when the current matching position is at the start point of the match, as specified by the offset argument of preg_match(). It differs from \A when the value of offset is non-zero.

\Q and \E can be used to ignore regexp metacharacters in the pattern. For example: \w+\Q.$.\E$ will match one or more word characters, followed by literals .$. and anchored at the end of the string. Note that this does not change the behavior of delimiters; for instance the pattern #\Q#\E#$ is not valid, because the second # marks the end of the pattern, and the \E# is interpreted as invalid modifiers.

\K can be used to reset the match start. For example, the pattern foo\Kbar matches "foobar", but reports that it has matched "bar". The use of \K does not interfere with the setting of captured substrings. For example, when the pattern (foo)\Kbar matches "foobar", the first substring is still set to "foo".

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexp.reference.escape.php
