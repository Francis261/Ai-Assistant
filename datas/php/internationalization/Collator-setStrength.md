# Collator::setStrength

Source: https://devdocs.io/php/collator.setstrength

# collator_set_strength

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::setStrength -- collator_set_strength — Set collation strength

### Description

Object-oriented style

```
public Collator::setStrength(int $strength): true
```

Procedural style

```
collator_set_strength(Collator $object, int $strength): true
```

The » ICU Collation Service supports many levels of comparison (named "Levels", but also known as "Strengths"). Having these categories enables ICU to sort strings precisely according to local conventions. However, by allowing the levels to be selectively employed, searching for a string in text can be performed with various matching conditions.

1. Primary Level: Typically, this is used to denote differences between base characters (for example, "a" < "b"). It is the strongest difference. For example, dictionaries are divided into different sections by base character. This is also called the level 1 strength.
2. Secondary Level: Accents in the characters are considered secondary differences (for example, "as" < "às" < "at"). Other differences between letters can also be considered secondary differences, depending on the language. A secondary difference is ignored when there is a primary difference anywhere in the strings. This is also called the level 2 strength. 

Note: 
 Note: In some languages (such as Danish), certain accented letters are considered to be separate base characters. In most languages, however, an accented letter only has a secondary difference from the unaccented version of that letter.
3. Tertiary Level: Upper and lower case differences in characters are distinguished at the tertiary level (for example, "ao" < "Ao" < "aò"). In addition, a variant of a letter differs from the base form on the tertiary level (such as "a" and "𝒶"). Another example is the difference between large and small Kana. A tertiary difference is ignored when there is a primary or secondary difference anywhere in the strings. This is also called the level 3 strength.
4. Quaternary Level: When punctuation is ignored (see Ignoring Punctuations ) at levels 1-3, an additional level can be used to distinguish words with and without punctuation (for example, "ab" < "a-b" < "aB"). This difference is ignored when there is a primary, secondary or tertiary difference. This is also known as the level 4 strength. The quaternary level should only be used if ignoring punctuation is required or when processing Japanese text (see Hiragana processing).
5. Identical Level: When all other levels are equal, the identical level is used as a tiebreaker. The Unicode code point values of the NFD form of each string are compared at this level, just in case there is no difference at levels 1-4. For example, Hebrew cantillation marks are only distinguished at this level. This level should be used sparingly, as only code point values differences between two strings is an extremely rare occurrence. Using this level substantially decreases the performance for both incremental comparison and sort key generation (as well as increasing the sort key length). It is also known as level 5 strength.

Primary Level: Typically, this is used to denote differences between base characters (for example, "a" < "b"). It is the strongest difference. For example, dictionaries are divided into different sections by base character. This is also called the level 1 strength.

Secondary Level: Accents in the characters are considered secondary differences (for example, "as" < "às" < "at"). Other differences between letters can also be considered secondary differences, depending on the language. A secondary difference is ignored when there is a primary difference anywhere in the strings. This is also called the level 2 strength.

Note:

Note: In some languages (such as Danish), certain accented letters are considered to be separate base characters. In most languages, however, an accented letter only has a secondary difference from the unaccented version of that letter.

Tertiary Level: Upper and lower case differences in characters are distinguished at the tertiary level (for example, "ao" < "Ao" < "aò"). In addition, a variant of a letter differs from the base form on the tertiary level (such as "a" and "𝒶"). Another example is the difference between large and small Kana. A tertiary difference is ignored when there is a primary or secondary difference anywhere in the strings. This is also called the level 3 strength.

Quaternary Level: When punctuation is ignored (see Ignoring Punctuations ) at levels 1-3, an additional level can be used to distinguish words with and without punctuation (for example, "ab" < "a-b" < "aB"). This difference is ignored when there is a primary, secondary or tertiary difference. This is also known as the level 4 strength. The quaternary level should only be used if ignoring punctuation is required or when processing Japanese text (see Hiragana processing).

Identical Level: When all other levels are equal, the identical level is used as a tiebreaker. The Unicode code point values of the NFD form of each string are compared at this level, just in case there is no difference at levels 1-4. For example, Hebrew cantillation marks are only distinguished at this level. This level should be used sparingly, as only code point values differences between two strings is an extremely rare occurrence. Using this level substantially decreases the performance for both incremental comparison and sort key generation (as well as increasing the sort key length). It is also known as level 5 strength.

For example, people may choose to ignore accents or ignore accents and case when searching for text. Almost all characters are distinguished by the first three levels, and in most locales the default value is thus Tertiary. However, if Alternate is set to be Shifted, then the Quaternary strength can be used to break ties among whitespace, punctuation, and symbols that would otherwise be ignored. If very fine distinctions among characters are required, then the Identical strength can be used (for example, Identical Strength distinguishes between the Mathematical Bold Small A and the Mathematical Italic Small A.). However, using levels higher than Tertiary the Identical strength result in significantly longer sort keys, and slower string comparison performance for equal strings.

### Parameters

Collator object.

Strength to set.

Possible values are:

- Collator::PRIMARY
- Collator::SECONDARY
- Collator::TERTIARY
- Collator::QUATERNARY
- Collator::IDENTICAL
- Collator::DEFAULT_STRENGTH

Collator::PRIMARY

Collator::SECONDARY

Collator::TERTIARY

Collator::QUATERNARY

Collator::IDENTICAL

Collator::DEFAULT_STRENGTH

### Return Values

Always returns true.

### Examples

Example #1 collator_set_strength() example

```
<?php
$arr  = array( 'aò', 'Ao', 'ao' );
$coll = collator_create( 'en_US' );

// Sort array using default strength.
collator_sort( $coll, $arr ); 
var_export( $arr );

// Sort array using primary strength.
collator_set_strength( $coll, Collator::PRIMARY );
collator_sort( $coll, $arr );
var_export( $arr );
?>
```

The above example will output:

```
array (
  0 => 'ao',
  1 => 'Ao',
  2 => 'aò',
)
array (
  0 => 'aò',
  1 => 'Ao',
  2 => 'ao',
)
```

### See Also

- Collator constants
- collator_get_strength() - Get current collation strength

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.setstrength.php
