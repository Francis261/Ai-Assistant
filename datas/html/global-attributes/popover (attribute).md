# HTML popover global attribute

Source: https://devdocs.io/html/reference/global_attributes/popover

The popover global attribute is used to designate an element as a popover element.

## Value

The popover attribute can take one of the following values:

auto popovers can be "light dismissed" — this means that you can hide the popover by clicking outside it or pressing the Esc key. Showing an auto popover will generally close other auto popovers that are already displayed, unless they are nested.

Note: Setting an empty value for popover — popover or popover="" — is equivalent to setting popover="auto".

hint popovers do not close auto popovers when they are displayed, but will close other hint popovers. They can be light dismissed and will respond to close requests.

manual popovers cannot be "light dismissed" and are not automatically closed. Popovers must explicitly be displayed and closed using declarative show/hide/toggle buttons or JavaScript. Multiple independent manual popovers can be shown simultaneously.

## Description

Popover elements are hidden via display: none until opened via an invoking/control element (i.e., a <button> or <input type="button"> with a popovertarget attribute) or a HTMLElement.showPopover() call.

When open, popover elements will appear above all other elements in the top layer, and won't be influenced by parent elements' position or overflow styling.

Popovers that have the auto state can be shown and hidden using associated controls (designated by the popovertarget attribute) and "light dismissed" by clicking outside the popover area, opening another popover, or pressing browser-specific mechanisms such as the Esc key.

Generally only one auto popover can be displayed on-screen at a time — showing a second popover when one is already shown will hide the first one. The exception to this rule is when you have nested auto popovers. See Nested popovers for more details.

They can also be controlled using JavaScript, for example the HTMLElement.togglePopover() method can be used to toggle a popover between shown and hidden.

By contrast, manual popovers must be manually shown and hidden — they don't automatically close other popovers when they are displayed and they can't be light dismissed. This allows for use cases where you want to show multiple popovers at the same time.

hint popovers do not close auto popovers when they are displayed, but will close other hint popovers. They can be light dismissed and will respond to close requests.

Usually hint popovers are shown and hidden in response to non-click JavaScript events such as mouseover/mouseout and focus/blur. Clicking a button to open a hint popover would cause an open auto popover to light-dismiss.

For detailed information on usage, see the Popover API landing page.

## Examples

The following renders a button that will open a popover element when activated.

```
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

Note: See our Popover API examples landing page to access the full collection of MDN popover examples.

## Specifications

## Browser compatibility

## See also

- Popover API
- popovertarget HTML attribute
- popovertargetaction HTML attribute
- ::backdrop CSS pseudo-element
- :popover-open CSS pseudo-class

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover
