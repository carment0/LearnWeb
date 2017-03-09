
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

## box
- We can change all this with the first positioning property we'll learn: the display property. We'll learn about four possible values.

- block: This makes the element a block box. It won't let anything sit next to it on the page! It takes up the full width.

- inline-block: This makes the element a block box, but will allow other elements to sit next to it on the same line.

- inline: This makes the element sit on the same line as another element, but without formatting it like a block. It only takes up as much width as it needs (not the whole line).
  - all your <div>s got squished to the smallest possible width
  - The inline display value is better suited for HTML elements that are blocks by default, such as headers and paragraphs

- none: This makes the element and its content disappear from the page entirely

## box positioning
- you can move html element with positive and negative margins values
- The margin is the space around the element. The larger the margin, the more space between our element and the elements around it. We can adjust the margin to move our HTML elements closer to or farther from each other.
  - for center use `margin: auto;`
  - If you want to specify a particular margin, you can do it like this:
  `margin-top: /*some value*/`
  `margin-right: /*some value*/`
  `margin-bottom: /*some value*/`
  `margin-left: /*some-value*/`

  - You can also set an element's margins all at once: you just start from the top margin and go around clockwise (going from top to right to bottom to left). For instance,
  `margin: 1px 2px 3px 4px`

- The border is the edge of the element. It's what we've been making visible every time we set the border property.
  - to make circles or rounded squares `border-radius: 100%;`

- The padding is the spacing between the content and the border. We can adjust this value with CSS to move the border closer to or farther from the content.
    - Padding can be set in two ways, just like your margins. You can either select them individually, like this:
    `padding-top: /*some value*/`
    `padding-right: /*some value*/`
    `padding-bottom: /*some value*/`
    `padding-left: /*some-value*/`

    - Or select them all in one declaration, like this:
    `padding: value value value value;`
    - You should also know that if you want your padding to be the same for all four sides, you can declare that value only once. `padding: 10px`

- The content is the actual "stuff" in the box. If we're talking about a <p> element, the "stuff" is the text of the paragraph.

- You'll see abbreviations like TM, TB, and TP in the diagram. These stand for "top margin," "top border," and "top padding." As we'll see, we can adjust the top, right, left, and bottom padding, border, and margin individually.

## floats
- When you float an element on the page, you're telling the webpage: "I'm about to tell you where to put this element, but you have to put it into the flow of other elements."
- This means that if you have several elements all floating, they all know the others are there and don't land on top of each other.
``` css
element {
    float: /*right, left, or both*/
}
```

## clear
- we sometimes mix large floating elements with non-floating ones
- if elements do end up on top of each other you can clear the other elements on the page
``` css
element {
    clear: /*right, left, or both*/
}
```

## Static by default
- If you don't specify an element's positioning type, it defaults to static. This just means "where the element would normally go."

### Absolute positioning
- When an element is set to position: absolute, it's then positioned in relation to the first parent element it has that doesn't have position: static. If there's no such element, the element with position: absolute gets positioned relative to <html>
` position: absolute;/`
### Relative positioning
- it tells the element to move relative to where it would have landed if it just had the default static positioning
 `position: relative;`
### Fixed positioning
- fixed positioning anchors an element to the browser window
- If you scroll up and down, the fixed element stays put even as other elements scroll past
` position: fixed;`

# text alignment
`text-align: center`
