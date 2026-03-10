# Content negotiation: List of default Accept values

Source: https://devdocs.io/http/content_negotiation/list_of_default_accept_values

# List of default Accept values

This article documents the default values for the HTTP Accept header for specific inputs and browser versions.

## Default values

These are the values sent when the context doesn't give better information. Note that all browsers add the */* MIME Type to cover all cases. This is typically used for requests initiated via the address bar of a browser, or via an HTML <a> element.

[1] This value can be modified using the network.http.accept.default parameter.

[2] This is an improvement over earlier Accept headers as it no longer ranks image/png above text/html.

[3] See IE and the Accept Header (IEInternals' MSDN blog).

## Values for an image

When requesting an image, like through an HTML <img> element, user-agent often sets a specific list of media types to be welcomed.

[1] This value can be modified using the image.http.accept parameter (source).

## Values for a video

When a video is requested, via the <video> HTML element, most browsers use specific values.

## Values for audio resources

When an audio file is requested, like via the <audio> HTML element, most browsers use specific values.

[1] See bug 489071.

## Values for scripts

When a script is requested, like via the <script> HTML element, some browsers use specific values.

[1] See bug 170789.

[2] See IE and the Accept Header (IEInternals' MSDN blog).

## Values for a CSS stylesheet

When a CSS stylesheet is requested, via the <link rel="stylesheet"> HTML element, most browsers use specific values.

[1] See bug 170789.

[2] See IE and the Accept Header (IEInternals' MSDN blog).

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values
