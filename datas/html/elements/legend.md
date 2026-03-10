# <legend>: The Field Set Legend element

Source: https://devdocs.io/html/reference/elements/legend

The <legend> HTML element represents a caption for the content of its parent <fieldset>.

In customizable <select> elements, the <legend> element is allowed as a child of <optgroup>, to provide a label that is easy to target and style. This replaces any text set in the <optgroup> element's label attribute, and it has the same semantics.

## Try it

```
<fieldset>
  <legend>Choose your favorite monster</legend>

  <input type="radio" id="kraken" name="monster" value="K" />
  <label for="kraken">Kraken</label><br />

  <input type="radio" id="sasquatch" name="monster" value="S" />
  <label for="sasquatch">Sasquatch</label><br />

  <input type="radio" id="mothman" name="monster" value="M" />
  <label for="mothman">Mothman</label>
</fieldset>
```

```
legend {
  background-color: black;
  color: white;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

## Attributes

This element only includes the global attributes.

## Examples

See <form> for examples on <legend>.

## Technical summary

## Specifications

## Browser compatibility

## See also

- ARIA: Form role

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/legend
