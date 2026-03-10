# <optgroup>: The Option Group element

Source: https://devdocs.io/html/reference/elements/optgroup

The <optgroup> HTML element creates a grouping of options within a <select> element.

In customizable <select> elements, the <legend> element is allowed as a child of <optgroup>, to provide a label that is easy to target and style. This replaces any text set in the <optgroup> element's label attribute, and it has the same semantics.

## Try it

```
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
  <optgroup label="Theropods">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropods">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

```
label {
  display: block;
  margin-bottom: 10px;
}
```

Note: Optgroup elements may not be nested.

## Attributes

This element includes the global attributes.

If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.

The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.

## Examples

```
<select>
  <optgroup label="Group 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Group 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other form-related elements: <form>, <legend>, <label>, <button>, <select>, <datalist>, <option>, <fieldset>, <textarea>, <input>, <output>, <progress> and <meter>.
- Customizable select elements

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/optgroup
