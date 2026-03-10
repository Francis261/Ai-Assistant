# HTML autocapitalize global attribute

Source: https://devdocs.io/html/reference/global_attributes/autocapitalize

The autocapitalize global attribute is an enumerated attribute that controls whether inputted text is automatically capitalized and, if so, in what manner. This is relevant to:

- <input> and <textarea> elements.
- Any element with contenteditable set on it.

autocapitalize doesn't affect behavior when typing on a physical keyboard. It affects the behavior of other input mechanisms such as virtual keyboards on mobile devices and voice input. This can assist users by making data entry quicker and easier, for example by automatically capitalizing the first letter of each sentence.

## Value

Possible values are:

Do not automatically capitalize any text.

Automatically capitalize the first character of each sentence.

Automatically capitalize the first character of each word.

Automatically capitalize every character.

## Usage notes

- autocapitalize can be set on <input> and <textarea> elements, and on their containing <form> elements. When autocapitalize is set on a <form> element, it sets the autocapitalize behavior for all contained <input>s and <textarea>s, overriding any autocapitalize values set on contained elements.
- autocapitalize has no effect on the url, email, or password <input> types, where autocapitalization is never enabled.
- Where autocapitalize is not specified, the adopted default behavior varies between browsers. For example:
  - Chrome and Safari default to on/sentences
  - Firefox defaults to off/none.

- Chrome and Safari default to on/sentences
- Firefox defaults to off/none.

## Examples

### HTML

```
<p>Form to test different autocapitalize settings:</p>

<form>
  <div>
    <label for="default">Default: no autocapitalize set</label>
    <input type="text" id="default" name="default" />
  </div>
  <div>
    <label for="off">autocapitalize="off"</label>
    <input type="text" id="off" name="off" autocapitalize="off" />
  </div>
  <div>
    <label for="none">autocapitalize="none"</label>
    <input type="text" id="none" name="none" autocapitalize="none" />
  </div>
  <div>
    <label for="on">autocapitalize="on"</label>
    <input type="text" id="on" name="on" autocapitalize="on" />
  </div>
  <div>
    <label for="sentences">autocapitalize="sentences"</label>
    <input
      type="text"
      id="sentences"
      name="sentences"
      autocapitalize="sentences" />
  </div>
  <div>
    <label for="words">autocapitalize="words"</label>
    <input type="text" id="words" name="words" autocapitalize="words" />
  </div>
  <div>
    <label for="characters">autocapitalize="characters"</label>
    <input
      type="text"
      id="characters"
      name="characters"
      autocapitalize="characters" />
  </div>
  <div>
    <label for="characters-ta">autocapitalize="characters" on textarea</label>
    <textarea
      type="text"
      id="characters-ta"
      name="characters-ta"
      autocapitalize="characters">
    </textarea>
  </div>
</form>

<hr />

<p contenteditable autocapitalize="characters">
  This content is editable and has autocapitalize="characters" set on it
</p>
```

## Result

Test the effect on each input using a virtual keyboard or voice entry (keyboard entry will not work).

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autocapitalize
