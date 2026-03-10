# Dom\CharacterData::deleteData

Source: https://devdocs.io/php/dom-characterdata.deletedata

(PHP 8 >= 8.4.0)

Dom\CharacterData::deleteData — Remove a range of characters from the character data

### Description

```
public Dom\CharacterData::deleteData(int $offset, int $count): void
```

Deletes count characters starting from position offset.

### Parameters

The offset from which to start removing.

The number of characters to delete. If the sum of offset and count exceeds the length, then all characters to the end of the data are deleted.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Raised if offset is negative or greater than the number of UTF-8 codepoints in data, or if count is negative.

### See Also

- Dom\CharacterData::appendData() - Append the string to the end of the character data of the node
- Dom\CharacterData::insertData() - Insert a string at the specified UTF-8 codepoint offset
- Dom\CharacterData::replaceData() - Replace a substring within the character data
- Dom\CharacterData::substringData() - Extracts a range of data from the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-characterdata.deletedata.php
