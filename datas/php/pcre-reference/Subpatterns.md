# Subpatterns

Source: https://devdocs.io/php/regexp.reference.subpatterns

## Subpatterns

Subpatterns are delimited by parentheses (round brackets), which can be nested. Marking part of a pattern as a subpattern does two things:

1. It localizes a set of alternatives. For example, the pattern cat(aract|erpillar|) matches one of the words "cat", "cataract", or "caterpillar". Without the parentheses, it would match "cataract", "erpillar" or the empty string.
2. It sets up the subpattern as a capturing subpattern (as defined above). When the whole pattern matches, that portion of the subject string that matched the subpattern is passed back to the caller via the ovector argument of pcre_exec(). Opening parentheses are counted from left to right (starting from 1) to obtain the numbers of the capturing subpatterns.

It localizes a set of alternatives. For example, the pattern cat(aract|erpillar|) matches one of the words "cat", "cataract", or "caterpillar". Without the parentheses, it would match "cataract", "erpillar" or the empty string.

It sets up the subpattern as a capturing subpattern (as defined above). When the whole pattern matches, that portion of the subject string that matched the subpattern is passed back to the caller via the ovector argument of pcre_exec(). Opening parentheses are counted from left to right (starting from 1) to obtain the numbers of the capturing subpatterns.

For example, if the string "the red king" is matched against the pattern the ((red|white) (king|queen)) the captured substrings are "red king", "red", and "king", and are numbered 1, 2, and 3.

The fact that plain parentheses fulfill two functions is not always helpful. There are often times when a grouping subpattern is required without a capturing requirement. If an opening parenthesis is followed by "?:", the subpattern does not do any capturing, and is not counted when computing the number of any subsequent capturing subpatterns. For example, if the string "the white queen" is matched against the pattern the ((?:red|white) (king|queen)) the captured substrings are "white queen" and "queen", and are numbered 1 and 2. The maximum number of captured substrings is 65535. It may not be possible to compile such large patterns, however, depending on the configuration options of libpcre.

As a convenient shorthand, if any option settings are required at the start of a non-capturing subpattern, the option letters may appear between the "?" and the ":". Thus the two patterns

```
(?i:saturday|sunday)
(?:(?i)saturday|sunday)
```

match exactly the same set of strings. Because alternative branches are tried from left to right, and options are not reset until the end of the subpattern is reached, an option setting in one branch does affect subsequent branches, so the above patterns match "SUNDAY" as well as "Saturday".

It is possible to name a subpattern using the syntax (?P<name>pattern). This subpattern will then be indexed in the matches array by its normal numeric position and also by name. There are two alternative syntaxes (?<name>pattern) and (?'name'pattern).

Sometimes it is necessary to have multiple matching, but alternating subgroups in a regular expression. Normally, each of these would be given their own backreference number even though only one of them would ever possibly match. To overcome this, the (?| syntax allows having duplicate numbers. Consider the following regex matched against the string Sunday:

```
(?:(Sat)ur|(Sun))day
```

Here Sun is stored in backreference 2, while backreference 1 is empty. Matching Saturday yields Sat in backreference 1 while backreference 2 does not exist. Changing the pattern to use the (?| fixes this problem:

```
(?|(Sat)ur|(Sun))day
```

Using this pattern, both Sun and Sat would be stored in backreference 1.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexp.reference.subpatterns.php
