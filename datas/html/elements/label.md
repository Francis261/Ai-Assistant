# <label>: The Label element

Source: https://devdocs.io/html/reference/elements/label

The <label> HTML element represents a caption for an item in a user interface.

## Try it

```
<div class="preference">
  <label for="cheese">I like cheese.</label>
  <input type="checkbox" name="cheese" id="cheese" />
</div>

<div class="preference">
  <label for="peas">I like peas.</label>
  <input type="checkbox" name="peas" id="peas" />
</div>
```

```
.preference {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0.5rem;
}
```

## Attributes

This element includes the global attributes.

The value is the id of the labelable form control in the same document, associating the <label> with that form control. Note that its JavaScript reflection property is htmlFor.

## Usage notes

### Associating a label with a form control

The first element in the document with an id attribute matching the value of the for attribute is the labeled control for this label element — if the element with that id is actually a labelable element. If it is not a labelable element, then the for attribute has no effect. If there are other elements that also match the id value, later in the document, they are not considered.

Multiple <label> elements can be associated with the same form control by having multiple <label> elements with the same for attribute value, which gives the form control multiple labels.

Associating a <label> with a form control, such as <input> or <textarea> offers some major advantages:

- The label text is not only visually associated with its corresponding text input; it is programmatically associated with it too. This means that, for example, a screen reader will read out the label when the user is focused on the form input, making it easier for an assistive technology user to understand what data should be entered.
- When a user clicks or touches/taps a label, the browser passes the focus to its associated input (the resulting event is also raised for the input). That increased hit area for focusing the input provides an advantage to anyone trying to activate it — including those using a touch-screen device.

There are two ways to associate a <label> with a form control, commonly referred to as explicit and implicit association.

To explicitly associate a <label> element with an <input> element, you first need to add the id attribute to the <input> element. Next, you add the for attribute to the <label> element, where the value of for is the same as the id in the <input> element.

```
<label for="peas">I like peas.</label>
<input type="checkbox" name="peas" id="peas" />
```

Alternatively, you can nest the <input> directly inside the <label>, in which case the for and id attributes are not needed because the association is implicit:

```
<label>
  I like peas.
  <input type="checkbox" name="peas" />
</label>
```

Note: A <label> element can have both a for attribute and a contained control element, as long as the for attribute points to the contained control element.

These two methods are equivalent, but there are a few considerations:

- While common browser and screen reader combinations support implicit association, not all assistive technologies do.
- Depending on your design, the type of association may impact stylability. Making the <label> and form control sibling elements instead of parent-child means they are separate, adjacent boxes, enabling more customizable layout such as lining them up with grid or flex layout methods.
- Explicit association requires the form control to have an id, which must be unique in the whole document. This is hard especially in a componentized application. Frameworks often provide their own solutions, such as React's useId(), but it still requires extra orchestration to get right.

Generally, we recommend using explicit association with the for attribute, to ensure compatibility with external tools and assistive technologies. In fact, you can simultaneously nest and provide id/for for maximum compatibility.

The form control that a label is labeling is called the labeled control of the label element. Multiple labels can be associated with the same form control:

```
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
<label for="username">Forgot your username?</label>
```

Elements that can be associated with a <label> element include <button>, <input> (except for type="hidden"), <meter>, <output>, <progress>, <select> and <textarea>.

## Accessibility

### Interactive content

Other than the implicitly associated form control, don't place additional interactive elements such as anchors or buttons inside a <label>. Doing so makes it difficult for people to activate the form input associated with the label.

Don't do this:

```
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the <a href="terms-and-conditions.html">Terms and Conditions</a>
</label>
```

Prefer this:

```
<p>
  <a href="terms-and-conditions.html">Read our Terms and Conditions</a>
</p>
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions
</label>
```

Note: It is a good practice to place any necessary context, such as the link to the terms and conditions, before the form control, so that the user can read it before they interact with the control.

### Headings

Placing heading elements within a <label> interferes with many kinds of assistive technology, because headings are commonly used as a navigation aid. If the label's text needs to be adjusted visually, use CSS classes applied to the <label> element instead.

If a form, or a section of a form needs a title, use the <legend> element placed within a <fieldset>.

Don't do this:

```
<label for="your-name">
  <h3>Your name</h3>
  <input id="your-name" name="your-name" type="text" />
</label>
```

Prefer this:

```
<label class="large-label" for="your-name">
  Your name
  <input id="your-name" name="your-name" type="text" />
</label>
```

### Buttons

An <input> element with a type="button" declaration and a valid value attribute does not need a label associated with it. Doing so may actually interfere with how assistive technology parses the button input. The same applies for the <button> element.

## Examples

### Defining an implicit label

```
<label>Click me <input type="text" /></label>
```

### Defining an explicit label with the "for" attribute

```
<label for="username">Click me to focus on the input field</label>
<input type="text" id="username" />
```

## Technical summary

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label
