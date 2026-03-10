# sqlsrv_fetch_object

Source: https://devdocs.io/php/function.sqlsrv-fetch-object

(No version information available, might only be in Git)

sqlsrv_fetch_object — Retrieves the next row of data in a result set as an object

### Description

```
sqlsrv_fetch_object(
 resource $stmt,
 string $className = ?,
 array $ctorParams = ?,
 int $row = ?,
 int $offset = ?
): mixed
```

Retrieves the next row of data in a result set as an instance of the specified class with properties that match the row field names and values that correspond to the row field values.

### Parameters

A statement resource created by sqlsrv_query() or sqlsrv_execute().

The name of the class to instantiate. If no class name is specified, stdClass is instantiated.

Values passed to the constructor of the specified class. If the constructor of the specified class takes parameters, the ctorParams array must be supplied.

The row to be accessed. This parameter can only be used if the specified statement was prepared with a scrollable cursor. In that case, this parameter can take on one of the following values:

- SQLSRV_SCROLL_NEXT
- SQLSRV_SCROLL_PRIOR
- SQLSRV_SCROLL_FIRST
- SQLSRV_SCROLL_LAST
- SQLSRV_SCROLL_ABSOLUTE
- SQLSRV_SCROLL_RELATIVE

Specifies the row to be accessed if the row parameter is set to SQLSRV_SCROLL_ABSOLUTE or SQLSRV_SCROLL_RELATIVE. Note that the first row in a result set has index 0.

### Return Values

Returns an object on success, null if there are no more rows to return, and false if an error occurs or if the specified class does not exist.

### Examples

Example #1 sqlsrv_fetch_object() example

The following example demonstrates how to retrieve a row as a stdClass object.

```
<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$sql = "SELECT fName, lName FROM Table_1";
$stmt = sqlsrv_query( $conn, $sql);
if( $stmt === false ) {
     die( print_r( sqlsrv_errors(), true));
}

// Retrieve each row as an object.
// Because no class is specified, each row will be retrieved as a stdClass object.
// Property names correspond to field names.
while( $obj = sqlsrv_fetch_object( $stmt)) {
      echo $obj->fName.", ".$obj->lName."<br />";
}
?>
```

### Notes

If a class name is specified with the optional $className parameter and the class has properties whose names match the result set field names, the corresponding result set values are applied to the properties. If a result set field name does not match a class property, a property with the result set field name is added to the object and the result set value is applied to the property. The following rules apply when using the $className parameter:

- Field-property name matching is case-sensitive.
- Field-property matching occurs regardless of access modifiers.
- Class property data types are ignored when applying a field value to a property.
- If the class does not exist, the function returns false and adds an error to the error collection.

When consuming a result set that has multiple columns with the same name, it may be better to use sqlsrv_fetch_array() or the combination of sqlsrv_fetch() and sqlsrv_get_field().

### See Also

- sqlsrv_fetch() - Makes the next row in a result set available for reading
- sqlsrv_fetch_array() - Returns a row as an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-fetch-object.php
