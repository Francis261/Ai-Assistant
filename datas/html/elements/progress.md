# <progress>: The Progress Indicator element

Source: https://devdocs.io/html/reference/elements/progress

The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

## Try it

```
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

## Attributes

This element includes the global attributes.

This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0 and be a valid floating point number. The default value is 1.

This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.

Note: Unlike the <meter> element, the minimum value is always 0, and the min attribute is not allowed for the <progress> element.

Note: The :indeterminate pseudo-class can be used to match against indeterminate progress bars. To change the progress bar to indeterminate after giving it a value you must remove the value attribute with element.removeAttribute('value').

## Accessibility

### Labelling

In most cases you should provide an accessible label when using <progress>. While you can use the standard ARIA labelling attributes aria-labelledby or aria-label as you would for any element with role="progressbar", when using <progress> you can alternatively use the <label> element.

Note: Text placed between the element's tags is not an accessible label, it is only recommended as a fallback for old browsers that do not support this element.

#### Examples

```
<label>
  Uploading Document: <progress value="70" max="100">70 %</progress>
</label>

<!-- OR -->
<br />

<label for="progress-bar">Uploading Document</label>
<progress id="progress-bar" value="70" max="100">70 %</progress>
```

#### Result

### Describing a particular region

If the <progress> element is describing the loading progress of a section of a page, use aria-describedby to point to the status, and set aria-busy="true" on the section that is being updated, removing the aria-busy attribute when it has finished loading.

#### Examples

```
<div aria-busy="true" aria-describedby="progress-bar">
  <!-- content is for this region is loading -->
</div>

<!-- ... -->

<progress id="progress-bar" aria-label="Content loading…"></progress>
```

##### Result

## Examples

```
<progress value="70" max="100">70 %</progress>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Creating vertical form controls
- <meter>
- :indeterminate
- -moz-orient
- ::-moz-progress-bar
- ::-webkit-progress-bar
- ::-webkit-progress-value
- ::-webkit-progress-inner-element

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress
