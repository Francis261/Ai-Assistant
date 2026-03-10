# Dom\CharacterData::substringData

Source: https://devdocs.io/php/dom-characterdata.substringdata

(PHP 8 >= 8.4.0)

Dom\CharacterData::substringData — Extracts a range of data from the character data

### Description

```
public Dom\CharacterData::substringData(int $offset, int $count): string
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

- Dom\CharacterData::appendData() - Append the string to the end of the character data of the node
- Dom\CharacterData::deleteData() - Remove a range of characters from the character data
- Dom\CharacterData::insertData() - Insert a string at the specified UTF-8 codepoint offset
- Dom\CharacterData::replaceData() - Replace a substring within the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-characterdata.substringdata.php
