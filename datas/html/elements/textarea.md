# <textarea>: The Textarea element

Source: https://devdocs.io/html/reference/elements/textarea

The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

## Try it

```
<label for="story">Tell us your story:</label>

<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

```
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px 1px #999999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

The above example demonstrates a number of features of <textarea>:

- An id attribute to allow the <textarea> to be associated with a <label> element for accessibility purposes
- A name attribute to set the name of the associated data point submitted to the server when the form is submitted.
- rows and cols attributes to allow you to specify an exact size for the <textarea> to take. Setting these is a good idea for consistency, as browser defaults can differ.
- The <textarea> element specifies its content differently in HTML and JavaScript contexts:
  - In HTML, the initial content of a <textarea> is specified between its opening and closing tags, not as a value attribute.
  - In JavaScript, <textarea> elements have a value property that can be used to get or set the current content, and defaultValue to get and set its initial value (equivalent to accessing the HTML element's text content).

- In HTML, the initial content of a <textarea> is specified between its opening and closing tags, not as a value attribute.
- In JavaScript, <textarea> elements have a value property that can be used to get or set the current content, and defaultValue to get and set its initial value (equivalent to accessing the HTML element's text content).

The <textarea> element also accepts several attributes common to form <input>s, such as autocapitalize, autocomplete, autofocus, disabled, placeholder, readonly, and required.

## Attributes

This element includes the global attributes.

Controls whether inputted text is automatically capitalized and, if so, in what manner.

Controls whether entered text can be automatically completed by the browser. Possible values are:

- off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
- on: The browser can automatically complete the value based on values that the user has entered during previous uses.
- <token-list>: An ordered set of space-separated autofill detail tokens, optionally preceded by a sectioning token, a billing or shipping grouping token, and/or a token identifying the type of recipient.

<textarea> elements that don't specify the autocomplete attribute inherit the autocomplete on or off status set on the <textarea>'s form owner. The form owner is either the <form> element that this <textarea> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form>.

Controls whether automatic spelling correction and processing of text is enabled while the user is editing this textarea. Permitted values are:

Enable automatic spelling correction and text substitutions.

Disable automatic spelling correction and text substitutions.

This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.

The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.

This attribute is used to indicate the text directionality of the element contents. For more information, see the dirname attribute.

This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element when the disabled attribute is set, the control is enabled.

The form element that the <textarea> element is associated with (its "form owner"). The value of the attribute must be the id of a form element in the same document. If this attribute is not specified, the <textarea> element must be a descendant of a form element. This attribute enables you to place <textarea> elements anywhere within a document, not just as descendants of form elements.

The maximum string length (measured in UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.

The minimum string length (measured in UTF-16 code units) required that the user should enter.

The name of the control.

A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.

Note: Placeholders should only be used to show an example of the type of data that should be entered into a form; they are not a substitute for a proper <label> element tied to the input. See <input> labels for a full explanation.

This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.

This attribute specifies that the user must fill in a value before submitting a form.

The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2.

Specifies whether the <textarea> is subject to spell-checking by the underlying browser/OS. The value can be:

- true: Indicates that the element needs to have its spelling and grammar checked.
- default : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value.
- false : Indicates that the element should not be spell-checked.

Indicates how the control should wrap the value for form submission. Possible values are:

- hard: The browser automatically inserts line breaks (CR+LF) so that each line is no longer than the width of the control; the cols attribute must be specified for this to take effect
- soft: The browser ensures that all line breaks in the entered value are a CR+LF pair, but no additional line breaks are added to the value.
- off Non-standard : Like soft but changes appearance to white-space: pre so line segments exceeding cols are not wrapped and the <textarea> becomes horizontally scrollable.

If this attribute is not specified, soft is its default value.

## Styling with CSS

<textarea> is a replaced element — it has intrinsic dimensions, like a raster image. By default, its display value is inline-block. Compared to other form elements it is relatively easy to style, with its box model, fonts, color scheme, etc. being easily manipulable using regular CSS.

Styling HTML forms provides some useful tips on styling <textarea>s.

### Baseline inconsistency

The HTML specification doesn't define where the baseline of a <textarea> is, so different browsers set it to different positions. For Gecko, the <textarea> baseline is set on the baseline of the first line of the textarea, on another browser it may be set on the bottom of the <textarea> box. Don't use vertical-align: baseline on it; the behavior is unpredictable.

### Controlling whether a textarea is resizable

In most browsers, <textarea>s are resizable — you'll notice the drag handle in the right-hand corner, which can be used to alter the size of the element on the page. This is controlled by the resize CSS property — resizing is enabled by default, but you can explicitly disable it using a resize value of none:

```
textarea {
  resize: none;
}
```

### Styling valid and invalid values

Valid and invalid values of a <textarea> element (e.g., those within, and outside the bounds set by minlength, maxlength, or required) can be highlighted using the :valid and :invalid pseudo-classes. For example, to give your textarea a different border depending on whether it is valid or invalid:

```
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Examples

### Basic example

The following example shows a textarea with a set number of rows and columns, some default content, and CSS styles that prevent users from resizing the element more than 500px wide and 130px high:

```
<textarea name="textarea" rows="5" cols="15">Write something here</textarea>
```

```
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Result

### Example using "minlength" and "maxlength"

This example has a minimum and maximum number of characters — of 10 and 20 respectively. Try it and see.

```
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
Write something here…
</textarea>
```

```
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Result

Note that minlength doesn't stop the user from removing characters so that the number entered goes past the minimum, but it does make the value entered into the <textarea> invalid. Also note that even if you have a minlength value set (3, for example), an empty <textarea> is still considered valid unless you also have the required attribute set.

### Example using "placeholder"

This example has a placeholder set. Notice how it disappears when you start typing into the box.

```
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Comment text."></textarea>
```

```
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Result

Note: Placeholders should only be used to show an example of the type of data that should be entered into a form; they are not a substitute for a proper <label> element tied to the input. See <input> labels for a full explanation.

### Disabled and readonly text areas

This example shows two <textarea>s — one is readonly and one is disabled. You cannot edit the contents of either element, but the readonly element is focusable and its value is submitted in forms. The disabled element's value is not submitted and it's not focusable.

```
<textarea name="textarea" rows="5" cols="30" readonly>
I am a read-only textarea.
</textarea>
<textarea name="textarea" rows="5" cols="30" disabled>
I am a disabled textarea.
</textarea>
```

```
textarea {
  display: block;
  resize: horizontal;
  max-width: 500px;
}
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- Other form-related elements:
  - <form>
  - <button>
  - <datalist>
  - <legend>
  - <label>
  - <select>
  - <optgroup>
  - <option>
  - <input>
  - <fieldset>
  - <output>
  - <progress>
  - <meter>

- <form>
- <button>
- <datalist>
- <legend>
- <label>
- <select>
- <optgroup>
- <option>
- <input>
- <fieldset>
- <output>
- <progress>
- <meter>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea
