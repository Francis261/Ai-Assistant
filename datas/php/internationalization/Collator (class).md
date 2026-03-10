# The Collator class

Source: https://devdocs.io/php/class.collator

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Provides string comparison capability with support for appropriate locale-sensitive sort orderings.

## Class synopsis

```
public asort(array &$array, int $flags = Collator::SORT_REGULAR): bool
```

```
public compare(string $string1, string $string2): int|false
```

```
public static create(string $locale): ?Collator
```

```
public getAttribute(int $attribute): int|false
```

```
public getErrorCode(): int|false
```

```
public getErrorMessage(): string|false
```

```
public getLocale(int $type): string|false
```

```
public getSortKey(string $string): string|false
```

```
public getStrength(): int
```

```
public setAttribute(int $attribute, int $value): bool
```

```
public setStrength(int $strength): true
```

```
public sort(array &$array, int $flags = Collator::SORT_REGULAR): bool
```

```
public sortWithSortKeys(array &$array): bool
```

## Predefined Constants

Sort strings with different accents from the back of the string. This attribute is automatically set to On for the French locales and a few others. Users normally would not need to explicitly set this attribute. There is a string comparison performance cost when it is set On, but sort key length is unaffected. Possible values are:

- Collator::ON
- Collator::OFF(default)
- Collator::DEFAULT_VALUE

Example #1 FRENCH_COLLATION rules

- F=OFF cote < coté < côte < côté
- F=ON cote < côte < coté < côté

The Alternate attribute is used to control the handling of the so called variable characters in the UCA: whitespace, punctuation and symbols. If Alternate is set to NonIgnorable (N), then differences among these characters are of the same importance as differences among letters. If Alternate is set to Shifted (S), then these characters are of only minor importance. The Shifted value is often used in combination with Strength set to Quaternary. In such a case, whitespace, punctuation, and symbols are considered when comparing strings, but only if all other aspects of the strings (base letters, accents, and case) are identical. If Alternate is not set to Shifted, then there is no difference between a Strength of 3 and a Strength of 4. For more information and examples, see Variable_Weighting in the » UCA. The reason the Alternate values are not simply On and Off is that additional Alternate values may be added in the future. The UCA option Blanked is expressed with Strength set to 3, and Alternate set to Shifted. The default for most locales is NonIgnorable. If Shifted is selected, it may be slower if there are many strings that are the same except for punctuation; sort key length will not be affected unless the strength level is also increased.

Possible values are:

- Collator::NON_IGNORABLE(default)
- Collator::SHIFTED
- Collator::DEFAULT_VALUE

Example #2 ALTERNATE_HANDLING rules

- S=3, A=N di Silva < Di Silva < diSilva < U.S.A. < USA
- S=3, A=S di Silva = diSilva < Di Silva < U.S.A. = USA
- S=4, A=S di Silva < diSilva < Di Silva < U.S.A. < USA

The Case_First attribute is used to control whether uppercase letters come before lowercase letters or vice versa, in the absence of other differences in the strings. The possible values are Uppercase_First (U) and Lowercase_First (L), plus the standard Default and Off. There is almost no difference between the Off and Lowercase_First options in terms of results, so typically users will not use Lowercase_First: only Off or Uppercase_First. (People interested in the detailed differences between X and L should consult the Collation
 Customization). Specifying either L or U won't affect string comparison performance, but will affect the sort key length.

Possible values are:

- Collator::OFF(default)
- Collator::LOWER_FIRST
- Collator::UPPER_FIRST
- Collator:DEFAULT

Example #3 CASE_FIRST rules

- C=X or C=L "china" < "China" < "denmark" < "Denmark"
- C=U "China" < "china" < "Denmark" < "denmark"

The Case_Level attribute is used when ignoring accents but not case. In such a situation, set Strength to be Primary, and Case_Level to be On. In most locales, this setting is Off by default. There is a small string comparison performance and sort key impact if this attribute is set to be On.

Possible values are:

- Collator::OFF(default)
- Collator::ON
- Collator::DEFAULT_VALUE

Example #4 CASE_LEVEL rules

- S=1, E=X role = Role = rôle
- S=1, E=O role = rôle < Role

The Normalization setting determines whether text is thoroughly normalized or not in comparison. Even if the setting is off (which is the default for many locales), text as represented in common usage will compare correctly (for details, see UTN #5). Only if the accent marks are in noncanonical order will there be a problem. If the setting is On, then the best results are guaranteed for all possible text input. There is a medium string comparison performance cost if this attribute is On, depending on the frequency of sequences that require normalization. There is no significant effect on sort key length. If the input text is known to be in NFD or NFKD normalization forms, there is no need to enable this Normalization option.

Possible values are:

- Collator::OFF(default)
- Collator::ON
- Collator::DEFAULT_VALUE

The ICU Collation Service supports many levels of comparison (named "Levels", but also known as "Strengths"). Having these categories enables ICU to sort strings precisely according to local conventions. However, by allowing the levels to be selectively employed, searching for a string in text can be performed with various matching conditions. For more detailed information, see collator_set_strength() chapter.

Possible values are:

- Collator::PRIMARY
- Collator::SECONDARY
- Collator::TERTIARY(default)
- Collator::QUATERNARY
- Collator::IDENTICAL
- Collator::DEFAULT_VALUE

Compatibility with JIS x 4061 requires the introduction of an additional level to distinguish Hiragana and Katakana characters. If compatibility with that standard is required, then this attribute should be set On, and the strength set to Quaternary. This will affect sort key length and string comparison string comparison performance.

Possible values are:

- Collator::OFF(default)
- Collator::ON
- Collator::DEFAULT_VALUE

When turned on, this attribute generates a collation key for the numeric value of substrings of digits. This is a way to get '100' to sort AFTER '2'.

Possible values are:

- Collator::OFF(default)
- Collator::ON
- Collator::DEFAULT_VALUE

## Changelog

## Table of Contents

- Collator::asort — Sort array maintaining index association
- Collator::compare — Compare two Unicode strings
- Collator::__construct — Create a collator
- Collator::create — Create a collator
- Collator::getAttribute — Get collation attribute value
- Collator::getErrorCode — Get collator's last error code
- Collator::getErrorMessage — Get text for collator's last error code
- Collator::getLocale — Get the locale name of the collator
- Collator::getSortKey — Get sorting key for a string
- Collator::getStrength — Get current collation strength
- Collator::setAttribute — Set collation attribute
- Collator::setStrength — Set collation strength
- Collator::sort — Sort array using specified collator
- Collator::sortWithSortKeys — Sort array using specified collator and sort keys

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.collator.php
