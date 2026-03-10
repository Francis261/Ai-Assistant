# Global attributes

Source: https://devdocs.io/html/reference/global_attributes

Global attributes are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.

Global attributes may be specified on all HTML elements, even those not specified in the standard. That means that any non-standard elements must still permit these attributes, even though using those elements means that the document is no longer HTML5-compliant. For example, HTML5-compliant browsers hide content marked as <foo hidden>…</foo>, even though <foo> is not a valid HTML element.

In addition to the basic HTML global attributes, the following global attributes also exist:

- xml:lang and xml:base — these are inherited from the XHTML specifications and deprecated, but kept for compatibility purposes.
- The ARIA role attribute and the multiple aria-* states and properties, used for ensuring accessibility.
- The event handler attributes: onabort, onautocomplete, onautocompleteerror, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onshow, onsort, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting.

## List of global attributes

Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.

Associates a positioned element with an anchor element. The attribute's value is the id value of the element you want to anchor the positioned element to. The element can then be positioned using CSS anchor positioning.

Controls whether inputted text is automatically capitalized and, if so, in what manner.

Controls whether input text is automatically corrected for spelling errors. This can be applied to elements that have editable text except for <input> elements with the attribute: type="password", type="email", or type="url".

Indicates that an element is to be focused on page load, or as soon as the <dialog> it is part of is displayed. This attribute is a boolean, initially false.

A space-separated list of the classes of the element. Classes allow CSS and JavaScript to select and access specific elements via the class selectors or functions like the method Document.getElementsByClassName().

An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:

- true or the empty string, which indicates that the element must be editable;
- false, which indicates that the element must not be editable.
- plaintext-only, which indicates the element's raw text is editable, but rich text formatting is disabled.

Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation that may be used by scripts. All such custom data are available via the HTMLElement interface of the element the attribute is set on. The HTMLElement.dataset property gives access to them.

An enumerated attribute indicating the directionality of the element's text. It can have the following values:

- ltr, which means left to right and is to be used for languages that are written from the left to the right (like English);
- rtl, which means right to left and is to be used for languages that are written from the right to the left (like Arabic);
- auto, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.

An enumerated attribute indicating whether the element can be dragged, using the Drag and Drop API. It can have the following values:

- true, which indicates that the element may be dragged
- false, which indicates that the element may not be dragged.

Hints what action label (or icon) to present for the enter key on virtual keyboards.

Used to transitively export shadow parts from a nested shadow tree into a containing light tree.

An enumerated attribute indicating that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.

Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

A boolean value that makes the browser disregard user input events for the element. Useful when click events are present.

Provides a hint to browsers about the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on <input> elements, but is usable on any element while in contenteditable mode.

Allows you to specify that a standard HTML element should behave like a registered customized built-in element (see Using custom elements for more details).

Note: The item* attributes are part of the WHATWG HTML Microdata feature.

The unique, global identifier of an item.

Used to add properties to an item. Every HTML element may have an itemprop attribute specified, where an itemprop consists of a name and value pair.

Properties that are not descendants of an element with the itemscope attribute can be associated with the item using an itemref. It provides a list of element ids (not itemids) with additional properties elsewhere in the document.

itemscope (usually) works along with itemtype to specify that the HTML contained in a block is about a particular item. itemscope creates the Item and defines the scope of the itemtype associated with it. itemtype is a valid URL of a vocabulary (such as schema.org) that describes the item and its properties context.

Specifies the URL of the vocabulary that will be used to define itemprops (item properties) in the data structure. itemscope is used to set the scope of where in the data structure the vocabulary set by itemtype will be active.

Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one "language tag" (made of hyphen-separated "language subtags") in the format defined in RFC 5646: Tags for Identifying Languages (also known as BCP 47). xml:lang has priority over it.

A cryptographic nonce ("number used once") which can be used by Content Security Policy to determine whether or not a given fetch will be allowed to proceed.

A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element.

Used to designate an element as a popover element (see Popover API). Popover elements are hidden via display: none until opened via an invoking/control element (i.e., a <button> or <input type="button"> with a popovertarget attribute) or a HTMLElement.showPopover() call.

Roles define the semantic meaning of content, allowing screen readers and other tools to present and support interaction with an object in a way that is consistent with user expectations of that type of object. roles are added to HTML elements using role="role_type", where role_type is the name of a role in the ARIA specification.

Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the <slot> element whose name attribute's value matches that slot attribute's value.

An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:

- empty string or true, which indicates that the element should be, if possible, checked for spelling errors;
- false, which indicates that the element should not be checked for spelling errors.

Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes.

An integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

- a negative value means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
- 0 means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
- a positive value means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the tabindex. If several elements share the same tabindex, their relative order follows their relative positions in the document.

Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.

An enumerated attribute that is used to specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:

- empty string or yes, which indicates that the element will be translated.
- no, which indicates that the element will not be translated.

An enumerated attribute used to control the on-screen virtual keyboard behavior on devices such as tablets, mobile phones, or other devices where a hardware keyboard may not be available for elements that its content is editable (for example, it is an <input> or <textarea> element, or an element with the contenteditable attribute set).

- auto or an empty string, which automatically shows the virtual keyboard when the element is focused or tapped.
- manual, which decouples focus and tap on the element from the virtual keyboard's state.

An enumerated attribute indicating if browser-provided writing suggestions should be enabled under the scope of the element or not.

- false, which disables the browser's writing suggestions.
- true or an empty string, which enables writing suggestions.

## Specifications

## Browser compatibility

## See also

- Element interface that allows querying most global attributes.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes
