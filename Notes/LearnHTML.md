# HTML
HyperText(aka text with links in it) Markup Language
- code structure: indentation -tab

Always put `<!DOCTYPE html>` on the first line to tell the browser what Language it's reading

Add `<html>` on the next line to state document
Add `</html>` on the last line to end it
- code will be added here

## Tag
Tags refer to `<>`
- they come in pairs: open and close Tag
- tags can be placed inside another aka **nesting**
- can give tags more instructions by including attributes in the opening tag
  - additional attributes can be separated by `;`

# Head of HTML
- containing information about your HTML file e.g. title

## Adding title
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>
      The HTML And CSS Webpage
    </title>
  </head>
</html>
```

# Body of HTML
- containing your contents e.g. text, image, and links
- "sister" of head

## Adding heading and paragraph
- headings have six sizes `<h1> to <h6>`
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>
      My Webpage
    </title>
  </head>
  <body>
    <h1> Learning HTML and CSS
    </h1>
    <p> This is a document for HTML and CSS.
    </p>
  </body>
</html>
```

## Adding hyperlinks
- start opening tag `<a` with the attribute `href="url">`
- add description of the link and end with `</a>`
``` html
<a href="http://www.google.com">Google Website</a>
```

## Adding image
- start opening tag `<img` with the attribute `src="url"`
- one of the few tags(the other one is the link between html to css) in HTML that are self closing with a single tag
  - end with `/>`
``` html
<img src="https://s3.amazonaws.com/codecademy-blog/assets/f3a16fb6.jpg"/>
```

### Nesting links in images
``` html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
	  <a href="https://www.codecademy.com">
		<img src="https://s3.amazonaws.com/codecademy-blog/assets/f3a16fb6.jpg"/>
	  </a>
	</body>
</html>
```

## Ordered list
- a list that is numbered
- start tag opening `<ol>`
- wrap individual items with `<li>` and `</li>`
``` html
<ol>
	<li>Raindrops on roses</li>
	<li>Whiskers on kittens</li>
	<li>Bright copper kettles</li>
	<li>Warm woolen mittens</li>
</ol>
```

## Unordered list
- a list that is in bullet points
- start tag opening `<ul>`
- wrap individual items with `<li>` and `</li>`
``` html
<h2>Taco Ingredients</h2>
<ul>
    <li>Cheese</li>
    <li>Sour Cream</li>
</ul>
```

# Inline CSS
- styling in HTML file without a separate CSS file

## Commenting
`<!-- comment -->`

## Font sizes
`<p style="font-size: 12px">`

## Font color
`<h2 style="color: green; font-size:12px">`

## Font type
`<h1 style="font-family: Arial">`

## Background color
`<p style="background-color: red"`

## Aligning
`<h1 style="text-align:center">`

## Bold
`<strong> skdjfhs </strong>`

## Italics
`<em> asdkfjsl </em>`

# Table
`<table></table>`

-table rows
``` html
<table>
  <tr></tr>
  <tr></tr>
</table>
```

## table data/columns
``` html
<table>
  <tr>
    <td>one</tb>
    <td>onetwo</tb>
  </tr>
  <tr>
    <td>two</tb>
    <td>twotwo</tb>
  </tr>
</table>
```

## Head of table
 - the `<thead>` tag can be thought of as containing information about a table
  - use <th></th> for each column
 - the `<tbody>` tag containing the actual tabular data.
  - use <td></td> for each column

``` html
<html>
    <head>
        <title>Table Time</title>
    </head>

    <body>

        <table border="1px">
            <thead>
                <tr>
                    <th>Famous Monster</th>
                    <th>Birth Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>King Kong</td>
                    <td>1933</td>     
                </tr>

                <tr>
                    <td>Dracula</td>
                    <td>1897</td>
                </tr>

                <tr>
                    <td>Bride of Frankenstein</td>
                    <td>1935</td>
                </tr>
            </tbody>
        </table>

    </body>

</html>
```

## Making table titles
 - use **colspan** attribute for the `<th>` tag within `<thead>` tag

``` html
<th colspan="3">3 columns across title</th>
```
OR

``` html
| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |
```

# Divide
- to divide your page into containers and style them individually using `<div></div>`
``` html
<div style="width:50px; height:50px; background-color:red"></div>
```

## Span
- allows to control styling for smaller parts of your page e.g. text `<span></span>`
