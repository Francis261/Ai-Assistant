# DOMCharacterData::insertData

Source: https://devdocs.io/php/domcharacterdata.insertdata

(PHP 5, PHP 7, PHP 8)

DOMCharacterData::insertData — Insert a string at the specified UTF-8 codepoint offset

### Description

```
public DOMCharacterData::insertData(int $offset, string $data): bool
```

Inserts string data at position offset.

### Parameters

The character offset at which to insert.

The string to insert.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Raised if offset is negative or greater than the number of UTF-8 codepoints in data.

### See Also

- DOMCharacterData::appendData() - Append the string to the end of the character data of the node
- DOMCharacterData::deleteData() - Remove a range of characters from the character data
- DOMCharacterData::replaceData() - Replace a substring within the character data
- DOMCharacterData::substringData() - Extracts a range of data from the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domcharacterdata.insertdata.php
