# Dom\CharacterData::insertData

Source: https://devdocs.io/php/dom-characterdata.insertdata

(PHP 8 >= 8.4.0)

Dom\CharacterData::insertData — Insert a string at the specified UTF-8 codepoint offset

### Description

```
public Dom\CharacterData::insertData(int $offset, string $data): void
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

- Dom\CharacterData::appendData() - Append the string to the end of the character data of the node
- Dom\CharacterData::deleteData() - Remove a range of characters from the character data
- Dom\CharacterData::replaceData() - Replace a substring within the character data
- Dom\CharacterData::substringData() - Extracts a range of data from the character data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-characterdata.insertdata.php
