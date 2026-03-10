# <input type="submit">

Source: https://devdocs.io/html/reference/elements/input/submit

<input> elements of type submit are rendered as buttons. When the click event occurs (typically because the user clicked the button), the user agent attempts to submit the form to the server.

## Value

An <input type="submit"> element's value attribute contains a string which is displayed as the button's label. Buttons do not have a true value otherwise. The value provides the accessible description for the button.

### Setting the value attribute

```
<input type="submit" value="Send Request" />
```

### Omitting the value attribute

If you don't specify a value, the button will have a default label, chosen by the user agent. This label is likely to be something along the lines of "Submit" or "Submit Query." Here's an example of a submit button with a default label in your browser:

```
<input type="submit" />
```

## Additional attributes

In addition to the attributes shared by all <input> elements, submit button inputs support the following attributes.

### formaction

A string indicating the URL to which to submit the data. This takes precedence over the action attribute on the <form> element that owns the <input>.

This attribute is also available on <input type="image"> and <button> elements.

### formenctype

A string that identifies the encoding method to use when submitting the form data to the server. There are three permitted values:

This, the default value, sends the form data as a string after percent-encoding the text using an algorithm such as encodeURI().

Uses the FormData API to manage the data, allowing for files to be submitted to the server. You must use this encoding type if your form includes any <input> elements of type file (<input type="file">).

Plain text; mostly useful only for debugging, so you can easily see the data that's to be submitted.

If specified, the value of the formenctype attribute overrides the owning form's enctype attribute.

This attribute is also available on <input type="image"> and <button> elements.

### formmethod

A string indicating the HTTP method to use when submitting the form's data; this value overrides any method attribute given on the owning form. Permitted values are:

A URL is constructed by starting with the URL given by the formaction or action attribute, appending a question mark ("?") character, then appending the form's data, encoded as described by formenctype or the form's enctype attribute. This URL is then sent to the server using an HTTP get request. This method works well for forms that contain only ASCII characters and have no side effects. This is the default value.

The form's data is included in the body of the request that is sent to the URL given by the formaction or action attribute using an HTTP post method. This method supports complex data and file attachments.

This method is used to indicate that the button closes the dialog with which the input is associated, and does not transmit the form data at all.

This attribute is also available on <input type="image"> and <button> elements.

### formnovalidate

A Boolean attribute which, if present, specifies that the form should not be validated before submission to the server. This overrides the value of the novalidate attribute on the element's owning form.

This attribute is also available on <input type="image"> and <button> elements.

### formtarget

A string which specifies a name or keyword that indicates where to display the response received after submitting the form. The string must be the name of a browsing context (that is, a tab, window, or <iframe>). A value specified here overrides any target given by the target attribute on the <form> that owns this input.

In addition to the actual names of tabs, windows, or inline frames, there are a few special keywords that can be used:

Loads the response into the same browsing context as the one that contains the form. This will replace the current document with the received data. This is the default value used if none is specified.

Loads the response into a new, unnamed, browsing context. This is typically a new tab in the same window as the current document, but may differ depending on the configuration of the user agent.

Loads the response into the parent browsing context of the current one. If there is no parent context, this behaves the same as _self.

Loads the response into the top-level browsing context; this is the browsing context that is the topmost ancestor of the current context. If the current context is the topmost context, this behaves the same as _self.

This attribute is also available on <input type="image"> and <button> elements.

## Using submit buttons

<input type="submit"> buttons are used to submit forms. If you want to create a custom button and then customize the behavior using JavaScript, you need to use <input type="button">, or better still, a <button> element.

If you choose to use <button> elements to create the buttons in your form, keep this in mind: If the <button> is inside a <form>, that button will be treated as the "submit" button. So you should be in the habit of expressly specifying which button is the submit button.

### A basic submit button

We'll begin by creating a form with a basic submit button:

```
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Send" />
  </div>
</form>
```

This renders like so:

Try entering some text into the text field, and then submitting the form.

Upon submitting, the data name/value pair gets sent to the server. In this instance, the string will be text=user-text, where "user-text" is the text entered by the user, encoded to preserve special characters. Where and how the data is submitted depends on the configuration of the <form>; see Sending form data for more details.

### Adding a keyboard shortcut to a submit button

Keyboard shortcuts, also known as access keys and keyboard equivalents, let the user trigger a button using a key or combination of keys on the keyboard. To add a keyboard shortcut to a submit button — just as you would with any <input> for which it makes sense — you use the accesskey global attribute.

In this example, s is specified as the access key (you'll need to press s plus the particular modifier keys for your browser/OS combination). In order to avoid conflicts with the user agent's own keyboard shortcuts, different modifier keys are used for access keys than for other shortcuts on the host computer. See accesskey for further details.

Here's the previous example with the s access key added:

```
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Send" accesskey="s" />
  </div>
</form>
```

For example, in Firefox for Mac, pressing Control-Option-S triggers the Send button, while Chrome on Windows uses Alt+S.

The problem with the above example is that the user will not know what the access key is! This is especially true since the modifiers are typically non-standard to avoid conflicts. When building a site, be sure to provide this information in a way that doesn't interfere with the site design (for example by providing an easily accessible link that points to information on what the site access keys are). Adding a tooltip to the button (using the title attribute) can also help, although it's not a complete solution for accessibility purposes.

### Disabling and enabling a submit button

To disable a submit button, specify the disabled attribute on it, like so:

```
<input type="submit" value="Send" disabled />
```

You can enable and disable buttons at run time by setting disabled to true or false; in JavaScript this looks like btn.disabled = true or btn.disabled = false.

Note: See the <input type="button"> page for more ideas about enabling and disabling buttons.

## Validation

Submit buttons don't participate in constraint validation; they have no real value to be constrained.

## Examples

We've included basic examples above. There isn't really anything more to say about submit buttons. There's a reason this kind of control is sometimes called a "simple button."

## Technical Summary

## Specifications

## Browser compatibility

## See also

- <input> and the HTMLInputElement interface which implements it.
- Forms and buttons
- HTML forms
- The <button> element

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/submit
