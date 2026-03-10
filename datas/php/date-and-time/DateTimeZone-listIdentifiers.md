# DateTimeZone::listIdentifiers

Source: https://devdocs.io/php/datetimezone.listidentifiers

# timezone_identifiers_list

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeZone::listIdentifiers -- timezone_identifiers_list — Returns a numerically indexed array containing all defined timezone identifiers

### Description

Object-oriented style

```
public static DateTimeZone::listIdentifiers(int $timezoneGroup = DateTimeZone::ALL, ?string $countryCode = null): array
```

Procedural style

```
timezone_identifiers_list(int $timezoneGroup = DateTimeZone::ALL, ?string $countryCode = null): array
```

### Parameters

One of the DateTimeZone class constants (or a combination).

A two-letter (uppercase) ISO 3166-1 compatible country code.

Note: This option is only used when timezoneGroup is set to DateTimeZone::PER_COUNTRY.

### Return Values

Returns the array of timezone identifiers. Only non-outdated items are returned. To get all, including outdated timezone identifiers, use the DateTimeZone::ALL_WITH_BC as value for timezoneGroup.

### Changelog

### Examples

Example #1 A DateTimeZone::listIdentifiers() example

```
<?php
$timezone_identifiers = DateTimeZone::listIdentifiers();
for ($i=0; $i < 5; $i++) {
    echo "$timezone_identifiers[$i]\n";
}
?>
```

The above example will output something similar to:

```
Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
```

Example #2 Listing identifiers for a specific region

```
<?php
$timezone_identifiers = DateTimeZone::listIdentifiers( DateTimeZone::ASIA );
for ($i=0; $i < 5; $i++) {
    echo "$timezone_identifiers[$i]\n";
}
?>
```

The above example will output something similar to:

```
Asia/Aden
Asia/Almaty
Asia/Amman
Asia/Anadyr
Asia/Aqtau
```

Example #3 Listing identifiers for multiple regions

```
<?php
$timezone_identifiers = DateTimeZone::listIdentifiers( DateTimeZone::ASIA | DateTimeZone::PACIFIC );
echo join( ', ', $timezone_identifiers );
?>
```

The above example will output something similar to:

```
Asia/Aden, Asia/Almaty, Asia/Amman, Asia/Anadyr, Asia/Aqtau, Asia/Aqtobe,
Asia/Ashgabat, Asia/Atyrau, Asia/Baghdad, Asia/Bahrain, Asia/Baku,
Asia/Bangkok, Asia/Barnaul, Asia/Beirut, Asia/Bishkek, Asia/Brunei,
Asia/Chita, Asia/Choibalsan, Asia/Colombo, Asia/Damascus, Asia/Dhaka,
Asia/Dili, Asia/Dubai, Asia/Dushanbe, Asia/Famagusta, Asia/Gaza, Asia/Hebron,
Asia/Ho_Chi_Minh, Asia/Hong_Kong, Asia/Hovd, Asia/Irkutsk, Asia/Jakarta,
Asia/Jayapura, Asia/Jerusalem, Asia/Kabul, Asia/Kamchatka, Asia/Karachi,
Asia/Kathmandu, Asia/Khandyga, Asia/Kolkata, Asia/Krasnoyarsk,
Asia/Kuala_Lumpur, Asia/Kuching, Asia/Kuwait, Asia/Macau, Asia/Magadan,
Asia/Makassar, Asia/Manila, Asia/Muscat, Asia/Nicosia, Asia/Novokuznetsk,
Asia/Novosibirsk, Asia/Omsk, Asia/Oral, Asia/Phnom_Penh, Asia/Pontianak,
Asia/Pyongyang, Asia/Qatar, Asia/Qostanay, Asia/Qyzylorda, Asia/Riyadh,
Asia/Sakhalin, Asia/Samarkand, Asia/Seoul, Asia/Shanghai, Asia/Singapore,
Asia/Srednekolymsk, Asia/Taipei, Asia/Tashkent, Asia/Tbilisi, Asia/Tehran,
Asia/Thimphu, Asia/Tokyo, Asia/Tomsk, Asia/Ulaanbaatar, Asia/Urumqi,
Asia/Ust-Nera, Asia/Vientiane, Asia/Vladivostok, Asia/Yakutsk, Asia/Yangon,
Asia/Yekaterinburg, Asia/Yerevan, Pacific/Apia, Pacific/Auckland,
Pacific/Bougainville, Pacific/Chatham, Pacific/Chuuk, Pacific/Easter,
Pacific/Efate, Pacific/Fakaofo, Pacific/Fiji, Pacific/Funafuti,
Pacific/Galapagos, Pacific/Gambier, Pacific/Guadalcanal, Pacific/Guam,
Pacific/Honolulu, Pacific/Kanton, Pacific/Kiritimati, Pacific/Kosrae,
Pacific/Kwajalein, Pacific/Majuro, Pacific/Marquesas, Pacific/Midway,
Pacific/Nauru, Pacific/Niue, Pacific/Norfolk, Pacific/Noumea,
Pacific/Pago_Pago, Pacific/Palau, Pacific/Pitcairn, Pacific/Pohnpei,
Pacific/Port_Moresby, Pacific/Rarotonga, Pacific/Saipan, Pacific/Tahiti,
Pacific/Tarawa, Pacific/Tongatapu, Pacific/Wake, Pacific/Wallis
```

Example #4 Listing identifiers for a single country

```
<?php
$timezone_identifiers = DateTimeZone::listIdentifiers( DateTimeZone::PER_COUNTRY, "UA" );
foreach( $timezone_identifiers as $identifier ) {
    echo "$identifier\n";
}
?>
```

The above example will output something similar to:

```
Europe/Kyiv
Europe/Simferopol
Europe/Uzhgorod
Europe/Zaporozhye
```

### See Also

- timezone_abbreviations_list() - Alias of DateTimeZone::listAbbreviations

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimezone.listidentifiers.php
