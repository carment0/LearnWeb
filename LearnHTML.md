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
