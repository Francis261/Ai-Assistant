# <option>: The HTML Option element

Source: https://devdocs.io/html/reference/elements/option

The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.

## Try it

```
<label for="pet-select">Choose a pet:</label>

<select id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
```

```
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

## Attributes

This element includes the global attributes.

If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled <optgroup> element.

This attribute is text for the label indicating the meaning of the option. If the label attribute isn't defined, its value is that of the element text content.

If present, this Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one single <option> of this <select> element may have the selected attribute.

The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.

## Styling with CSS

Styling <option> elements has historically been highly limited. Customizable select elements explains newer features that enable their full customization, just like any regular DOM element.

### Legacy option styling

In browsers that don't support the modern customization features (or legacy codebases where they can't be used), the styling available on <option> elements depends on the browser and operating system. Depending on the operating system, the font-size of the owning <select> is respected in Firefox and Chromium. Chromium may additionally allow color, background-color, font-family, font-variant, and text-align to be set.

You can find more details about legacy <option> styling in our guide to advanced form styling.

## Examples

See <select> for examples.

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other form-related elements: <form>, <legend>, <label>, <button>, <select>, <datalist>, <optgroup>, <fieldset>, <textarea>, <input>, <output>, <progress> and <meter>.
- Customizable select elements

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option
