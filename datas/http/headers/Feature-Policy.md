# Feature-Policy

Source: https://devdocs.io/http/headers/feature-policy

# Feature-Policy

Warning: The header has now been renamed to Permissions-Policy in the spec, and this article will eventually be updated to reflect that change.

The HTTP Feature-Policy header provides a mechanism to allow and deny the use of browser features in its own frame, and in content within any <iframe> elements in the document.

For more information, see the main Feature Policy article.

## Syntax

```
Feature-Policy: <directive> <allowlist>
```

The Feature Policy directive to apply the allowlist to. See Directives below for a list of the permitted directive names.

An allowlist is a list of origins that takes one or more of the following values, separated by spaces:

- *: The feature will be allowed in this document, and all nested browsing contexts (iframes) regardless of their origin.
- 'self': The feature will be allowed in this document, and in all nested browsing contexts (iframes) in the same origin. The feature is not allowed in cross-origin documents in nested browsing contexts.
- 'src': (In an iframe allow attribute only) The feature will be allowed in this iframe, as long as the document loaded into it comes from the same origin as the URL in the iframe's src attribute. Note: The 'src' origin is used in the iframe allow attribute only, and is the default allowlist value.
- 'none': The feature is disabled in top-level and nested browsing contexts.
- <origin(s)>: The feature is allowed for specific origins (for example, https://example.com). Origins should be separated by a space.

Note: The 'src' origin is used in the iframe allow attribute only, and is the default allowlist value.

The values * (enable for all origins) or 'none' (disable for all origins) may only be used alone, while 'self' and 'src' may be used with one or more origins.

Features have a default allowlist, which is one of: *, 'self', or 'none'.

## Directives

Controls whether the current document is allowed to gather information about the acceleration of the device through the Accelerometer interface.

Controls whether the current document is allowed to gather information about the amount of light in the environment around the device through the AmbientLightSensor interface.

Controls whether the current document is allowed to autoplay media requested through the HTMLMediaElement interface. When this policy is disabled and there were no user gestures, the Promise returned by HTMLMediaElement.play() will reject with a DOMException. The autoplay attribute on <audio> and <video> elements will be ignored.

Controls whether the use of the Battery Status API is allowed. When this policy is disabled, the Promise returned by Navigator.getBattery() will reject with a NotAllowedError DOMException.

Controls whether the current document is allowed to use video input devices. When this policy is disabled, the Promise returned by getUserMedia() will reject with a NotAllowedError DOMException.

Controls whether or not the current document is permitted to use the getDisplayMedia() method to capture screen contents. When this policy is disabled, the promise returned by getDisplayMedia() will reject with a NotAllowedError if permission is not obtained to capture the display's contents.

Controls whether the current document is allowed to set document.domain. When this policy is disabled, attempting to set document.domain will fail and cause a SecurityError DOMException to be thrown.

Controls whether the current document is allowed to use the Encrypted Media Extensions API (EME). When this policy is disabled, the Promise returned by Navigator.requestMediaKeySystemAccess() will reject with a DOMException.

Controls whether tasks should execute in frames while they're not being rendered (e.g. if an iframe is hidden or display: none).

Controls whether tasks should execute in frames while they're outside of the visible viewport.

Controls whether the current document is allowed to use Element.requestFullscreen(). When this policy is disabled, the returned Promise rejects with a TypeError.

Controls whether the current document is allowed to use the Gamepad API. When this policy is disabled, calls to Navigator.getGamepads() will throw a SecurityError DOMException, and the gamepadconnected and gamepaddisconnected events will not fire.

Controls whether the current document is allowed to use the Geolocation Interface. When this policy is disabled, calls to getCurrentPosition() and watchPosition() will cause those functions' callbacks to be invoked with a GeolocationPositionError code of PERMISSION_DENIED.

Controls whether the current document is allowed to gather information about the orientation of the device through the Gyroscope interface.

Controls whether the current document is allowed to show layout animations.

Controls whether the current document is allowed to display images in legacy formats.

Controls whether the current document is allowed to gather information about the orientation of the device through the Magnetometer interface.

Controls whether the current document is allowed to use audio input devices. When this policy is disabled, the Promise returned by MediaDevices.getUserMedia() will reject with a NotAllowedError DOMException.

Controls whether the current document is allowed to use the Web MIDI API. When this policy is disabled, the Promise returned by Navigator.requestMIDIAccess() will reject with a DOMException.

Controls the availability of mechanisms that enables the page author to take control over the behavior of spatial navigation, or to cancel it outright.

Controls whether the current document is allowed to download and display large images.

Controls whether the current document is allowed to use the Payment Request API. When this policy is enabled, the PaymentRequest() constructor will throw a SecurityError DOMException.

Controls whether the current document is allowed to play a video in a Picture-in-Picture mode via the corresponding API.

Controls whether the current document is allowed to use the Web Authentication API to retrieve already stored public-key credentials, i.e. via navigator.credentials.get({publicKey: ..., ...}).

Controls whether the current document is allowed to use the Audio Output Devices API to list and select speakers.

Controls whether the current document is allowed to make synchronous XMLHttpRequest requests.

Controls whether the current document is allowed to download and display unoptimized images.

Controls whether the current document is allowed to change the size of media elements after the initial layout is complete.

Controls whether the current document is allowed to use the WebUSB API.

Controls whether the current document is allowed to use Screen Wake Lock API to indicate that device should not turn off or dim the screen.

Controls whether or not the current document is allowed to use the Navigator.share() of Web Share API to share text, links, images, and other content to arbitrary destinations of user's choice, e.g. mobile apps.

Controls whether or not the current document is allowed to use the WebXR Device API to interact with a WebXR session.

## Example

SecureCorp Inc. wants to disable Microphone and Geolocation APIs in its application. It can do so by delivering the following HTTP response header to define a feature policy:

```
Feature-Policy: microphone 'none'; geolocation 'none'
```

By specifying the 'none' keyword for the origin list, the specified features will be disabled for all browsing contexts (this includes all iframes), regardless of their origin.

## Specifications

## Browser compatibility

## See also

- Feature Policy
- Using Feature Policy
- Document.featurePolicy and FeaturePolicy
- Feature-Policy Tester (Chrome Developer Tools extension)
- Content-Security-Policy
- Referrer-Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
