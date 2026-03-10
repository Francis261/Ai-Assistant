# HTML attribute: max

Source: https://devdocs.io/html/reference/attributes/max

The max attribute defines the maximum value that is acceptable and valid for the input containing the attribute. If the value of the element is greater than this, the element fails validation. This value must be greater than or equal to the value of the min attribute. If the max attribute is present but is not specified or is invalid, no max value is applied. If the max attribute is valid and a non-empty value is greater than the maximum allowed by the max attribute, constraint validation will prevent form submission.

The max attribute is valid for the numeric input types, including the date, month, week, time, datetime-local, number and range types, and both the <progress> and <meter> elements. It is a number that specifies the most positive value a form control to be considered valid.

If the value exceeds the max value allowed, the validityState.rangeOverflow will be true, and the control will be matched by the :out-of-range and :invalid pseudo-classes.

## Syntax

Note: When the data entered by the user doesn't adhere to the maximum value set, the value is considered invalid in constraint validation and will match the :invalid and :out-of-range pseudo-classes.

See Client-side validation and rangeOverflow for more information.

For the <progress> element, the max attribute describes how much work the task indicated by the progress element requires. If present, must have a value greater than zero and be a valid floating point number. For the <meter> element, the max attribute defines the upper numeric bound of the measured range. This must be greater than the minimum value (min attribute), if specified. In both cases, if omitted, the value defaults to 1.

## Accessibility concerns

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information. When using the max attribute, ensure this maximum requirement is understood by the user. Providing instructions within the <label> may be sufficient. If providing instructions outside of labels, which allows more flexible positioning and design, consider using aria-labelledby or aria-describedby.

## Specifications

## Browser compatibility

### html.elements.input.max

### html.elements.meter.max

### html.elements.progress.max

## See also

- step
- min
- Constraint validation
- Form validation
- validityState.rangeOverflow
- :out-of-range
- <input>
- date, month, week, time, datetime-local, number and range types, and the <meter>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/max
