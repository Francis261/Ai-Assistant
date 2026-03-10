# rel="alternate stylesheet"

Source: https://devdocs.io/html/reference/attributes/rel/alternate_stylesheet

The alternate stylesheet keyword pair, when used as a value for the rel attribute of the <link> element, indicates that the target resource is an alternative style sheet. Specifying alternative style sheets in a web page allows users to see multiple versions of a page based on their needs or preferences.

Note: This feature is not well supported in browsers without an extension. To offer alternative presentations that work with a user's existing preferences, see the CSS media features prefers-color-scheme and prefers-contrast.

Firefox lets users select alternate stylesheets using the View > Page Style submenu, which displays the values of the title attributes. Other browsers require an extension to enable this functionality. The web page can also provide its own user interface to let users switch styles.

## Examples

### Specifying alternate stylesheets

Alternate stylesheets are specified using <link> elements with rel="alternate stylesheet" and title="…" attributes. For example:

```
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In this example, the styles "Default Style", "Fancy", and "Basic" will be listed in the Firefox Page Style submenu with "Default Style" pre-selected. When the user selects a different style, the page will immediately be re-rendered using that style sheet.

No matter what style is selected, the rules from the reset.css stylesheet will always be applied.

### Try it out

Try a working example here.

## Details

Any stylesheet in a document falls into one of the following categories:

- Persistent (has rel="stylesheet", no title=""): always applies to the document.
- Preferred (has rel="stylesheet", with title="…" specified): applied by default, but disabled if an alternate stylesheet is selected. There can only be one preferred stylesheet, so providing stylesheets with different title attributes will cause some of them to be ignored.
- Alternate (rel="alternate stylesheet", with title="…" specified): disabled by default, can be selected.

In cases where a stylesheet menu exists, when style sheets are referenced with a title attribute on the <link rel="stylesheet"> or <style> element, the title becomes one of the choices offered to the user. Style sheets linked with the same title are part of the same choice. Style sheets linked without a title attribute are always applied.

Use rel="stylesheet" to link to the default style, and rel="alternate stylesheet" to link to alternative style sheets. This tells the browser which style sheet title should be selected by default, and makes that default selection apply in browsers that do not support alternate style sheets.

## Specifications

## Browser compatibility

## See also

- CSS
- Using dynamic styling information

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet
