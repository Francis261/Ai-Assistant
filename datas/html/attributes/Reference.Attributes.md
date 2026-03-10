# HTML attribute reference

Source: https://devdocs.io/html/reference/attributes

Elements in HTML have attributes; these are additional values that configure the elements or adjust their behavior in various ways to meet the criteria the users want.

## Attribute list

Note: Although browsers and email clients may still support this attribute, it is obsolete. Use CSS background-image instead.

Background color of the element.

Note: This is a legacy attribute. Please use the CSS background-color property instead.

The border width.

Note: This is a legacy attribute. Please use the CSS border property instead.

This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.

Note: This is a legacy attribute. Please use the CSS color property instead.

Specifies the height of elements listed here. For all other elements, use the CSS height property.

Note: In some instances, such as <div>, this is a legacy attribute, in which case the CSS height property should be used instead.

Specifies a Subresource Integrity value that allows browsers to verify what they fetch.

For the elements listed here, this establishes the element's width.

Note: For all other instances, such as <div>, this is a legacy attribute, in which case the CSS width property should be used instead.

## Content versus IDL attributes

In HTML, most attributes have two faces: the content attribute and the IDL (Interface Definition Language) attribute.

The content attribute is the attribute as you set it from the content (the HTML code) and you can set it or get it via element.setAttribute() or element.getAttribute(). The content attribute is always a string even when the expected value should be an integer. For example, to set an <input> element's maxlength to 42 using the content attribute, you have to call setAttribute("maxlength", "42") on that element.

The IDL attribute is also known as a JavaScript property. These are the attributes you can read or set using JavaScript properties like element.foo. The IDL attribute is always going to use (but might transform) the underlying content attribute to return a value when you get it and is going to save something in the content attribute when you set it. In other words, the IDL attributes, in essence, reflect the content attributes.

Most of the time, IDL attributes will return their values as they are really used. For example, the default type for <input> elements is "text", so if you set input.type="foobar", the <input> element will be of type text (in the appearance and the behavior) but the "type" content attribute's value will be "foobar". However, the type IDL attribute will return the string "text".

IDL attributes are not always strings; for example, input.maxlength is a number (a signed long). When using IDL attributes, you read or set values of the desired type, so input.maxlength is always going to return a number and when you set input.maxlength, it wants a number. If you pass another type, it is automatically converted to a number as specified by the standard JavaScript rules for type conversion.

IDL attributes can reflect other types such as unsigned long, URLs, booleans, etc. Unfortunately, there are no clear rules and the way IDL attributes behave in conjunction with their corresponding content attributes depends on the attribute. Most of the time, it will follow the rules laid out in the specification, but sometimes it doesn't. HTML specifications try to make this as developer-friendly as possible, but for various reasons (mostly historical), some attributes behave oddly (select.size, for example) and you should read the specifications to understand how exactly they behave.

## Boolean Attributes

Some content attributes (e.g., required, readonly, disabled) are called boolean attributes. If a boolean attribute is present, its value is true, and if it's absent, its value is false.

HTML defines restrictions on the allowed values of boolean attributes: If the attribute is present, its value must either be the empty string (equivalently, the attribute may have an unassigned value), or a value that is an ASCII case-insensitive match for the attribute's canonical name, with no leading or trailing whitespace. The following examples are valid ways to mark up a boolean attribute:

```
<div itemscope>This is valid HTML but invalid XML.</div>
<div itemscope=itemscope>This is also valid HTML but invalid XML.</div>
<div itemscope="">This is valid HTML and also valid XML.</div>
<div itemscope="itemscope">
  This is also valid HTML and XML, but perhaps a bit verbose.
</div>
```

To be clear, the values "true" and "false" are not allowed on boolean attributes. To represent a false value, the attribute has to be omitted altogether. This restriction clears up some common misunderstandings: With checked="false" for example, the element's checked attribute would be interpreted as true because the attribute is present.

## Event handler attributes

Warning: The use of event handler content attributes is discouraged. The mix of HTML and JavaScript often produces unmaintainable code, and the execution of event handler attributes may also be blocked by content security policies.

In addition to the attributes listed in the table above, global event handlers — such as onclick — can also be specified as content attributes on all elements.

All event handler attributes accept a string. The string will be used to synthesize a JavaScript function like function name(/*args*/) {body}, where name is the attribute's name, and body is the attribute's value. The handler receives the same parameters as its JavaScript event handler counterpart — most handlers receive only one event parameter, while onerror receives five: event, source, lineno, colno, error. This means you can, in general, use the event variable within the attribute.

```
<div onclick="console.log(event)">Click me!</div>
<!-- The synthesized handler has a name; you can reference itself -->
<div onclick="console.log(onclick)">Click me!</div>
```

## See also

- HTML elements

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes
