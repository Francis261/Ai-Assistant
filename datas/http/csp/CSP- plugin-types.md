# CSP: plugin-types

Source: https://devdocs.io/http/headers/content-security-policy/plugin-types

# CSP: plugin-types

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The HTTP Content-Security-Policy (CSP) plugin-types directive restricts the set of plugins that can be embedded into a document by limiting the types of resources which can be loaded.

Instantiation of an <embed>, <object> or <applet> element will fail if:

- the element to load does not declare a valid MIME type,
- the declared type does not match one of specified types in the plugin-types directive,
- the fetched resource does not match the declared type.

## Syntax

One or more MIME types can be set for the plugin-types policy:

```
Content-Security-Policy: plugin-types <type>/<subtype>;
Content-Security-Policy: plugin-types <type>/<subtype> <type>/<subtype>;
```

A valid MIME type.

## Examples

### Disallowing plugins

To disallow all plugins, the object-src directive should be set to 'none' which will disallow plugins. The plugin-types directive is only used if you are allowing plugins with object-src at all.

```
<meta http-equiv="Content-Security-Policy" content="object-src 'none'" />
```

### Allowing Java applets

To load an <applet> you must specify application/x-java-applet:

```
Content-Security-Policy: plugin-types application/x-java-applet
```

## Specifications

Not part of any current specification. Used to be defined in CSP 2.

## Browser compatibility

## See also

- Content-Security-Policy: object-src
- <object>
- <embed>
- <applet>
- X-Content-Type-Options

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/plugin-types
