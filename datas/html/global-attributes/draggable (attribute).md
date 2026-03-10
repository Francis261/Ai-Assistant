# HTML draggable global attribute

Source: https://devdocs.io/html/reference/global_attributes/draggable

The draggable global attribute is an enumerated attribute that indicates whether the element can be dragged, either with native browser behavior or the HTML Drag and Drop API.

The draggable attribute may be applied to elements that strictly fall under the HTML namespace, which means that it cannot be applied to SVGs. For more information about what namespace declarations look like, and what they do, see Namespace crash course.

draggable can have the following values:

- true: the element can be dragged.
- false: the element cannot be dragged.

Warning: This attribute is enumerated and not Boolean. A value of true or false is mandatory, and shorthand like <img draggable> is forbidden. The correct usage is <img draggable="true">.

If this attribute is not set, its default value is auto, which means drag behavior is the default browser behavior: only text selections, images, and links can be dragged. For other elements, the event ondragstart must be set for drag and drop to work, as shown in this comprehensive example.

## Specifications

## Browser compatibility

## See also

- All global attributes.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/draggable
