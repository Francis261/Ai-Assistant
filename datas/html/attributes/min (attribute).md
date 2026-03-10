# HTML attribute: min

Source: https://devdocs.io/html/reference/attributes/min

The min attribute defines the minimum value that is acceptable and valid for the input containing the attribute. If the value of the element is less than this, the element fails validation. This value must be less than or equal to the value of the max attribute.

Some input types have a default minimum. If the input has no default minimum and a value is specified for min that can't be converted to a valid number (or no minimum value is set), the input has no minimum value.

It is valid for the input types including: date, month, week, time, datetime-local, number and range types, and the <meter> element.

## Syntax

Note: When the data entered by the user doesn't adhere to the min value set, the value is considered invalid in constraint validation and will match the :invalid and :out-of-range pseudo-classes.

See Client-side validation and rangeUnderflow for more information.

For the <meter> element, the min attribute defines the lower numeric bound of the measured range. This must be less than the maximum value (max attribute), if specified. In both cases, if omitted, the value defaults to 1.

### Impact on step

The value of min and step define what are valid values, even if the step attribute is not included, as step defaults to 0.

We add a big red border around invalid inputs:

```
input:invalid {
  border: solid red 3px;
}
```

Then define an input with a minimum value of 7.2, omitting the step attribute, wherein it defaults to 1.

```
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Because step defaults to 1, valid values include 7.2, 8.2, 9.2, and so on. The value 8 is not valid. As we included an invalid value, supporting browsers will show the value as invalid.

If not explicitly included, step defaults to 1 for number and range, and 1 unit type (second, week, month, day) for the date/time input types.

## Accessibility concerns

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information. When using the min attribute, ensure this minimum requirement is understood by the user. Providing instructions within the <label> may be sufficient. If providing instructions outside of labels, which allows more flexible positioning and design, consider using aria-labelledby or aria-describedby.

## Specifications

## Browser compatibility

### html.elements.input.min

### html.elements.meter.min

## See also

- step
- max
- other meter attributes: low, high, optimum
- Constraint validation
- Form validation
- validityState.rangeUnderflow
- :out-of-range
- <input>
- date, month, week, time, datetime-local, number and range types, and the <meter>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/min
