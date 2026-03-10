# <slot>: The Web Component Slot element

Source: https://devdocs.io/html/reference/elements/slot

The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.

## Attributes

This element includes the global attributes.

The slot's name. When the slot's containing component gets rendered, the slot is rendered with the custom element's child that has a matching slot attribute. A named slot is a <slot> element with a name attribute. Unnamed slots have the name default to the empty string. Names should be unique per shadow root: if you have two slots with the same name, all of the elements with a matching slot attribute will be assigned to the first slot with that name.

## Examples

```
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name">
        &lt;<slot name="element-name">NEED NAME</slot>&gt;
      </code>
      <span class="desc"><slot name="description">NEED DESCRIPTION</slot></span>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

Note: You can see this complete example in action at element-details (see it running live). In addition, you can find an explanation at Using templates and slots.

## Technical summary

## Specifications

## Browser compatibility

## See also

- HTML <template> element
- HTML slot attribute
- CSS ::slotted pseudo-element
- CSS :has-slotted pseudo-class
- CSS scoping module

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/slot
