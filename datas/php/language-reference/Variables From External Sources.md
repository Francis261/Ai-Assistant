# Variables From External Sources

Source: https://devdocs.io/php/language.variables.external

## Variables From External Sources

### HTML Forms (GET and POST)

When a form is submitted to a PHP script, the information from that form is automatically made available to the script. There are few ways to access this information, for example:

Example #1 A simple HTML form

```
<form action="foo.php" method="post">
    Name:  <input type="text" name="username" /><br />
    Email: <input type="text" name="email" /><br />
    <input type="submit" name="submit" value="Submit me!" />
</form>
```

There are only two ways to access data from HTML forms. Currently available methods are listed below:

Example #2 Accessing data from a simple POST HTML form

```
<?php
echo $_POST['username'];
echo $_REQUEST['username'];
?>
```

Using a GET form is similar except the appropriate GET predefined variable can be used instead. GET also applies to the QUERY_STRING (the information after the '?' in a URL). So, for example, http://www.example.com/test.php?id=3 contains GET data which is accessible with $_GET['id']. See also $_REQUEST.

Note:

Dots and spaces in variable names are converted to underscores. For example <input name="a.b" /> becomes $_REQUEST["a_b"].

PHP also understands arrays in the context of form variables (see the related faq). For example, related variables may be grouped together, or this feature may be used to retrieve values from a multiple select input. For example, let's post a form to itself and upon submission display the data:

Example #3 More complex form variables

```
<?php
if ($_POST) {
    echo '<pre>';
    echo htmlspecialchars(print_r($_POST, true));
    echo '</pre>';
}
?>
<form action="" method="post">
    Name:  <input type="text" name="personal[name]" /><br />
    Email: <input type="text" name="personal[email]" /><br />
    Beer: <br />
    <select multiple name="beer[]">
        <option value="warthog">Warthog</option>
        <option value="guinness">Guinness</option>
        <option value="stuttgarter">Stuttgarter Schwabenbräu</option>
    </select><br />
    <input type="submit" value="submit me!" />
</form>
```

Note: If an external variable name begins with a valid array syntax, trailing characters are silently ignored. For example, <input name="foo[bar]baz"> becomes $_REQUEST['foo']['bar'].

#### IMAGE SUBMIT variable names

When submitting a form, it is possible to use an image instead of the standard submit button with a tag like:

```
<input type="image" src="image.gif" name="sub" />
```

When the user clicks somewhere on the image, the accompanying form will be transmitted to the server with two additional variables, sub_x and sub_y. These contain the coordinates of the user click within the image. The experienced may note that the actual variable names sent by the browser contains a period rather than an underscore, but PHP converts the period to an underscore automatically.

### HTTP Cookies

PHP transparently supports HTTP cookies as defined by » RFC 6265. Cookies are a mechanism for storing data in the remote browser and thus tracking or identifying return users. It is possible to set cookies using the setcookie() function. Cookies are part of the HTTP header, so the SetCookie function must be called before any output is sent to the browser. This is the same restriction as for the header() function. Cookie data is then available in the appropriate cookie data arrays, such as $_COOKIE as well as in $_REQUEST. See the setcookie() manual page for more details and examples.

Note: As of PHP 7.2.34, 7.3.23 and 7.4.11, respectively, the names of incoming cookies are no longer url-decoded for security reasons.

If multiple values should be assigned to a single cookie variable, they can be assigned as an array. For example:

```
<?php
  setcookie("MyCookie[foo]", 'Testing 1', time()+3600);
  setcookie("MyCookie[bar]", 'Testing 2', time()+3600);
?>
```

That will create two separate cookies although MyCookie will now be a single array in the script. If just one cookie should be set with multiple values, consider using serialize() or explode() on the value first.

Note that a cookie will replace a previous cookie by the same name in the browser unless the path or domain is different. So, for a shopping cart application a counter may be kept, and passed along. I.e.

Example #4 A setcookie() example

```
<?php
if (isset($_COOKIE['count'])) {
    $count = $_COOKIE['count'] + 1;
} else {
    $count = 1;
}
setcookie('count', $count, time()+3600);
setcookie("Cart[$count]", $item, time()+3600);
?>
```

### Dots in incoming variable names

Typically, PHP does not alter the names of variables when they are passed into a script. However, it should be noted that the dot (period, full stop) is not a valid character in a PHP variable name. For the reason, look at it:

```
<?php
$varname.ext;  /* invalid variable name */
?>
```

For this reason, it is important to note that PHP will automatically replace any dots in incoming variable names with underscores.

### Determining variable types

Because PHP determines the types of variables and converts them (generally) as needed, it is not always obvious what type a given variable is at any one time. PHP includes several functions which find out what type a variable is, such as: gettype(), is_array(), is_float(), is_int(), is_object(), and is_string(). See also the chapter on Types.

HTTP being a text protocol, most, if not all, content that comes in Superglobal arrays, like $_POST and $_GET will remain as strings. PHP will not try to convert values to a specific type. In the example below, $_GET["var1"] will contain the string "null" and $_GET["var2"], the string "123".

```
/index.php?var1=null&var2=123
```

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.variables.external.php
