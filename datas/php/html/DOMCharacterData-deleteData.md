# DOMCharacterData::deleteData

Source: https://devdocs.io/php/domcharacterdata.deletedata

(PHP 5, PHP 7, PHP 8)

DOMCharacterData::deleteData — Remove a range of characters from the character data

### Description

```
public DOMCharacterData::deleteData(int $offset, int $count): bool
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

- DOMCharacterData::appendData() - Append the string to the end of the character data of the node
- DOMCharacterData::insertData() - Insert a string at the specified UTF-8 codepoint offset
- DOMCharacterData::replaceData() - Replace a substring within the character data
- DOMCharacterData::substringData() - Extracts a range of data from the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcharacterdata.deletedata.php
