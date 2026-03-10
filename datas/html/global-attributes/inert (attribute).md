# HTML inert global attribute

Source: https://devdocs.io/html/reference/global_attributes/inert

The inert global attribute is a Boolean attribute indicating that the element and all of its flat tree descendants become inert. Modal <dialog>s generated with showModal() escape inertness, meaning that they don't inherit inertness from their ancestors, but can only be made inert by having the inert attribute explicitly set on themselves.

Specifically, inert does the following:

- Prevents the click event from being fired when the user clicks on the element.
- Prevents the focus event from being raised by preventing the element from gaining focus.
- Prevents any contents of the element from being found/matched during any use of the browser's find-in-page feature.
- Prevents users from selecting text within the element — akin to using the CSS property user-select to disable text selection.
- Prevents users from editing any contents of the element that are otherwise editable.
- Hides the element and its content from assistive technologies by excluding them from the accessibility tree.

```
<div inert>
  <!-- content -->
</div>
```

The inert attribute can be added to sections of content that should not be interactive. When an element is inert, it along with all of the element's descendants, including normally interactive elements such as links, buttons, and form controls are disabled because they cannot receive focus or be clicked.

The inert attribute can also be added to elements that should be offscreen or hidden. An inert element, along with its descendants, gets removed from the tab order and accessibility tree.

Note: While inert is a global attribute and can be applied to any element, it is generally used for sections of content. To make individual controls "inert", consider using the disabled attribute, along with CSS :disabled styles, instead.

## Accessibility concerns

Use careful consideration for accessibility when applying the inert attribute. By default, there is no visual way to tell whether or not an element or its subtree is inert. As a web developer, it is your responsibility to clearly indicate the content parts that are active and those that are inert.

While providing visual and non-visual cues about content inertness, also remember that the visual viewport may contain only sections of content. Users may be zoomed in to a small section of content, or users may not be able to view the content at all. Inert sections not being obviously inert can lead to frustration and bad user experience.

## Specifications

## Browser compatibility

## See also

- HTML <dialog> element
- HTMLElement.inert HTML DOM property
- Introducing inert
- The "inert" attribute is finally coming to the web

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert
