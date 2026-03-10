# <meta name="robots">

Source: https://devdocs.io/html/reference/elements/meta/name/robots

The robots value for the name attribute of the <meta> element (often called a "robots tag") defines the crawl and indexing behavior that web crawlers should use with the page. If specified, you define instructions for crawlers in the content attribute of the <meta> element as a comma-separated list of one or more rules.

For example, to hint to crawlers that a page should be excluded from their search indexes, a noindex value can be used:

```
<meta name="robots" content="noindex" />
```

Note: Only cooperative robots follow these rules. A crawler still needs to access the resource to read headers and meta elements (see X-Robots-Tag: Interaction with robots.txt). If you want to prevent bandwidth consumption by crawlers, a restrictive robots.txt file is more effective than indexing rules as it blocks resources from being crawled entirely.

## Usage notes

A <meta name="robots"> element can have the following additional attributes:

The content attribute must be defined, and its value sets indexing and crawling behavior for cooperative search engine robots. Accepts one or more of the following keywords as a comma-separated list:

Allows the robot to index the page. This is the default behavior. Used by all major crawlers.

Requests the robot not to index the page. Used by all major crawlers.

Allows the robot to follow links on the page. This is the default behavior. Used by all major crawlers.

Requests the robot not to follow the links on the page. Used by all major crawlers.

Equivalent to index, follow. Used by: Google.

Equivalent to noindex, nofollow. Used by: Google.

Requests that the search engine not cache the page content. Used by: Google, Yahoo, Bing.

Prevents displaying any description of the page in search engine results. Used by: Google, Bing.

Requests that this page not appear as the referring page of an indexed image. Used by: Google.

Synonym of noarchive. Used by: Bing.

## Description

There are several important considerations to note when setting a robots meta value:

- Only cooperative robots follow these rules. They won't prevent malicious actors like email harvesters from ignoring the directives.
- If defined in a <meta> tag, robots still need to access the page to read these rules. To reduce bandwidth, consider using a robots.txt file instead.
- The <meta name="robots"> tag and robots.txt serve different roles: robots.txt controls crawling, while the robots meta tag influences indexing and other behavior.
- A page blocked by robots.txt may still be indexed if linked from other sources.
- The noindex directive will only take effect after the robot revisits the page, so ensure robots.txt doesn't prevent this.
- Some values, such as index vs. noindex or follow vs. nofollow, are mutually exclusive. Behavior is undefined when conflicting values are used.
- Robots like Google, Yahoo, and Bing also support these directives in the HTTP header X-Robots-Tag, which is useful for non-HTML content such as PDFs or images.

## Examples

### Using a robots keyword

The following example uses nofollow to request that a crawler doesn't follow links on a page and noindex to request that the page is excluded from indexing:

```
<meta name="robots" content="nofollow, noindex" />
```

## Specifications

While not part of any specification, it is a de-facto standard method for communicating with search bots, web crawlers, and similar user agents.

## Browser compatibility

This feature is intended for crawlers to observe, so "browser" compatibility doesn't apply.

## See also

- X-Robots-Tag HTTP header
- robots.txt configuration guide
- robots.txt glossary entry
- Search engine glossary entry
- RFC 9309: Robots Exclusion Protocol
- WHATWG Wiki MetaExtensions page
- Using the robots meta tag on developers.google.com

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/robots
