# Alternation

Source: https://devdocs.io/php/regexp.reference.alternation

## Alternation

Vertical bar characters are used to separate alternative patterns. For example, the pattern gilbert|sullivan matches either "gilbert" or "sullivan". Any number of alternatives may appear, and an empty alternative is permitted (matching the empty string). The matching process tries each alternative in turn, from left to right, and the first one that succeeds is used. If the alternatives are within a subpattern (defined below), "succeeds" means matching the rest of the main pattern as well as the alternative in the subpattern.

It is possible to record which alternative was matched by using (*MARK:NAME) or (*:NAME). Any number of such (*MARK) verbs may appear and their names do not have to be unique. When a match succeeds, the name of the last-encountered (*MARK:NAME) will be placed among matches as if it were a capture group called MARK so it can be read from the matches of preg_match() and will be passed to the callback of preg_replace_callback() etc.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/regexp.reference.alternation.php
