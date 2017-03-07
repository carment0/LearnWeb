
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

##
