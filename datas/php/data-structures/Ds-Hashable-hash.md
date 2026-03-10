# Ds\Hashable::hash

Source: https://devdocs.io/php/ds-hashable.hash

(PECL ds >= 1.0.0)

Ds\Hashable::hash — Returns a scalar value to be used as a hash value

### Description

```
abstract public Ds\Hashable::hash(): mixed
```

Returns a scalar value to be used as the hash value of the objects.

While the hash value does not define equality, all objects that are equal according to Ds\Hashable::equals() must have the same hash value. Hash values of equal objects don't have to be unique, for example you could just return true for all objects and nothing would break - the only implication would be that hash tables then turn into linked lists because all your objects will be hashed to the same bucket. It's therefore very important that you pick a good hash value, such as an ID or email address.

This method allows objects to be used as keys in structures such as Ds\Map and Ds\Set, or any other lookup structure that honors this interface.

Do not pick a value that might change within the object, such as a public property. Hash table lookups would fail because the hash has changed.

All objects that are equal must have the same hash value.

### Parameters

This function has no parameters.

### Return Values

A scalar value to be used as this object's hash value.

### Examples

Example #1 Ds\Hashable::hash() example

```
<?php
class HashableObject implements \Ds\Hashable
{
    private $name;
    private $email;

    public function __construct($name, $email)
    {
        $this->name  = $name;
        $this->email = $email;
    }

    /**
     * Should return the same value for all equal objects, but doesn't have to
     * be unique. This value will not be used to determine equality.
     */
    public function hash()
    {
        return $this->email;
    }

    /**
     * This determines equality, usually during a hash table lookup to determine
     * if the bucket's key matches the lookup key. The hash has to be equal if
     * the objects are equal, otherwise this determination wouldn't be reached.
     */
    public function equals($obj): bool
    {
        return $this->name  === $obj->name
            && $this->email === $obj->email;
    }
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-hashable.hash.php
