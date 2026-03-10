# DOMCharacterData::substringData

Source: https://devdocs.io/php/domcharacterdata.substringdata

(PHP 5, PHP 7, PHP 8)

DOMCharacterData::substringData — Extracts a range of data from the character data

### Description

```
public DOMCharacterData::substringData(int $offset, int $count): string|false
```

Returns the specified substring.

### Parameters

Start offset of substring to extract.

The number of characters to extract.

### Return Values

The specified substring. If the sum of offset and count exceeds the length, then all UTF-8 codepoints to the end of the data are returned.

### Errors/Exceptions

Raised if offset is negative or greater than the number of UTF-8 codepoints in data, or if count is negative.

### See Also

- DOMCharacterData::appendData() - Append the string to the end of the character data of the node
- DOMCharacterData::deleteData() - Remove a range of characters from the character data
- DOMCharacterData::insertData() - Insert a string at the specified UTF-8 codepoint offset
- DOMCharacterData::replaceData() - Replace a substring within the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcharacterdata.substringdata.php
