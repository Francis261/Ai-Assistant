# Tk

Source: https://devdocs.io/http/headers/tk

# Tk

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The Tk response header indicates the tracking status that applied to the corresponding request.

## Syntax

```
Tk: !  (under construction)
Tk: ?  (dynamic)
Tk: G  (gateway or multiple parties)
Tk: N  (not tracking)
Tk: T  (tracking)
Tk: C  (tracking with consent)
Tk: P  (potential consent)
Tk: D  (disregarding DNT)
Tk: U  (updated)
```

### Directives

Under construction. The origin server is currently testing its communication of tracking status.

Dynamic. The origin server needs more information to determine tracking status.

Gateway or multiple parties. The server is acting as a gateway to an exchange involving multiple parties.

Not tracking.

Tracking.

Tracking with consent. The origin server believes it has received prior consent for tracking this user, user agent, or device.

Potential consent. The origin server does not know, in real-time, whether it has received prior consent for tracking this user, user agent, or device, but promises not to use or share any DNT:1 data until such consent has been determined, and further promises to delete or permanently de-identify within 48 hours any DNT:1 data received for which such consent has not been received.

Disregarding DNT. The origin server is unable or unwilling to respect a tracking preference received from the requesting user agent.

Updated. The request resulted in a potential change to the tracking status applicable to this user, user agent, or device.

## Examples

A Tk header for a resource that claims not to be tracking would look like:

```
Tk: N
```

## Specifications

## Browser compatibility

## See also

- DNT header
- Navigator.doNotTrack

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Tk
