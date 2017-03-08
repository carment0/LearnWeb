
# CSS
Cascading Style Sheets
- language used to describe the appearance and formatting of your HTML
- a .css file describe how a HTML file should look
- a .css file is a cascade bc the sheets can apply formatting when more than one style applies
- by separating your form/formatting CSS from your functional contents/structure HTML
  - you can apply same formatting to several HTML elements
  - you can apply similar appearance and formatting to several HTML pages form a single CSS file
- you can put CSS within HTML between the `<head>` tag by `<style>` tag
``` html
<head>
		<style>
			p {
				color: purple;
			}
		</style>
		<title>Result</title>
</head>
```

# Linking css file in html
``` html
<head>
  <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
  <title>Result</title>
</head>
```

## Syntax for css
- the selector can be any HTML elements
- property is an aspect of a selector
- value settung for the property
``` css
selector {
  property: value;
  property: value;
}
```

## adding comments
`/*hskfdhkajshdf*/`

## Hexadecimal
- CSS can understanding colors by Hexadecimal
- Hexadecimal counting is base-16
  - digits from 0 to 9 or letters from a to f
``` css
h1 {
	color: #8B1C62;
}
```

## pixels vs ems
- pixels are the dots on screen
- if user might use a different screen like cellphone the font-size unit `em` is a relative measure
    - one em is equal to the default font size on whatever screen the user is using

## font preferences
- some computer don't support a certain font
  - you can add several fonts in one font-family
``` css
p {
    font-family: Tahoma, Verdana, sans-serif;
}
```

## styles properties
`background-color` which you set to a color or hex value
`height` which you set to a value in pixels
`width` which is also measured in pixels
`border` which you line the border
``` css
selector {
    border: 2px solid red;
}
```
`text-decoration` which you set links styles

# CSS selectors
- all HTML elements are selectors
- Multiple selectors
  - it's possible to style nested HTML elements
    ``` css
    div div p {
        /*CSS stuff!*/
    }
    ```

- you can use `*` selector to style every element on the page
  ``` css
  * {
    border: 2px solid black;
  }
  ```
# Branching
- You can think of an HTML document as a tree: elements "branch out" from the main trunk (the <html></html> tags). The first two big branches are <head> and <body>, and branches multiply and become finer as you get to elements like <div>s, <table>s, and text (headers and paragraphs).
- If you think of the <html> tag as the trunk of the tree, you can think of its immediate branches—<head> and <body>—as its children. Both tags are children of <html>, and <html> is their parent element. Because they are both immediate children of <html> (that is, they are both only one element away), they are siblings.
- child selector
``` css
div > p { /* Some CSS */ }
```

## specificity value
- certain selectors will override others
  - such as those with multiple selectors, classes(for multiple) and IDs(for one)
  `<p id="summary">` `<p class="list_item">`

### classes
- classes are defined in css as `.whateverclass {}`

### IDs
- IDs are defined in css as `#whateverID {}`

# pseudo-class selector
- A pseudo-class selector is a way of accessing HTML items that aren't part of the document tree
- allow us to style the changes that are not seen on html e.g. if links have been clicked or not
``` css
selector:pseudo-class_selector {
    property: value;
}
```

## pseudo-class selector for links
- `a:link:` An unvisited link.
- `a:visited:` A visited link.
- `a:hover:` A link you're hovering your mouse over.

## pseudo-class selector for First child
- apply styling to only the elements that are the first children of their parents
``` css
p:first-child {
    color: red;
}
```

## pseudo-class selector for Nth child
``` css
p :nth-child(2) {
    color: red;
}
```
- Make sure to leave a space between body :nth-child. If you don't have a space it means "find the body tag that is an nth-child". If you have a space it means "find the nth-child of the body tag"

# positioning
- elements populate the page in what's known as the CSS box model
- Each HTML element is like a tiny box or container that holds the pictures and text you specify
