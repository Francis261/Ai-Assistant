# pspell_add_to_session

Source: https://devdocs.io/php/function.pspell-add-to-session

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

pspell_add_to_session — Add the word to the wordlist in the current session

### Description

```
pspell_add_to_session(PSpell\Dictionary $dictionary, string $word): bool
```

pspell_add_to_session() adds a word to the wordlist associated with the current session. It is very similar to pspell_add_to_personal()

### Parameters

An PSpell\Dictionary instance.

The added word.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pspell-add-to-session.php
