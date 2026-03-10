# Locale::composeLocale

Source: https://devdocs.io/php/locale.composelocale

# locale_compose

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::composeLocale -- locale_compose — Returns a correctly ordered and delimited locale ID

### Description

Object-oriented style

```
public static Locale::composeLocale(array $subtags): string|false
```

Procedural style

```
locale_compose(array $subtags): string|false
```

Returns a correctly ordered and delimited locale ID the keys identify the particular locale ID subtags, and the values are the associated subtag values.

### Parameters

An array containing a list of key-value pairs, where the keys identify the particular locale ID subtags, and the values are the associated subtag values.

Note:

The 'variant' and 'private' subtags can take maximum 15 values whereas 'extlang' can take maximum 3 values. For instance, variants are allowed with the suffix ranging from 0-14. Hence the keys for the input array can be variant0, variant1, …,variant14. In the returned locale id, the subtag is ordered by suffix resulting in variant0 followed by variant1 followed by variant2 and so on.

Alternatively, the 'variant', 'private' and 'extlang' values can be specified as array under specific key (e.g. 'variant'). In this case no limits on the number of recognized subtags apply.

### Return Values

The corresponding locale identifier, or false when subtags is empty.

### Examples

Example #1 locale_compose() example

```
<?php
$arr = array(
    'language'=>'en',
    'script'  =>'Hans',
    'region'  =>'CN',
    'variant2'=>'rozaj',
    'variant1'=>'nedis',
    'private1'=>'prv1',
    'private2'=>'prv2',
);
echo locale_compose($arr);
?>
```

Example #2 OO example

```
<?php
$arr = array(
    'language'=>'en' ,
    'script'  =>'Hans',
    'region'  =>'CN',
    'variant2'=>'rozaj',
    'variant1'=>'nedis',
    'private1'=>'prv1',
    'private2'=>'prv2',
);
echo Locale::composeLocale($arr);
?>
```

The above example will output:

```
Locale: en_Hans_CN_nedis_rozaj_x_prv1_prv2
```

Example #3 Subtag limits

If subtags are given as separate keys with numeric suffix, unsupported keys are silently ignored (in this case 'extlang3'), and ordered in the result by numeric suffix. There are no limits, if subtags are given as array; the order is as given.

```
<?php
$arr = array(
    'language' => 'en',
    'script'   => 'Hans',
    'region'   => 'CN',
    'extlang3' => 'd',
    'extlang2' => 'c',
    'extlang1' => 'b',
    'extlang0' => 'a',
);
echo locale_compose($arr), PHP_EOL;

$arr = array(
    'language' => 'en',
    'script'   => 'Hans',
    'region'   => 'CN',
    'extlang'  => ['a', 'b', 'c', 'd'],
);
echo locale_compose($arr), PHP_EOL;
?>
```

The above example will output:

```
en_a_b_c_Hans_CN
en_a_b_c_d_Hans_CN
```

### See Also

- locale_parse() - Returns a key-value array of locale ID subtag elements

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.composelocale.php
