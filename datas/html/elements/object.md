# <object>: The External Object element

Source: https://devdocs.io/html/reference/elements/object

The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.

## Try it

```
<object
  type="video/mp4"
  data="/shared-assets/videos/flower.mp4"
  width="250"
  height="200"></object>
```

## Attributes

This element includes the global attributes.

A space-separated list of URIs for archives of resources for the object.

The width of a border around the control, in pixels.

The URI of the object's implementation. It can be used together with, or in place of, the data attribute.

The base path used to resolve relative URIs specified by classid, data, or archive. If not specified, the default is the base URI of the current document.

The content type of the data specified by classid.

The address of the resource as a valid URL. At least one of data and type must be defined.

The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent <object> element. Repeat the <object> element completely each time the resource is reused.

The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document.

The height of the displayed resource, as in <integer> in CSS pixels.

The name of valid browsing context (HTML5), or the name of the control (HTML 4). The name becomes a property of the Window and Document objects, containing a reference to the embedded window or the element itself.

A message that the browser can show while loading the object's implementation and data.

The content type of the resource specified by data. At least one of data and type must be defined.

A hash-name reference to a <map> element; that is a '#' followed by the value of a name of a map element.

The width of the display resource, as in <integer> in CSS pixels.

## Examples

### Embed a video

#### HTML

```
<object
  type="video/webm"
  data="/shared-assets/videos/flower.webm"
  width="600"
  height="140">
  <img
    src="/shared-assets/images/examples/flowers.jpg"
    alt="Some beautiful flowers" />
</object>
```

#### Result

If the video in the example fails to load, the user will be provided with an image as fallback content. The <img> tag is used to display an image. We include the src attribute set to the path to the image we want to embed. We also include the alt attribute, which provides the image with an accessible name. If the image also fails to load, the content of the alt attribute will be displayed.

## Technical summary

## Specifications

## Browser compatibility

## See also

- <embed>
- <param>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object
