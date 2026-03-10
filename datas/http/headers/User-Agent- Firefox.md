# User-Agent: Firefox

Source: https://devdocs.io/http/headers/user-agent/firefox

# Firefox user agent string reference

This document describes the user agent string used in Firefox 4 and later and applications based on Gecko 2.0 and later. For a breakdown of changes to the string in Gecko 2.0, see Final User Agent string for Firefox 4 (blog post). See also this document on user agent sniffing and this Hacks blog post.

## General form

The UA string of Firefox itself is broken down into four components:

Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion

- Mozilla/5.0 is the general token that says the browser is Mozilla compatible, and is common to almost every browser today.
- platform describes the native platform the browser is running on (e.g. Windows, Mac, Linux or Android), and whether or not it's a mobile phone. Firefox OS phones say "Mobile"; the web is the platform. Note that platform can consist of multiple "; "-separated tokens. See below for further details and examples. Note: Though fixed in Firefox 69, previous 32-bit versions of Firefox running on 64-bit processors would report that the system is using a 32-bit CPU.
- rv:geckoversion indicates the release version of Gecko (such as "17.0"). In recent browsers, geckoversion is the same as firefoxversion.
- Gecko/geckotrail indicates that the browser is based on Gecko.
- On Desktop, geckotrail is the fixed string "20100101"
- Firefox/firefoxversion indicates the browser is Firefox, and provides the version (such as "17.0").
- From Firefox 10 on mobile, geckotrail is the same as firefoxversion.

Note: Though fixed in Firefox 69, previous 32-bit versions of Firefox running on 64-bit processors would report that the system is using a 32-bit CPU.

Note: The recommended way of sniffing for Gecko-based browsers (if you have to sniff for the browser engine instead of using feature detection) is by the presence of the "Gecko" and "rv:" strings, since some other browsers include a "like Gecko" token.

For other products based on Gecko, the string can take one of two forms, where the tokens have the same meaning except those noted below:

Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail appname/appversion Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion appname/appversion

- appname/appversion indicates the application name and version. For instance, this could be "Camino/2.1.1", or "SeaMonkey/2.7.1".
- Firefox/firefoxversion is an optional compatibility token that some Gecko-based browsers may choose to incorporate, to achieve maximum compatibility with websites that expect Firefox. firefoxversion will generally represent the equivalent Firefox release corresponding to the given Gecko version. Some Gecko-based browsers may not opt into using this token; for this reason, sniffers should be looking for Gecko — not Firefox!

Prior to Firefox 4 and Gecko 2.0, it was possible for extensions and plug-ins to add user agent parts, but that has not been possible since bug 581008.

## Mobile and Tablet indicators

Note: Only from Firefox 11 to 68.

The platform part of the UA string indicates if Firefox is running on a phone-sized or tablet device. When Firefox runs on a device that has the phone form factor, there is a Mobile; token in the platform part of the UA string. When Firefox runs on a tablet device, there is a Tablet; token in the platform part of the UA string instead. For example:

```
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

Note: The version numbers are not relevant. Avoid inferring materials based on these.

The preferred way to target content to a device form factor is to use CSS Media Queries. However, if you use UA sniffing to target content to a device form factor, please look for Mobi (to include Opera Mobile, which uses "Mobi") for the phone form factor and do not assume any correlation between "Android" and the device form factor. This way, your code will work if/when Firefox ships on other phone/tablet operating systems or Android is used for laptops. Also, please use touch detection to find touch devices rather than looking for "Mobi" or "Tablet", since there may be touch devices which are not tablets.

Note: Firefox OS devices identify themselves without any operating system indication; for example: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". The web is the platform.

## Windows

Windows user agents have the following variations, where x.y is the Windows NT version (for instance, Windows NT 6.1).

## Macintosh

Here, x.y is the version of Mac OS X (for instance, Mac OS X 10.15). Starting in Firefox 87, Firefox caps the reported Mac OS X version number to 10.15, so macOS 11.0 Big Sur and later will be reported as "10.15" in the User-Agent string.

Note that Firefox no longer officially supports Mac OS X on PowerPC.

## Linux

Linux is a more diverse platform. Your distribution of Linux might include an extension that changes your user-agent. A few common examples are given below.

## Android (version 40 and below)

## Android (version 41 and above)

Beginning in version 41, Firefox for Android will contain the Android version as part of the platform token. For increased interoperability, if the browser is running on a version below 4 it will report 4.4. Android versions 4 and above will report the version accurately. Note that the same Gecko—with the same capabilities—is shipped to all versions of Android.

## Focus for Android

From version 1, Focus is powered by Android WebView and uses the following user agent string format:

```
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet versions on WebView mirror mobile, but do not contain a Mobile token.

Starting in Version 6, users can opt into using a GeckoView-based Focus for Android with a hidden preference: it uses a GeckoView UA string to advertise Gecko compatibility.

## Klar for Android

Since version 4.1, Klar for Android uses the same UA string as Focus for Android. Before version 4.1, it sent a Klar/<version> product/version token.

## Focus for iOS

Version 7 of Focus for iOS uses a user agent string with the following format:

```
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Note: this user agent was retrieved from an iPhone XR simulator and may be different on device.

## Firefox for Fire TV

Version 3 (and probably earlier) of Firefox for Fire TV use a user agent string with the following format:

```
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

## Firefox for Echo Show

From version 1.1, Firefox for Echo Show uses a user agent string with the following format:

```
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

## Firefox OS

### Device-specific user agent strings

Although it is strongly discouraged by Mozilla, some handset manufacturers unfortunately include a token in their device's UA string that represents their device id. If this is the case, the Firefox OS UA string will look like the device-specific string in the table above, where nnnn; is the manufacturer's code for the device (see Guidelines). Some of them we have noticed are of the form "NexusOne;", "ZTEOpen;", or "Open C;" (note that putting space is also discouraged). We provide this information to assist with your UA detection logic, but Mozilla discourages the detection of a device id in UA strings.

Here is a JavaScript regular expression that will detect all mobile devices, including devices with a device id in their UA string:

```
/mobi/i
```

The i makes it case-insensitive, and mobi matches all mobile browsers.

### Firefox OS version number

While the version number for Firefox OS is not included in the UA string, it is possible to infer version information from the Gecko version number present in the UA string.

Note: It's easy to find the correspondences by looking at the Mercurial repository names: repositories starting by mozilla-b2g are the release repositories for Firefox OS, and have both Firefox OS and Gecko versions in their names.

Firefox OS has a four-digit version number: X.X.X.Y. The first two digits are owned by the Mozilla product team and denote versions with new features (eg: v1.1, 1.2, etc.). The third digit is incremented with regular version tags (about every 6 weeks) for security updates, and the fourth is owned by the OEM.

## Firefox for iOS

Firefox for iOS uses the default Mobile Safari UA string, with an additional FxiOS/<version> token on iPod and iPhone, similar to how Chrome for iOS identifies itself.

Regarding the deviation on iPad form factor, see this issue.

## Other Gecko-based browsers

These are some sample UA strings from other Gecko-based browsers on various platforms. Note that many of these have not yet been released on Gecko 2.0!

## See also

- Firefox OS User Agent String (blog post w/bug 777710 reference)
- Final User Agent string for Firefox 4 (blog post)
- Recommendations on sniffing the UA string for cross-browser support
- window.navigator.userAgent
- Add Android version to Fennec UA String (bug 1169772)

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox
